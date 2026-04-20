# Bluedot Push Notifications — React Native Integration Guide

This guide describes all the changes required to integrate `bluedot-react-native-pushnotifications` into an existing React Native application that already uses the `bluedot-react-native` Point SDK.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Install the packages](#2-install-the-packages)
3. [JavaScript / React Native setup](#3-javascript--react-native-setup)
    - [3.1 Listening for push notification events](#31-listening-for-push-notification-events)
    - [3.2 Custom notification channel (optional)](#32-custom-notification-channel-optional)
4. [Android setup](#4-android-setup)
    - [4.1 Minimum SDK version](#41-minimum-sdk-version)
    - [4.2 Google Services plugin](#42-google-services-plugin)
    - [4.3 Register the Push Notifications package](#43-register-the-push-notifications-package)
    - [4.4 Notification icon colour (optional)](#44-notification-icon-colour-optional)
5. [iOS setup](#5-ios-setup)
    - [5.1 AppDelegate — foreground notifications](#51-appdelegate--foreground-notifications)
6. [Advanced: Custom FirebaseMessagingService (optional)](#6-advanced-custom-firebasemessagingservice-optional)
    - [6.1 When you need this](#61-when-you-need-this)
    - [6.2 Extra Android dependencies](#62-extra-android-dependencies)
    - [6.3 Implement the custom service](#63-implement-the-custom-service)
    - [6.4 Register the service in AndroidManifest](#64-register-the-service-in-androidmanifest)
    - [6.5 Forward FCM token & messages from JavaScript](#65-forward-fcm-token--messages-from-javascript)
7. [Summary of files changed](#7-summary-of-files-changed)

---

## 1. Prerequisites

| Requirement | Minimum version |
|---|---|
| React Native | 0.83 |
| `bluedot-react-native` (Point SDK) | 4.0.0 |
| Android `minSdkVersion` | 29 |
| Java toolchain | 21 |
| Kotlin | 2.3.0 |

You must have a **Firebase project** set up and place `google-services.json` in `android/app/` before building for Android.

> This file contains sensitive API keys and **must not** be committed to version control. Add it to `.gitignore`:
> ```gitignore
> google-services.json
> ```

---

## 2. Install the packages

```bash
npm install bluedot-react-native bluedot-react-native-pushnotifications
```

Add both to `package.json` dependencies:

```json
"dependencies": {
  "bluedot-react-native": "4.0.0",
  "bluedot-react-native-pushnotifications": "4.0.0"
}
```

---

## 3. JavaScript / React Native setup

### 3.1 Listening for push notification events

Import the plugin and subscribe to push notification events inside your root `App.js` (or app entry point). Clean up the subscriptions when the component unmounts.

```js
import PushNotifications from 'bluedot-react-native-pushnotifications';

export default function App() {

  React.useEffect(() => {
    // Fired when a Bluedot campaign push notification arrives.
    const receivedSub = PushNotifications.on(
      PushNotifications.PUSH_NOTIFICATION_RECEIVED,
      (data) => {
        console.log('[Bluedot] Notification received:', data.title, data.campaignId);
        // Handle the notification (e.g. show an in-app banner)
      }
    );

    // Fired when the user taps the notification.
    const clickedSub = PushNotifications.on(
      PushNotifications.PUSH_NOTIFICATION_CLICKED,
      (data) => {
        console.log('[Bluedot] Notification clicked:', data.title, data.campaignId);
        // Handle the tap (e.g. navigate to a specific screen)
      }
    );

    return () => {
      receivedSub.remove();
      clickedSub.remove();
    };
  }, []);

  // ...
}
```

### 3.2 Custom notification channel (optional)

You can customise how Android displays notifications — channel name, importance level, icon, and accent colour on Android native layer. Please refer to the Android documentation for Push Notifications for details.

**Custom Push Notification settings are NOT persistent. They must be re-applied every time on start of the process.**

---

## 4. Android setup

### 4.1 Minimum SDK version

The push notifications package requires `minSdkVersion` **29** or higher.

**`android/build.gradle`**

```groovy
buildscript {
    ext {
        minSdkVersion = 29
        compileSdkVersion = 36
        targetSdkVersion = 36
        kotlinVersion = "2.3.0"
        composeVersion = "1.5.4"
    }
    // ...
    dependencies {
        // ...
        classpath('com.google.gms:google-services:4.4.2')
    }
}
```

### 4.2 Google Services plugin

**`android/app/build.gradle`** — add after the existing `apply plugin` lines:

```groovy
apply plugin: "com.android.application"
apply plugin: "com.facebook.react"
apply plugin: 'com.google.gms.google-services'
// ...
```

### 4.3 Register the Push Notifications package

The `bluedot-react-native-pushnotifications` package is **not auto-linked** and must be registered manually.

**`android/app/src/main/java/<your-package>/MainApplication.java`**

```java
import io.bluedot.pushnotifications.PushNotificationsSdkPackage;

// inside the ReactNativeHost anonymous class:
@Override
protected List<ReactPackage> getPackages() {
    List<ReactPackage> packages = new PackageList(this).getPackages();
    packages.add(new PushNotificationsSdkPackage());
    return packages;
}
```

---

## 6. Advanced: Custom FirebaseMessagingService (optional)

### 6.1 When you need this

By default, `bluedot-react-native-pushnotifications` bundles its own `FirebaseMessagingService` that automatically intercepts FCM messages and forwards them to the Rezolve Point SDK. **For most apps, no further Android configuration is needed.**

You only need a custom `FirebaseMessagingService` if your app **receives push notifications from multiple sources** (e.g. Rezolve campaigns plus your own backend). In that case Android can only have one active `FirebaseMessagingService`, so you must own it and manually route incoming messages and token updates to each SDK that needs them.

### 6.2 Extra Android dependencies

Add the following to the `dependencies` block in **`android/app/build.gradle`**:

```groovy
dependencies {
    // ...existing dependencies...

    // Bluedot Android SDKs
    implementation 'com.gitlab.bluedotio.android:pushnotifications:18.0.0'
    implementation 'com.gitlab.bluedotio.android:point_sdk_android:18.0.0'

    // Firebase
    implementation platform("com.google.firebase:firebase-bom:34.12.0")
    implementation "com.google.firebase:firebase-messaging"
}
```

### 6.3 Implement the custom service

**Create** `android/app/src/main/java/<your-package>/CustomMessagingService.java`:

```java
package com.yourapp;

import au.com.bluedot.point.net.engine.ServiceManager;

import com.google.firebase.messaging.FirebaseMessagingService;
import com.google.firebase.messaging.RemoteMessage;
import com.rezolve.pushnotifications.PushUtilsKt;

public class CustomMessagingService extends FirebaseMessagingService {

    @Override
    public void onMessageReceived(RemoteMessage remoteMessage) {
        // Forward Rezolve campaign messages to the Rezolve Point SDK.
        // Handle messages from your other sources here as well.
        if (PushUtilsKt.isRezolvePushNotification(remoteMessage)) {
            ServiceManager.getInstance(this)
                .getPushNotificationsManager()
                .onMessageReceived(PushUtilsKt.toRezolvePushData(remoteMessage));
        }
    }

    @Override
    public void onNewToken(String token) {
        // Forward the new token to the Rezolve Point SDK.
        ServiceManager.getInstance(this)
            .getPushNotificationsManager()
            .onNewFcmToken(token);
    }
}
```

### 6.4 Register the service in AndroidManifest

Add the service declaration inside the `<application>` tag in **`AndroidManifest.xml`**:

```xml
<service
  android:name="com.yourapp.CustomMessagingService"
  android:exported="false">
  <intent-filter>
    <action android:name="com.google.firebase.MESSAGING_EVENT" />
  </intent-filter>
</service>
```

> **Important:** Once you declare a custom service, you are fully responsible for forwarding messages and token updates to every SDK that needs them — including Rezolve, as shown above.

### 6.5 Forward FCM token & messages from JavaScript

If you are using `@react-native-firebase/messaging` in JavaScript and want to handle forwarding there instead of the native service:

```js
import messaging from '@react-native-firebase/messaging';
import PushNotifications from 'bluedot-react-native-pushnotifications';

// Background / quit state
messaging().setBackgroundMessageHandler(async remoteMessage => {
  PushNotifications.onMessageReceived(remoteMessage);
});

// Inside a useEffect:
React.useEffect(() => {
  const unsubscribeToken = messaging().onTokenRefresh(token => {
    PushNotifications.onNewFcmToken(token);
  });

  const unsubscribeMessage = messaging().onMessage(async remoteMessage => {
    PushNotifications.onMessageReceived(remoteMessage);
  });

  return () => {
    unsubscribeToken();
    unsubscribeMessage();
  };
}, []);
```
