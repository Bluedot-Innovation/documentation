---
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
---

Version Release Notes
=====================

Release date Nov 30, 2023
-------------------------

### Bluedot React Native wrapper 2.3.5

**What’s New:**
* React Native updated to version 0.72.7
* Bluedot Android SDK updated to version 15.6.0

* * *


Release date Nov 29, 2023
-------------------------

### Android SDK 15.6.0

**What’s New:**
* Dependency Updates:
  * Google Play Location Services upgraded to version 21.0.1.
  * AndroidX Room now at version 2.5.1.
  * Work Manager updated to version 2.8.1.
* SDK Compatibility Adjustments:
  * `compileSdk` version have been updated to 33.
  * Developers are advised to update their `compileSdkVersion` to version 33 or higher to ensure full compatibility with the latest SDK.

* * *

Release date May 2, 2023
------------------------

### Bluedot Flutter wrapper 1.0.1

*   Updated to the latest iOS PointSDK 15.6.7 and Android PointSDK 15.5.3
*   In Android, PointSDK by default will use `ic_stat_name` resource in res/drawable or res/mipmap of android folder as the notification icon for GeoTriggering and Tempo foreground service notifications.
*   If you are using `setNotificationIdResourceId(int resourceId)` to set a custom icon for notification, change to `setNotificationIcon(String icon)` and make sure resource `icon` exists in either res/drawable or res/mipmap folder.

* * *

Release date March 30, 2023
---------------------------

### iOS SDK 15.6.7

*   Improved the reliability of the SDK under poor or no network access.
*   Fixed an issue that was preventing the Restart Notification to reliably start.

* * *

Release date March 28, 2023
---------------------------

### Android SDK 15.5.3

*   Improved Geo-triggering Exit performance.
*   Resolved a problem that could cause the SDK to crash when updating to 15.5.x for users with a pending Exit event and had Google Backup enabled for the app.
*   Bug fixes and other minor improvements to the SDK.

* * *

Release date March 3, 2023
--------------------------

### Bluedot React Native wrapper 2.3.0

*   Now support React Native version 0.71.
*   Fixed an issue with `setNotificationIDResourceID(resourceName)` function. Please use this method to set notification icon in Android, e.g. `setNotificationIDResourceID("ic_notification")`.
*   Added function to enable/disable background location updates. (iOS only)
*   Updated to Point Android SDK v15.5.1
*   Updated to Point iOS SDK v15.6.5

* * *

Release date February 28, 2023
------------------------------

### iOS SDK 15.6.6

*   Reduced the time between retries when sending Entry/Exit events to our systems. This will help ensure that the Entry/Exit notifications are sent as soon as the device has network access.

### Xamarin iOS wrapper 15.6.6

*   Includes iOS PointSDK 15.6.6

* * *

Release date February 23, 2023
------------------------------

### Android SDK 15.5.2

*   Reduced the time between retries when sending Entry/Exit events to our systems. This will help ensure that the Entry/Exit notifications are sent as soon as the device has network access.

### Xamarin Android wrapper 15.5.2

*   Includes Android PointSDK 15.5.2

* * *

Release date February 2, 2023
-----------------------------

### Xamarin Android Wrapper 15.5.1

*   Includes Android PointSDK 15.5.1

### Xamarin iOS Wrapper 15.6.5.1

*   Includes iOS PointSDK 15.6.5

* * *

Release date December 2, 2022
-----------------------------

### Android SDK 15.5.1

*   Optimized networking behavior, resulting in reduced network traffic by roughly 40%.
*   Improved Geo-triggering Exit performance
*   Improved Error reporting and downgraded non-fatal errors to warnings at SDK initialization:
    *   Any initialization errors are reported on the callback instead of crashing the app.
    *   Report a new error code `ERROR_CODE_PERSISTENCE_ERROR` when the SDK fails to access its database.

* * *

Release date November 18, 2022
------------------------------

### iOS SDK 15.6.5

Optimized networking behavior, resulting in reduced network traffic by roughly 40%.

* * *

Release date October 18, 2022
-----------------------------

### Bluedot Flutter wrapper 1.0.0

*   Links to Android PointSDK 15.4.2, iOS PointSDK 15.6.4

* * *

Release date September 8, 2022
------------------------------

### Bluedot React Native wrapper 2.2.0

*   Add support for React Native 0.69.x
*   Contains Android SDK 15.4.2
*   Contains iOS SDK 15.6.4

* * *

Release date July 13, 2022
--------------------------

### Android SDK 15.4.2

Fixed an issue where the Travel Path Condition that determines the order in which geofences are crossed was not respected in some cases.

* * *

Release date July 7, 2022
-------------------------

### iOS SDK 15.6.4

Fixed an issue where the Travel Path Condition that determines the order in which geofences are crossed was not respected in some cases.

* * *

Release date June 22, 2022
--------------------------

### iOS SDK 15.6.3

#### Bugfixes

*   Fixed an intermittent crash that might occur when the application is terminated.
*   Fixed an issue that required the customData field of Zones with no custom data to be guarded against nil in Swift.

#### Enhancements

*   Improved stability and performance when the SDK is running in Enhanced SDK Restart Mode.
*   Removed warnings when integrating the SDK.

* * *

Release date March 25, 2022
---------------------------

### ReactNative Plugin 2.1.2

Added support for ReactNative 0.67.x.

* * *

Release date March 21, 2022
---------------------------

### iOS SDK 15.6.2

This release addresses an issue causing the SPM SDK artifact to fail to resolve on Xcode 13.3.

* * *

Release date March 17, 2022
---------------------------

### Xamarin Android Wrapper 15.4.1

