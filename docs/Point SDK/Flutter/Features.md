Features
==================

*   Custom Event Metadata
*   Enable / Disable Zones
*   Android features
    *   Foreground Notification
*   iOS features
    *   Background Location Access

Custom Event Metadata
---------------------

Custom event metadata is a feature which is available in the Bluedot Point SDK for our customers to set additional event-specific metadata to our location events. For further information refer to [Custom Event Metadata](https://docs.bluedot.io/custom-event-metadata/)

It is recommended to set the Custom Event Meta Data before starting GeoTriggering or Tempo.

**Note:** _Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error as: Only 20 CustomEventMetaData fields are allowed._

```
const metadata \= {
  'hs\_orderId': 'Order Id',
  'hs\_Customer Name': 'Customer Name'
};
```

BluedotPointSdk.instance.setCustomEventMetaData(metadata);

Enable / Disable Zones
----------------------

An app may optionally disable (and later re-enable) Zones by calling `setZoneDisableByApplication`. For further information refer to Enable or disable Zones documentation ([Android](https://docs.bluedot.io/android-sdk/android-features/android-features-enable-or-disable-zones/) | [iOS](https://docs.bluedot.io/ios-sdk/ios-features/enable-or-disable-zone/)) 

```
const zoneIdToDisable \= "your\_zone\_id";
const disableZone \= true;
```

BluedotPointSdk.instance.setZoneDisableByApplication(zoneIdToDisable, disableZone);

Android Features
----------------

### Foreground Notification

Given the restrictions on accessing location data from the background, it is recommended that the Geo-triggering service be run as a foreground service, and the Tempo service must be run as a foreground service. For more information refer to [Android – Location Permission & Notifications Best Practices](https://docs.bluedot.io/android-sdk/android-location-permission-notifications-best-practices/)

The Foreground Notification method (`androidNotification`) is included in the `GeoTriggeringBuilder` and the `TempoBuilder` classes. It should be set up before starting any of the Geo-triggering or Tempo services as below.

**Geo-triggering**
```
// GeoTriggering
String channelId \= 'Your channel Id';
String channelName \= 'Your channel Name';
String androidNotificationTitle \= 'Your notification title';
String androidNotificationContent \= 'Your notification content';
int androidNotificationId \= 123; // Will be -1 by default if set to null. BluedotPointSdk.instance.geoTriggeringBuilder()
   .androidNotification(channelId, channelName, androidNotificationChannel, androidNotificationContent, androidNotificationId)
   .start().then((value) { 
   //Handle geo triggering started successfully 
   debugPrint('Geo-triggering has been started'); 
}).catchError((error) { 
  //Handle error when start geo-triggering 
  debugPrint('Failed to start geo-triggering. Error $error'); 
});
```

**Tempo**
```
// Tempo
String destinationId \= 'Your destination Id';
String channelId \= 'Your channel Id';
String channelName \= 'Your channel Name';
String androidNotificationTitle \= 'Your notification title';
String androidNotificationContent \= 'Your notification content';
int androidNotificationId \= 123; // Will be -1 by default if set to null.

BluedotPointSdk.instance
    .tempoBuilder()
    .androidNotification(channelId, channelName, androidNotificationTitle,
    androidNotificationContent, androidNotificationId)
    .start(destinationId)
    .then((value) {
  // Successfully started tempo tracking
  debugPrint('Tempo has been started successfully');
}).catchError((error) {
  // Failed to start tempo tracking, handle error here
  debugPrint('Failed to start tempo. Error $error');
});
```

iOS Features
------------

### Background Location Access

#### What is the background location usage indicator?

The background location usage indicator (Blue Bar) is an iOS feature that allows an app to access location data when the user has selected While using the app location authorization and the app is in the background.

The background location usage indicator will be displayed as a blue pill or bar at the top of the screen – either behind the clock or across the status bar (the event display changes between iPhone models). This notification lets the user know that an app is accessing location data.

![iOS Blue Bar](https://docs.bluedot.io/wp-content/uploads/2020/10/ios-blue-bar-300x229.jpg)

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

If the user has selected the _Always_ location authorization, the background location usage indicator will not be displayed.

#### When to use the background location usage indicator?

Background location usage indicator should be enabled when usage requires location updates even when the App is running in background and the user has granted the While using the app location authorization.

**Enable** **background location usage indicator****:**     

BluedotPointSdk.instance.allowsBackgroundLocationUpdates(true);

For the background location usage indicator to work, `allowsBackgroundLocationUpdates` must be set to `true` while the app is in the foreground, and the app has _While using the app_ location authorization. If `allowsBackgroundLocationUpdates` is set to `true` while the app is in the background, or the user changes the location permission to _While using the app_ while the app is in the background, the background location usage indicator will not be enabled.

**Disable** **background location usage indicator****:**

if (await Permission.locationAlways.isGranted) {
  BluedotPointSdk.instance.allowsBackgroundLocationUpdates(false);
}

The default value of `allowsBackgroundLocationUpdates` is `false`, and it can be disabled while the app is either in the foreground or the background. If the application requests _Always_ location authorization, be sure to check that _Always_ location authorization has not been granted before setting `allowsBackgroundLocationUpdates` to `false`, as setting the value to `false` will prevent the app from accessing location from the background.

#### Background location use cases

It may be beneficial to switch the background location usage indicator on and off during app operation to maximise location data availability during mission-critical flows.

For example:

On an app that handles ordering and pickup there may be value in starting Bluedot Geo-triggering on app start without the background location usage indicator enabled in order to power a marketing use case when the user grants Always location authorization or is actively using the app. When the user places an order and there is greater necessity and value in collecting location data to maximise the likelihood the user is detected upon arrival at the collection point, the background location usage indicator should be enabled. Upon completion of the order and collection process, the background location usage indicator should be disabled, removing unauthorized background location data collection and the visible indicator.

Example steps to implement:

1.  Start Geo-triggering without background location usage indicator enabled.
2.  User places an order.
3.  Enable background location usage indicator.
4.  User travels to the pickup location.
5.  Order is completed.
6.  Disable background location usage indicator.