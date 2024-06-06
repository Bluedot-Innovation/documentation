---
pagination_next: null
---

Events List
=====================

 GeoTriggering Events
---------------------

| **Name**           | **Description**             | **Event payload**                                                                                                                                                                                                                                                           |
|--------------------|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `didEnterZone`     | Device enters a Zone        | The method call will send arguments with the following properties: * `notificationType`: Entry * `appInfo`:  App details * `zoneInfo`: Zone information with Id, name and customData  * `triggerEvents`: Entry Event details with location information and crossedFences * `installRef`: Unique ID assigned to the device per Geo-trigger Session * `projectId`: ProjectId of the Project used from Canvas * `deviceInfo`: Device information * `triggerChainId`: Unique ID assigned to a particular Entry event |
| `didExitZone`      | Device exits a Zone         | The method call will send with the following properties:* `notificationType`: Exit * `appInfo`:  App details * `zoneInfo`: Zone information with Id, name and customData  * `triggerEvents`: Exit Event details with location Info and and corresponding entry event * `installRef`: Unique ID assigned to the device per Geo-trigger Session * `projectId`: ProjectId of the Project used from Canvas * `deviceInfo`: Device information * `triggerChainId`: Unique ID same as the corresponding Entry event                                                             |
| `didUpdateZoneInfo` | The SDK downloads the Zones | List of Zones downloaded can be fetched from `BluedotPointSdk.getZonesAndFences()` |

Tempo Events
------------

| **Name**                        | **Description**                                                                             | **Event payload**                                                                                                                                       |
|---------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `tempoTrackingDidUpdate` | Real time ETA updates for every Tempo event send to backend. | Object with the following properties: * `eta` : Estimated time of arrival to a particular store * `etaDirection` : lessThan/ greaterThan from the eta value * `destination`:  Destination details of the store like `address`, `location` and `destinationId` * `triggerChainId`: unique Id per Tempo session|
| `tempoTrackingStoppedWithError` | Tempo has stopped due to an error.  The error will be pass as arguments in the method call. | The method call will send arguments with the following properties: * `code`: Error code * `message`: Error description * `details`: Other error details |

Helpers Events
--------------

| **Name**                         | **Description**                                               | **Event payload**                                                                                                                                       |
|----------------------------------|---------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onBluedotServiceError`          | Error occurred to Bluedot service                             | The method call will send arguments with the following properties: * `code`: Error code * `message`: Error description * `details`: Other error details |
| `lowPowerModeDidChange`          | Low power mode status changes in the device \* _Only for iOS_ | The method call will send arguments with the following properties: * `isLowPowerMode`: whether low power mode is enabled or disabled. `<Bool>`          |
| `locationAuthorizationDidChange` | Location authorization status changes \* _Only for iOS_       | The method call will send arguments with the following properties: * `previousAuthorizationStatus`: `<int>` * `newAuthorizationStatus`: `<int>`         |
| `accuracyAuthorizationDidChange` | Accuracy authorization status changes \* _Only for iOS_       | The method call will send arguments with the following properties: * `previousAuthorizationStatus`: `<int>` * `newAuthorizationStatus`: `<int>`         |