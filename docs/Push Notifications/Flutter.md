# Bluedot Push Notifications — Flutter Integration Guide

This guide describes all the changes required to integrate `bluedot_point_sdk_push` into an existing Flutter application that already uses the `bluedot_point_sdk` Point SDK plugin.

:::info Android only
Push notifications are currently **Android-only**. The `bluedot_point_sdk_push` package ships a no-op iOS stub so it can be included in cross-platform Flutter projects without errors — no iOS-specific configuration is required.
:::

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Add the package](#2-add-the-package)
3. [Dart setup](#3-dart-setup)
    - [3.1 Listening for push notification events](#31-listening-for-push-notification-events)
4. [Android setup](#4-android-setup)
    - [4.1 Minimum SDK version](#41-minimum-sdk-version)
    - [4.2 Add the Google Services plugin classpath](#42-add-the-google-services-plugin-classpath)
    - [4.3 Apply the Google Services plugin](#43-apply-the-google-services-plugin)
    - [4.4 Place `google-services.json`](#44-place-google-servicesjson)
5. [Advanced: Custom FirebaseMessagingService (optional)](#5-advanced-custom-firebasemessagingservice-optional)
    - [5.1 When you need this](#51-when-you-need-this)
    - [5.2 Extra Android dependencies](#52-extra-android-dependencies)
    - [5.3 Implement the custom service in Kotlin](#53-implement-the-custom-service-in-kotlin)
    - [5.4 Register the service in AndroidManifest](#54-register-the-service-in-androidmanifest)
    - [5.5 Forward FCM token & messages from Dart](#55-forward-fcm-token--messages-from-dart)
6. [Summary of files changed](#6-summary-of-files-changed)

---

## 1. Prerequisites

| Requirement | Minimum version |
|---|---|
| Flutter | 3.0 |
| `bluedot_point_sdk` (Point SDK) | 2.1.1 |
| Android `minSdkVersion` | 29 |
| Java toolchain | 21 |
| Kotlin | 2.3.0 |

---

## 2. Add the package

Add `bluedot_point_sdk_push` to your app's `pubspec.yaml`:

```yaml
dependencies:
  bluedot_point_sdk: ^2.1.1
  bluedot_point_sdk_push: ^2.1.1
```

Then run:

```bash
flutter pub get
```

Flutter will auto-link the plugin on both Android and iOS — no additional registration step is required.

---

## 3. Dart setup

### 3.1 Listening for push notification events

Import the plugin and register your notification listeners early in your app's lifecycle (e.g., inside `initState` of your root widget or your `main()` function).

```dart
import 'package:bluedot_point_sdk_push/bluedot_point_sdk_push.dart';

void _setupPushNotifications() {
  BluedotPointSdkPush.instance.setNotificationListener(
    onReceived: (data) {
      // Fired when a Bluedot campaign push notification arrives in the foreground.
      print('[Bluedot] Notification received: ${data['title']} — campaignId: ${data['campaignId']}');
      // Handle the notification (e.g. show an in-app banner)
    },
    onClicked: (data) {
      // Fired when the user taps a Bluedot push notification.
      print('[Bluedot] Notification clicked: ${data['title']} — campaignId: ${data['campaignId']}');
      // Handle the tap (e.g. navigate to a specific screen)
    },
  );
}
```

To stop listening, call:

```dart
BluedotPointSdkPush.instance.removeNotificationListener();
```

#### Notification payload fields

The `data` map passed to each callback contains the following fields:

| Field | Type | Description |
|---|---|---|
| `title` | `String` | Notification title |
| `body` | `String` | Notification body text |
| `pushVersion` | `String` | Push schema version |
| `campaignId` | `String` | Campaign UUID |
| `zoneId` | `String` | Zone UUID |
| `notificationId` | `String` | Notification UUID |
| `data` | `Map<String, String>` | Custom key-value pairs from the payload |

---

## 4. Android setup

### 4.1 Minimum SDK version

The push notifications package requires `minSdkVersion` **29** or higher.

Verify that your **`android/app/build.gradle`** sets at least:

```groovy
android {
    defaultConfig {
        minSdkVersion 29
        // ...
    }
}
```

### 4.2 Add the Google Services plugin classpath

Add the `google-services` Gradle plugin classpath to your project-level **`android/build.gradle`**:

```groovy
buildscript {
    dependencies {
        // ...existing classpath entries...
        classpath 'com.google.gms:google-services:4.4.2'
    }
}
```

### 4.3 Apply the Google Services plugin

Apply the plugin at the top of your app-level **`android/app/build.gradle`**, after the other `apply plugin` lines:

```groovy
apply plugin: 'com.android.application'
apply plugin: 'kotlin-android'
apply plugin: 'com.google.gms.google-services'  // ← add this line
```

### 4.4 Place `google-services.json`

You must have a **Firebase project** set up. Download `google-services.json` from the [Firebase Console](https://console.firebase.google.com/) (**Project settings → Your apps → Android app**) and place it at:

```
android/app/google-services.json
```

This file contains sensitive API keys and **must not** be committed to version control. Add it to `.gitignore`:

```gitignore
google-services.json
```

That's all the Android configuration needed. The plugin ships its own `DefaultMessagingService` registered at FCM intent-filter priority `-1`. Because Android routes FCM messages to the highest-priority `FirebaseMessagingService`, this default service handles all Bluedot push messages automatically for apps that do not register their own messaging service.

---

## 5. Advanced: Custom FirebaseMessagingService (optional)

### 5.1 When you need this

By default, `bluedot_point_sdk_push` bundles its own `DefaultMessagingService` that automatically intercepts FCM messages and forwards them to the Bluedot Push SDK. **For most apps, no further Android configuration is needed.**

You only need a custom `FirebaseMessagingService` if your app **receives push notifications from multiple sources** (e.g. Bluedot campaigns plus your own backend or another SDK such as Airship). In that case, Android can only have one active `FirebaseMessagingService`, so you must own it and manually route incoming messages and token updates to each SDK that needs them.

If you are using the [`firebase_messaging`](https://pub.dev/packages/firebase_messaging) Dart package, its native layer also registers a `FirebaseMessagingService` at the default priority (0), which pre-empts the Bluedot default service. In this case you must forward FCM events to Bluedot from Dart — see [section 5.5](#55-forward-fcm-token--messages-from-dart).

### 5.2 Extra Android dependencies

Add the following to the `dependencies` block in **`android/app/build.gradle`**:

```groovy
dependencies {
    // ...existing dependencies...

    // Bluedot Android SDKs
    implementation 'com.gitlab.bluedotio.android:point_sdk_android:18.0.0'
    implementation 'com.gitlab.bluedotio.android:point_sdk_push:18.0.0'

    // Firebase
    implementation platform('com.google.firebase:firebase-bom:34.12.0')
    implementation 'com.google.firebase:firebase-messaging'
}
```

### 5.3 Implement the custom service in Kotlin

Create `android/app/src/main/kotlin/<your-package>/CustomMessagingService.kt`:

```kotlin
package com.yourapp

import au.com.bluedot.point.net.engine.ServiceManager
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import com.rezolve.pushnotifications.isRezolvePushNotification
import com.rezolve.pushnotifications.toRezolvePushData

class CustomMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        // Forward Bluedot campaign messages to the Bluedot Push SDK.
        // Add handling for your own push sources here as well.
        if (remoteMessage.isRezolvePushNotification()) {
            ServiceManager.getInstance(this)
                .pushNotificationsManager
                .onMessageReceived(remoteMessage.toRezolvePushData())
        }
    }

    override fun onNewToken(token: String) {
        // Forward the new FCM token to the Bluedot Push SDK.
        ServiceManager.getInstance(this)
            .pushNotificationsManager
            .onNewFcmToken(token)
    }
}
```

### 5.4 Register the service in AndroidManifest

Add the service declaration inside the `<application>` tag in **`android/app/src/main/AndroidManifest.xml`**:

```xml
<service
    android:name="com.yourapp.CustomMessagingService"
    android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```

> **Important:** Once you declare a custom service at the default priority (0), it pre-empts the plugin's `DefaultMessagingService`. You are then fully responsible for forwarding messages and token updates to every SDK that needs them — including Bluedot, as shown above.

### 5.5 Forward FCM token & messages from Dart

If you are using the [`firebase_messaging`](https://pub.dev/packages/firebase_messaging) Dart package and prefer to handle forwarding in Dart rather than through a native service:

```dart
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:bluedot_point_sdk_push/bluedot_point_sdk_push.dart';

// Top-level background message handler (must be a top-level function)
@pragma('vm:entry-point')
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  await BluedotPointSdkPush.instance.onMessageReceived(message.data);
}

void _setupFirebaseMessaging() {
  // Register background handler
  FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);

  // Forward token refreshes to Bluedot
  FirebaseMessaging.instance.onTokenRefresh.listen((token) {
    BluedotPointSdkPush.instance.onNewFcmToken(token);
  });

  // Forward foreground messages to Bluedot
  FirebaseMessaging.onMessage.listen((remoteMessage) {
    BluedotPointSdkPush.instance.onMessageReceived(remoteMessage.data);
  });
}
```

:::note
`onNewFcmToken` and `onMessageReceived` are **Android-only** — they are no-ops on iOS.
:::

---

## 6. Summary of files changed

| File | Change |
|---|---|
| `pubspec.yaml` | Add `bluedot_point_sdk_push` dependency |
| `android/build.gradle` | Add `com.google.gms:google-services:4.4.2` classpath |
| `android/app/build.gradle` | Apply `com.google.gms.google-services` plugin; set `minSdkVersion 29` |
| `android/app/google-services.json` | Add (downloaded from Firebase Console) |
| `lib/main.dart` (or entry widget) | Call `BluedotPointSdkPush.instance.setNotificationListener(...)` |
| *(Advanced)* `android/app/src/main/kotlin/.../CustomMessagingService.kt` | Custom FCM service forwarding messages to Bluedot |
| *(Advanced)* `android/app/src/main/AndroidManifest.xml` | Register custom `FirebaseMessagingService` |



