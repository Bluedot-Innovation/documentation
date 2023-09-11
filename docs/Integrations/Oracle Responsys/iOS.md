Oracle iOS Integration
======================

Integrate your project with Oracle Responsys SDK
------------------------------------------------

Add `PushIOManager.framework`  in Linked frameworks & `pushio_config_debug.json` in your project as below:

![](../../assets/Screen-Shot-2019-05-02-at-1.15.28-pm-437x1024.png)

Integrate your project with Bluedot Point SDK
---------------------------------------------

To integrate PointSDK, please refer to the integration steps documented [here](../../Point%20SDK/iOS/Quick%20Start.md)

Interaction between the Responsys SDK and Bluedot Point SDK
===========================================================

Setup Bluedot Location Services
-------------------------------

1\. Import required header files.
```swift
    import BDPointSDK
    import PushIOManager
```

2\. Implement Bluedot [`BDPGeoTriggeringEventDelegate`](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html):

```swift
// Swift extension 
YourClass: BDPGeoTriggeringEventDelegate { 
    func didEnterZone(_ enterEvent: BDZoneEntryEvent) 
    { 
        // Your logic when the device enters a Bluedot Zone 
    } 

    func didExitZone(_ exitEvent: BDZoneExitEvent) 
    { 
        // Your logic when the device leaves a Bluedot Zone 
    } 
}
```

3\. Assign GeoTriggeringEvent delegate with your implementation
```swift
// Swift 
let instanceOfYourClass = YourClass() 
BDLocationManager.instance()?.geoTriggeringEventDelegate = instanceOfYourClass

4\. Authenticate with the Bluedot services

// Swift
BDLocationManager.instance()?.initialize(withProjectId: projectId){ error in
     guard error == nil else {
        print("There was an error initializing the Bluedot SDK: \(error.localizedDescription)")
        return
     }
}
```

5\. Start Oracle Responsys within the `application:didFinishLaunchingWithOptions` method. For a detailed setup guide, please refer to Oracle Responsys Documentation [here](https://docs.oracle.com/en/cloud/saas/marketing/responsys-develop-mobile/ios/step-by-step.htm)

```swift
// Configure the SDK        
var configName = "YOUR_PRODUCTION_CONFIG_FILE_NAME.json"

#if DEBUG
configName = "YOUR_DEBUG_CONFIG_FILE_NAME.json"
#endif

PushIOManager.sharedInstance().configure(withFileName: configName, completionHandler: { (configError, response) in
    if let error = configError {
        print("Not able to configure the sdk \(error.localizedDescription)")
        return
    }
})
```

6\. Send event to Oracle Reponsys via Bluedot [didEnterZone](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html#/c:objc(pl)BDPGeoTriggeringEventDelegate(im)didEnterZone:) / [didExitZone](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html#/c:objc(pl)BDPGeoTriggeringEventDelegate(im)didExitZone:) callbacks.

```swift
    func didEnterZone(_ enterEvent: BDZoneEntryEvent) {

        let geoRegion = PIOGeoRegion(
            geofenceId: enterEvent.fence.id,
            geofenceName: enterEvent.fence.name,
            speed: enterEvent.location.speed,
            bearing: enterEvent.location.bearing,
            source: "Bluedot Point SDK",
            zoneId: enterEvent.zone().id,
            zoneName: enterEvent.zone().name,
            dwellTime: 0,
            extra: enterEvent.zone().customData)

        PushIOManager.sharedInstance().didEnter(region: geoRegion) { error, _ in
            if error == nil {
                print("Geofence Entry Event triggered successfully")
            } else {
                print("Unable to send Geofence Entry Event, reason: \(String(describing: error?.localizedDescription))")
            }
        }
    }

    func didExitZone(_ exitEvent: BDZoneExitEvent) {

        let geoRegion = PIOGeoRegion(
            geofenceId: exitEvent.fence.id,
            geofenceName: exitEvent.fence.name,
            speed: 0.0,
            bearing: 0.0,
            source: "Bluedot Point SDK",
            zoneId: exitEvent.zone().id,
            zoneName: exitEvent.zone().name,
            dwellTime: Int(exitEvent.duration),
            extra: exitEvent.zone().customData)

        PushIOManager.sharedInstance().didExit(region: geoRegion) { error, _ in
            if error == nil {
                print("Geofence Exit Event triggered successfully")
            } else {
                print("Unable to send Geofence Exit Event, reason: \(String(describing: error?.localizedDescription))")
            }
        }
    }
```

**GitHub Sample Project**

A sample project which demonstrates the integration of Responsys SDK and Bluedot Point SDK is available on **[GitHub](https://github.com/Bluedot-Innovation/OracleMinimalApp-iOS)**.