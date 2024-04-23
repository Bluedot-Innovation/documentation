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
To update Carthage, specify the latest version of the iOS Point SDK in `cartfile`:

`github "Bluedot-Innovation/PointSDK-iOS" "16.0.0"`

Then execute the following command to get the latest PointSDK:

`carthage update PointSDK-iOS --use-xcframeworks`

#### Update your "Entry" and "Exit" callbacks in the Geo-triggering service.

The "*Entry"* and "*Exit"* callbacks have a new payload structure with additional information. The new payload includes information such as:

- Location and Notification permissions users have granted.
- A list of geofences the device has crossed to complete a travel path condition.
- User's device battery levels.

#### **New "Entry" callback**

The `didEnterZone(_ enterEvent: BDZoneEntryEvent)` has been renamed to `didEnterZone(_ triggerEvent: GeoTriggerEvent)`. The callback functionality remains the same, apart from the new payload structure, which has new data available.

```swift
func didEnterZone(_ triggerEvent: GeoTriggerEvent) {

	print("Entered Zone: \(String(describing: triggerEvent.zoneInfo.name))")
		
	let dateFormatter = DateFormatter()
	dateFormatter.locale = NSLocale.current
	dateFormatter.dateFormat = "yyyy-MM-dd HH:mm" //Specify your format that you want
	let formattedcheckInDate = dateFormatter.string(from: triggerEvent.entryEvent?.locations.first?.timestamp ?? Date())
	
	print("You have checked into fence '\(triggerEvent.entryEvent?.fenceName ?? "")' in zone '\(triggerEvent.zoneInfo.name)', at \(formattedcheckInDate)")
}
```

Here's an example of how the new Entry callback payload looks like:

```json
{
  "installRef": "6b25d2b6-c4d1-46b5-b5cb-20d803a9464c",
  "triggerEvents": [
    {
      "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",
      "fenceName": "Fence 2",
      "applicationState": {
        "lastRuleUpdate": "2023-02-17T08:45:28.126Z",
        "viewState": "background",
        "locationPermission": "always",
        "blueBarEnabled": false,
        "batteryLevel": 55
      },
      "localEventTime": "2023-02-17T19:45:56.161",
      "eventTime": "2023-02-17T08:45:56.161Z",
      "crossedFences": [
        {
          "fenceId": "ec71a592-6eba-4ba3-8064-ed676bccc396",
          "fenceName": "Fence 1",
          "crossTime": "2023-02-24T07:06:41.791Z",
          "location": {
            "altitude": 6.11293625831604,
            "verticalAccuracy": 4,
            "bearing": 98.66992950439453,
            "horizontalAccuracy": 10,
            "time": "2023-02-24T07:06:41.791Z",
            "speed": 10.779999732971191,
            "latitude": 1.23,
            "longitude": 4.56
          }
        },
        {
          "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",
          "fenceName": "Fence 2",
          "crossTime": "2023-02-17T08:45:56.461Z",
          "location": {
            "altitude": 6.11293625831604,
            "verticalAccuracy": 4,
            "bearing": 98.66992950439453,
            "horizontalAccuracy": 10,
            "time": "2023-02-17T08:45:56.000Z",
            "speed": 10.779999732971191,
            "latitude": 1.23,
            "longitude": 4.56
          }
        }
      ],
      "locations": [
        {
          "altitude": 6.11293625831604,
          "verticalAccuracy": 4,
          "bearing": 98.66992950439453,
          "horizontalAccuracy": 10,
          "time": "2023-02-17T08:45:56.000Z",
          "speed": 10.779999732971191,
          "latitude": 1.23,
          "longitude": 4.56
        }
      ],
      "eventType": "fenceEntered",
      "triggerEngine": "bd"
    }
  ],
  "appInfo": {
    "appBuildVersion": "1.0.0",
    "customerApplicationId": "MyTestApp",
    "sdkVersion": "16.0.0",
    "customEventMetaData": {}
  },
  "triggerChainId": "bbc874c4-446e-4675-84ac-e5ad3027143c",
  "notificationType": "entry",
  "zoneInfo": {
    "id": "6e319a0e-3bbd-485f-bc90-4f458bf5062a",
    "name": "My Zone",
    "customData": {}
  },
  "deviceInfo": {
    "deviceType": "iPhone 11,6",
    "os": "iOS",
    "osVersion": "16.3"
  },
  "projectId": "1ee328b2-41b9-4e15-b8da-ba0f2a130a47"
}
```

