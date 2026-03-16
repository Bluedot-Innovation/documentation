Push Notifications
==================

Point SDK can process push notifications triggered by Rezolve campaigns.

Prerequisites:

* Point SDK is initialized in your app.
* Push Notifications capability is enabled for your app target in Xcode.
* A valid `aps-environment` entitlement is included in the app provisioning profile.

To enable push notifications, complete the following steps:

1. Configure iOS push credentials in Canvas
2. Request notification permission in the application
3. Register the device push token with the SDK
4. Forward push notification events to the SDK
5. Handle SDK callbacks when notifications are received or clicked

Configure APNs Credentials
--------------------------

Before push notifications can be delivered to your application, your Apple Push Notification Service (APNs) credentials must be configured in **Canvas**.

Navigate to:

Project Settings -> Push Notification Settings -> iOS (APNs)

Upload the required Apple Push credentials.

Use the Canvas Push Notification Settings screen (iOS (APNs) tab) to confirm the iOS credential set is selected before saving.

![Canvas Push Notification Settings for iOS (APNs)](../../assets/push-notification-settings-ios-apns.png)

_Canvas Push Notification Settings screen with the iOS (APNs) tab selected._

### Required fields

| Field | Description |
| --- | --- |
| **Signing key (.p8)** | Upload the APNs authentication key downloaded from the Apple Developer portal |
| **Team ID** | Your Apple Developer Team ID |
| **Bundle ID** | The bundle identifier of your iOS application |
| **Key ID** | The Key ID associated with your APNs authentication key |

Once saved, Rezolve uses these credentials to deliver push notifications to your application.

Request Notification Permission
-------------------------------

The application must request notification permission from the user.

```swift
UNUserNotificationCenter.current().requestAuthorization(
    options: [.alert, .sound, .badge]
) { granted, error in
    guard error == nil, granted else {
        // Handle permission error/denial
        return
    }

    DispatchQueue.main.async {
        UIApplication.shared.registerForRemoteNotifications()
    }
}
```

Register for Remote Notifications
---------------------------------

After permission is granted, register the application for remote notifications.

```swift
UIApplication.shared.registerForRemoteNotifications()
```

Configure the notification center delegate during application startup.

```swift
func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
) -> Bool {

    UNUserNotificationCenter.current().delegate = self

    return true
}
```

Register Push Token with Point SDK
----------------------------------

When the system provides a device token, forward it to the SDK.

```swift
func application(_ application: UIApplication,
                 didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {

    BDLocationManager.instance()?.pushNotifications.register(deviceToken: deviceToken)
}
```

If push registration fails, you may optionally notify the SDK.

```swift
func application(_ application: UIApplication,
                 didFailToRegisterForRemoteNotificationsWithError error: Error) {

    BDLocationManager.instance()?.pushNotifications.registrationFailed(error)
}
```

Forward Push Notifications to the SDK
-------------------------------------

When a push notification is received, forward the event to the SDK so it can process Rezolve notifications.

### Notification received (foreground)

```swift
func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    willPresent notification: UNNotification
) async -> UNNotificationPresentationOptions {

    let handled = BDLocationManager.instance()?
        .pushNotifications
        .handleForeground(notification) ?? false

    return handled ? [.banner, .sound] : []
}
```

### Notification clicked

```swift
func userNotificationCenter(
    _ center: UNUserNotificationCenter,
    didReceive response: UNNotificationResponse,
    withCompletionHandler completionHandler: @escaping () -> Void
) {

    BDLocationManager.instance()?.pushNotifications.handleResponse(response)
    completionHandler()
}
```

Receive SDK Callbacks
---------------------

The SDK exposes callbacks when a Rezolve push notification is received or clicked.

```swift
BDLocationManager.instance()?.pushNotifications.onNotificationReceived = { payload in
    print("Rezolve push notification received")
}

BDLocationManager.instance()?.pushNotifications.onNotificationClicked = { payload in
    print("Rezolve push notification clicked")
}
```

These callbacks can be used to update the UI, trigger navigation, or perform application logic.

Complete Example
----------------

```swift
class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate {

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {

        UNUserNotificationCenter.current().delegate = self

        UNUserNotificationCenter.current().requestAuthorization(
            options: [.alert, .sound, .badge]
        ) { granted, error in
            guard error == nil, granted else { return }
            DispatchQueue.main.async {
                UIApplication.shared.registerForRemoteNotifications()
            }
        }

        BDLocationManager.instance()?.pushNotifications.onNotificationReceived = { payload in
            print("Push received")
        }

        BDLocationManager.instance()?.pushNotifications.onNotificationClicked = { payload in
            print("Push clicked")
        }

        return true
    }

    func application(_ application: UIApplication,
                     didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {

        BDLocationManager.instance()?.pushNotifications.register(deviceToken: deviceToken)
    }

    func application(_ application: UIApplication,
                     didFailToRegisterForRemoteNotificationsWithError error: Error) {

        BDLocationManager.instance()?.pushNotifications.registrationFailed(error)
    }

    func userNotificationCenter(
        _ center: UNUserNotificationCenter,
        willPresent notification: UNNotification
    ) async -> UNNotificationPresentationOptions {

        let handled = BDLocationManager.instance()?
            .pushNotifications
            .handleForeground(notification) ?? false

        return handled ? [.banner, .sound] : []
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

Integration Notes
-----------------

Point SDK works alongside your app’s existing push setup. Your app continues to control permission prompts and APNs registration, while the SDK focuses on handling Rezolve notifications and providing callbacks you can use for UI updates, navigation, or other app logic.