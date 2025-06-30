---
pagination_next: null
---

# Migration Guide to Swift 6

To use a Swift 6 app with the iOS Point SDK v 17.0.1 and below, you’ll need to disable the new Swift concurrency features for the SDK. This can be done by adding `@preconcurrency` attribute to import `BDPointSDK` module and the `BDPBluedotServiceDelegate`, `BDPGeoTriggeringEventDelegate`, `BDPTempoTrackingDelegate` delegates if they are used in the app.

```
@preconcurrency import BDPointSDK

extension AppDelegate: @preconcurrency BDPBluedotServiceDelegate {

}
```

An example of using a Swift 6 minimal app is available [here](https://github.com/Bluedot-Innovation/PointSDK-MinimalIntegrationExample-iOS/tree/nk/swift6-app-with-swift5-BDPointSDK).






