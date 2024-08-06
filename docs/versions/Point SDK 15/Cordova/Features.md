Features
==================

*   [Custom Event Metadata](./Features#custom-event-metadata)
*   [Enable / Disable Zones](./Features#enable--disable-zones)
*   [Android features](./Features#android-features)
    *   [Foreground Notification](./Features#foreground-notification)
*   [iOS features](./Features#ios-features)
    *   [App Restart Notification](./Features#app-restart-notification)

Custom Event Metadata
---------------------

Custom event metadata is a feature that is available in the Bluedot Point SDK for our customers to set additional event-specific metadata to our location events. For further information refer to [Custom Event Metadata](../../../Custom%20Data.md).

It is recommended to set the Custom Event Metadata before starting Geo-triggering or Tempo.

:::info
Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error: Only 20 CustomEventMetaData fields are allowed.
:::

```js
io.bluedot.cordova.plugin.setCustomEventMetaData({ 
    orderId: "order_123",
    storeId: "store_456",
    customerId: "789"
})
```

Enable / Disable Zones
----------------------

An app may optionally disable (and later re-enable) Zones by calling `enableZone` and `disableZone`. For further information refer to Enable or disable Zones documentation ([Android](../Android/Features/Enable%20or%20disable%20zones.md) | [iOS](../iOS/Features/Enable%20or%20disable%20zones.md))

```js
const zoneId = "your_zone_id";

// Enable Zone
io.bluedot.cordova.plugin.enableZone(zoneId);

// Disable Zone
io.bluedot.cordova.plugin.disableZone(zoneId);
```

Android Features
----------------

### Foreground Notification

Given the restrictions on accessing location data from the background, it is recommended that the Geo-triggering service be run as a foreground service, and the Tempo service must be run as a foreground service. For more information refer to [Android – Location Permission & Notifications Best Practices](../Android/Best%20Practices%20&%20Recommendations.md).

To run Geotriggering or Tempo with Foreground Notification, please refer to the sample code below:

**Geo-triggering**
```js
const androidNotificationParams = {
       channelId: "Bluedot Cordova",
        channelName: "Bluedot Cordova",
        title: "Bluedot Foreground Service - Geo-triggering",
        content: "This app is running a foreground service using location services",
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
```js
const tempoBuilder = new io.bluedot.cordova.plugin.TempoBuilder();
const androidNotificationParams = {
       channelId: 'Bluedot Cordova',
        channelName: 'Bluedot Cordova',
        title: 'Bluedot Foreground Service - Tempo',
        content: "This app is running a foreground service using location services"
    }

io.bluedot.cordova.plugin.androidStartTempoTracking(
    function () { console.log("Start Tempo Successful") },
    function (error) { console.log("Start Tempo Failed: " + error) },
    "YOUR_DESTINATION_ID",
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

Bluedot Point SDK includes a method for apps to display app restart notification to a user after app termination. For further details refer to [iOS Features – App restart](../iOS/Features/App%20restart%20notification.md).

To start Geo-Triggering with App Restart notification, please refer to sample code below:

```js
io.bluedot.cordova.plugin.iOSStartGeoTriggeringWithAppRestartNotification(
    function () { console.log("Start Geotriggering Successful") },
    function (error) { console.log("Start Geotriggering Failed with error: " + error) },
    "Title",
     "Button Text"
);
```
:::note
This feature is not available in Tempo.
:::