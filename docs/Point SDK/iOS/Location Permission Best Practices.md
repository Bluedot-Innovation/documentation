Location Permission best practices
========================================

There are certain approaches that Bluedot has found work best to achieve maximum value from your geolocation SDK when working with iOS location permissions.

Convince user of the value
--------------------------

Rather than prompting the user with a location permission prompt at some unexpected time, it’s instead recommended that you display in your UI an explanation of why location is required and what value it will give the user. This varies from app to app depending on its usage, but we’ve reliably seen double or more uptake in location usage when an appropriate justification is given.

![](https://docs.bluedot.io/wp-content/uploads/2020/12/iOS-Location-Permission-onboarding.png)

Requesting for location permission
----------------------------------

To increase the uptake of location permission, it is also recommended initially to request for “_when in use_” permission:

```swift
BDLocationManager.instance()?.requestWhenInUseAuthorization()
```

![](https://docs.bluedot.io/wp-content/uploads/2021/01/iPhone_11_Pro_Max_–_14_2.jpg)
------------------------------------------------------------------------------------

Then later at an appropriate moment within your app, upgrade to “_always_” permission via the following API:

```swift
BDLocationManager.instance()?.requestAlwaysAuthorization()
```

![](https://docs.bluedot.io/wp-content/uploads/2021/01/iPhone_11_Pro_Max_–_14_2-1.jpg)

Engage location services only when necessary
--------------------------------------------

Both geo-triggering and Tempo tracking are powerful tools and can be used for a variety of use cases. Bluedot has worked hard to ensure that its location capabilities are as efficient as possible, however, location always causes at least some level of battery drain, so you’re encouraged to only turn on location capabilities when necessary for your business logic.

Use background location usage indicator for high-value use cases
----------------------------------------------------------------

For some use cases, particularly when the value of allowing access to location data is communicated to the customer, it may be permissible to access location data while the app is in the background and only _While using the app_ location authorization has been granted. The background location usage indicator alerts the user that an app is accessing their location from the background without being granted _Always_ authorization. Utilizing the background location usage indicator allows the Bluedot SDK to operate from the background as though the app was in active use.

See our guide to [enabling the background location usage indicator](https://docs.bluedot.io/ios-sdk/ios-features/blue-bar/).

iOS 14 – Precise Location Accuracy
----------------------------------

If your app doesn’t have precise location accuracy (accuracy authorization at a reduced level), you can make the following call via `BDLocationManager`, to request for Temporary Full Accuracy Authorization.

```swift
BDLocationManager.instance()?.requestTemporaryFullAccuracyAuthorization(withPurposeKey: "Your Purpose Key")
```

In addition, you can implement [`BDPBluedotServiceDelegate`](https://ios-docs.bluedot.io/Protocols/BDPBluedotServiceDelegate.html) and register it with BDLocationManager to receive Bluedot Service related callbacks.

```swift
func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    BDLocationManager.instance()?.bluedotServiceDelegate = self
}
```

Then, implement the [`accuracyAuthorizationDidChange`](https://ios-docs.bluedot.io/Protocols/BDPBluedotServiceDelegate.html#/c:objc(pl)BDPBluedotServiceDelegate(im)accuracyAuthorizationDidChangeFromPreviousAuthorization:toNewAuthorization:) protocol method, and receive callbacks on changes to Location Accuracy Authorization.

```swift
func accuracyAuthorizationDidChange(fromPreviousAuthorization previousAccuracyAuthorization: CLAccuracyAuthorization, toNewAuthorization newAccuracyAuthorization: CLAccuracyAuthorization) {
    print("Previous location accuracy authorization is \(previousAccuracyAuthorization)")
    print("Current location accuracy authorization is \(newAccuracyAuthorization)") 
}
```