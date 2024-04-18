Tempo
===========

Tempo allows active tracking of a user’s location, as well as live ETA estimation.

Start Tempo
-----------

For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Bluedot Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Bluedot CX representative.

Tempo also requires Destination IDs to be defined, which you can learn about here.

To start Tempo, you should

```swift
BDLocationManager.instance()?.startTempoTracking(withDestinationId: "MyDestinationId") { error in
    guard error == nil else {
        print("There was an error starting Tempo with the Bluedot SDK: \(error.localizedDescription)")
        return
     }
 }
```

The [`startTempoTracking`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)startTempoTrackingWithDestinationId:completion:) method should be called when the app is in the foreground. Tempo tracking can only be active for one destination at a time.

Receiving Tempo events
----------------------

Implement `BDPTempoTrackingDelegate` to receive Tempo related callbacks.

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    BDLocationManager.instance()?.tempoTrackingDelegate = self
    BDLocationManager.instance()?.initialize(withProjectId: "MyProjectId") { error in
          guard error == nil else {
             print("Initialisation with Bluedot SDK failed \(error.localizedDescription)")
             return
          }
    }
    return true
}

extension AppDelegate: BDPTempoTrackingDelegate {
    func tempoTrackingDidUpdate(_ tempoUpdate: TempoTrackingUpdate) {
        print("tempoTrackingDidUpdate: '\(tempoUpdate.destination?.name ?? "")' - eta:\(tempoUpdate.eta) minutes")
    }

    func tempoTrackingDidExpire() {
         print("Tempo Tracking has expired") 
    }
    
    func didStopTrackingWithError(_ error: Error!) {
       print("There was an error continuing to track with the Bluedot SDK: \(error.localizedDescription)") 
    }
}
```

Stop Tempo
----------

If you only need tempo for a limited period, once that period is over, you can stop the tempo service.

```swift
BDLocationManager.instance()?.stopTempoTracking() { error in
     guard error == nil else {
        print("Stop Tempo failed \(error.localizedDescription)")
        return
     }
 }
```