---
pagination_next: null
---

# Migration Guide to Point SDK V16 for Android

If you have implemented the previous versions of the Android Point SDKs, this guide will help you understand the steps required to migrate to version 16.

### Breaking Changes

#### Update your `CompileSdk` version to 34 and Gradle to version 8.

We regularly update the minimum supported version of our SDKs to focus on providing the best developer experience.
Existing 15.X versions of the Android Point SDK will continue to be compatible with devices running on `CompileSDK` version [INSERT VERSION] and utilize Gradle version [INSERT VERSION]


#### Update your "Entry" and "Exit" callbacks in the Geo-triggering service.

The "*Entry"* and "*Exit"* callbacks have a new payload structure with additional information. The new payload includes information such as:

- Location and Notification permissions users have granted.
- A list of geofences the device has crossed to complete a travel path condition.
- User's device battery levels.

#### **New "Entry" callback**

The [OLD CALLBACK METHOD] has been renamed to [NEW CALLBACK METHOD]. The callback functionality remains the same, apart from the new payload structure, which has new data available.

[ CODE SNIPPET - EXAMPLE OF NEW ENTRY CALLBACK ]

Here's an example of how the new Entry callback payload looks like:

[ CODE SNIPPET - EXAMPLE OF ENTRY CALLBACK PAYLOAD ]

#### **New "Exit" callback**

The [OLD CALLBACK METHOD] has been renamed to [NEW CALLBACK METHOD]

[ CODE SNIPPET - EXAMPLE OF NEW EXIT PAYLOAD ]

Here's an example of how the new Exit callback payload looks like:

[ CODE SNIPPET - EXAMPLE OF NEW EXIT PAYLOAD]

#### New `didUpdateZoneInfo` callback

The previous callback [INSERT OLD CALLBACK] has been replaced by the new [INSERT NEW CALLBACK]. The updated callback no longer returns the `zoneInfos` data directly. Instead, you should access the `zoneInfos` data directly from the `BDLocationManager.instance().zoneInfos` property. [UPDATE NEW WAY OF ACCESSING THE ZONE INFO]

#### **Update the App's Location Permissions in the Manifest**

To give you more control over your app's permissions, we have updated our SDK so that location permissions are no longer automatically included. Now, you will need to explicitly add location permissions to your app’s manifest. This change allows for greater flexibility and customization based on your app’s specific needs.

Below is an example of how you can add the necessary location permissions to your app's manifest:

[CODE SNIPPET - EXAMPLE]


#### Removal of deprecated classes and functions

The following classes and functions have been removed from the SDK as these were deprecated in version 15.3.0, released in March 2021.

- Url Action and Message Action have been removed from our SDK.
    - `setCustomMessageAction`
- Beacons removed.
- List of zones removed from `onZoneInfoUpdate`
- Deprecations removed:
    - `sendAuthenticationRequest`
    - `addBlueDotPointServiceStatusListener`
    - `removeBlueDotPointServiceStatusListener`
    - `subscribeForApplicationNotification`
    - `unsubscribeForApplicationNotification`
    - `startTempoTracking` (variant)
    - `stopTempoTracking`	(variant)
    - `stopPointService`
    - `isBlueDotPointServiceRunning`
    - `isBlueDotPointServiceConfiguredToRestart`
    - `registerService`
    - `notifyPushUpdate` (message action)
    - `setForegroundServiceNotification`

### New APIs

#### **New `tempoTrackingDidUpdate` callback available in the Tempo service.**

The Tempo Service has a new callback that provides the user's ETA updates at runtime. Previously, the ETA updates were only accessible by listening to our Tempo webhooks. Now, you can receive the user's ETA updates in your app, not only from the Tempo webhooks.

[CODE SNIPPET - TEMPO CALLBACK]

Every time the Tempo Service generates a new ETA update, the `tempoTrackingDidUpdate` callback payload looks like this:

[TEMPO CALLBACK PAYLOAD EXAMPLE]

#### **Destination (Store) Details Now Accessible in `BDZoneInfo`**

Each 'Destination' (AKA Store) can have multiple 'Zones' associated with it in our platform. We have enhanced the `BDZoneInfo` object to reflect this relationship better. Now, when a Zone is linked to a Destination, you can access its information directly within each `BDZoneInfo` object.

[CODE SNIPPET - How to access BDZoneInfo]

Here's an example of what the Destination payload looks like:

[CODE SNIPPET - DESTINATION PAYLOAD]
