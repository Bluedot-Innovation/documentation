Events List
=====================

**Register callbacks to receive events**
```js
// Example
io.bluedot.cordova.plugin.tempoStoppedWithErrorCallback( tempoTrackingStoppedWithErrorCallback );
```

GeoTriggering Events
--------------------

| **Name**                 | **Description**             | **Event payload**                                                                                                                                                                                                                                    |
|--------------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `enteredZoneCallback`    | Device enters a Zone        | Object with the following properties:  * `fenceInfo`: Fence information   * `zoneInfo`: Zone information   * `locationInfo`: Location information * `isExitEnabled`: Wether `exit` is enabled or disabled. `<Bool>` * `customData`: Zone custom data |
| `exitedZoneCallback`     | Device exits a Zone         | Object with the following properties:  * `fenceInfo`: Fence information   * `zoneInfo`: Zone information   * `locationInfo`: Location information * `isExitEnabled`: Wether `exit` is enabled or disabled. `<Bool>` * `customData`: Zone custom data |
| `zoneInfoUpdateCallback` | The SDK downloads the Zones | `zoneInfos`: List of Zones downloaded.                                                                                                                                                                                                               |

Tempo Events
------------
| **Name**                        | **Description**                                                                             | **Event payload**                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| `tempoTrackingExpiredCallback`  | Tempo session has expired (Default 30 minutes).                                             | None                                                                |
| `tempoStoppedWithErrorCallback` | Tempo has stopped due to an error. The error will be passed as a parameter in the callback. | Object with the following properties:  * `error`: Error description |


Helpers Events
--------------

| **Name**                                 | **Description**                                            | **Event payload**                                                                                                 |
|------------------------------------------|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `bluedotServiceDidReceiveErrorCallback`  | Bluedot service received an error                          | Object with the following properties: * `error`: Error description                                                |
| `lowPowerModeDidChangeCallback`          | Low power mode status changes in the device * Only for iOS | Object with the following properties: *`isLowPowerMode`: whether low power mode is enabled or disabled.  `<Bool>` |
| `locationAuthorizationDidChangeCallback` | Location authorization status changes * Only for iOS       | Object with the following properties: * `previousAuthorizationStatus` * `newAuthorizationStatus`                  |
| `accuracyAuthorizationDidChangeCallback` | Accuracy authorization status changes * Only for iOS       | Object with the following properties: * `previousAccuracyAuthorization` * `newAccuracyAuthorization`              |