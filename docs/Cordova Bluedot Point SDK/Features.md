1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  Cordova – Features

Cordova – Features
==================

*   [Custom Event Metadata](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-features/#CEMD)
*   [Enable / Disable Zones](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-features/#zone-enablement)
*   [Android features](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-features/#android)
    *   [Foreground Notification](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-features/#android-fg)
*   [iOS features](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-features/#ios)
    *   [App Restart Notification](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-features/#app-restart)

Custom Event Metadata
---------------------

Custom event metadata is a feature that is available in the Bluedot Point SDK for our customers to set additional event-specific metadata to our location events. For further information refer to [Custom Event Metadata](https://docs.bluedot.io/custom-event-metadata/).

It is recommended to set the Custom Event Metadata before starting Geo-triggering or Tempo.

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error: Only 20 CustomEventMetaData fields are allowed.

io.bluedot.cordova.plugin.setCustomEventMetaData({ 
    orderId: "order\_123",
    storeId: "store\_456",
    customerId: "789"
})

Enable / Disable Zones
----------------------

An app may optionally disable (and later re-enable) Zones by calling `enableZone` and `disableZone`. For further information refer to Enable or disable Zones documentation ([Android](https://docs.bluedot.io/android-sdk/android-features/android-features-enable-or-disable-zones/) | [iOS](https://docs.bluedot.io/ios-sdk/ios-features/enable-or-disable-zone/))

const zoneId \= "your\_zone\_id";

// Enable Zone
io.bluedot.cordova.plugin.enableZone(zoneId);

// Disable Zone
io.bluedot.cordova.plugin.disableZone(zoneId);

Android Features
----------------

### Foreground Notification

Given the restrictions on accessing location data from the background, it is recommended that the Geo-triggering service be run as a foreground service, and the Tempo service must be run as a foreground service. For more information refer to [Android – Location Permission & Notifications Best Practices](https://docs.bluedot.io/android-sdk/android-location-permission-notifications-best-practices/).

To run Geotriggering or Tempo with Foreground Notification, please refer to the sample code below:

**Geo-triggering**
```
// GeoTriggering
const androidNotificationParams \= {
       channelId: "Bluedot Cordova",
        channelName: "Bluedot Cordova",
        title: "Bluedot Foreground Service - Geo-triggering",
        content:
           "This app is running a foreground service using location services",
        notificationId: 123,
     };

io.bluedot.cordova.plugin.androidStartGeoTriggering(
    function () { console.log ("Start Geotriggering Successful") },
    function (error) { console.log ("Start Geotriggering Failed with error: " + error) },
    androidNotificationParams.channelId,
    androidNotificationParams.channelName,
    androidNotificationParams.title,
    androidNotificationParams.content,
    androidNotificationParams.notificationId
);
```

**Tempo**
```
// Tempo
const tempoBuilder \= new io.bluedot.cordova.plugin.TempoBuilder();
const androidNotificationParams \= {
       channelId: 'Bluedot Cordova',
        channelName: 'Bluedot Cordova',
        title: 'Bluedot Foreground Service - Tempo',
        content: "This app is running a foreground service using location services"
    }

io.bluedot.cordova.plugin.androidStartTempoTracking(
    function () { console.log("Start Tempo Successful") },
    function (error) { console.log("Start Tempo Failed: " + error) },
    "YOUR\_DESTINATION\_ID",
    androidNotificationParams.channelId,
    androidNotificationParams.channelName,
    androidNotificationParams.title,
    androidNotificationParams.content,
    androidNotificationParams.notificationId
);
```

iOS Features
------------

### App Restart Notification

Bluedot Point SDK includes a method for apps to display app restart notification to a user after app termination. For further details refer to [iOS Features – App restart](https://docs.bluedot.io/ios-sdk/ios-features/ios-features-app-restart/).

To start Geo-Triggering with App Restart notification, please refer to sample code below:

```
io.bluedot.cordova.plugin.iOSStartGeoTriggeringWithAppRestartNotification(
            function () { console.log("Start Geotriggering Successful") },
            function (error) { console.log("Start Geotriggering Failed with error: " + error) },
            "Title",
            "Button Text"
        );
```

Note: This feature is not available in Tempo.