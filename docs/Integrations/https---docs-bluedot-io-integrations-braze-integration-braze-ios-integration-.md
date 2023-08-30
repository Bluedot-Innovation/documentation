1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Integrations](https://docs.bluedot.io/integrations/)
3.  [Braze Integration](https://docs.bluedot.io/integrations/braze-integration/)
4.  Braze iOS Integration

Braze iOS Integration
=====================

Table of Contents
=================

*   Getting started
    *   Integrate your project with Bluedot Point SDK
    *   Integrate your project with Braze’s Appboy SDK
*   Interaction between Appboy SDK and Bluedot Point SDK
    *   Start Appboy SDK Services
    *   Setup Bluedot Location Services

Getting started
===============

This documentation depends on BluedotPointSDK and Appboy-iOS-SDK. Both dependencies can be managed by CocoaPods.

Integrate your project with Bluedot Point SDK
---------------------------------------------

You can find detailed instructions at [https://docs.bluedot.io/ios-sdk/ios-quick-start](https://docs.bluedot.io/ios-sdk/ios-quick-start/)

1.  Import BDPointSDK to your class:`import BDPointSDK`
2.  Implement Bluedot [`BDPGeoTriggeringEventDelegate`](https://ios-docs.bluedot.io/Protocols/BDPGeoTriggeringEventDelegate.html):
    
    // Swift
    extension YourClass: BDPGeoTriggeringEventDelegate {
    
        func didEnterZone(\_ enterEvent: BDZoneEntryEvent) {
            // Your logic when the device enters a Bluedot Zone
        }
    
         func didExitZone(\_ exitEvent: BDZoneExitEvent) {
            // Your logic when the device leaves a Bluedot Zone
         }
    }
    
3.  Assign GeoTriggeringEvent delegate with your implementation
    
    // Swift
    let instanceOfYourClass \= YourClass()
    [BDLocationManager](https://ios-docs.bluedot.io/Classes/BDLocationManager.html).instance()?.geoTriggeringEventDelegate \= instanceOfYourClass
    
4.  Authenticate with the Bluedot services
    
    // Swift
    
    [BDLocationManager](https://ios-docs.bluedot.io/Classes/BDLocationManager.html).instance()?.[initialize](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)initializeWithProjectId:completion:)(withProjectId: projectId){ error in
         guard error \== nil else {
            print("There was an error initializing the Bluedot SDK: \\(error.localizedDescription)")
            return
         }
    }
    

Integrate your project with Appboy SDK
--------------------------------------

Import Appboy-iOS-SDK to your class

// Swift
 import Appboy\_iOS\_SDK

Start Appboy-iOS-SDK within the `application:didFinishLaunchingWithOptions` method.  
For further information refer to [Braze Developer Documentation](https://www.braze.com/docs/developer_guide/platform_integration_guides/ios/initial_sdk_setup/)

// Swift
Appboy.start(withApiKey: "Your assigned Braze API Key", in: application, withLaunchOptions: launchOptions)

Track Braze custom events in your Bluedot Entry / Exit events.

func didEnterZone(\_ enterEvent: BDZoneEntryEvent) {
    // Name the custom event let customEventName \= "bluedot\_entry"

    // Map the Location and Bluedot Zone attributes into a properties dictionary

    var properties \= \[
        "zone\_id": "\\(enterEvent.zone().id!)",
        "zone\_name": "\\(enterEvent.zone().name!)",
        "latitude": "\\(enterEvent.location.latitude)",
        "longitude": "\\(enterEvent.location.longitude)",
        "speed": "\\(enterEvent.location.speed)",
        "bearing": "\\(enterEvent.location.bearing)",
        "timestamp": "\\(enterEvent.location.timestamp!)"
    \]

    // Map the Custom Data attributes into properties

    if let customData \= enterEvent.zone().customData, !customData.isEmpty {
        customData.forEach { data in properties\["\\(data.key)"\] \= "\\(data.value)"}
    }

    // Log the Custom Event in Appboy
    Appboy.sharedInstance()?.logCustomEvent(customEventName, withProperties: properties )
}

func didCheckOut(\_ exitEvent: BDZoneExitEvent) {
    // Name the custom event
    let customEventName \= "bluedot\_exit"
 
    // Map the Zone attributes into a properties dictionary

    var properties \= \[
        "zone\_id": "\\(exitEvent.zone().id!)",
        "zone\_name": "\\(exitEvent.zone().name!)",
        "timestamp": "\\(exitEvent.date)",
        "checkedInDuration": "\\(exitEvent.duration)"
    \]

 
    // Map the Custom Data attributes into properties

    if let customData \= exitEvent.zone().customData, !customData.isEmpty {
        customData.forEach { data in properties\["\\(data.key)"\] \= "\\(data.value)"}
    }

    // Log the Custom Event in Appboy
    Appboy.sharedInstance()?.logCustomEvent(customEventName, withProperties: properties );
}