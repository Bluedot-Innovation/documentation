Migration Guide to 2.0
========================

The Bluedot Flutter wrapper version 2.0.0 is a major update of our APIs. 

Please note that the following changes are also included in this major update:

- A new payload returned as part of Zone Entry and Exit Callbacks, enhancing the information available upon entering or exiting a zone.
- The introduction of a new Tempo Callback that provides the user's ETA updates at runtime, allowing for real-time updates.
- The Rule Download callback has been modified, and it no longer returns the list of ZoneInfo’s. Instead, this information can now be accessed from an existing API to fetch the `ZoneInfo` list.
- Destinations have been added as a part of `ZoneInfo`, providing additional context.
- A new API has been developed to fetch `CustomEventMetaData` set for a Point SDK session.
- For Android users, permissions to use Foreground Service or to run Bluedot service in the Background must now be declared from the App.
- For iOS users, App restart notification feature support is added.

## Updated GeoTriggering Events
The updated geo-triggering events now provide detailed information about zone entry, exit, and updates, including properties such as notification type, app info, and zone details.

| **Name**         | **Description**                 | **Event payload**                                                                                                                                                                                                                                         |
|------------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `didEnterZone`   | Device enters a Zone            | Object with the following properties:<ul><li>`notificationType`: Entry</li><li>`appInfo`: App details</li><li>`triggerEvents`: Entry Event details with location Info and crossedFences</li><li>`zoneInfo`: Zone information with Id, name and `customData`</li><li>`installRef`: Unique ID assigned to the device</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device Details</li><li>`triggerChainId`: unique ID assigned to a particular Entry event</li></ul> |
| `didExitZone`    | Device exits a Zone             | Object with the following properties:<ul><li>`notificationType`: Exit</li><li>`appInfo`: App details</li><li>`triggerEvents`: Exit Event details with location Info and corresponding entry event</li><li>`zoneInfo`: Zone information with Id, name and `customData`</li><li>`installRef`: Unique ID assigned to the device</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device Details</li><li>`triggerChainId`: ID same as the corresponding Entry event</li></ul> |
| `didUpdateZoneInfo` | Update from SDK about Zone’s download | List of Zones downloaded can be fetched from `BluedotPointSdk.getZonesAndFences()`                                                                                                                                                                              |


## New Tempo Event

A new Tempo Callback provides real-time ETA updates during the user's journey, offering details about estimated arrival times and destination information.

| **Name**                  | **Description**                                      | **Event payload**                                                                                                                                                                                                                   |
|---------------------------|------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `tempoTrackingDidUpdate`  | ETA update for every Tempo event sent to backend     | Object with the following properties:<ul><li>`eta`: Estimated time of arrival to a particular store</li><li>`etaDirection`: lessThan/greaterThan from the `eta` value</li><li>`destination`: Destination details of the store like address, location, and `destinationId`</li><li>`triggerChainId`: unique Id per Tempo session</li></ul> |


```dart
const tempoEventChannel = MethodChannel(BluedotPointSdk.tempo);
tempoEventChannel.setMethodCallHandler((MethodCall call) async {
  var args = call.arguments;
  var tempoAlertTitle = 'Tempo Events';
  switch (call.method) {
    case TempoEvents.tempoTrackingDidUpdate:
      // Handler Tempo ETA updates
      break;
    default:
      break;
  }
});
```

## New API to getCustomEventMetaData
A new API allows you to fetch custom event metadata set for a Bluedot session. For more details on Custom Event Metadata, please refer to the documentation [here](../../../Custom%20Data.md).

```dart
BluedotPointSdk.getCustomEventMetaData().then((metadata) => {  
   const message = `CustomEventMetaData: ${JSON.stringify(metadata)}`; 
});
```

## Example to fetch list of Zone Info’s:

To retrieve the updated list of Zone Information, you can use the following example. Note that the `zoneInfoUpdate` callback no longer directly returns `zoneInfos`. Instead, you should query the list of zones directly from the SDK using the `getZonesAndFences` method.

```dart
BluedotPointSdk.on("zoneInfoUpdate", () => { 
 // zoneInfoUpdate callback no longer returns zoneInfos, 
 // query it directly from the SDK 

  BluedotPointSdk.getZonesAndFences().then((zoneInfos) => {  
       if (zoneInfos != null) {      
         const message = `Did Update ZoneInfo ${JSON.stringify(zoneInfos)}`;   
         console.log(JSON.stringify(zoneInfos))   
       }
   });
});   
```

## Android Permissions change

For Android devices, the Bluedot service no longer declares Foreground and Background usage permissions in its Manifest. Therefore, we suggest adding the Foreground or Background usage permissions in your App's Manifest. For more details, refer below link [Migration Guide to Android Point SDK 16](https://docs.bluedot.io/Point%20SDK/Android/Migration%20Guides/Migration%20guide%20to%20SDK%2016%20for%20Android#update-the-apps-location-permissions-in-the-manifest)

### iOS App Restart Notification feature

More details about this feature can be found here: ([App restart notification](https://docs.bluedot.io/Point%20SDK/iOS/Features/App%20restart%20notification))

To use this feature in Flutter plugin, while starting the Geo-Trigger provide Restart Notification title and text as below:

```dart
String iosAppRestartNotificationTitle ='Restart Bluedot Service';
String iosAppRestartNotificationButtonText ='Restart';

BluedotPointSdk.instance.geoTriggeringBuilder()
   .iosNotification(iosAppRestartNotificationTitle,iosAppRestartNotificationButtonText)
   .start()
```