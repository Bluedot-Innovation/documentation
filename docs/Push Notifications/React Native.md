# Bluedot Push Notifications — React Native Integration Guide

This guide describes all the changes required to integrate `bluedot-react-native-pushnotifications` into an existing React Native application that already uses the `bluedot-react-native` Point SDK.

:::info Platform support
Push notifications work on **both platforms**, but the setup differs. Android needs the extra `bluedot-react-native-pushnotifications` package — see [section 4](#4-android-setup). On iOS the `bluedot-react-native` package handles them itself — see [section 5](#5-ios-setup).
:::

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
    - [4.4 Notification permission (Android 13+)](#44-notification-permission-android-13)
5. [iOS setup](#5-ios-setup)
    - [5.1 Configure APNs](#51-configure-apns)
    - [5.2 Forward APNs events to the Point SDK](#52-forward-apns-events-to-the-point-sdk)
6. [Advanced: Custom FirebaseMessagingService (optional)](#6-advanced-custom-firebasemessagingservice-optional)
    - [6.1 When you need this](#61-when-you-need-this)
    - [6.2 Extra Android dependencies](#62-extra-android-dependencies)
    - [6.3 Implement the custom service](#63-implement-the-custom-service)
    - [6.4 Register the service in AndroidManifest](#64-register-the-service-in-androidmanifest)
    - [6.5 Forward FCM token & messages from JavaScript](#65-forward-fcm-token--messages-from-javascript)

---

## 1. Prerequisites

| Requirement | Minimum version |
|---|---|
| React Native | 0.83 |
| `bluedot-react-native` (Point SDK) | 3.5.0 |
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
  "bluedot-react-native": "3.5.0",
  "bluedot-react-native-pushnotifications": "1.0.0"
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

Both callbacks receive a payload with these fields:

| Field | Type | Platform | Description |
|---|---|---|---|
| `title` | `string` | Both | Notification title |
| `body` | `string` | Android | Notification body |
| `pushVersion` | `string` | Android | Push schema version |
| `campaignId` | `string` | Both | Campaign UUID |
| `zoneId` | `string` | Both | Zone UUID |
| `notificationId` | `string` | Both | Notification UUID |
| `data` | `object` | Android | Your own key-value pairs from the payload |

On iOS, `body`, `pushVersion` and `data` are not exposed by the Point SDK and arrive as `null`.

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

The React Native CLI **auto-links** `bluedot-react-native-pushnotifications`, so a standard project needs no changes to `MainApplication`.

Only if you have disabled autolinking for this package do you register it by hand:

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

### 4.4 Notification permission (Android 13+)

On Android 13 (API 33) and above you must also declare `POST_NOTIFICATIONS` in your app's `AndroidManifest.xml` and request it at runtime. Without it Android does not display the notification, even though the Point SDK processes the message.

```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
```

Request it with whichever permission library you already use — for example `react-native-permissions`:

```js
import { requestNotifications } from 'react-native-permissions';

await requestNotifications(['alert', 'sound', 'badge']);
```

---

## 5. iOS setup

There is no extra native iOS **module** to add: `bluedot-react-native` compiles the iOS adapter into its own pod, and `bluedot-react-native-pushnotifications` supplies the cross-platform `PushNotifications.on(...)` API with no native iOS code of its own.

But the plugin does **not** implement `UNUserNotificationCenterDelegate` or the APNs device-token callback. Your app has to forward three events to the Point SDK — the device token, foreground notifications and notification responses. Without that, the device never registers with the Point SDK and no notification ever reaches JavaScript.

### 5.1 Configure APNs

1. In Xcode, add the **Push Notifications** capability to your app target.
2. Register your App ID and an APNs authentication key for the same bundle identifier in Bluedot Canvas.
3. Request notification permission, and make sure your app registers for remote notifications. That registration is what produces the device token you forward in [section 5.2](#52-forward-apns-events-to-the-point-sdk) — some APNs libraries do it as part of the permission request, others need an explicit call (with `@react-native-firebase/messaging`, `registerDeviceForRemoteMessages()`).

### 5.2 Forward APNs events to the Point SDK

Your app delegate must forward three APNs events to the Point SDK, and must conform to `UNUserNotificationCenterDelegate` — the stock template declares only `UIResponder, UIApplicationDelegate`.

First add this line to the `didFinishLaunchingWithOptions` method you already have, leaving the rest of it untouched:

```swift
UNUserNotificationCenter.current().delegate = self
```

Then add these methods to the same class:

```swift
import BDPointSDK
import UserNotifications

class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {

  // ...your existing declarations...

  func application(
    _ application: UIApplication,
    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data
  ) {
    BDLocationManager.instance()?.pushNotifications.register(deviceToken)
  }

  func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    willPresent notification: UNNotification,
    withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void
  ) {
    let handled = BDLocationManager.instance()?.pushNotifications.handleForeground(notification) ?? false
    completionHandler(handled ? [.banner, .list, .sound, .badge] : [])
  }

  func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    didReceive response: UNNotificationResponse,
    withCompletionHandler completionHandler: @escaping () -> Void
  ) {
    BDLocationManager.instance()?.pushNotifications.handleResponse(response)
    completionHandler()
  }
}
```

:::note
Call each completion handler exactly once. If another library also needs these callbacks — `@react-native-community/push-notification-ios`, for example — forward to it from the same methods.

On an Objective-C `AppDelegate.mm`, the same three calls are `[[BDLocationManager instance].pushNotifications register:deviceToken]`, `handleForeground:` and `handleResponse:`.
:::

Once APNs is configured and these events are forwarded, received and clicked notifications arrive through the listeners you registered in [section 3.1](#31-listening-for-push-notification-events), subject to the field differences noted there.

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
    implementation 'com.gitlab.bluedotio.android:point_sdk_push:18.0.0'
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

If your app uses `@react-native-firebase/messaging`, that library registers its own `FirebaseMessagingService` at the default priority, which takes precedence over the one bundled with this package. Bluedot push messages then only arrive if you forward FCM tokens and messages yourself — this is **required**, not optional:

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
