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

| **Name**          | **Description**              | **Event payload**                                                                                   |
|---------------|---------------------------|-------------------------------------------------------------------------------------------------|
| `enterZone`     | Device enters a Zone      | Object with the following properties:<ul><li>`notificationType`: Entry</li><li>`appInfo`: App details</li><li>`triggerEvents`: Entry Event details with location Info and crossedFences</li><li>`zoneInfo`: Zone information with Id, name and `customData`</li><li>`installRef`: Unique ID assigned to the device per Geo-trigger Session</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device information</li><li>`triggerChainId`: unique ID assigned to a particular Entry event</li></ul> |
| `exitZone`      | Device exits a Zone       | Object with the following properties:<ul><li>`notificationType`: Exit</li><li>`appInfo`: App details</li><li>`triggerEvents`: Exit Event details with location Info and corresponding entry event</li><li>`zoneInfo`: Zone information with Id, name and `customData`</li><li>`installRef`: Unique ID assigned to the device per Geo-trigger Session</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device Details</li><li>`triggerChainId`: ID same as the corresponding Entry event</li></ul> |
| `zoneInfoUpdate`| The SDK downloads the Zones| List of Zones downloaded can be fetched from `BluedotPointSdk.getZonesAndFences()`                 |

Tempo Events
------------

| **Name**                        | **Description**                                                                                | **Event payload**                                                   |
|---------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| `tempoTrackingDidUpdate`        | Real time ETA updates for every Tempo event send to backend	.                                  | Object with the following properties:<ul><li>eta: Estimated time of arrival to a particular store</li><li>etaDirection: lessThan/greaterThan from the eta value</li><li>destination: Destination details of the store like address, location and destinationId</li><li>triggerChainId: unique Id per Tempo session</li></ul> |
| `tempoTrackingDidExpire`        | Tempo session has expired (Default 30 minutes).                                                | Object with the following properties:  * `error`: Error description |
| `tempoTrackingStoppedWithError` | Tempo has stopped due to an error.  _The error will be passed as a parameter in the callback._ | Object with the following properties:  * `error`: Error description |

Helpers Events
--------------

| **Name**                         | **Description**                                         | **Event payload**                                                                                                   |
|----------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `lowPowerModeDidChange`          | Low power mode status changes in the device             | Object with the following properties:  * `isLowPowerMode`: whether low power mode is enabled or disabled.  `<Bool>` |
| `locationAuthorizationDidChange` | Location authorization status changes                   | Object with the following properties:  * `previousAuthorizationStatus` * `newAuthorizationStatus`                   |
| `accuracyAuthorizationDidChange` | Accuracy authorization status changes. _* Only for iOS_ | Object with the following properties:  * `previousAuthorizationStatus` * `newAuthorizationStatus`                   |