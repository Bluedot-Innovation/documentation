Drive-thru Implementation Guide
===============================

This guide explains how to successfully implement a Drive-thru use case using Bluedot.

SDK Implementation
------------------

When implementing the SDK we want to make sure to track the location of the users during the life-cycle of an order. This means that we want to start the SDK when the user places an order, and turn it off when it leaves the store.

In this guide, we’ll cover when to call the main SDK methods required for a Drive-thru use case. For all the technical details on all the SDK’s methods and how they work please refer to our [Documentation website.](https://docs.bluedot.io/)

![](https://docs.google.com/drawings/d/e/2PACX-1vS2MVYfAPOE0H-vohfxPaT42vdxC7IRIzKwmRLJOdOn06lpo8OdRtVaDdDoSHm9ubB2xoQaS3ppxGOy/pub?w=2698&h=1570)

| **Step** | **Functionality**            | **Documentation** |                     |
| :------- | :------------------------- | :------------------ | :------------------ |
| 1        | `Initialize`               | [Android](../Point%20SDK/Android/Quick%20Start.md)          | [iOS](../Point%20SDK/iOS/Quick%20Start.md)       |
| 2        | `setCustomEventMetaData`   | [Android](../Custom%20Event%20Metadata.md)                    | [iOS](../Custom%20Event%20Metadata.md)       |
| 3        | Start Geo-triggering       | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 4        | `enterZone` Order Taker event callback | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 5        | `enterZone` Pickup Window event callback | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 6        | `exitZone` event callback  | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |
| 7        | Stop Geo-triggering        | [Android](../Point%20SDK/Android/Geo-triggering.md)       | [iOS](../Point%20SDK/iOS/Geo-triggering.md)       |