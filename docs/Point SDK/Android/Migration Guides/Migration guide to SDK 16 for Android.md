---
pagination_next: null
---

# Migration Guide to Point SDK V16 for Android

If you have implemented the previous versions of the Android Point SDKs, this guide will help you understand the steps required to migrate to version 16.

### Breaking Changes

#### Update your `CompileSdk` version to 34, Gradle to version 8.2 and Java to version 17.

We regularly update the minimum supported version of our SDKs to focus on providing the best developer experience.
Existing 15.X versions of the Android Point SDK will continue to be compatible with devices running on `CompileSDK` version 33, utilize Gradle version
7.4 and Java version as 1.8


#### Update your "Entry" and "Exit" callbacks in the Geo-triggering service.

The "*Entry"* and "*Exit"* callbacks have a new payload structure with additional information. The new payload includes information such as:

- Location and Notification permissions users have granted.
- A list of geofences the device has crossed to complete a travel path condition.
- User's device battery levels.

#### **New "Entry" callback**

The [ZoneEntryEvent] class has been renamed to [GeoTriggerEvent](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine.event/-geo-trigger-event/index.html). The callback functionality remains the same, apart from the new payload structure, which has new data available.

``` kotlin
    override fun onZoneEntryEvent(event: GeoTriggerEvent, context: Context) {
        Log.i(TAG_TEST_APP, "onZoneEntryEvent for ${event.toJson()}")
        ....
    }
```

Here's an example of how the new Entry callback payload looks like:


```json
{
    "notificationType": "entry",
    "appInfo": {
        "appBuildVersion": "16.0.0",
        "customerApplicationId": "BDTestApp",
        "minSdkVersion": "21",
        "compileSdkVersion": "34",
        "targetSdkVersion": "31",
        "sdkVersion": "16.0.0",
        "customEventMetaData": {
            "CustomerName": "Test Name",
            "OrderId": "Test OrderId",
        }
      },
    "triggerEvents": [
        {
            "eventTime": "2024-04-16T04:24:20.843Z",
            "localEventTime": "2024-04-16T14:29:42.955",
            "fenceName": "Home Fence",
            "applicationState": {
                "viewState": "foreground",
                "foregroundServiceEnabled": "false",
                "batteryLevel": 86,
                "lastRuleUpdate": "2024-04-16T02:24:20.843Z",
                "notificationPermission": "authorized",
                "locationPermission": "always"
            },
            "fenceId": "444444-2423-4092-9db6-44444444",
            "eventType": "fenceEntered",
            "crossedFences": [ 
                {   
                    "fenceId": "03d7bd1d-5555-5555-846c-6755555555", 
                    "fenceName": "Fence 0", 
                    "crossTime": "2024-04-16T04:24:20.843Z", 
                    "location": {
                        "longitude" : 145.3023396,
                        "latitude" : -38.018478, 
                        "horizontalAccuracy": 11.591,
                        "time": "2024-04-16T04:24:20.843Z",
                        "altitude": 32.67277495576316,
                        "verticalAccuracy": 8.2064, 
                        "bearing": -1.0,
                        "speed": -1.0
                    }
                }],
            "locations": [
                {
                    "verticalAccuracy": 3,
                    "speed": 0,
                    "longitude": 144.84852131469626,
                    "horizontalAccuracy": 10,
                    "bearing": -1,
                    "time": "2024-04-16T04:24:20.843Z",
                    "latitude": -37.821534527500923,
                    "altitude": 25.084405422210693
                }
            ]
        }
    ],
    "installRef": "e80a1289-fcb5-4970-9070-51d2b183f58e",
    "projectId": "YOUR-PROJECT-ID",
    "triggerChainId" : "368b70e5-017a-45dc-8a95-68ada0e6c5be",
    "zoneInfo": {
        "id": "368b70e5-017a-45dc-8a95-68ada0e6c5be",
        "name": "Test Zone",
        "customData": {
            "ZoneCustomData1": "test value for the ZoneCustomData"
        }
    },
    "deviceInfo": {
        "deviceType": "Google Pixel 3 XL",
        "os": "Android",
        "osVersion": "11"
    }    
}
```

