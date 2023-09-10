iOS Integration
=======================

Getting started
---------------

### Integration Example

You can find our [Bluedot – Airship iOS Example on GitHub](https://github.com/Bluedot-Innovation/PointSDK-UrbanAirshipIntegrationExample-iOS) or follow the steps below to integrate Airship and Bluedot PointSDK.

### Integrate Airship SDK into your App

Details on integrating the Airship SDK can be found on their documentation website [here](https://docs.airship.com/platform/ios/getting-started/).

### Integrate your project with Bluedot PointSDK

To integrate PointSDK, please refer to the integration steps [here](../../Point%20SDK/iOS/Quick%20Start.md)

Interaction between Airship SDK and Bluedot PointSDK
----------------------------------------------------

### Start Airship Services

1.  Import AirshipKit to your class.
    
    `import AirshipKit`
    
2.  Take off Airship Services from `application:didFinishLaunchingWithOptions:` method in your `AppDelegate`.

```swift
// Create Airship config
let config = Config()

// Set production and development separately.
// Alternatively you can use AirshipConfig.plist file to store all Airship configurations.
// More details please see https://docs.airship.com/platform/mobile/setup/sdk/ios/
config.developmentAppKey = "YOUR DEV APP KEY"
config.developmentAppSecret = "YOUR DEV APP SECRET"

config.productionAppKey = "YOUR PRODUCTION APP KEY"
config.productionAppSecret = "YOUR PRODUCTION APP SECRET"

// Change to true to use the production appKey/appSecret
config.inProduction = false

// Set site. Either .us or .eu
config.site = .us

// Allow lists. Use * to allow anything
config.urlAllowList = ["*"]

// Call takeOff
Airship.takeOff(config, launchOptions: launchOptions)

// User notifications will not be enabled until userPushNotificationsEnabled is
// set YES on UAPush. Once enabled, the setting will be persisted and the user
// will be prompted to allow notifications. Normally, you should wait for a more
// appropriate time to enable push to increase the likelihood that the user will
// accept notifications.
Airship.push.userPushNotificationsEnabled = true
```

### Setup Bluedot Location Services

1.  Import Bluedot PointSDK.
    
    `import BDPointSDK`
    
2.  Introducing `BDLocationManager` which is the entry-point for an app to start using PointSDK.
    ```swift
    BDLocationManager.instance()?.geoTriggeringEventDelegate = self
    ```
    
3.  Initialize the PointSDK

   ```swift
    if BDLocationManager.instance()?.isInitialized() == false {
      BDLocationManager.instance()?.initialize(
        withProjectId: projectId) { error in
        guard error == nil else {
          print("Initialisation Error: \(String(describing: error?.localizedDescription))") 
          return
        }
        print( "Initialised successfully with Point sdk" )
      }
    }
  ```
    
4.  Start Geo-triggering feature after PointSDK is initialized:
    
    ```swift
    BDLocationManager.instance()?.startGeoTriggering() { error in 
      guard error == nil else {
        print("There was an error starting geo-triggering with the Bluedot SDK: \\(error.localizedDescription)")
        return
      }
    }
    ```
    
5.  Receiving Geo-trigger events
    ```swift
    extension AppDelegate: BDPGeoTriggeringEventDelegate {
      func didEnterZone(_ enterEvent: BDZoneEntryEvent){ 
        print("I have entered a zone.")
      }
    
      func didExitZone(_ exitEvent: BDZoneExitEvent) {
        print("I have exited a zone")
      }
    }
    ```
    


:::info
Only `Custom Actions` defined for a Zone will trigger _Check-in_ and _Check-out_ callbacks.
:::

`Check-out` does not apply to Geoline™.

### Use case

**Objective****:** Trigger an `automated message` pushed to end-user when the device checks in a `geofence` or `Geoline™`.

**Setting automated message:** Setup via `Airship` portal will be triggered when a new event is posted.

```swift
func didEnterZone(_ enterEvent: BDZoneEntryEvent){
    **let** customEvent = CustomEvent(name:"bluedot_place_entered")
    customEvent.interactionType = "location"
    customEvent.interactionID = enterEvent.zone().id

    // Set Bluedot Zone Custom Data
    **var** bluedotProperties = [String : String]()
    enterEvent.zone().customData?.forEach { (key, value) **in**
        bluedotProperties[key] = value
    }
    bluedotProperties["bluedot_zone_name"] = enterEvent.zone().name
    // assign custom event properties
    customEvent.properties = bluedotProperties
    // Record the event in analytics
    customEvent.track()
}

func didExitZone(_ exitEvent: BDZoneExitEvent) {
    **let** customEvent = CustomEvent(name:"bluedot_place_exited")
    customEvent.interactionType = "location"
    customEvent.interactionID = exitEvent.zone().id
    
    // Set Bluedot Zone Custom Data
    **var** bluedotProperties = [String : String]()
    exitEvent.zone().customData?.forEach { (key, value) **in**
        bluedotProperties[key] = value
    }
    bluedotProperties["bluedot_zone_name"] = exitEvent.zone().name

    // set dwell time
    bluedotProperties["dwell_time"] = NSNumber(value: exitEvent.duration).stringValue
    // assign custom event properties
    customEvent.properties = bluedotProperties
    // Record the event in analytics
    customEvent.track()
}
```