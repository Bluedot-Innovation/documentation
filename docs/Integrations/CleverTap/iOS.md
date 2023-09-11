CleverTap iOS Integration
=========================

Getting started
---------------

This documentation depends on Bluedot PointSDK and CleverTap SDK. Both dependencies can be managed by CocoaPods or Carthage.

Integrate your project with Bluedot Point SDK
---------------------------------------------

You can find detailed instructions [here](../../Point%20SDK/iOS/Overview.md)

1.  Import BDPointSDK to your class:`import BDPointSDK`
2.  Implement Bluedot [`BDPGeoTriggeringEventDelegate`](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html):
    
    ```swift
    extension YourClass: BDPGeoTriggeringEventDelegate {
    
        func didEnterZone(_ enterEvent: BDZoneEntryEvent) {
            // Your logic when the device enters a Bluedot Zone

        }
    
        func didExitZone(_ exitEvent: BDZoneExitEvent) {
            // Your logic when the device leaves a Bluedot Zone

        }

    }
    ```
    
3.  Assign GeoTriggeringEvent delegate with your implementation
    ```swift
    let instanceOfYourClass = YourClass()
    BDLocationManager.instance()?.geoTriggeringEventDelegate = instanceOfYourClass
    ```
    
4.  Authenticate with the Bluedot services
    ```swift
    BDLocationManager.instance()?.initialize(withProjectId: projectId){ error in
         guard error == nil else {
            print("There was an error initializing the Bluedot SDK: \(error.localizedDescription)")
            return
         }
    }
    ```

Integrate your project with CleverTap SDK
-----------------------------------------

Import CleverTap-iOS-SDK to your class
```swift
import CleverTapSDK
```

Add CleverTap credentials to associate your iOS app with your CleverTap account, you will need to add your CleverTap credentials in the Info.plist file in your application. For more information on integrating CleverTap SDK, please refer to [CleverTap Developer Documentation](https://developer.clevertap.com/docs/ios-quickstart-guide)

Then start CleverTap within the `application:didFinishLaunchingWithOptions` method.
```swift
CleverTap.autoIntegrate()

// Track CleverTap custom events in your Bluedot Entry / Exit events.

func didEnterZone(_ enterEvent: BDZoneEntryEvent) {
        // Name the custom event
        let customEventName = YOUR CUSTOM EVEN NAME

        // Map the Location and Zone attributes into a properties dictionary
        var properties = [
            "bluedot_zone_id": "\(enterEvent.zone().id!)",
            "bluedot_zone_name": "\(enterEvent.zone().name!)"
        ]

        // Map the Custom Data attributes into properties
        if let custData = enterEvent.zone().customData, !custData.isEmpty {
            custData.forEach { data in properties["\(data.key)"] = "\(data.value)"}
        }
        
        // Log the Custom Event in CleverTap
        CleverTap.sharedInstance()?.recordEvent(customEventName, withProps: properties)
    }
```