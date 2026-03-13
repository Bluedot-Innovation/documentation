# Bluedot Push Notifications Module — Integration Guide

**SDK version:** 18.0.0  
**Module artifact:** `au.com.bluedot:pushnotifications`

## Overview

Starting from version 18.0.0, push notification support is delivered as a **separate, optional module** — `pushnotifications`.

The module:
- Handles FCM token registration with the backend automatically.
- Displays notifications when a push message is received.
- Lets you customise the look of notifications.
- Provides callbacks for received and clicked notifications via a `PushNotificationsEventReceiver`.

## Requirements

| Requirement | Value |
|---|---|
| Min SDK | 29 (Android 10) |
| Compile SDK | 36 |
| Firebase Cloud Messaging | `com.google.firebase:firebase-messaging:25.0.1` |
| Core Point SDK | `au.com.bluedot:pointsdk:18.0.0` |

## Step 1 — Add the dependency

Follow [Quick Start](https://docs.bluedot.io/Point%20SDK/Android/Quick%20Start#import-the-sdk) guide to set up the core SDK first, including the project configuration URL and initialisation.

In your **app-level** `build.gradle`, add the `pushnotifications` module alongside the core SDK:

```groovy
dependencies {
    // ...
    implementation 'au.com.bluedot:pushnotifications:18.0.0'
}
```

## Step 2 — Firebase setup

The `pushnotifications` module uses **Firebase Cloud Messaging (FCM)** to receive push notifications. If your app doesn't use Firebase yet, follow the [official Android documentation](https://firebase.google.com/docs/cloud-messaging/android/get-started) to set it up.

> On Android 13 (API 33) and above, you must declare `POST_NOTIFICATIONS` permission in your manifest **and** request it at runtime.

## Step 3 — Implementation of FirebaseMessagingService

As part of Firebase Cloud Messaging integration you have implemented your own `FirebaseMessagingService` subclass. Now we are going to use it to bridge FCM events into the `pushnotifications` module.

```kotlin
class MyFirebaseMessagingService : FirebaseMessagingService() {

    override fun onNewToken(token: String) {
        ServiceManager.getInstance(this).pushNotificationsManager.onNewFcmToken(token)
    }

    override fun onMessageReceived(remoteMessage: RemoteMessage) {
        if (remoteMessage.isRezolvePushNotification()) {
            ServiceManager.getInstance(this).pushNotificationsManager.onMessageReceived(remoteMessage.data)
        } else {
            // Handle your own notifications here
        }
    }
}
```

Register the service in `AndroidManifest.xml`:

```xml
<service
    android:name=".java.MyFirebaseMessagingService"
    android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```

## Step 4 — Listen for notification events

To receive callbacks when a notification is received or tapped by the user, create a `BroadcastReceiver` that extends `PushNotificationsEventReceiver`:

```kotlin
class MyPushNotificationsEventReceiver : PushNotificationsEventReceiver() {

    override fun onNotificationReceived(notificationData: NotificationData) {
        // Called when a Rezolve push notification arrives
        // Use notificationData.campaignId, .zoneId, .notificationId, .data
    }

    override fun onNotificationClicked(notificationData: NotificationData) {
        // Called when the user taps the notification
    }
}
```

Register the receiver in `AndroidManifest.xml`:

```xml
<receiver
    android:name=".MyPushNotificationsEventReceiver"
    android:enabled="true"
    android:exported="false">
    <intent-filter>
        <action android:name="io.bluedot.point.PUSHNOTIFICATIONS" />
    </intent-filter>
</receiver>
```

### NotificationData fields

| Field | Type | Description                                           |
|---|---|-------------------------------------------------------|
| `title` | `String` | Notification title (empty string if absent)           |
| `body` | `String` | Notification body text (empty string if absent)       |
| `pushVersion` | `String?` | Push schema version                                   |
| `campaignId` | `String?` | Campaign UUID                                         |
| `zoneId` | `String?` | Zone UUID                                             |
| `notificationId` | `String?` | Notification UUID                                     |
| `data` | `Map<String, String>` | All remaining custom key-value pairs from the payload |

---

## Step 5 — (Optional) Customise the notification appearance and behaviour

By default the module displays a standard notification using a built-in icon and the `IMPORTANCE_DEFAULT` channel. 
On notification click the SDK sends the broadcast to the receiver defined in Step 4 and starts the default launcher activity defined for the app.

To override the appearance or behaviour, supply your own `NotificationCompat.Builder` **before** the first message arrives:

```kotlin
val contentIntent = PendingIntent.getActivity(
    context,
    0,  // request code — unique integer to distinguish this PendingIntent from others;
        // use different values if you create multiple distinct PendingIntents
    Intent(context, YourCustomActivity::class.java).apply {
        flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_SINGLE_TOP
        // Optionally pass data:
        putExtra("campaign_id", "...")
    },
    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
)

val customBuilder = NotificationCompat.Builder(context, "your_channel_id")
    .setSmallIcon(R.drawable.your_notification_icon)
    .setColor(ContextCompat.getColor(context, R.color.your_brand_color))
    .setPriority(NotificationCompat.PRIORITY_HIGH)
    .setContentIntent(contentIntent)   // <-- your custom activity
    .setAutoCancel(true)

ServiceManager.getInstance(context)
    .pushNotificationsManager
    .setCustomPushNotification(customBuilder)
```

> The module fills in `.setContentTitle()` and `.setContentText()` automatically from the message payload, so you do not need to set them in your builder.

