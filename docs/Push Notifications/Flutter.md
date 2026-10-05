# Bluedot Push Notifications — Flutter Integration Guide

This guide takes an existing Flutter app that already uses the `bluedot_point_sdk` Point SDK plugin and adds push notifications through `bluedot_point_sdk_push`. Both Android and iOS are supported, and none of it is required until you actually want push.

**Requirements**

| | |
|---|---|
| Flutter | 3.0+ |
| `bluedot_point_sdk` | 2.2.0+ |
| `bluedot_point_sdk_push` | 1.0.0+ |
| Android | `minSdkVersion` 29, Java 21, Kotlin 2.3.0 |
| iOS | deployment target 15.0+ |

You will also need:

- a **Bluedot Canvas** project, with a push campaign configured
- **Android:** a Firebase project with your app registered
- **iOS:** an Apple Developer App ID with the Push Notifications capability, plus an APNs key or certificate

The package bundles the native SDKs — Android Point SDK 18.0.0 and iOS Point SDK 18.1.0 — so you do not add those yourself.

---

## Table of Contents

1. [Add the package](#1-add-the-package)
2. [Listen for notifications](#2-listen-for-notifications)
    - [2.1 Notification events](#21-notification-events)
    - [2.2 Registering with APNs (iOS)](#22-registering-with-apns-ios)
3. [Android setup](#3-android-setup)
    - [3.1 Minimum SDK version](#31-minimum-sdk-version)
    - [3.2 Google Services plugin](#32-google-services-plugin)
    - [3.3 Place google-services.json](#33-place-google-servicesjson)
4. [iOS setup](#4-ios-setup)
    - [4.1 Signing and capabilities](#41-signing-and-capabilities)
    - [4.2 Forward notification callbacks](#42-forward-notification-callbacks)
    - [4.3 Configure Bluedot Canvas](#43-configure-bluedot-canvas)
    - [4.4 Build and run](#44-build-and-run)
5. [Custom messaging service (optional)](#5-custom-messaging-service-optional)
    - [5.1 When you need this](#51-when-you-need-this)
    - [5.2 Forwarding Bluedot events](#52-forwarding-bluedot-events)

---

## 1. Add the package

Add `bluedot_point_sdk_push` to your `pubspec.yaml`, next to the Point SDK:

```yaml
dependencies:
  bluedot_point_sdk: ^2.2.0
  bluedot_point_sdk_push: ^1.0.0
```

Then fetch dependencies — and on iOS, the pods:

```bash
flutter pub get
cd ios && pod install && cd ..
```

Flutter auto-links the plugin on both platforms, so there is no registration step.

---

## 2. Listen for notifications

### 2.1 Notification events

Register your listeners early — in `main()`, or your root widget's `initState`:

```dart
import 'package:bluedot_point_sdk_push/bluedot_point_sdk_push.dart';

BluedotPointSdkPush.instance.setNotificationListener(
  onReceived: (data) => print('Received: ${data['title']}'),
  onClicked:  (data) => print('Clicked: ${data['title']}'),
);
```

`onReceived` fires when a Bluedot notification arrives while your app is in the foreground, and `onClicked` when the user taps one. Call `removeNotificationListener()` to stop listening.

Each callback receives a map with the following fields:

| Field | Type | Description |
|---|---|---|
| `title` | `String` | Notification title |
| `body` | `String` | Notification body text |
| `pushVersion` | `String` | Push schema version |
| `campaignId` | `String` | Campaign UUID |
| `zoneId` | `String` | Zone UUID |
| `notificationId` | `String` | Notification UUID |
| `data` | `Map<String, String>` | Your own key-value pairs from the payload |

### 2.2 Registering with APNs (iOS)

On iOS the device registers with APNs **only after the user grants notification permission**. Prompt for it using whatever flow you already have — [`permission_handler`](https://pub.dev/packages/permission_handler) or a native call — then:

```dart
await BluedotPointSdkPush.instance.registerForRemoteNotifications();
```

This registers with APNs and forwards the device token to PointSDK. On Android the method does nothing: FCM registration is handled by Firebase once `google-services.json` is in place.

---

## 3. Android setup

### 3.1 Minimum SDK version

The package requires `minSdkVersion` **29** or higher. Check `android/app/build.gradle`:

```groovy
android {
    defaultConfig {
        minSdkVersion 29
    }
}
```

### 3.2 Google Services plugin

Add the `google-services` Gradle plugin classpath to your project-level `android/build.gradle`:

```groovy
buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.4.2'
    }
}
```

Then apply it in `android/app/build.gradle`, alongside your other `apply plugin` lines:

```groovy
apply plugin: 'com.google.gms.google-services'
```

### 3.3 Place `google-services.json`

Create a **Firebase project** if you do not have one, register your Android app, and download `google-services.json` from the [Firebase Console](https://console.firebase.google.com/) (**Project settings → Your apps → Android app**). Place it at:

```
android/app/google-services.json
```

The file contains sensitive API keys, so keep it out of version control:

```gitignore
google-services.json
```

That is the whole Android setup. The plugin ships its own messaging service, registered at a lower FCM priority than anything you add, so Bluedot pushes are handled for you automatically. You only need your own service if your app receives pushes from more than one source — see [section 5](#5-custom-messaging-service-optional).

---

## 4. iOS setup

### 4.1 Signing and capabilities

Open `ios/Runner.xcworkspace` in Xcode, select the **Runner** target, and under **Signing & Capabilities** choose a team and a bundle identifier backed by an App ID with the **Push Notifications** capability, then add that capability. Xcode writes the `aps-environment` entitlement for you:

```xml
<key>aps-environment</key>
<string>development</string>
```

Adding **Background Modes → Remote notifications** is optional.

### 4.2 Forward notification callbacks

The plugin deliberately leaves `UNUserNotificationCenterDelegate` to your app: Flutter forwards those callbacks to every registered plugin with the same completion handler, so a plugin implementing them could race your app — or another plugin — to complete it. Owning them here also leaves the presentation options to you.

In `ios/Runner/AppDelegate.swift` (`Runner` is the default target name), add one line to the `didFinishLaunchingWithOptions` method you already have:

```swift
import UserNotifications
import bluedot_point_sdk_push

override func application(
  _ application: UIApplication,
  didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
) -> Bool {
  UNUserNotificationCenter.current().delegate = self   // <- add this line
  return super.application(application, didFinishLaunchingWithOptions: launchOptions)
}
```

Then add these two methods to the same class:

```swift
override func userNotificationCenter(
  _ center: UNUserNotificationCenter,
  willPresent notification: UNNotification,
  withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void
) {
  let handled = BluedotPointSdkPushPlugin.handleForegroundNotification(notification)
  completionHandler(handled ? [.banner, .list, .sound, .badge] : [.banner, .list])
}

override func userNotificationCenter(
  _ center: UNUserNotificationCenter,
  didReceive response: UNNotificationResponse,
  withCompletionHandler completionHandler: @escaping () -> Void
) {
  BluedotPointSdkPushPlugin.handleNotificationResponse(response)
  completionHandler()
}
```

:::note
Leave the rest of your `AppDelegate` alone — how plugins are registered differs between Flutter versions and project setups. In the two methods above, complete each handler once: forward to the plugin **or** call `super`, not both.
:::

### 4.3 Configure Bluedot Canvas

Add the APNs authentication key or certificate for the same bundle identifier in Bluedot Canvas, then create a push campaign and choose the zone entry, exit or dwell event that should trigger it.

### 4.4 Build and run

```bash
flutter pub get
cd ios && pod install && cd ..
flutter run
```

Accept the permission prompt — the app registers with APNs only afterwards.

:::note
Test on a physical device. APNs registration and location-triggered delivery are not reliable on the simulator.
:::

---

## 5. Custom messaging service (optional)

### 5.1 When you need this

Most apps can skip this section entirely.

Android allows only one active `FirebaseMessagingService`, and messages go to the one with the highest intent-filter priority. The plugin registers its own at priority `-1`, so yours — at the default `0` — takes precedence the moment you add it.

That means you need your own service if your app receives pushes from **more than one source** — Bluedot campaigns plus your own backend, or another SDK. The same applies if you use the [`firebase_messaging`](https://pub.dev/packages/firebase_messaging) package, whose native layer registers a service that pre-empts Bluedot's. In either case you own delivery and must route each message and token update to Bluedot yourself.

### 5.2 Forwarding Bluedot events

First add the native SDKs to `android/app/build.gradle`:

```groovy
dependencies {
    // ...existing dependencies...

    implementation 'com.gitlab.bluedotio.android:point_sdk_android:18.0.0'
    implementation 'com.gitlab.bluedotio.android:point_sdk_push:18.0.0'

    implementation platform('com.google.firebase:firebase-bom:34.12.0')
    implementation 'com.google.firebase:firebase-messaging'
}
```

Then forward Bluedot's messages and token updates, either from Kotlin or from Dart.

**In Kotlin.** Own the service, and declare it in `AndroidManifest.xml` with `android:exported="false"` and the `com.google.firebase.MESSAGING_EVENT` action:

```kotlin
import au.com.bluedot.point.net.engine.ServiceManager
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import com.rezolve.pushnotifications.isRezolvePushNotification
import com.rezolve.pushnotifications.toRezolvePushData

class CustomMessagingService : FirebaseMessagingService() {

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        if (remoteMessage.isRezolvePushNotification()) {
            ServiceManager.getInstance(this)
                .pushNotificationsManager
                .onMessageReceived(remoteMessage.toRezolvePushData())
        }
        // Handle your own push sources here too.
    }

    override fun onNewToken(token: String) {
        ServiceManager.getInstance(this)
            .pushNotificationsManager
            .onNewFcmToken(token)
    }
}
```

**In Dart.** If you already use `firebase_messaging`, forward from its handlers instead:

```dart
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:bluedot_point_sdk_push/bluedot_point_sdk_push.dart';

// Must be a top-level function.
@pragma('vm:entry-point')
Future<void> _backgroundHandler(RemoteMessage message) =>
    BluedotPointSdkPush.instance.onMessageReceived(message.data);

FirebaseMessaging.onBackgroundMessage(_backgroundHandler);
FirebaseMessaging.instance.onTokenRefresh
    .listen(BluedotPointSdkPush.instance.onNewFcmToken);
FirebaseMessaging.onMessage.listen(
    (message) => BluedotPointSdkPush.instance.onMessageReceived(message.data));
```

:::note
`onNewFcmToken` and `onMessageReceived` are Android-only — they do nothing on iOS.
:::