Includes Android SDK 15.4.1

* * *

Release date March 16, 2022
---------------------------

### ReactNative Plugin 2.1.1

Includes Android SDK 15.4.1

* * *

Release date March 11, 2022
---------------------------

### Cordova Plugin 4.0.1

Includes Android SDK 15.4.1

* * *

Release date March 03, 2022
---------------------------

### Android SDK 15.4.1

**Bug fixes**

*   Fixes custom Tempo time out and interval values not being respected.
*   Prevents R8 obfuscation of configuration classes.
*   Resolves an issue preventing the retrieval of configuration data from persistence on restart.

**Additional note**

This release resolves issues with maintaining initialization on restart. To ensure proper operation of the SDK it is important to follow the documented [Geo-triggering](./Point%20SDK/Android/Geo-triggering.md) and [Tempo](./Point%20SDK/Android/Tempo.md) service starting procedures. In particular, be sure to start the services subsequent to initializing the SDK.

* * *

Release date February 17, 2022
------------------------------

### Hello Screen New Features

We’ve been adding new features to Hello Screens to make it more flexible and adjustable to each restaurant’s operations processes and provide a better experience to your staff at the restaurant/store. 

The following features are available out-of-the-box for your team members:

**Filter orders by Order ID or Customer name**

There’s a search bar at the top of Hello Screens to help the staff find orders based on the order ID or the customer’s name.

**Update order status modal**

Team members can now manually update the status of an order. If there is a need to change an order’s state, the staff can use the “Update Order Status” option to move an order between states.

There’s also a set of optional features that you can now ask your account representative to enable them or shoot us an email at [help@bluedot.io](mailto:help@bluedot.io).

**Customizable Order States**

Now you can add custom states in Hello Screens to better fit the operations of your restaurant/store. This feature allows you to customize the order flow. 

**Orders Waiting Time Alerts**

Once a customer has arrived at the store, Hello Screens will keep track of the time from the moment of arrival to when the team member marks the order as Completed. _Hello Screens_ will provide visual feedback to the team members to identify overdue orders.

**Positive Feedback for Orders Completed On Time**

When a team member completes an order within a short time, Hello Screens will display a modal recognizing a positive order completion time. You can configure the time bracket to show the positive feedback.

* * *

Release date January 19, 2022
-----------------------------

### Bluedot Cordova Plugin v4.0.0

This release consists of iOS SDK v15.6.0 and Android SDK v15.4.0

* * *

Release date January 18, 2022
-----------------------------

### iOS SDK 15.6.1

This release is compatible with simulators running on M1 Silicon architectures.

* * *

Release date January 12, 2022
-----------------------------

### Bluedot Xamarin Android Wrapper 15.4.0

This release contains Android SDK 15.4.0

* * *

Release date December 23, 2021
------------------------------

### Android SDK 15.4.0

#### Android 12 Compatibility

Android SDK 15.4.0 brings full compatibility with Android 12 / targetSdk 31.  When targeting Android 12, be aware that the Bluedot SDK requires precise location permission to be granted before starting the Geo-triggering or Tempo services.

#### Bug Fixes

*   Fixed NullPointerException caused by missing appStateEntity during exit calculations when running Geo-triggering as a background service.
*   Fixed SQLiteCantOpenDatabaseException occurring on device restart.
*   Fixed NullPointerException when accessing null LuFilter.
*   Fixed HashMap ConcurrentModificationException.
*   Fixed ArrayList ConcurrentModificationException.

#### Lifecycle Data

##### **What does it mean?**

It means that with this version, we’re going to have the data to start providing more useful and insightful  information about the end-users journeys. The additional data will also help us to keep improving our SDK. 

##### **What data are we collecting?**

We’re collecting data exclusively related to the lifecycle of the SDK, such as:

*   When the SDK is initiated.
*   When the SDK is reset.
*   When the Geo-triggering services start and stop.
*   When SDK services are running as a foreground service.
*   Android version information.

##### **What comes next?**

The Android SDK 15.4.0 release is a “stepping stone” that helps us continue releasing new features and products based on this data. Look forward to being able to visualise your user base with new data features coming out soon!

#### Notes

*   Android SDK 15.4.0 requires the app to have a compileSdk of 31 or higher.
*   This release removes Direct Boot support from the SDK and directBootAware=true from a receiver in the library manifest. This change does not affect the ability of the SDK to restart the app once the device has been unlocked post device restart.

* * *

Release date December 22, 2021
------------------------------

### Bluedot Xamarin iOS Wrapper 15.6.0

This release contains iOS SDK 15.6.0

* * *

Release date December 21, 2021
------------------------------

### iOS SDK 15.6.0

This SDK version primarily focuses on collecting more information about the SDK’s lifecycle and how users interact with it.

#### What does it mean?

It means that with this version, we’re going to have the data to start providing more useful and insightful information about the end-users journeys. The additional data will also help us to keep improving our SDK.

#### What data are we collecting?

We’re collecting data exclusively to the lifecycle of the SDK, such as:

*   When the SDK is initiated.
*   When the SDK is reset.
*   When the SDK is running with Blue Bar (iOS only).
*   When the Geo-triggering services start and stop.
*   The minimum Apple OS required for the app to run.
*   More detailed information about the location permissions granted to the SDK.

#### What comes next?

The iOS SDK 15.6.0 release is a “stepping stone” that helps us continue releasing new features and products based on this data. Look forward to being able to visualise your user base with new data features coming out soon!

* * *

Release date November 24, 2021
------------------------------

### Android SDK 15.3.6

**Bug fixes**

