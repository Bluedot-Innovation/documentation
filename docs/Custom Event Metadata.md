Custom Event Metadata
=====================

Custom event metadata is a feature which is available in the Bluedot Point SDK for our customers to set additional event-specific metadata for the Zone Entry and Exit Notifications which are sent to Bluedot backend.

:::info
Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error as: Only 20 CustomEventMetaData fields are allowed.

The limit is 5 for Android SDK version 14.0.3 & iOS SDK 15.1.0 and below.
:::

Usage:
------

It can be used by application developers to send any user/device-specific information like UserID, DeviceID, etc. along with the Zone Entry and Exit events.

When to Set:
------------

You can set custom event metadata in the Application (not in Activity/ViewController) before starting GeoTriggering and Tempo, and anytime when the metadata value may change.

:::info
If you are setting the metadata in the custom action callbacks of Zone Entry and Zone Exit, it will be sent in the next Zone Entry or Exit event to the backend as previous events are already processed from Bluedot SDK.

The custom event metadata should be set before the Zone Entry or Exit event is processed and it is suggested to not set it on the callbacks for custom action. As events may occur immediately upon starting GeoTriggering or Tempo, it is recommended that custom event metadata be set before starting GeoTriggering or Tempo. If the metadata is set as part of the custom action callback, then it will be sent as part of the next location event.
:::

:::info
The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. The Custom Event Metadata can be set at any time, although we suggest setting the custom data before starting GeoTriggering or Tempo.
:::

How to implement custom event metadata on Android
-------------------------------------------------

Create a HashMap of Key (String) and Value (String) pair. You can set the metadata you wish to pass along the check-in/check-out events in it.

Refer example code as below:

```kotlin
Map<String,String> eventMetaData = new HashMap<String, String>();
eventMetaData.put("key1","value1");
eventMetaData.put("key2","value2");
ServiceManager.getInstance(context).setCustomEventMetaData(eventMetaData);
```

Detailed Info can be found in respective SDK API docs [here](https://docs.bluedot.io/wp-content/uploads/api/android/classau_1_1com_1_1bluedot_1_1point_1_1net_1_1engine_1_1_service_manager.html#a69e19cfca40223b071a12b3483e83bcf).

How to implement custom event metadata on iOS
---------------------------------------------

Set a Key-Value pair for CustomEventMetaData. Refer Example code as below:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Boo {
    ...
    
    // Setting meta data in setCustomEventMetaData.
    BDLocationManager.instance()?.setCustomEventMetaData(["DeviceName" : UIDevice.current.name])

    // Initialize with Bluedot SDK.
    BDLocationManager.instance()?.initialize(
       withProjectId: "MyProjectId"){ error in
          guard error \== nil else {
             print("Initialisation with Bluedot SDK failed \\(error.localizedDescription)")
             return
          }
    }
    ... 
    
    return true 
}
```

This metadata will be sent along with the Zone Entry/Exit events to the backend.

Detailed Info can be found in respective SDK API docs [here](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)setCustomEventMetaData:).