#### **New "Exit" callback**

The `didExitZone(_ exitEvent: BDZoneExitEvent)` has been renamed to `didExitZone(_ event: GeoTriggerEvent)`

```swift
func didExitZone(_ triggerEvent: GeoTriggerEvent) {
	print("You have left fence '\(triggerEvent.exitEvent?.fenceName ?? "")' in zone '\(triggerEvent.zoneInfo.name)', after \(triggerEvent.exitEvent!.dwellTime/1000/60) minutes")
}
```

Here's an example of how the new Exit callback payload looks like:

```json
{
  "installRef": "6b25d2b6-c4d1-46b5-b5cb-20d803a9464c",
  "triggerEvents": [
    {
      "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",
      "fenceName": "Fence 2",
      "applicationState": {
        "lastRuleUpdate": "2023-02-17T08:45:28.126Z",
        "viewState": "background",
        "locationPermission": "always",
        "blueBarEnabled": false,
        "batteryLevel": 55
      },
      "localEventTime": "2023-02-17T19:45:56.161",
      "eventTime": "2023-02-17T08:45:56.161Z",
      "crossedFences": [
        {
          "fenceId": "ec71a592-6eba-4ba3-8064-ed676bccc396",
          "fenceName": "Fence 1",
          "crossTime": "2023-02-24T07:06:41.791Z",
          "location": {
            "altitude": 6.11293625831604,
            "verticalAccuracy": 4,
            "bearing": 98.66992950439453,
            "horizontalAccuracy": 10,
            "time": "2023-02-24T07:06:41.791Z",
            "speed": 10.779999732971191,
            "latitude": 1.23,
            "longitude": 4.56
          }
        },
        {
          "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",
          "fenceName": "Fence 2",
          "crossTime": "2023-02-17T08:45:56.461Z",
          "location": {
            "altitude": 6.11293625831604,
            "verticalAccuracy": 4,
            "bearing": 98.66992950439453,
            "horizontalAccuracy": 10,
            "time": "2023-02-17T08:45:56.000Z",
            "speed": 10.779999732971191,
            "latitude": 1.23,
            "longitude": 4.56
          }
        }
      ],
      "locations": [
        {
          "altitude": 6.11293625831604,
          "verticalAccuracy": 4,
          "bearing": 98.66992950439453,
          "horizontalAccuracy": 10,
          "time": "2023-02-17T08:45:56.000Z",
          "speed": 10.779999732971191,
          "latitude": 1.23,
          "longitude": 4.56
        }
      ],
      "eventType": "fenceEntered",
      "triggerEngine": "bd"
    },
    {
      "fenceId": "4d20f4ac-b5e0-4d49-b7b0-c1e938e9bf33",
      "fenceName": "Fence 2",
      "localEventTime": "2023-02-17T19:48:56.161",
      "eventTime": "2023-02-17T08:48:56.161Z",
      "applicationState": {
        "lastRuleUpdate": "2023-02-17T08:45:28.126Z",
        "viewState": "background",
        "locationPermission": "always",
        "blueBarEnabled": false,
        "batteryLevel": 55
      },
      "distance": 166.1379852294922,
      "distanceRequired": 50,
      "locations": [
        {
          "altitude": 5.768045902252197,
          "verticalAccuracy": 24.188264846801758,
          "bearing": 97.83613027893678,
          "horizontalAccuracy": 73,
          "time": "2023-02-17T08:48:56.161Z",
          "speed": -1,
          "latitude": 1.23,
          "longitude": 4.56
        }
      ],
      "eventType": "fenceExited",
      "triggerEngine": "bd",
      "dwellTime": 14892.5621509552
    }
  ],
  "appInfo": {
    "appBuildVersion": "1.0.0",
    "customerApplicationId": "MyTestApp",
    "sdkVersion": "16.0.0",
    "customEventMetaData": {}
  },
  "triggerChainId": "bbc874c4-446e-4675-84ac-e5ad3027143c",
  "notificationType": "exit",
  "zoneInfo": {
    "id": "6e319a0e-3bbd-485f-bc90-4f458bf5062a",
    "name": "My Zone",
    "customData": {}
  },
  "deviceInfo": {
    "deviceType": "iPhone 11,6",
    "os": "iOS",
    "osVersion": "16.3"
  },
  "projectId": "1ee328b2-41b9-4e15-b8da-ba0f2a130a47"
}
```

