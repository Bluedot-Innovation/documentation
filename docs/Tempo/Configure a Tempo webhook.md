Configure a Tempo Webhook
=========================

Register Tempo Webhooks to receive real-time ETA notifications from your customers. As your customers get closer to their Destination to collect their order, Bluedot will send a notification every minute, so your team is ready to go.

Configure a Tempo Webhook
-------------------------

### 1\. Add a New Webhook

Under Your Account, choose

![](https://docs.bluedot.io/wp-content/uploads/2022/01/new-webhook-1024x563.jpg)

### 2\. Add the Webhook Details

Project

Select the Project you’ll receive the events from

Event

Select _Tempo_

Event Structure

Select Standard. If you’d like to send the Tempo updates to Tealium check this [guide](https://docs.bluedot.io/integrations/tealium-integration/).

URL

The URL of the server where the webhooks will be received. We suggest that the service has SSL enabled.

Header Fields (Optional)

Add any extra parameters you’d like to be included in the header of the request. For example, this is a good place to add a security token to authorize the incoming events.

Body Fields (Optional)

Add any extra parameters you’d like to be included in the body of the request.

### ![](https://docs.bluedot.io/wp-content/uploads/2022/01/tempo-webhook-example-1024x564.jpg)

### 3\. Save

You can also configure a Tempo Webhook through Config API (Information on using the Config API for registering a Webhook can be found here.)

**Endpoint**

**Description**

Add Tempo Webhooks to a Project

When creating or editing a Project you can add Tempo Webhooks within the tempo property.

Endpoint: `https://config.bluedot.io/prod1/projects`

Example of adding a Tempo Webhook:

```json
"tempo": { 
    "webhooks": [{ 
        "type": "tempo", 
        "url": "<webhook URL goes here>" 
    }] 
}
```

Webhook request JSON structure
------------------------------

**Update JSON request**
```json
{
    "deviceType": "iPhone12,3",
    "os": "iOS",
    "osVersion": "7.0",
    "customerApplicationId": "au.com.bluedot", 
    "sdkVersion": "1.11.0",
    "appBuildVersion": "1.11.2",
    "customEventMetaData": {
        "key1": "value1",
        "key2": "value2"
    },
    "eventTime": "2020-05-21T05:44:04Z",
    "longitude": 144.123123123,
    "latitude": -33.123123123,
    "destinationId": "store ID",
    "eventType": "tempoUpdate",
    "eta": 900, 
    "etaDirection": "greaterThan",
    "installRef": "1111111-2222-3333-4444-555555555555",
    "projectId": "1111111-2222-3333-4444-555555555555",
    "triggerChainId": "11111111-2222-3333-4444-555555555555",
    "notificationType": "tempo",
    "zoneId": "1111111-2222-3333-4444-555555555555",
    "zoneName": "Store 123", 
    "zoneCustomData": {
        "key1": "value1",
        "key2": "value2"
    }
}
```

**Stop JSON request**
```
{
    "deviceType": "iPhone12,3",
    "os": "iOS",
    "osVersion": "7.0",
    "customerApplicationId": “au.com.bluedot", 
    "sdkVersion": "1.11.0",
    "appBuildVersion": "1.11.2",
    "customEventMetaData": {
        "key1": "value1",
        "key2": "value2"
    },
    "eventTime": "2020\-05\-21T05:44:04Z",
    "destinationId": "store ID",
    "stopReason": "stoppedByCustomerApp", 
    "eventType": "tempoStop",
    "installRef": "1111111\-2222\-3333\-4444\-555555555555",
    "projectId": "1111111\-2222\-3333\-4444\-555555555555",
    "triggerChainId": "11111111\-2222\-3333\-4444\-555555555555",
    "notificationType": "tempo",
    "zoneId": "1111111\-2222\-3333\-4444\-555555555555",
    "zoneName": "Store 123",
    "zoneCustomData": { 
        "key1": "value1",
        "key2": "value2" 
    }
}
```

Tempo Webhook Field description
-------------------------------

**Field name**

**Description**

**Data type**

**Example**

appBuildVersion

The app build version of the application using the Point SDK which triggered the check-in.

String

*   1.11.2

*   12.0.0.1233

customerApplicationId

The application’s package name. 

String

*   au.com.bluedot

customEventMetaData

Key/Value pairs passed from the application to Bluedot Point SDK. This will not be returned as part of the request if no data set on the Mobile SDK.

JSON object

{

      “orderId”: “12345”

}

destinationId

The ID associated with the location setup in Canvas for the Zone

String

*   Store-234

deviceType

The type of device that triggered the Tempo event.

String

*   iPhone 9,3

*   samsung SM-N950F

eta

The estimated time of arrival of the user to the store in seconds.

Number

etaDirection

The direction of estimation – whether the device is more than or less than the number of seconds provided.

String

*   greaterThan

*   lessThan

eventTime

Records the time the event reaches the Bluedot platform.

String

_2020-05-21T05:44:04Z_

eventType

This field denotes the type of event being relayed from our servers to yours. For a stop of Tempo the type will be “tempoStop”.

String

*   tempoUpdate

*   tempoStop

installRef

A randomly issued installation reference, not tied to any personally identifiable data (PID) on the user’s device.

String

*   44c2d0b8-0004-47fc-830d-b73e9ff706f6

latitude

Latitude component of the coordinate of the current Tempo event.

Number

*   30.2672042

*   \-37.818036

longitude

Longitude component of the coordinate the current Tempo event.

Number

*   \-97.7447926

*   144.9775493

notificationType

This field denotes the type of notification being relayed from our servers to yours. For an Tempo event  the type will be “tempo”.

String

*   tempo

os

The OS of the device that triggered the ETA event.

String

*   android

*   iOS

osVersion

The OS Version of the device that triggered the Tempo event.

String

*   8.0.0

*   13.1.5

projectId

The identifier of the project with which the SDK is logged into the app.

String

*   4647e4eb-f908-4d3d-82e9-4959d59923b0

sdkVersion

The Point SDK version number being used in the application which has triggered the Tempo event. 

String

*   15.2.0

stopReason

This field denotes the reason the Tempo service stopped running.  

String

*   `invalidDestinationId`: Passing an invalid destinationId to the start Tempo tracking SDK method. The SDK will return an error at the client level and at the same time this event will be fired by our webhooks.

*   `stoppedByCustomerApp`:  The stop Tempo tracking method is executed.

*   `expired` : Tempo service has been tracking the device for 30 minutes and it hasn’t arrived to the destination. This expiring time is customizable, check with your CX representative if you’d like to update it.

*   `sdkLogout`: The SDK’s  reset method is executed.

triggerChainId

triggerChainId can be used to connect the ETA updates coming through for one set from start to finish.

String

*   c8965662-d67f-49e8-abf9-0bada6c153d1

zoneId

The unique identifier of the zone associated with the `destinationId`.

String

*   4647e4eb-f908-4d3d-82e9-4959d59923b0

zoneName

The name of the zone associated with the `destinationId`

String

*   Restaurant 123

zoneCustomData

The custom data associated with the zone

```json
{
    "storeId": "12345",
    "storeType": "drive-thru"
}
```
