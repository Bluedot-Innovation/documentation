App restart notification
=======================================

Point SDK includes a method for apps to display app restart notification to user after app termination.

The notification provides a way for the user to re-engage with the app.

To start geo-triggering with app restart notification, you should

```swift
BDLocationManager.instance()?.startGeoTriggering(withAppRestartNotificationTitle: "Restart App?", notificationButtonText: "Tap here to re-engage with App now"){
    guard error == nil else {
        print("Start Geotriggering with app restart notification failed \\(error.localizedDescription)")
        return
   }
}
```

:::info
The app will need notification and _Always_ location permissions to use this feature.
:::


:::info
After an app has been closed, a local notification is sent which prompts users to relaunch the app.

The app restart notification will only be delivered once a device has moved significantly following the closure of the app. While this behaviour arises from a design constraint within iOS, it has the effect of only drawing attention to your app when the users changing location becomes relevant. When designing your user experience, be aware that Apple’s definition of a “significant distance” varies with location conditions and across iOS versions.  This makes the precise measure of a ‘significant distance’ unpredictable.  During our own testing, we observed that app restart notifications are typically delivered after 400m-1.5km of movement.
:::