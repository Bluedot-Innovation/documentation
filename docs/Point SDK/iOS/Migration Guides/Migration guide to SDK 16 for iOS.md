---
pagination_next: null
---

# Migration Guide to Point SDK V16 for iOS

If you have implemented the previous versions of the iOS Point SDKs, this guide will help you understand the steps required to migrate to version 16.

### Breaking Changes

#### Update your minimum supported version to iOS 12 or higher.

We regularly update the minimum supported version of our SDKs to focus on providing the best developer experience.
Versions up to and including 15.6.8 of the Point iOS SDK will continue to support devices from iOS 10. However, starting with version 15.6.9, the minimum supported iOS version will be iOS 12.

#### XCFramework support for Cocoapods and Carthage

**Cocoapods**
We have migrated our CocoaPods integration to XCFramework to better support multiple architectures, including Apple Silicon machines. No changes are needed from your side besides running `pod update BluedotPointSDK --repo-update` to update our latest SDK.

**Carthage**
**[[ADD STEPS IN THIS NOTION PAGE]](https://www.notion.so/49f9e02e6db844c0957fe45afbb67f1f?pvs=21)**

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

The previous callback `func onZoneInfoUpdate(_ zoneInfos: Set<BDZoneInfo>)` has been replaced by the new `func didUpdateZoneInfo()`. The updated callback no longer returns the `zoneInfos` data directly. Instead, you should access the `zoneInfos` data directly from the `BDLocationManager.instance().zoneInfos` property.

#### **Update for enabling the Background Location Access Indicator**

The Background Location Usage Indicator (AKA Blue Bar) for when location permissions are "*While In Use"* is now controlled by a single switch, `BDLocationManager.instance().backgroundLocationAccessForWhileUsing`. The previous property, `allowsBackgroundLocationUpdates`, is no longer supported. 

[CODE SNIPPET - EXAMPLE]

#### **Update for accessing `BDZoneInfo`'s fences property**

If you are accessing `BDZoneInfo`'s fences property, note that fences are no longer optional starting SDK 16.

[CODE SNIPPET - EXAMPLE -> Change from `zoneInfo?.fences?` to `zoneInfo?.fences`]


#### **Upgrade to `reset` method now includes clearing of Custom Event Meta Data**
We've updated the reset method to enhance its functionality. Previously, invoking reset did not clear the Custom Event Meta Data. With this release, the reset method now also clears any Custom Event Meta Data, ensuring that all settings and cached data are fully restored to their default states.

#### **Removal of deprecated classes and functions**

The following classes and functions have been removed from the SDK as these were deprecated in version 15.4.0, released in March 2021.

- Removed deprecated classes/functions:
    - `BDPLocationDelegate`
    - `BDPAuthenticationStateProvider`
    - `BDPSessionDelegate`
    - `BDPRestartAlertDelegate`
    - `BDAuthorizationLevel`
    - `BDPMKShape`
    - All Beacon related classes and functionalities
- `BDLocationManager`:
    - `authenticateWithApiKey:`
    - `authenticateWithApiKey:requestAuthorization:`
    - `logOut`
    - `pointDelegate`, `locationDelegate`, `authenticationDelegate`, `sessionDelegate`
    - `authenticationState`,
    - `isZoneDisabledByApplication:`
    - `startTempoTracking:` and `stopTempoTracking:`
    - `BDPointSDKVersionNumber` and `BDPointSDKVersionString`
    - `BDPTempoTrackingDelegate: didStartTracking` and `didStopTracking`

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

#### **Privacy Manifest Included in SDK 16**

To comply with Apple's latest guidelines, SDK 16 now includes a Privacy Manifest (`PrivacyInfo.xcprivacy`). This manifest details the necessary API usage reasons, ensuring our Point SDK adheres to the latest privacy requirements for app submissions.