#### New `didUpdateZoneInfo` callback

The previous callback `func onZoneInfoUpdate(_ zoneInfos: Set<BDZoneInfo>)` has been replaced by the new `func didUpdateZoneInfo()`. The updated callback no longer returns the `zoneInfos` data directly. Instead, you should access the `zoneInfos` data directly from the `BDLocationManager.instance().zoneInfos` property.

#### **Update for enabling the Background Location Access Indicator**

The Background Location Usage Indicator (AKA Blue Bar) for when location permissions are "*While In Use"* is now controlled by a single switch, `BDLocationManager.instance().backgroundLocationAccessForWhileUsing`. The previous property, `allowsBackgroundLocationUpdates`, is no longer supported. 

```swift
BDLocationManager.instance()?.backgroundLocationAccessForWhileUsing = true
```

#### **Update for accessing `BDZoneInfo`'s fences property**

If you are accessing `BDZoneInfo`'s fences property, note that fences are no longer optional starting SDK 16.
Change from `zoneInfo?.fences?` to `zoneInfo?.fences`]


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

```swift
func tempoTrackingDidUpdate(_ tempoUpdate: TempoTrackingUpdate) {
	print("tempoTrackingDidUpdate: '\(tempoUpdate.destination?.name ?? "")' - eta:\(tempoUpdate.eta) minutes")
}
```

Every time the Tempo Service generates a new ETA update, the `tempoTrackingDidUpdate` callback payload looks like this:

```json
{
    "triggerChainId": "bbc874c4-446e-4675-84ac-e5ad3027143c",
    "eta": 900,
    "etaDirection": "greaterThan",
    "destination": {
        "name": "My Store",
		    "address": "My address address",
		    "location": {
		        "latitude": 1.23,
		        "longitude": 4.56,
		        "geometryType": "Point"
		    },
		    "destinationId": "my destination id"
    }
}
```

#### **Destination (Store) Details Now Accessible in `BDZoneInfo`**

Each 'Destination' (AKA Store) can have multiple 'Zones' associated with it in our platform. We have enhanced the `BDZoneInfo` object to reflect this relationship better. Now, when a Zone is linked to a Destination, you can access its information directly within each `BDZoneInfo` object.

Here's an example of what the Destination payload looks like:

```json
{
 // zone info...
	 "destination": {
	    "name": "My Store",
	    "address": "My address address",
	    "location": {
	        "latitude": 1.23,
	        "longitude": 4.56,
	        "geometryType": "Point"
	    },
	    "destination": "my destination id"
	 }
}
```

#### **Privacy Manifest Included in SDK 16**

To comply with Apple's latest guidelines, SDK 16 now includes a Privacy Manifest (`PrivacyInfo.xcprivacy`). This manifest details the necessary API usage reasons, ensuring our Point SDK adheres to the latest privacy requirements for app submissions.