*   Fix missing AppStateEntity crash.
*   Fix crash when stopping Geo-triggering running without a foreground service.
*   Fix ZoneInfo.getZoneId() NullPointerException.
*   ZoneInfo objects in onZoneInfoUpdate now correctly contain any set zone custom data.

* * *

Release date November 17, 2021
------------------------------

### Canvas

**Events Simulator**

*   Event Simulator is a tool designed to help test your Bluedot setup. It simulates events which would usually be sent by the mobile SDK (Geo–trigger and Tempo events) as well as web events sent via the Events API. Have a look at our [Event Simulator Guide.](./Canvas/Event%20simulator%20guide.md)

* * *

Release date November 11, 2021
------------------------------

### Integrations

*   New integration with Tealium. Now you can easily send Bluedot location events to Tealium. Learn more here: [Tealium Integration Guide.](./integrations/Tealium.md)

### Canvas

*   We’ve added a new interface to make the management and configuration of the webhooks easier. For more information check our [Webhooks documentation.](./Webhooks/Overview.md)  
    

* * *

Release date September 09, 2021
-------------------------------

### Canvas

#### **Enhancements**

Generate URL to link Hello screens

*   A new way to link Hello screens has been added. Users can now generate a URL from Canvas to link multiple devices to Hello screens in one destination.

* * *

Release date August 30, 2021
----------------------------

### Bluedot Xamarin Android Wrapper 15.3.5

#### Enhancements

Contains Android SDK 15.3.5

* * *

Release date August 27, 2021
----------------------------

### Bluedot React Native Wrapper v2.0.6

#### Enhancements

Contains Android SDK 15.3.5

* * *

Release date August 17, 2021
----------------------------

### Android SDK 15.3.5

#### Enhancements

*   **Speed Improvements:**  
    Detect with more precision at the drive-thru
    
    *   Detection rates improved in high accuracy use cases such as slow speed and electric vehicles at the drive-thru.
    *   SDK has been optimized (through phone sensors) to minimize false negatives (missed detections).
    *   Testing has shown success rates of up to 95% in these scenarios.
    *   Updating the latest version will increase the number of users detected, improve accuracy & timeliness at digital menu boards and pickup windows.
    
    **App Improvements in Background Mode:**  
    Increasing your Marketing reach
    
    *   Bluedot has increased the SDKs’ ability to access system resources in use cases where background location service is implemented.
    *   A significantly larger number of users can be detected and messaged when the app is in the background.
    
    (This also increases the amount of location data generated by the brand in the SDK for marketing type use cases.)
    
    **Processing Improvements:**   
    Greater SDK app efficiency
    
    *   Improved the SDK algorithm to process tasks out of the main thread, resulting in a more stable SDK that can handle a higher volume of zones, while also boosting trigger rates.
    *   Results include significantly more location processing, more frequently, with less concern on the impact of app performance.
    
    **Bug fixes**
    
    *   Fix crash when stopping Geo-triggering from non-main thread.
    *   Fix crash when Tempo service restarted.
    *   Fix lock verification warning.

* * *

Release date August 10, 2021
----------------------------

### Javascript SDK for Web V1.3.0

#### Enhancements

Retry callback added  
Optional retry callbacks have been added to the `wave.send` and `initialize` methods to provide feedback while continuing to try and send the requests.

UserToken added to support Register API  
`credentials.setUserToken` and `credentials.clearUserToken` have been added to support registered orders in the Hello stack

### Events API

#### New Feature – Register Endpoint

