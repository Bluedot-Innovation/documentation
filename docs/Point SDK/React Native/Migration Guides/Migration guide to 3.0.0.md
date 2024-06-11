Migration Guide to 3.0.0
========================


The Bluedot React Native wrapper version 3.0.0 is a major update of our APIs. It includes many updates in callbacks such as:

- A new payload returned as part of Zone `Entry` and `Exit` Callbacks
- New Tempo Callback that provides the user's ETA updates at runtime
- Rule Download callback modified to not return the list of ZoneInfo’s, instead it can be accessed from an existing API to fetch `ZoneInfo` list.
- Destination added as a part of `ZoneInfo`
- New API to fetch Custom Event Meta Data set for a Bluedot Session.
- Android - Permissions to use Foreground Service or to run Bluedot service in Background to be declared from App.

## New Payload for `enterZone` and `exitZone` Callbacks:

The payload returned for `enterZone` and `exitZone` callbacks has been updated for the Geo-Trigger events, providing additional comprehensive information about the geofence interactions.

**Android**: [Android Payloads](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine.event/-geo-trigger-event/index.html)

**iOS**: [iOS Payloads](https://ios-docs.bluedot.io/Classes/GeoTriggerEvent.html)

## Updated Geo-Triggering Events

The updated geo-triggering events now provide detailed information about zone entry, exit, and updates, including properties such as notification type, app info, and zone details. For more information please refer to [Geo-triggering events list](https://docs.bluedot.io/Point%20SDK/React%20Native/Events%20List#geotriggering-events)


| Name          | Description               | Event payload                                                                                   |
|---------------|---------------------------|-------------------------------------------------------------------------------------------------|
| `enterZone`     | Device enters a Zone      | Object with the following properties:<ul><li>`notificationType`: Entry</li><li>`appInfo`: App details</li><li>`triggerEvents`: Entry Event details with location Info and crossedFences</li><li>`zoneInfo`: Zone information with Id, name and `customData`</li><li>`installRef`: Unique ID assigned to the device per Geo-trigger Session</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device information</li><li>`triggerChainId`: unique ID assigned to a particular Entry event</li></ul> |
| `exitZone`      | Device exits a Zone       | Object with the following properties:<ul><li>`notificationType`: Exit</li><li>`appInfo`: App details</li><li>`triggerEvents`: Exit Event details with location Info and corresponding entry event</li><li>`zoneInfo`: Zone information with Id, name and `customData`</li><li>`installRef`: Unique ID assigned to the device per Geo-trigger Session</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device Details</li><li>`triggerChainId`: ID same as the corresponding Entry event</li></ul> |
| `zoneInfoUpdate`| The SDK downloads the Zones| List of Zones downloaded can be fetched from `BluedotPointSdk.getZonesAndFences()`                 |


## New Tempo Event

A new Tempo Callback provides real-time ETA updates during the user's journey, offering details about estimated arrival times and destination information. For more information please refer to [Tempo events list](https://docs.bluedot.io/Point%20SDK/React%20Native/Events%20List#tempo-events)


| Name                    | Description                                               | Event payload                                                                                         |
|-------------------------|-----------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `tempoTrackingDidUpdate`  | Real time ETA updates for every Tempo event send to backend| Object with the following properties:<ul><li>`eta`: Estimated time of arrival to a particular store</li><li>`etaDirection`: `lessThan`/`greaterThan` from the eta value</li><li>`destination`: Destination details of the store like address, location and `destinationId`</li><li>`triggerChainId`: unique Id per Tempo session</li></ul> |


## New API to getCustomEventMetaData
A new API allows you to fetch custom event metadata set for a Bluedot session. For more details on Custom Event Metadata, please refer to the documentation [here](../../../Custom%20Event%20Metadata.md).


```jsx
BluedotPointSdk.getCustomEventMetaData().then((metadata) => {  
   const message = `CustomEventMetaData: ${JSON.stringify(metadata)}`; 
});
```

## Example to fetch list of Zone Info’s:
To retrieve the updated list of Zone Information, you can use the following example. Note that the `zoneInfoUpdate` callback no longer directly returns `zoneInfos`. Instead, you should query the list of zones directly from the SDK using the `getZonesAndFences` method.

```jsx
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

## Android Location Permissions Change

For Android Devices Bluedot Service no longer declares Foreground and Background usage permissions in it’s Manifest, so we suggest to add the Foreground or Background usage permissions in App’s Manifest. To ensure proper functionality, you need to update the app's location permissions in the manifest. Please follow the detailed instructions in the documentation: [Update the app's location permissions in the manifest](https://docs.bluedot.io/Point%20SDK/Android/Migration%20Guides/Migration%20guide%20to%20SDK%2016%20for%20Android#update-the-apps-location-permissions-in-the-manifest)