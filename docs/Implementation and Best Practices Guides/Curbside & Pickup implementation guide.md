Curbside Pickup Implementation Guide
====================================

This guide explains how to successfully implement a curb-side use case using Bluedot.

SDK Implementation
------------------

When implementing the SDK we want to make sure to track the location of the users during the life-cycle of an order. This means that we want to start the SDK when the user places an order, and turn it off when it leaves the store.

In this guide, we’ll cover when to call the main SDK methods required for a curbside use case.

![](https://docs.google.com/drawings/d/e/2PACX-1vRQf5-PSdDSmlHCQOXmb7PfQLmj94rHO4M376TjfL28gIDO4EnOdGc0PqdDIoiyXNu1ARSTTW-WDpSj/pub?w=2440&h=2017)

| **Step** | **Functionality**            | **Documentation** |                     |
| :------- | :------------------------- | :------------------ | :------------------ |
| 1        | Initialize                 | [Android](../Point%20SDK/Android/Quick%20Start.md)        | [iOS](../Point%20SDK/iOS/Quick%20Start.md)       |
| 2        | `setCustomEventMetaData`   | [Android](../Custom%20Event%20Metadata.md)                | [iOS](../Custom%20Event%20Metadata.md)       |
| 3        | Start Tempo                | [Android](../Point%20SDK/Android/Tempo.md)                | [iOS](../Point%20SDK/iOS/Tempo.md)       |
| 4        | Start Geo-triggering       | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 5        | `enterZone` event callback | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 6        | Stop Tempo                 | [Android](../Point%20SDK/Android/Tempo.md)                | [iOS](../Point%20SDK/iOS/Tempo.md)       |
| 7        | `exitZone` event callback  | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 8        | Stop Geo-triggering        | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |