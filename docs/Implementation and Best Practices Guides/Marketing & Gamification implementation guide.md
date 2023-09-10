Marketing / Gamification Implementation Guide
=============================================

This guide explains how to successfully implement a Marketing or Gamification use case using Bluedot. 

SDK Implementation
------------------

When implementing the SDK we want to make sure to track the location of the users when the app launches the marketing or gamification experience.

In this guide, we’ll cover when to call the main SDK methods required for a Marketing / Gamification use case. For all the technical details on all the SDK’s methods and how they work please refer to our [Documentation website.](https://docs.bluedot.io/)

![](https://docs.google.com/drawings/d/e/2PACX-1vTOj-HH9DblzbvI2tsDWy9rhVccnOd4ZCbRrgnMzUSjOm7kzyV1VO7mvPsnspRHjlw1_SCYQHJj4uFZ/pub?w=2640&h=1526)

| **Step** | **Functionality**            | **Documentation** |                     |
| :------- | :------------------------- | :------------------ | :------------------ |
| 1        | `Initialize`                 | [Android](../Point%20SDK/Android/Quick%20Start.md)      | [iOS](../Point%20SDK/iOS/Quick%20Start.md)       |
| 2        | `setCustomEventMetaData`   | [Android](../Custom%20Event%20Metadata.md)                | [iOS](../Custom%20Event%20Metadata.md)       |
| 3        | Start Geo-triggering       | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 4        | `enterZone` event callback | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 5        | `exitZone` event callback  | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 6        | Stop Geo-triggering        | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |