---
pagination_next: null
---

Events List
=====================

 GeoTriggering Events
---------------------

| **Name**           | **Description**             | **Event payload**                                                                                                                                                                                                                                                           |
|--------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `didEnterZone`     | Device enters a Zone        | The method call will send arguments with the following properties: * `fenceInfo`: Fence information * `zoneInfo`: Zone information * `locationInfo`: Location information * `isExitEnabled`: Whether exit is enabled or disabled. `<Bool>` * `customData`: Zone custom data |
| `didExitZone`      | Device exits a Zone         | The method call will send with the following properties: * `fenceInfo`: Fence information * `zoneInfo`: Zone information * `date`: Date of the exit event * `duration`: Time between the entry and exit event.                                                              |
| `onZoneInfoUpdate` | The SDK downloads the Zones | Array`<Zones>`. List of Zones downloaded.                                                                                                                                                                                                                                   |

Tempo Events
------------

| **Name**                        | **Description**                                                                             | **Event payload**                                                                                                                                       |
|---------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `tempoTrackingDidUpdate`  | ETA update for every Tempo event sent to backend     | Object with the following properties:<ul><li>`eta`: Estimated time of arrival to a particular store</li><li>`etaDirection`: lessThan/greaterThan from the `eta` value</li><li>`destination`: Destination details of the store like address, location, and `destinationId`</li><li>`triggerChainId`: unique Id per Tempo session</li></ul> |
| `tempoTrackingStoppedWithError` | Tempo has stopped due to an error.  The error will be pass as arguments in the method call. | The method call will send arguments with the following properties: * `code`: Error code * `message`: Error description * `details`: Other error details |

Helpers Events
--------------

| **Name**                         | **Description**                                               | **Event payload**                                                                                                                                       |
|----------------------------------|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onBluedotServiceError`          | Error occurred to Bluedot service                             | The method call will send arguments with the following properties: * `code`: Error code * `message`: Error description * `details`: Other error details |
| `lowPowerModeDidChange`          | Low power mode status changes in the device \* _Only for iOS_ | The method call will send arguments with the following properties: * `isLowPowerMode`: whether low power mode is enabled or disabled. `<Bool>`          |
| `locationAuthorizationDidChange` | Location authorization status changes \* _Only for iOS_       | The method call will send arguments with the following properties: * `previousAuthorizationStatus`: `<int>` * `newAuthorizationStatus`: `<int>`         |
| `accuracyAuthorizationDidChange` | Accuracy authorization status changes \* _Only for iOS_       | The method call will send arguments with the following properties: * `previousAuthorizationStatus`: `<int>` * `newAuthorizationStatus`: `<int>`         |