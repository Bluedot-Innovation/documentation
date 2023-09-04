Drive-thru Implementation Guide
===============================

This guide explains how to successfully implement a Drive-thru use case using Bluedot.

SDK Implementation
------------------

When implementing the SDK we want to make sure to track the location of the users during the life-cycle of an order. This means that we want to start the SDK when the user places an order, and turn it off when it leaves the store.

In this guide, we’ll cover when to call the main SDK methods required for a Drive-thru use case. For all the technical details on all the SDK’s methods and how they work please refer to our [Documentation website.](https://docs.bluedot.io/)

![](https://docs.google.com/drawings/d/e/2PACX-1vS2MVYfAPOE0H-vohfxPaT42vdxC7IRIzKwmRLJOdOn06lpo8OdRtVaDdDoSHm9ubB2xoQaS3ppxGOy/pub?w=2698&h=1570)

**Step**

**Functionality**

**Documentation**

1

`Initialize`

[Android](https://docs.bluedot.io/android-sdk/android-quick-start/)

[iOS](https://docs.bluedot.io/ios-sdk/ios-quick-start/)

2

`setCustomEventMetaData`

[Android](https://docs.bluedot.io/custom-event-metadata/)

 [iOS](https://docs.bluedot.io/custom-event-metadata/)

3

Start Geo-triggering

[Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)

4

`enterZone` Order Taker event callback

[Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)

 5

`enterZone` Pickup Window event callback

[Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)

6

`exitZone` Property event callback

[Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)

7

Stop Geo-triggering

 [Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)