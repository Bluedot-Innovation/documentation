Wave Webhooks
=============

Register Wave Webhooks to receive real-time Arrival notifications from your customers.

Configure a Wave Webhook
------------------------

In the Webhooks section of your Canvas account while creating a Webhook, select Wave as the Event type in the dropdown.

![](https://docs.bluedot.io/wp-content/uploads/2022/06/Canvas-Webhooks-Wave.png)

You can also configure a Wave Webhook through Config API (Information on using the Config API for registering a Webhook can be found [here](https://config-docs.bluedot.io/#operation/addProject).)

If you’d like to Create a Destination using [Config API](https://docs.bluedot.io/config-api/), you’ll use the following /Endpoints;

Endpoint

Description

Add Wave Webhooks to a Project

When creating or editing a Project you can add Wave Webhooks within the `webhooks` property.

Set the type to `wave` in the request.

Endpoint: `https://config.bluedot.io/prod1/projects`

Example of adding a Wave Webhook:
```
"webhooks": \[{
    "type": "wave",
    "url": "<webhook URL goes here>"
}\]
```

Webhook request JSON structure
------------------------------

JSON request for a simple Wave event
```
{
   "notificationType":"wave",
   "notificationId":"73cbdf0c-5523-46ec-bc15-c9ad362b2a85",
   "projectId”: "1111111\-2222\-3333\-4444\-555555555555”,
   "installRef":"c92f4a32dc35282d4471b42993f809fa",
   "eventTime":"2018-09-02T00:08:16.000Z",
   "destinationId":"ABCD",
   "receivedAt":"2018-09-02T00:22:43.816Z",
   "customEventMetaData":{
      "eKey1":"eValue1"
   }
}
```
JSON request for a Wave event when the location is passed in the API request
```
{
   "notificationType":"wave",
   "notificationId":"73cbdf0c-5523-46ec-bc15-c9ad362b2a85",
   "projectId": "1111111-2222-3333-4444-555555555555",
   "installRef":"c92f4a32dc35282d4471b42993f809fa",
   "eventTime":"2018-09-02T00:08:16.000Z",
   "destinationId":"ABCD",
   "location":{
      "longitude":144.98173087835312,
      "latitude":-37.819805462370944,
      "speed":10.12,
      "bearing":45.34,
      "horizontalAccuracy":100
   },
   "receivedAt":"2018-09-02T00:22:43.816Z",
   "zones":\[
      {
         "id":"ffece0a9-fd21-4148-892e-0a61d01a6bd4",
         "name":"Melbourne Cricket Ground Gate 1",
         "destinationId":"ABCD",
         "customData":{
            "key1":"value1",
            "key2":"value2"
         },
         "tags":\[
            "tag1",
            "tag2"
         \],
         "fence":{
            "id":"80fc36ad-ee72-4450-ad96-b3fadfc26cb4",
            "name":"Melbourne Cricket Ground Gate 1"
         }
      }
   \],
   "customEventMetaData":{
      "eKey1":"eValue1"
   }
}
```
Wave Webhook field description
------------------------------

**Field**

**Data type**

**Description**

**Example**

notificationType

String

This field denotes the type of notification being relayed from our servers to yours. For a Wave event, the type will be “wave”.

*   geoTrigger

*   tempo

*   wave

notificationId

String

The unique identifier of the Wave record.

*   cf3ce604-adc2-494a-a41c-e19ded044c7d

projectId

String

The identifier of the project with which the API is signed within the header.

*   751cf7a6-394b-4e8a-b09d-444ed520c3e5

installRef

String

A randomly issued installation reference, not tied to any personally identifiable data (PID) on the user’s device.

*   a7684ffd-2221-432c-9cb9-25fd241df39f

destinationId

String

The ID associated with the location setup in Canvas for the Zone

*   Store1234

customEventMetaData

JSON Object

Key/Value pairs passed from the application to Bluedot Point SDK. This will not be returned as part of the request if no data set on the Mobile SDK.

{

 “key1”: “value1”,

 “key2”: “value2”

}

eventTime

String

UTC date and time of the Entry/Exit in ISO format on the device.

*   2021-02-02T02:25:47.000Z

receivedAt

String

Records the time the event reaches the Bluedot platform.

*   2021-02-02T02:25:47.000Z

location

JSON Object

The location details sent as part of the Wave API request.

location.longitude

Number

Longitude component of the coordinate the current Wave event.

*   144.981730

location.latitude

Number

Latitude component of the coordinate the current Wave event.

*   \-37.819805

location.speed

Number

The travel speed of the device at the time of the Wave event reported as meters per second.

*   10

location.bearing

Number

The travel bearing of the device at the time the Wave event reported in degrees.

*   120

location.horizontalAccuracy

Number

The accuracy of the location coordinates at the time the Wave event reported in meters.

*   10.0

zones

JSON Array

The Zones inside of the latitude and longitude of the location coordinates update in the Wave API request.

zones.id

String

The unique identifier of the zone that location reported in the Wave event is inside of.

*   cf3ce604-adc2-494a-a41c-e19ded044c7d

zones.name

String

The name of the zone that the location reported in the Wave event is inside of.

zones.customData

JSON Object

Key/Value pair of Location-specific data added to the Zone. This will not be returned as part of the request if no data set for the Zone.

{

      “key1”: “value1”,

      “key2”: “value2”

  }

zones.tags

Array

The tags added to a Zone in Canvas.

\[“tag1”, “tag2”\]

zones.fence

JSON Object

The Fence inside of the latitude and longitude of the location coordinates update in the Wave API request.

fence.id

String

The unique identifier of the fence that location reported in the Wave event is inside of.

*   cf3ce604-adc2-494a-a41c-e19ded044c7d

fence.name

String

The name of the fence that the location reported in the Wave event is inside of.