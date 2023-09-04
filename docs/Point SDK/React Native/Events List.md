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
| `enterZone`      | Device enters a Zone        | Object with the following properties: * `fenceInfo`: Fence information * `zoneInfo`: Zone information * `locationInfo`: Location information * `isExitEnabled`: Wether Exit is enabled or disabled. `<Bool>`` * `customData`: Zone custom data |
| `exitZone`       | Device exits a Zone         | Object with the following properties:  * `fenceInfo`: Fence information * `zoneInfo`: Zone information * `date`: Date of the exit event * `duration`: Time between the entry and exit event.                                                |
| `zoneInfoUpdate` | The SDK downloads the Zones | Array `<Zones>`. List of Zones downloaded.                                                                                                                                                                                                  |

Tempo Events
------------

| **Name**                        | **Description**                                                                                | **Event payload**                                                   |
|---------------------------------|------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| `tempoTrackingDidExpire`        | Tempo session has expired (Default 30 minutes).                                                | Object with the following properties:  * `error`: Error description |
| `tempoTrackingStoppedWithError` | Tempo has stopped due to an error.  _The error will be passed as a parameter in the callback._ | Object with the following properties:  * `error`: Error description |

Helpers Events
--------------

| **Name**                         | **Description**                                         | **Event payload**                                                                                                   |
|----------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `lowPowerModeDidChange`          | Low power mode status changes in the device             | Object with the following properties:  * `isLowPowerMode`: whether low power mode is enabled or disabled.  `<Bool>` |
| `locationAuthorizationDidChange` | Location authorization status changes                   | Object with the following properties:  * `previousAuthorizationStatus` * `newAuthorizationStatus`                   |
| `accuracyAuthorizationDidChange` | Accuracy authorization status changes. _* Only for iOS_ | Object with the following properties:  * `previousAuthorizationStatus` * `newAuthorizationStatus`                   |