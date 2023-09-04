1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Integrations](https://docs.bluedot.io/integrations/)
3.  mParticle Integration

mParticle Integration
=====================

Bluedot is a location platform that provides an accurate and simple geofencing platform for apps. After integrating the Bluedot SDK and setting geofences, customer’s can create personalised location-based experiences for their users.

mParticle is a customer data platform that unifies customer data in one place and connects it to 175+ leading marketing, analytics, and data warehousing solutions.

Through this integration, Bluedot’s first-party, accurate, and privacy compliant location data can be connected and utilised across all of the platform and apps supported by mParticle.  

Associated Documentation
------------------------

*   mParticle’s own [_mParticle + Bluedot documentation_](https://docs.mparticle.com/integrations/bluedot/feed/)

* * *

Integration Architecture Diagram
--------------------------------

![](https://docs.bluedot.io/wp-content/uploads/2021/06/Bluedot-mParticle-Architecture-1024x576.png)

Integration Overview
--------------------

Before you begin the integration please ensure you have an active customer account with both Bluedot & mParticle.

1.  Decide on the custom data you’ll be passing from Bluedot Entry/Exit (_can_ _also be called Check-in and Check-out Event_) Events to mParticle:
    1.  [Custom Event Metadata](https://docs.bluedot.io/custom-event-metadata/) (_max.20_)
    2.  Custom Zone Data (_max.20_)
2.  Integrate the Bluedot SDK within your mobile app: 
    1.  [iOS integration guide](https://docs.bluedot.io/ios-sdk/)
    2.  [Android integration guide](https://docs.bluedot.io/android-sdk/)
3.  Add a Bluedot integration to your mParticle account, as laid out in [mParticle’s documentation](https://docs.mparticle.com/integrations/bluedot/feed/).
4.  Add your mParticle iOS and/or Android publishable API keys and secrets to the Project via the Integrations section in Canvas.  
      
    ![mParticle Integration Form](https://docs.bluedot.io/wp-content/uploads/2022/03/Screen-Shot-2022-03-15-at-3.31.04-pm-1024x722.png)

Once these steps are done, the integration is ready to go. Simply enter a geofence with a mobile device to trigger the Zone.

Custom Attributes / Sending events to mParticle
-----------------------------------------------

Custom attributes can be passed along to mParticle as key/ value pairs in Bluedot’s [Custom Event Metadata](https://docs.bluedot.io/custom-event-metadata/) by prepending the key with `mparticle_`.  
An example will be:

```
mparticle\_customer\_id : "<your mparticle customer id>",
mparticle\_another\_custom\_field : "another value",
```

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

At least one of `user_dentities` listed in [mParticle’s documentation](https://docs.mparticle.com/developers/server/json-reference/#user_identities) with the `mparticle_` fields **_must_** be included in the CustomEventMetaData in order to push events to mParticle.

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. We suggest setting the custom data every time the SDK is authenticated in the app.

More information on best practices of setting and using custom event metadata can be found [here](https://docs.bluedot.io/custom-event-metadata/).

Integration Fields: Type & Character Length setup
-------------------------------------------------

### **Event Custom Attributes**

**FIELD**

**TYPE**

**LENGTH**

**DESCRIPTION**

altitude

Number

Altitude in metres if supplied by device sensors

altitudeAccuracy

Number

Accuracy of supplied altitude

bearing

Number

The direction of motion of the device at the time of trigger event, if available

checkInTime

Datetime

The time of entry – only supplied for exit triggers

eventTime

Datetime

The time of the trigger event

fenceId

UUID

36

Only available if trigger caused by geofence or Geoline™

fenceName

String

Only available if trigger caused by geofence or Geoline™

id

UUID

36

The unique ID of the trigger

projectId

UUID

36

The ID of the Bluedot project that the SDK was running against

sdkVersion

String

The version of the Bluedot SDK

speed

Number

The speed of the device at the time of trigger event, if available

triggerId

UUID

36

The chain ID of the trigger, which can be used to associate entry and exit events

zoneId

UUID

36

The ID of the Bluedot Zone that the trigger was associated with

zoneName

String

The name of the Bluedot Zone that the trigger was associated with

### **Application Info**

**FIELD**

**TYPE**

**LENGTH**

**DESCRIPTION**

application\_version

String

The version of the application holding the Bluedot PointSDK on the device that triggered

package

String

The package name of the application running Bluedot Point SDK

### **Device Info**

**FIELD**

**TYPE**

**LENGTH**

**DESCRIPTION**

device\_model

String

The model of device that triggered

platform

String

iOS or android

os\_version

String

The version of the operating system on the device that triggered

### **User Attributes**

**FIELD**

**TYPE**

**LENGTH**

**DESCRIPTION**

bluedot\_customer\_id

UUID

36

A unique UUID associated with the device that triggered

* * *

Contact Details
---------------

If you have any technical issues or questions you please use [**_help@bluedot.io_**](mailto:help@bluedot.io) to reach out to our Melbourne-based Engineering team.