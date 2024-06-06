Events List
========================

### Subscribe to events

```js
BluedotPointSdk.on("event_name", (event) => console.log("Event callback", event))
```

### Unsubscribe events
```js
BluedotPointSdk.unsubscribe("event_name", (event) => console.log("Event callback", event))
```

GeoTriggering Events
--------------------

| **Name**         | **Description**             | **Event payload**                                                                                                                                                                                                                           |
|------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `enterZone`      | Device enters a Zone        | Object with the following properties: * `notificationType`: Entry * `appInfo`:  App details * `zoneInfo`: Zone information with Id, name and customData  * `triggerEvents`: Entry Event details with location information and crossedFences * `installRef`: Unique ID assigned to the device per Geo-trigger Session * `projectId`: ProjectId of the Project used from Canvas * `deviceInfo`: Device information * `triggerChainId`: Unique ID assigned to a particular Entry event  |
| `exitZone`       | Device exits a Zone         | Object with the following properties:  * `notificationType`: Exit * `appInfo`:  App details * `zoneInfo`: Zone information with Id, name and customData  * `triggerEvents`: Exit Event details with location Info and and corresponding entry event * `installRef`: Unique ID assigned to the device per Geo-trigger Session * `projectId`: ProjectId of the Project used from Canvas * `deviceInfo`: Device information * `triggerChainId`: Unique ID same as the corresponding Entry event |
| `zoneInfoUpdate` | The SDK downloads the Zones | List of Zones downloaded can be fetched from `BluedotPointSdk.getZonesAndFences()`. |

Tempo Events
------------

| **Name**                        | **Description**                                                                                | **Event payload**                                                   |
|---------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| `tempoTrackingDidUpdate`        | Real time ETA updates for every Tempo event send to backend.                                    | Object with the following properties:  * `eta`: Estimated time of arrival to a particular store * `etaDirection` : lessThan/ greaterThan from the eta value * `destination`:  Destination details of the store like address, location and destinationId  * `triggerChainId`: unique Id per Tempo session |
| `tempoTrackingDidExpire`        | Tempo session has expired (Default 30 minutes).                                                | Object with the following properties:  * `error`: Error description |
| `tempoTrackingStoppedWithError` | Tempo has stopped due to an error.  _The error will be passed as a parameter in the callback._ | Object with the following properties:  * `error`: Error description |

Helpers Events
--------------

| **Name**                         | **Description**                                         | **Event payload**                                                                                                   |
|----------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `lowPowerModeDidChange`          | Low power mode status changes in the device             | Object with the following properties:  * `isLowPowerMode`: whether low power mode is enabled or disabled.  `<Bool>` |
| `locationAuthorizationDidChange` | Location authorization status changes                   | Object with the following properties:  * `previousAuthorizationStatus` * `newAuthorizationStatus`                   |
| `accuracyAuthorizationDidChange` | Accuracy authorization status changes. _* Only for iOS_ | Object with the following properties:  * `previousAuthorizationStatus` * `newAuthorizationStatus`                   |