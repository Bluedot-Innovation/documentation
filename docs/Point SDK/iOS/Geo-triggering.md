Geo-triggering
====================

Start Geo-triggering
--------------------

Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline™). For this capability, the SDK needs to be initialized and the app must have location permission.

To start geo-triggering, you should

```swift
BDLocationManager.instance()?.startGeoTriggering(){ error in
    guard error == nil else {
        print("There was an error starting geo-triggering with the Bluedot SDK: \(error.localizedDescription)")
        return
    }
 }
```

The `startGeoTriggering` method should be called when the app is in the foreground. For more information refer to Location modules should be started from the foreground

Receiving Geo-trigger events
----------------------------

Implement [`BDPGeoTriggeringEventDelegate`](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html) and register it with [`BDLocationManager`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html) to receive Geo-triggering related callbacks.

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    BDLocationManager.instance()?.geoTriggeringEventDelegate = self
    BDLocationManager.instance()?.initialize(
        withProjectId: "MyProjectId"){ error in
            guard error == nil else {
                print("Initialisation with Bluedot SDK failed \(error.localizedDescription)")
                 return
             }
    }
    return true
 }
```

```swift
extension AppDelegate: BDPGeoTriggeringEventDelegate {
    func onZoneInfoUpdate(_ zoneInfos: Set<BDZoneInfo>) {
        print("My local cache of the zones has updated!")
    }
    func didEnterZone(_ enterEvent: BDZoneEntryEvent){ 
        print("I have entered a zone.")
    }
    func didExitZone(_ exitEvent: BDZoneExitEvent) {
        print("I have exited a zone")
    }
 }
```

Stop Geo-triggering
-------------------

If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service.

```swift
BDLocationManager.instance()?.stopGeoTriggering(){ error in
    guard error == nil else {
        print("There was an error stopping geo-triggering with the Bluedot SDK: \(error.localizedDescription)")
        return
    }
}
```

:::info
To start Geo-triggering with app restart notification, notification permission must be granted.
:::