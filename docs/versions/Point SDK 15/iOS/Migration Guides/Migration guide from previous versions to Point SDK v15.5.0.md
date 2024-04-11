---
pagination_next: null
---

Migration guide from previous versions to Point SDK v15.5.0
=================================================================

Update to requesting notification permission
--------------------------------------------

Starting from SDK v15.5.0, Bluedot Point SDK no longer requests Notification permission on authentication/initialization as per the previous API.

*   The app will now have to request for notification permission explicitly.
*   It is recommended that App requests for notification permission anytime prior to Start Geo-Triggering.

:::info
Notification permission is not mandatory. However if App Restart Notification were configured, notification permission must be granted for notifications to be delivered successfully.
:::

Caveats
-------

If notification permission is not granted by the App:

*   SDK will throw an error only if App calls [`startGeoTriggeringWithAppRestartNotificationTitle`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)startGeoTriggeringWithAppRestartNotificationTitle:notificationButtonText:completion:).
*   An error will be returned via the [`bluedotServiceDidReceiveError`](https://ios-docs.bluedot.io/Protocols/BDPBluedotServiceDelegate.html#/c:objc(pl)BDPBluedotServiceDelegate(im)bluedotServiceDidReceiveError:) delegate, if SDK fails to deliver notifications during App Restart trigger events.