#### **New "Exit" callback**

The [ZoneExitEvent] class has been renamed to [GeoTriggerEvent](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine.event/-geo-trigger-event/index.html)

```kotlin
 override fun onZoneExitEvent(event: GeoTriggerEvent, context: Context) {
    Log.i(TAG_TEST_APP, "onZoneExitEvent for ${event.toJson()}")
    ...
 }
```

Here's an example of how the new Exit callback payload looks like:

```json
{
    "notificationType": "exit",
    "appInfo": {
        "appBuildVersion": "2.0.0.203",
        "customerApplicationId": "io.bluedot.hostapp",
        "minSdkVersion": "21",
        "compileSdkVersion": "34",
        "targetSdkVersion": "34",
        "sdkVersion": "16.0.0",
        "customEventMetaData": {
            "CustomerName": "Test Name",
            "OrderId": "Test OrderId",
        }
      },
    "triggerEvents": [
        {  
            "eventType": "fenceEntered",
            ...
        },
        {
            "eventType": "fenceExited"    
            "fenceId": "03d7bd1d-d947-4c4f-846c-6777777777b", 
            "fenceName": "Fence 0", 
            "distance": 169.16157234771617, 
            "distanceRequired": 65.04399871826172, 
            "dwellTime": 1018101, 
            "locations": [
                {
                    "verticalAccuracy": 3,
                    "speed": 0,
                    "longitude": 144.84852131469626,
                    "horizontalAccuracy": 10,
                    "bearing": -1,
                    "time": "2024-04-16T04:24:20.843Z",
                    "latitude": -37.821534527500923,
                    "altitude": 25.084405422210693
                }
            ],
            "applicationState": {
                  "locationPermission": "ALWAYS",
                  "notificationPermission": "AUTHORIZED", 
                  "batteryLevel": 79, 
                  "lastRuleUpdate": "2024-04-16T03:48:27.737Z", 
                  "viewState": "BACKGROUND", 
                  "foregroundServiceEnabled": false
                  }, 
            "eventTime": "2024-04-16T04:41:36.221Z", 
            "localEventTime": "2024-04-16T14:41:36.221"
            
        }
    ],
    "installRef": "e80a1289-fcb5-4970-9070-51d2b183f58e",
    "projectId": "YOUR-PROJECT-ID",
    "triggerChainId" : "368b70e5-017a-45dc-8a95-68ada0e6c5be",
    "zoneInfo": {
        "id": "368b70e5-017a-45dc-8a95-68ada0e6c5be",
        "name": "Test Zone",
        "customData": {
            "ZoneCustomData1": "test value for the ZoneCustomData"
        }
    },
    "deviceInfo": {
        "deviceType": "Google Pixel 3 XL",
        "os": "Android",
        "osVersion": "11"
    }    
}
```

#### New `onZoneInfoUpdate` callback

The previous callback `onZoneInfoUpdate(zones: List<ZoneInfo>, context: Context)` has been updated to `onZoneInfoUpdate(context: Context)`. The updated callback no longer returns the `zones` data directly. Instead, you should access the `zones` data from the `ServiceManager.getInstance(context).getZonesAndFences()` property. 

```kotlin
 override fun onZoneInfoUpdate(context: Context) {
    Log.i(TAG_TEST_APP, "onZoneInfoUpdate")
    Log.i(TAG_TEST_APP, "Zones and Fences ${ServiceManager.getInstance(context).zonesAndFences}")
  }
```

#### **Update the App's Location Permissions in the Manifest**

To give you more control over your app's permissions, we have updated our SDK so that location permissions for foreground or background location access are no longer automatically included. Now, you will need to explicitly add location permissions based on your use case to access location as a foreground Service or Always in background to your app’s manifest. This change allows for greater flexibility and customization based on your app’s specific needs.

Below is an example of how you can add the necessary location permissions to your app's manifest:

If your use case requires Bluedot Geo-Trigger to run as a foreground service then you need to add below 2 permissions in your App's Manifest:

