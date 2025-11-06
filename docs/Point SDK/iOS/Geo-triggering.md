Geo-triggering
====================

Start Geo-triggering
--------------------

Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline™). For this capability, the SDK needs to be initialized and the app must have location permission.

To start geo-triggering, you should

```swift
BDLocationManager.instance()?.startGeoTriggering(){ error in
    guard error == nil else {
        print("There was an error starting geo-triggering with the Rezolve Point SDK: \(error.localizedDescription)")
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
                print("Initialisation with Rezolve Point SDK failed \(error.localizedDescription)")
                 return
             }
    }
    return true
 }
```

```swift
extension AppDelegate: BDPGeoTriggeringEventDelegate {
    func didUpdateZoneInfo() {
        print("My local cache of the zones has updated!")
    }
    func didEnterZone(_ enterZoneEvent: GeoTriggerEvent){ 
        print("I have entered a zone.")
    }
    func didExitZone(_ exitZoneEvent: GeoTriggerEvent) {
        print("I have exited a zone")
    }
	func didDwellInZone(_ triggerEvent: GeoTriggerEvent) {
		print("Dwell time (ms): '(triggerEvent.dwellEvent.calculatedDwellTime)'")
	} 
 }
```

:::info
 _Exit_ events will only trigger when the device has moved a substantial distance away from the geofence. Detection of _Exit_ events may not be as immediate as _Entry_ events.
:::

Stop Geo-triggering
-------------------

If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service.

```swift
BDLocationManager.instance()?.stopGeoTriggering(){ error in
    guard error == nil else {
        print("There was an error stopping geo-triggering with the Rezolve Point SDK: \(error.localizedDescription)")
        return
    }
}
```

:::info
To start Geo-triggering with app restart notification, notification permission must be granted.
:::