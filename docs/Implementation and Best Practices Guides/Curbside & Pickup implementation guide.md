Curbside Pickup Implementation Guide
====================================

This guide explains how to successfully implement a curb-side use case using Bluedot.

SDK Implementation
------------------

When implementing the SDK we want to make sure to track the location of the users during the life-cycle of an order. This means that we want to start the SDK when the user places an order, and turn it off when it leaves the store.

In this guide, we’ll cover when to call the main SDK methods required for a curbside use case. For all the technical details on all the SDK’s methods and how they work please refer to our [Documentation website.](https://docs.bluedot.io/)

![](https://docs.google.com/drawings/d/e/2PACX-1vRQf5-PSdDSmlHCQOXmb7PfQLmj94rHO4M376TjfL28gIDO4EnOdGc0PqdDIoiyXNu1ARSTTW-WDpSj/pub?w=2440&h=2017)

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

Start Tempo

[Android](https://docs.bluedot.io/android-sdk/android-tempo/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-tempo/)

4

Start Geo-triggering

[Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)

5

`enterZone` event callback

[Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)

6

Stop Tempo

[Android](https://docs.bluedot.io/android-sdk/android-tempo/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-tempo/)

7

`exitZone` event callback

[Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)

8

Stop Geo-triggering

 [Android](https://docs.bluedot.io/android-sdk/android-geo-triggering/)

 [iOS](https://docs.bluedot.io/ios-sdk/ios-geo-triggering/)