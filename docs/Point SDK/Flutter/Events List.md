---
pagination_next: null
---

Events List
=====================

 GeoTriggering Events
---------------------

| **Name**           | **Description**             | **Event payload**                                                                                                                                                                                                                                               |
|--------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `didEnterZone`     | Device enters a Zone        | Object with the following properties:<ul><li>`notificationType`: Entry</li><li>`appInfo`: App details</li><li>`triggerEvents`: Entry Event details with location info and crossedFences</li><li>`zoneInfo`: Zone information with Id, name, and `customData`</li><li>`installRef`: Unique ID assigned to the device per Geo-trigger Session</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device information</li><li>`triggerChainId`: unique ID assigned to a particular Entry event</li></ul> |
| `didExitZone`      | Device exits a Zone         | Object with the following properties:<ul><li>`notificationType`: Exit</li><li>`appInfo`: App details</li><li>`triggerEvents`: Exit Event details with location info and corresponding entry event</li><li>`zoneInfo`: Zone information with Id, name, and `customData`</li><li>`installRef`: Unique ID assigned to the device per Geo-trigger Session</li><li>`projectId`: ProjectId of the Project used from Canvas</li><li>`deviceInfo`: Device Details</li><li>`triggerChainId`: ID same as the corresponding Entry event</li></ul> |
| `onZoneInfoUpdate` | The SDK downloads the Zones | List of Zones downloaded can be fetched from `BluedotPointSdk.getZonesAndFences()`                                                                                                                                                                                                                     |

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