```xml
  <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
  <uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />

```

If your use case requires Bluedot Geo-trigger to run without a foreground service but always inthe background then add permission in your App's Manifest:

```xml
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

#### **Add GeoTriggerEvent class in Proguard**
Please add below rule to your ProGuard rules to preserve GeoTriggerEvent parameter names after obfuscation. This is crucial as GeoTriggerEvent is the new payload returned in the callback.

```pro
-keep class au.com.bluedot.point.net.engine.event.GeoTriggerEvent {*;}
```


#### **Upgrade to `reset` method now includes clearing of Custom Event Meta Data**
We've updated the reset method to enhance its functionality. Previously, invoking reset did not clear the Custom Event Meta Data. With this release, the reset method now also clears any Custom Event Meta Data, ensuring that all settings and cached data are fully restored to their default states.


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

#### **New `onTempoTrackingUpdate` callback available in the Tempo service.**

The Tempo Service has a new [callback](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine/-tempo-tracking-receiver/index.html) that provides the user's ETA updates at runtime. Previously, the ETA updates were only accessible by listening to our Tempo webhooks. Now, you can receive the user's ETA updates in your app, not only from the Tempo webhooks.

```kotlin
  class AppTempoReceiver : TempoTrackingReceiver() {
 
    override fun onTempoTrackingUpdate(tempoTrackingUpdate: TempoTrackingUpdate, context: Context) {
      GlobalContext.logEvent(EventItem("Tempo update: ${tempoTrackingUpdate.toString()}"))
    }

    ...
  }   
```

Every time the Tempo Service generates a new ETA update, the `onTempoTrackingUpdate` callback payload looks like this:

```json
     {
        "triggerChainId": "30add2f5-ac7b-42cc-8799-cf8d4729579e",
        "eta": 60,                     //In seconds
        "etaDirection": "lessThan",    // lessThan, greaterThan
        "destination": {
                       "destinationId": "002",
                        "name": "Tempo Zone 002",
                        "location": {
                                   "latitude": -38.12203660000001,
                                    "longitude": 145.1404072
                                    }
        }
     }
```

#### **Destination (Store) Details Now Accessible in `ZoneInfo`**

Each 'Destination' (AKA Store) can have multiple 'Zones' associated with it in our platform. We have enhanced the `ZoneInfo` object to reflect this relationship better. Now, when a Zone is linked to a Destination, you can access its information directly within each [ZoneInfo](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine/-zone-info/index.html) object.

```kotlin
    ZoneInfo {
        zoneId='23d2f4be-0228-4c89-93ce-4e30719eb8ac',
        zoneName='TestSales123',
        description='null',
        destination='{
                "name":"TestSales123",
                "address":"1 ulip  Pl, Point Cook VIC 3030, Australia",
                "destinationId":"eta123",
                "location":{ 
                            "latitude":-37.887793704819,
                            "longitude":144.72884061177632
                 }
         }',
        customData='{
                     Zone_key=Maccas Point Cook,
                     placekey=zzy-226@63t-sg2-wzf,
                    }',
        fences=[
                 FenceInfo {
                        geometry=Circle{radius=70.05617546362394, center=-37.88779370424774,144.72884061177632},
                        id='aca84e47-b17a-4c64-a261-ff09cb963b69',
                        name='Fence 0',
                        description='',
                        applicationId='<PROJECT-ID>'
                       }
               ],
        enabled=true,
        checkout=false'
    }
```

Here's an example of what the Destination payload looks like:

```kotlin
destination='{ 
   "name": "TestSales123",
   "address": "1 ulip  Pl, Point Cook VIC 3030, Australia",
   "destinationId": "eta123",
   "location": { "latitude":-37.887793704819,
                 "longitude":144.72884061177632
    }
}    
```

#### ***New `getCustomEventMetaData()` method
We have introduced the `getCustomEventMetaData` API, enhancing your ability to access Custom Event Meta Data in real-time. This new API allows you to retrieve the custom event meta data dynamically.

```kotlin
ServiceManager.getInstance(context).getCustomEventMetaData();
```