*   A new Endpoint that can be used to register orders. These orders will be displayed on Hello screens once a Wave for them is received. The API specification for it is [here](https://events-docs.bluedot.io/#operation/registerOrder).
*   Hello screens support added.

#### Enhancements

UserToken added to Wave endpoint request to support new Register endpoint  
The optional field `userToken` has been added to the wave request to support registered orders in the Hello stack.

* * *

Release date August 04, 2021
----------------------------

### Bluedot Cordova Plugin 2.0.0

#### API update

This release contains a complete overhaul of the APIs for SDK initialization, GeoTriggering session management, and Tempo session management. The plugin support Bluedot Point SDK Android V15.3.4 and iOS 15.5.1. The existing npm package has been deprecated.

The npm package to receive updates going forward is [here](https://www.npmjs.com/package/@bluedot-innovation/cordova-plugin).

* * *

Release date July 23, 2021
--------------------------

### Bluedot Xamarin Android Wrapper 15.3.4.2

**Bug fix  
**

*   Expose CustomData property on ZoneInfo.

* * *

Release date July 22, 2021
--------------------------

### Bluedot Xamarin Android Wrapper 15.3.4.1

**Bug fix  
**

*   Fix “type defined multiple times” build error.

* * *

Release date July 15, 2021
--------------------------

### Bluedot React Native wrapper  V2.0.5

**Enhancements**

*   React-native version upgraded to 0.64.2
*   Xcode 12.5 support

* * *

Release date June 15, 2021
--------------------------

### Point SDK for iOS V15.5.1

**Bug Fixes**

*   Fixed a rare crash that could occur when triggering an exit event during the processing of a new zone set.
    

* * *

Release date June 1, 2021
-------------------------

### Javascript SDK for Web V1.2.0

**Enhancements**

*   `setCarColor`, `setCarType` & `setCarModel` methods removed from the `HelloModel`
    

* * *

Release date May 26, 2021
-------------------------

### Javascript SDK for Web V1.1.0

**Enhancements**

`setDisplayedCustomDataField` added to the `HelloModel`

Custom fields can now be displayed on Hello screens using the `setDisplayedCustomDataField` in the `HelloModel`

* * *

Release date May 17, 2021
-------------------------

### Point SDK for Android v15.3.4

**Bug fixes**

*   Fix issue with maintaining local zone cache during periods of significant movement.

* * *

Release date May 10, 2021
-------------------------

### Javascript SDK for Web V1.0.0

Version 1.0 of [Bluedot Javascript SDK for Web](./Web%20SDK/Overview.md) with support for [Wave API](./Web%20SDK/Send%20your%20first%20Wave.md) and [Hello screens](./Web%20SDK/Interacting%20with%20Hello%20Screens.md).

* * *

Release date April 21, 2021
---------------------------

### Point SDK for Android V15.3.3

**Note: This version contains a known issue that has been addressed in 15.3.4. Please migrate to 15.3.4 or newer if using 15.3.3.**

**Bug fixes**

*   Fixed a concurrent modification exception crash.
*   Fixed an exception that occasionally occurred when trying to start LocationUpdatesReceiver.
*   Fixed an issue when Geo-triggering was not able to be started in background mode after being stopped from foreground mode.
*   Fixed an issue where two start Geo-triggering result callbacks were returned when it was started in background mode.
*   Fixed an issue for pre-Oreo devices where the Geo-triggering foreground notification would disappear after Tempo was stopped.

* * *

Release date March 31, 2021
---------------------------

### Canvas

#### **Enhancements**

Tools section

*   A new tools section added to Canvas.
*   All tools to be used across Canvas will be available here.

Copy Zones between projects

*   Using the Copy zones tools you should be able to copy 500 zones from one project to another.

* * *

Release date March 29, 2021
---------------------------

### Point SDK for iOS V15.5.0

**Enhancements**

*   Notification permission needs to be requested explicitly by app.
    
*   SDK will no longer request the notification permission after the SDK is initialized. The App will have to request the user to give the notification permission before starting Geo-triggering if it wants to display the message, URL action or the app restart notification to be displayed. More details [here](./Point%20SDK/iOS/Migration%20Guides/Migration%20guide%20from%20previous%20versions%20to%20Point%20SDK%20v15.5.0.md).
    

* * *

Release date March 19, 2021
---------------------------

### Point SDK for iOS V15.4.3

**Enhancements**

*   Improved SDK triggering performance in built up areas where devices move slowly. The improvement is observed in the drive-through and curbside use cases.
    

* * *

Release date March 11, 2021
---------------------------

### Point SDK for iOS V15.4.2

**Bug fixes**

*   Fixed an issue where location updates were requested after initialization when the app was brought back into the foreground without Geo-triggering or Tempo being started

* * *

Release date March 01, 2021
---------------------------

### Wave API

#### **New Feature – Wave API**

*   A new API that can be used in a web page or mobile app to receive customer arrival notifications. The API specification for it is [here](https://events-docs.bluedot.io/#operation/postWaveEvents).
*   Webhook support added.
*   Hello screens support added.

More information on Wave API and how to integrate it is [here](./APIs/Wave%20API/Integrate%20Wave%20API.md).

### Canvas

#### **Enhancements**

*   A new section to view & configure webhooks for different Bluedot Events added. More details [here](./Webhooks/Overview.md).
*   A new section to Setup & configure your Hello Screens added. More details [here](./Hello%20Screens/Overview.md).
*   `DestinationId` has been made a Zone level attribute and no longer is only tied to accounts that have Tempo enabled.
*   An information card has been added when clicking a fence in the Zone map view.

#### **Bug fixes**

*   Fixed an issue where circular fences of radius 5m and smaller could be created.

### Config API V1.2.0

#### **Changes**

*   Projects endpoint
    *   The Tempo object from the Project JSON structure has been removed.
    *   Single object limitation on the Webhooks JSON array removed.
    *   Two new Webhook types, `tempo` and `wave` added to the Webhooks JSON array.
    *   Webhook type `trigger` is renamed to `geoTrigger`
    *   Existing Tempo Webhooks have been moved to the Webhooks JSON array.
*   Zones endpoint
    *   The Tempo object from the Project JSON structure has been removed.
    *   `DestinationId` field has been made available in the main Zone JSON body for all methods.

#### **Bug fixes**

*   Fixed an issue where circular fences of radius 5m and smaller could be created.

#### **Deprecation**

*   PATCH method for all endpoints is deprecated.
*   Tempo JSON object in the Projects endpoint is deprecated in POST and PUT methods.
*   Tempo JSON object in the Zones endpoint is deprecated in POST and PUT methods.

### Webhooks

#### **Enhancements**

*   A new Webhooks to receive Wave API events has been added. More details [here](./Webhooks/Wave.md).

### Hello Screens

#### **Enhancements**

*   Wave API events with `destinationId` will be displayed in the Arrived section of Hello Screens.

* * *

Release date February 25, 2021
------------------------------

### Point SDK for Android V15.3.2

**Bug fixes**

*   Fix crash on entry event when using androidx.lifecycle 2.3.0+.

Release date February 22, 2021
------------------------------

### Point SDK for Android V15.3.1

**Bug fixes**

*   Fix Geo-triggering foreground notification not displaying on pre-Oreo devices.

* * *

Release date January 29, 2021
-----------------------------

### Point SDK for iOS V15.4.1

#### **Bug fixes**

*   Fixed an issue that caused false-positive exit events.
*   Fixed a rare crash when the MRT has expired of a Zone.

* * *

Release date January 21, 2021
-----------------------------

### Canvas

#### **Enhancements**

*   Updated Canvas UI branding and design

### Config API

#### **Enhancements**

*   Pagination and Search added to the /projects GET method. The API specification for the /projects endpoint is [here](https://config-docs.bluedot.io/#operation/getProjects).

#### **Bug fixes**

*   Fixed incorrect error response sent for /sessions endpoint requests with invalid payloads.

* * *

Release date December 21, 2020
------------------------------

### Point SDK for Android V15.3.0

#### **API Update**

This release contains a complete overhaul of the APIs for SDK initialization, GeoTriggering session management, and Tempo session management. Existing APIs for SDK authentication and session management, and associated classes, are deprecated.

Please see the [Migration Guide](./Point%20SDK/Android/Migrating%20from%20previous%20versions%20to%20v15.3.0.md) for more details.

The deprecated APIs will be removed in the next major release (16.0.0).

#### **Bug fixes**

*   Removes the usage of explicit wakelocks.
*   Package names preserved when obfuscating to prevent name collisions.
*   Remove coarse location permission requirement from deprecated API methods.
*   Removed the use of `JobIntentService`.

### Point SDK for iOS V15.4.0

#### **API Update**

This release contains a complete overhaul of the APIs for SDK initialization, GeoTriggering session management, and Tempo session management. Existing APIs for SDK authentication and session management, and associated classes, are deprecated.

Please see the [Migration Guide](./Point%20SDK/iOS/Migration%20Guides/Migration%20guide%20from%20previous%20versions%20to%20Point%20SDK%20v15.4.0.md) for more details.

The deprecated APIs will be removed in the next major release (16.0.0).

#### **Bug fixes**

*   Fix SQL error when persisting notifications on older devices.
*   Fix “Collection was mutated while being enumerated” crash.

* * *

Release date October 19, 2020
-----------------------------

### Point SDK for iOS V15.3.2

**Bug fixes**

*   Fixed a crash when registering Zone exits (aka Check-out).

* * *

Release date September 30, 2020
-------------------------------

### Config API

#### **Enhancements**

Zone search using custom data

Zones can be searched using the custom data added to it. Two new parameters (`customDataKey` & `customDataValue`) added to the GET Zones request. The [API specification](https://config-docs.bluedot.io/#operation/getZones) for the new update.

### Analytics API

#### **Enhancements**

Entry (Check-in) aggregation count for a Project based on Zones  
You can request aggregated entries count. This request returns the count of all entries (check-ins) in a Project within the given `startTime` and `endTime` values, aggregated by Zones. The [API specification](https://analytics-docs.bluedot.io/#operation/getAggregatedCustomerCheckIns) for the new endpoint.

Entry (check-in) filtered by `installRef`  
A new field is added to the POST entry (check-in) count endpoint. Entries can now be requested for the `installRef` of the event. The [API specification](https://analytics-docs.bluedot.io/#operation/optionCheckIns) for the new update.

* * *

Release date September 29, 2020
-------------------------------

### Point SDK for Android V15.2.4

#### **Enhancements**

Improved rules download request mechanism

For projects with rule download interval 12 hours or less the robustness and reliability of scheduling, rule downloads have been improved. 

#### **Bug fixes**

*   Fix more issues encountered when building and optimizing using Android Gradle Plugin 4.0.0+.

* * *

Release date September 15, 2020
-------------------------------

### Point SDK for iOS V15.3.1

**Bug fixes**

*   Fixed a rare crash when registering Zone entries & exits.

* * *

Release date September 1, 2020
------------------------------

### Point SDK for Android V15.2.3

**Bug fixes**

*   Fix issues caused by the minification process using Android Gradle Plugin 4.0.0+.

* * *

Release date August 31, 2020
----------------------------

### Point SDK for Android V15.2.2

**Bug fixes**

*   Fixed a crash when resolving a Long value reported as null.

* * *

Release date August 19, 2020
----------------------------

### Point SDK for Android V15.2.1

**Bug fixes**

*   Removal of the visible alarm clock icon during SDK operation. We have removed the use of the alarm clock from the SDK. When the new SDK is installed on devices running Android OS versions M and above the device’s native Alarm clock icon will not appear in the status bar.
*   Fixed a crash when no location was available when the OS stopped detecting a beacon.
*   A mitigation fix for the crash observed in the JobIntentService has been applied to the SDK.
*   Fixed a registerReceiver crash that occurred when the Android SDK is run without the foreground notification on Android 9+.
*   Fixed a bug which caused negative dwell time to be reported to the backend.

* * *

Release date July 20, 2020
--------------------------

### Canvas

#### **Enhancements**

List view for Zones  
We’ve added a new [Zone list view](https://bluedotinnovation.zendesk.com/hc/en-us/articles/360001723095-I-can-t-see-any-Zones-in-Canvas-) in Canvas. You can view and search all Zones in your Project, from a single view and easily switch between the original map view and new list view.

* * *

Release date June 29, 2020
--------------------------

### Point SDK for Android V15.2.0 & iOS V15.3.0

#### **Features**

New Feature – Bluedot Tempo

*   A predictive time-based arrival technology that will allow businesses to receive real-time alerts to know when a consumer is approaching.
*   Tempo updates can be delivered via a new dedicated webhook.
*   New SDK API to start and stop tempo.
    *   Android APIs
        *   [startTempoTracking](https://android-docs.bluedot.io/classau_1_1com_1_1bluedot_1_1point_1_1net_1_1engine_1_1_service_manager.html#aa43880e770fe256f98078778507609fc) 
        *   [stopTempoTracking](https://android-docs.bluedot.io/classau_1_1com_1_1bluedot_1_1point_1_1net_1_1engine_1_1_service_manager.html#ac07210e52f0ee717f77175e63070bf5d)
    *   iOS APIs
        *   [startTempoTracking](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)startTempoTracking:)
        *   [stopTempoTracking](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)stopTempoTracking)

More information on Tempo can be found in our documentation [here](./Tempo/Overview.md).

#### **Note**

There are no other feature enhancements or bug fixes added in this version.

### Canvas & Config API

#### **Features**

New Feature – Bluedot Tempo

*   Canvas support for Tempo is added.
*   A new section to manage Tempo for a Project is added to Canvas.
*   Config API support for managing destinations and the tempo webhook is added.
*   Webhooks support for Tempo updates.

More information on Canvas support for Tempo can be found in our documentation [here](./Tempo/Create%20your%20destinations.md) and for the Tempo webhooks can be found [here](./Webhooks/Tempo.md).

* * *

Release date April 21, 2020
---------------------------

### Canvas & Config API

#### **Enhancements**

Increased the Zone Custom Data limit  
We increased the limit so you can now attach up to 20 fields to each Zone. You can attach any type of metadata to a location that’s relevant to your location-based campaign. Tagging details about the location, the business, target customers and the campaign can add valuable context. Learn more about Zone custom data [here](./Canvas/What%20is%20Zone%20custom%20data.md).

### Point SDK for Android V15.1.0

#### **Enhancements**

`DiskFullError` error type added  
The SDK will now catch and report the `SQLiteFullException` to the application using the `DiskFullError` error type.

#### **Bug fixes**

*   Fixed a crash when the SDK tried to evaluate a Zone action that had two date range conditions and one-time active conditions.
*   Fixed a crash when the SDK triggered a URL action in which the URL was provided in all caps.

#### Known issues in 15.x releases

*   A crash can occur if no location is available when a beacon is lost.

### Point SDK for iOS V15.2.1

#### **Enhancements**

Improvements to Enhanced restart mode  
Improved the performance and reliability of SDK relaunch after the app is terminated. More details on enhanced restart can be found [here](./Point%20SDK/iOS/Features/Enhanced%20SDK%20restart.md).

#### **Bug fixes**

*   Fixed a crash caused in the Background Task Manager

* * *

Release date April 07, 2020
---------------------------

### Point SDK for Android V15.0.0

#### **Enhancements**

Increased the Custom Event Metadata limit  
We increased the limit so you can now attach up to 20 fields to each event. Use Custom Event Metadata to add additional information to Check-in and Check-out Notifications; this could be a Username, 3rd-party platform ID, or Order Number. Learn more about Custom Event Metadata [here](./Custom%20Event%20Metadata.md).

Android SDK migrated to AndroidX  
Support libraries used by the SDK have been upgraded to AndroidX. This means all apps that have the SDK integrated must upgrade their Android support libraries to AndroidX.

Remove the `StartJobIntentServiceReceiver` entry in the SDK’s Android Manifest file  
The SDK no longer uses the following Android manifest entry: `<receiver android:name="au.com.bluedot.point.net.engine.StartJobIntentServiceReceiver"/>`

Overhaul to the SDK’s events reporting  
We have redesigned the Event reporting architecture, implementing a more efficient retry strategy in situations of network failure. We have also reduced the data packet size sent from the SDK to the Bluedot backend on each notification event. This has no impact on the SDK check-in and check-out callbacks and does not require any integration changes other than taking this SDK update.

New Point SDK dependency path  
The SDK dependency path has changed from release 15.0.0 onwards. The PointSDK package paths have not changed, only the dependency. The app integrating our SDK does not need to change any imports in code. For all new Point SDK, versions use the following path:  `'com.gitlab.bluedotio.android:point_sdk_android:Tag'`  
Example of V15.0.0, use:

dependencies {
    implementation 'com.gitlab.bluedotio.android:point\_sdk\_android::15.0.0'
 }

#### **API Deprecation**

Please note, the `ServiceManager.registerService()` method has now been deprecated.

If you are still using this service, we suggest implementing the `sendAuthenticationRequest` method.

#### **Third-party dependencies & licence information**

The following third-party dependencies are added to the Bluedot Point SDK and their respective usage license are listed:

*   json-simple – [https://code.google.com/archive/p/json-simple/](https://code.google.com/archive/p/json-simple/) – Apache License 2
*   Moshi – [https://github.com/square/moshi](https://github.com/square/moshi) – Apache License 2
*   Retrofit – [https://square.github.io/retrofit/](https://square.github.io/retrofit/) – Apache License 2
*   ThreeTenABP – [https://github.com/JakeWharton/ThreeTenABP](https://github.com/JakeWharton/ThreeTenABP) – Apache License 2

#### Known issues in 15.x releases

*   A crash can occur if no location is available when a beacon is lost.

* * *

Release date April 02, 2020
---------------------------

### Point SDK for iOS V15.2.0

#### **Enhancements**

Increased the Custom Event Metadata limit  
We increased the limit so you can now attach up to 20 fields to each event. Use Custom Event Metadata to add additional information to Check-in and Check-out Notifications; this could be a Username, 3rd-party platform ID, or Order Number. Learn more about Custom Event Metadata [here](./Custom%20Event%20Metadata.md).

Overhaul to the SDK’s events reporting  
We have redesigned the Event reporting architecture, implementing a more efficient retry strategy in situations of network failure. We have also reduced the data packet size sent from the SDK to the Bluedot backend on each notification event. This has no impact on the SDK check-in and check-out callbacks and does not require any integration changes other than taking this SDK update.

#### **Note about integrating the SDK**

The CocoaPod now requires git-lfs to be installed. To do so, please follow instructions [https://git-lfs.github.com](https://git-lfs.github.com)

* * *

Release date February 27, 2020
------------------------------

### Point SDK for Android V14.0.3

#### **Enhancements**

Improved location handling  
Improved the handling of erroneous location updates reported by the device. This improvement tackles incorrect location updates provided by the operating system and improves the way the location is processed within the SDK.

#### **Bug fixes**

*   Fixed a bug where the app startup process was slowed down due to Bluedot rules being processed in the main thread.
*   Fixed an error where SDK falsely reported a non-fatal error that Wi-Fi scanning is disabled on the device.

* * *

Release date December 05, 2019
------------------------------

### Point SDK for Android V14.0.2

#### **Bug Fix**

To address distant location updates that could cause unintended zone triggers. This update mainly affects configurations where there are high zone distributions within a small area.

* * *

Release date October 30, 2019
-----------------------------

### Point SDK for iOS V15.1.2

#### **Enhancements**

Based on customer feedback we have re-added support for the following devices iPhone 5, 5c, 5S, iPod touch-5, iPad-4, iPad Air.

Please refer to our supported platforms list [here](./Supported%20Platforms.md) to know which OS versions our SDK supports.

* * *

Release date October 30, 2019
-----------------------------

### Point SDK for Android V14.0.1

#### **Bug Fixes**

Improved retriggering of check-out enabled Zones for long-dwelling users.

A bug that caused the Android SDK not to trigger check-in events for a certain scenario of check-out enabled Zones was fixed.  
Previously, if a user entered the geofence of a check-out enabled Zone before the minimum re-trigger time (MRT) had elapsed and a new rule update was received from our backend during this period then the Zone would not have retriggered a check-in.

* * *

Release date October 03, 2019
-----------------------------

### Point SDK for iOS V15.1.1

#### **Enhancements**

Simulator slice added  
The SDK is now available with the architecture slice `x86_64` included in it.

* * *

Release date September 30, 2019
-------------------------------

### Point SDK for Android V14.0.0

#### **Enhancements**

Android 10 location permission changes incorporated  
We have added the new background location permission `ACCESS_BACKGROUND_LOCATION` to the SDK’s Android Manifest file.  
When requesting location permissions we recommend, the consuming app should explicitly request this permission which would prompt the user to provide “Allow all the time” access, otherwise, the user will only be prompted “Allow only while using the app” access.

Additional updates to the SDK’s manifest

*   `WRITE_EXTERNAL_STORAGE` permission has been removed.
*   `READ_PHONE_STATE` permission has been removed.
*   `ACCESS_COARSE_LOCATION` permission has been removed.

Please note, as of this release we will no longer be providing the SDK as a standalone artifact to be downloaded from the website. Please consult the [project setup](./Point%20SDK/Android/Quick%20Start.md) documentation for how to integrate the SDK into your application.

* * *

Release date September 20, 2019
-------------------------------

### Point SDK for iOS V15.1.0

#### **Enhancements**

iOS 13 support  
This SDK version is compatible with iOS 13. It is built using Apple’s latest Xcode 11 IDE and supports Swift version 5. We recommend integrating with this version of the SDK if you wish to develop your app with Xcode 11.

Support removed for `armv7` and`armv7s` architectures  
We have removed `armv7` and`armv7s` architectures from the SDK and hence the SDK will no longer support iPhone 5, 5c, 5S, iPod touch-5, iPad-4, iPad Air devices

There are no new performance changes or bugs fixes in this SDK version.

**Known issues**

iOS SDK V15.1.0 is experiencing issues with the Xcode simulator.  
Architecture slice `x86_64` is not available in the latest version and is the causing this issue. A patch version of the SDK to resolve this issue will be released within a few days.  

* * *

Release date August 22, 2019
----------------------------

### Point SDK for iOS V15.0.0

**Enhancements**

Updates to Bluetooth permission handling: 

The previous versions of the SDK used Core Bluetooth to determine whenever Bluetooth is enabled on the phone or not. From now on the SDK will notify the application when it is about to range for a beacon and the application should handle this notification respectively and inform the user about turning Bluetooth on. On devices running iOS 13, the end-user will no longer be prompted to provide Bluetooth permission if your zone configurations do not have beacons in it.

**  
Bug Fixes**

*   Fixed crash caused by the iOS operating system’s GCD Timer.

**Notes about iOS 13:**

This SDK version will be compatible with iOS 13 and Bluedot recommends customers this to prepare their app for Apple’s public release in mid-late September. This version also supports Swift 4.2 and Xcode 10.2.

Bluedot has developed this SDK in line with Apple’s ongoing beta releases of iOS 13.

Bluedot expects Apple to release a final iOS 13 beta in early September, before the official public release. As such, you can expect another SDK update shortly after the public release which will support Xcode 11, Swift 5 and any additional changes Apple may make.

* * *

Release date August 02, 2019
----------------------------

### Point SDK for Android V1.13.3

**Enhancements**

Check-in/check-out reporting improvements:  
We have improved how the cached check-in/check-out are reported to our backend. Check-in/check-out events are stored on the device in case of a network error when reporting them to our backend. From now on the SDK will retry the latest cached event first to the backend.

**Bug Fixes**

*   Resolved beacon triggering after the screen is locked on Samsung devices running Android version 8.1 and above.
*   We fixed a number of crashes.

**Important notes:**

The native alarm clock icon will appear on devices running Android OS versions M and above when SDK v1.13.3 is installed.

* * *

Release date June 14, 2019
--------------------------

### Point SDK for iOS V1.14.0 + API Deprecation

**Enhancements**

*   Updates to SDK performance to support the iOS _“When in use”_ location permission
*   Increased the reliability of check-ins and check-outs when the SDK is provided with the _“When in use”_ location permission

Added a new SDK authentication API:

The authenticateWithApiKeyAPI used to log into the Bluedot SDK has been updated. The API now requires an authorisation level parameter along with it. The API will now be referred to as:

`(void)authenticateWithApiKey:(NSString*)apiKeyrequestAuthorization:(BDAuthorizationLevel)authorizationLevel`

Note: It is mandatory to request authorisation level during SDK authentication. Requesting with:

*   `authorizedAlways` option will show iOS location permission prompt with three options, _“Always”_, _“When in use”_ and _“Never”_.
*   Requesting with `authorizedWhenInUse` option will only show iOS location permission prompt with two options, _“When in use”_ and _“Never”_.

**Defect fixes**

*   Fixed a bug which leads to reduced reliability of trigger in dense-urban environments

**API Deprecation** 

Please note, the following authentication API has now been deprecated:

`(void)authenticateWithApiKey: (NSString *)apiKey`

This is our first offical notification of this deprecation and more will follow before the API is removed. However, if you have immediate questions please reach out to [help@bluedot.io](mailto:help@bluedot.io).

Note: Authentication with old API will show iOS location permission prompt with three options, _“Always”_, _“When in use”_ and _“Never”_.

* * *

Release date May 09, 2019
-------------------------

### Point SDK for iOS V1.13.3

**Enhancements**

This SDK release includes support for:

*   Swift 4.2
*   Xcode 10.2

No additional features or fixes have been introduced. If you are not currently using Swift 4.2 or Xcode 10.2, we recommend updating (or remaining) with SDK v1.13.2.

* * *

Release date April 18, 2019
---------------------------

### Point SDK for iOS V1.13.2

**Enhancements**

MRT Persistence:  
Added in Minimum Retrigger Time (MRT) persistence when the user swipes app close to prevent unexpected re-triggers.

Updates to Enhanced app restart mode:  
Increased reliability of check-in and check-out in Bludeot’s [Enhanced app restart](./Point%20SDK/iOS/Features/Enhanced%20SDK%20restart.md) (i.e when the app is swipe closed or the device is restarted).  
**Note:** In Bludeot’s Enhanced app restart, the MRT should be set to more than 2 hours (to avoid OS restrictions overlap).

**Bug fixes**

*   Updates the underlying logic to reduce the number of false triggers on iOS 12.2.
*   Stability improvements by fixing threading issues.

Please note this version of the SDK supports Swift 4.0.

* * *

Release date April 16, 2019
---------------------------

### Webhooks V1.10

**Enhancements**

Added os and osVersion fields to the response of [check-in webhooks](./Webhooks/Overview.md).

* * *

Release date April 03, 2019
---------------------------

### Point SDK for Android V1.13.2

**Enhancements**

Network communication improvements:  
Improvement in network communication from the SDK to Bluedot backend (i.e trigger events, rule downloads).

Location Service improvements:  
BluedotLocationService, a component of the SDK location logic, has been updated to improve overall trigger events.

**Defect fixes**

*   Resolved a delay in event triggers being received on the backend (this is only relevant when the SDK is configured to allow the Android Location Foreground Notification).
*   Fixed the issue preventing beacons re–triggering after an SDK rule download.
*   Context changed to Application Context for registering & unregistering receivers to fix crashes in receivers.

**Important notes:**

When SDK v1.13.2 is installed devices running Android OS versions M and above the device’s native Alarm clock icon will appear in the status bar. We have reintroduced the use of AlarmManager again which was previously available in the v1.12.2  to improve trigger accuracy. This is a requirement from Android and related to the SDK use of the OS services AlarmManager and ALARM\_SERVICE.

* * *

Release date January 30, 2019
-----------------------------

### Point SDK for iOS V1.13.1

**Enhancements**

Persistent InstallRef:  
InstallRef is now persisted across the life of the SDK’s install on a specific device. Previously, the InstallRef would change if the SDK (i.e your app) was uninstalled and then reinstalled. If the Point SDK is installed twice on the same device, through two different apps, each installation would have its own unique InstallRef.

**Defect fixes**

Data Protection capability enabled:  
If your app has [iOS](https://developer.apple.com/documentation/uikit/core_app/protecting_the_user_s_privacy/encrypting_your_app_s_files) [Data Protection capability](https://developer.apple.com/documentation/uikit/core_app/protecting_the_user_s_privacy/encrypting_your_app_s_files) enabled and you’re using Bludeot’s [Enhanced app restart](./Point%20SDK/iOS/Features/Enhanced%20SDK%20restart.md), the SDK will no longer crash after the phone has been restarted.

* * *

Release date January 23, 2019
-----------------------------

### Point SDK for Android V1.13.1

**Enhancements**

Enhancement in Beacon detection & triggering logic:  
Improved the beacon detecting logic of the Point SDK. This will increase the trigger rate of beacons when the device is locked or when the app is in the background.

**Defect fixes**

Multiple Logout issue fixed:  
Calling the Logout method mutiple times would result in multiple logout requests being received, which would eventually cause the SDK to crash. This is now fixed.

* * *

Release date December 06, 2018
------------------------------

### Point SDK for Android V1.13.0

*   **Enhancements**
    *   On devices running Android O and above the persistent foreground notification in the notification tray, has been made optional for the SDK to function in the background or when it is swiped out. (The foreground notification is still required for use cases where triggering while moving at high speed is key.)
    *   Point SDK lifecycle reformed to run in the background after swipe/device reboot.
    *   Now compatible with API level 28 (Android P)
*   **Defect fixes**
    *   General minor defect fixes.

* * *

Release date December 3, 2018
-----------------------------

### Point SDK for iOS V1.13.0

*   **Enhancements**
    *   [Enhanced restart mode](./Point%20SDK/iOS/Features/Enhanced%20SDK%20restart.md)
*   **Defect fixes**
    *   General minor defect fixes.

