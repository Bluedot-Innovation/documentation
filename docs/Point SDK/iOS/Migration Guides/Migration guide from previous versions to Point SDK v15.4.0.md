Migration guide from previous versions to Point SDK v15.4.0
=================================================================

The Bluedot Point SDK version 15.4.0 is a major rewrite of our API interfaces. It includes many updates, such as

*   a simpler and easier way to initialize with Point SDK, and
*   giving you more control on when to start & stop Geo-triggering/Tempo features.

* * *

Update to authentication/initialization call
--------------------------------------------

The authentication call has changed from

```objectivec
// Deprecated in 15.4.0
(void)authenticateWithApiKey: (NSString *)apiKey requestAuthorization: (BDAuthorizationLevel) authorizationLevel;
```

to
```objectivec
(void)initializeWithProjectId: (NSString * _Nonnull)projectId completion: (void (^_Nonnull)(NSError * _Nullable error)) completion;
```

To check if SDK is initialized:
```objectivec
(BOOL) isInitialized;
```

### New/Updates in 15.4.0

*   Moving forward, `apiKey` will be replaced by `projectId`. Note that you can find `projectId` in Canvas.
*   Any error in relation to initialization will be passed back via a completion callback. If the error is NIL, initialization was successful.
*   `BDPSessionDelegate` will be deprecated in favor of completion callbacks.
*   Bluedot Point SDK no longer requests for OS location permission on authentication/initialization as per the previous API.
    *   We encourage you to request OS location permission that you requires (Always or When in Use), at an opportune moment from within your app, to get the best conversion rate. For example, when a customer places an order within the mobile app, at this point you can start geo-triggering, as well as requesting for location permission.
    *   To request for OS location permission, you can make the calls via our [`BDLocationManager`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html) Singleton, for example:

```objectivec
[BDLocationManager.instance requestAlwaysAuthorization];
[BDLocationManager.instance requestWhenInUseAuthorization];
```

*   Bluedot SDK will **not** start triggering Geofeatures immediately after initialization as per the previous API. You will have to make the call explicitly to start/stop Geo-triggering.

* * *

iOS 14 – Reduced / Full Accuracy
--------------------------------

If your users do not have precise location (accuracy authorization at a reduced level), you can make either of the following calls via our [`BDLocationManager`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html) Singleton, to request for Temporary Full Accuracy Authorization.

```objectivec
[BDLocationManager.instance requestTemporaryFullAccuracyAuthorizationWithPurposeKey: @"YOUR_KEY"];
[BDLocationManager.instance requestTemporaryFullAccuracyAuthorizationWithPurposeKey: @"YOUR_KEY" completion: ^{}];
```

* * *

Explicit calls to start & stop Geo-triggering feature
-----------------------------------------------------

In 15.4.0 SDK, we give more control to you on when to start and stop Geo-triggering features. To start triggering Geofeatures, you will need to explicitly call the API.

### Note:

1.  You can start Geo-triggering feature only while your App is in the Foreground.
2.  Stopping Geo-triggering feature has the intended effect of stopping location services on the device, thereby conserving battery on your user’s device unless another feature such as Tempo, is active.
    *   Once the [`stopGeoTriggeringWithCompletion`](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)stopGeoTriggeringWithCompletion:) method is called the SDK will stop tracking the device. The deprecated `logout()` method is no longer needed, the SDK will be initialized only once.

### 1. New Geo-triggering API:
```objectivec
(void)startGeoTriggeringWithCompletion: (void (^_Nonnull)(NSError * _Nullable error)) completion;

(void)stopGeoTriggeringWithCompletion: (void (^_Nonnull)(NSError * _Nullable error)) completion;
```

### 2. To check if Geotriggering is running:

```objectivec
(BOOL) isGeoTriggeringRunning;
```

Receiving Geo-trigger events
----------------------------

In previous versions of the Point SDK, you would have implemented the `BDPLocationDelegate` to receive Fence triggers callbacks. In the new version of the Point SDK, implement the following delegate to receive Geo-triggering related callbacks.

```objectivec
@protocol BDPGeoTriggeringEventDelegate <NSObject>
@optional
(void)onZoneInfoUpdate: (NSSet<BDZoneInfo *> *)zoneInfos;
(void)didEnterZone: (BDZoneEntryEvent) enterEvent;
(void)didExitZone: (BDZoneExitEvent) exitEvent;
@end
```

### Update in 15.4.0

*   `BDPLocationDelegate` will be deprecated. You may find most of the features migrated to either [`BDPGeoTriggeringEventDelegate`](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html) or [`BDPBluedotServiceDelegate`](https://ios-docs.bluedot.io/Protocols/BDPBluedotServiceDelegate.html)
*   Moving forward, beacons related callbacks will no longer be supported. You may continue to use the deprecated delegate `BDPLocationDelegate` to receive beacon related callbacks.
*   Zone infos will now only be downloaded after Geo-triggering Start API is called.

* * *

Bluedot Service Level Callbacks – [`BDPBluedotServiceDelegate`](https://ios-docs.bluedot.io/Protocols/BDPBluedotServiceDelegate.html)
-------------------------------------------------------------------------------------------------------------------------------------

There will a new Bluedot Service Level Callback for all essential callbacks for the Point SDK.

```objectivec
@protocol BDPBluedotServiceDelegate <NSObject>
@optional
(void)locationAuthorizationDidChangeFromOldAuthorizationStatus: (CLAuthorizationStatus) oldAuthorizationStatus toNewAuthorizationStatus: (CLAuthorizationStatus) newAuthorizationStatus;
(void)lowPowerModeDidChange: (Bool) isLowPowerMode;
(void)bluedotServiceDidReceiveError:(NSError *)error
 
 // iOS 14 only
(void)accuracyAuthorizationDidChangeFromOldAccuracyAuthorization: (CLAccuracyAuthorization) oldAccuracyAuthorization toNewAccuracyAuthorization: (CLAccuracyAuthorization) newAccuracyAuthorization API_AVAILABLE(ios(14));
@end
```

* * *

Updates to Tempo API
--------------------

1.  The Start Tempo API call has changed from

```objectivec
// Deprecated in 15.4.0
(void)startTempoTracking: (NSString * _Nonnull)destinationId
```

to

```objectivec
(void)startTempoTrackingWithDestinationId: (NSString * _Nonnull)destinationId completion: (void (^ _Nonnull)(NSError * _Nullable error)) completion;
```

2. The Stop Tempo API call has changed from

```objectivec
// Deprecated in 15.4.0
(void)stopTempoTracking
```

to

```objectivec
(void)stopTempoTrackingWithCompletion:completion: (void (^ _Nonnull)(NSError * _Nullable error)) completion;
```

3\. New API to check if Tempo is running:

```objectivec
(BOOL) isTempoRunning;
```

4\. Updates to [`BDPTempoTrackingDelegate`](https://ios-docs.bluedot.io/Protocols/BDPTempoTrackingDelegate.html):

```objectivec
// Deprecated in 15.4.0, in favor of completion callbacks in Start/Stop Tempo API.
 (void)didStartTracking
 (void)didStopTracking
 
 // new in 15.4.0
 (void)tempoTrackingDidExpire
```

:::info
### Update in 15.4.0

In the previous version of the Point SDK, the start Tempo call will throw `NSException` for any error detected. This has been changed in favor of completion callbacks.
:::