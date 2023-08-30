1.  [Developer Documentation](https://docs.bluedot.io)
2.  [React Native Bluedot Point SDK Wrapper](https://docs.bluedot.io/react-native-library/)
3.  React Native Features

React Native Features
=====================

*   Custom Event Metadata
*   Enable / Disable Zones
*   Android features
    *   Foreground Notification
*   iOS features
    *   App Restart Notification

Custom Event Metadata
---------------------

Custom event metadata is a feature which is available in the Bluedot Point SDK for our customers to set additional event-specific metadata to our location events. For further information refer to [Custom Event Metadata](https://docs.bluedot.io/custom-event-metadata/)

It is recommended to set the Custom Event Meta Data before starting GeoTriggering or Tempo.

**Note:** _Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error as: Only 20 CustomEventMetaData fields are allowed._

```
BluedotPointSdk.setCustomEventMetadata({
  orderId: "order\_123",
  storeId: "store\_456",
  customerId: "789"
})
```

Enable / Disable Zones
----------------------

An app may optionally disable (and later re-enable) Zones by calling `setZoneDisableByApplication`. For further information refer to Enable or disable Zones documentation ([Android](https://docs.bluedot.io/android-sdk/android-features/android-features-enable-or-disable-zones/) | [iOS](https://docs.bluedot.io/ios-sdk/ios-features/enable-or-disable-zone/)) 

```
const zoneIdToDisable \= "your\_zone\_id";
const disableZone \= true;
```

BluedotPointSdk.setZoneDisableByApplication(zoneIdToDisable, disableZone);

If you want to check if a Zone is enabled or disabled you can use the method `isZoneDisablebyApplication` as below

```
const zoneIdToDisable \= "your\_zone\_id";

BluedotPointSdk.isZoneDiableByApplication(zoneIdToDisable)
  .then(isDisable \=> {
    if (!isDisable) {
      BluedotPointSdk.setZoneDisableByApplication(zoneIdToDisable, true)
    }
  })
  .catch(error \=> console.error('Error', error))
```


Android Features
----------------

### Foreground Notification

Given the restrictions on accessing location data from the background, it is recommended that the Geo-triggering service be run as a foreground service, and the Tempo service must be run as a foreground service. For more information refer to [Android – Location Permission & Notifications Best Practices](https://docs.bluedot.io/android-sdk/android-location-permission-notifications-best-practices/)

The Foreground Notification method (`androidNotification`) is included in the `GeoTriggeringBuilder` and the `TempoBuilder` classes. It should be set up before starting any of the Geo-triggering or Tempo services as below.

**Geo-triggering**
```
// GeoTriggering

const geoTriggeringService \= new BluedotPointSdk.GeoTriggeringBuilder()

geoTriggeringService
  .androidNotification(
    "notification channel Id", 
    "notification channel name",
    "notification title",
    "notification content",
    "notification ID" // optional
  )
  .start(
    () \=> console.log("On success callback"),
    (error) \=> console.error("On error callback")
  )
```

**Tempo**
```
// Tempo
const tempoService \= new BluedotPointSdk.TempoBuilder()

tempoService
  .androidNotification(
    "notification channel Id",
    "notification channel name"
    "notification title", 
    "notification content",
    "notification ID" // optional
  )
  .start(
    () \=> console.log("On success callback"),
    (error) \=> console.error("On error callback")
  )
```

iOS Features
------------

### App Restart Notification

Bluedot Point SDK includes a method for apps to display app restart notification to user after app termination. For further details refer to [iOS Features – App restart](https://docs.bluedot.io/ios-sdk/ios-features/ios-features-app-restart/)

The App restart method (`iOSAppRestartNotification`) is included in the `GeoTriggeringBuilder`. It should be set up before starting Geo-triggering. 

Note: This feature is **not available in Tempo.**
```
// GeoTriggering

const geoTriggeringService \= new BluedotPointSdk.GeoTriggeringBuilder()

geoTriggeringService
  .iOSAppRestartNotification(
    "notification title", 
    "button text content"
  )
  .start(
    () \=> console.log("On success callback"),
    (error) \=> console.error("On error callback")
  )
```