1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Webhooks](https://docs.bluedot.io/webhooks/)
3.  Hello Order Webhooks

Hello Order Webhooks
====================

Hello Screens uses webhooks to notify your application when the state of an order has been updated. Hello Order Webhooks help inform your systems when a customer is on the way to the store, arrives at the store, the staff acknowledges the arrival of the customer, when a staff member marks an order as completed. You can also receive updates when the order moves to any custom status you’ve set using [Wave API.](https://docs.bluedot.io/wave-api-integration-user-guide/)

Configure a Hello Order Webhook
-------------------------------

In the Webhooks section of your Canvas account while creating a Webhook, select Hello Order as the Event type in the dropdown.

![](https://docs.bluedot.io/wp-content/uploads/2022/07/Canvas-Webhooks-Hello-Order.png)

You can also configure a Hello Order Webhook through Config API (Information on using the Config API for registering a Webhook can be found [here](https://config-docs.bluedot.io/#operation/addProject).)

If you’d like to Create a Destination using [Config API](https://docs.bluedot.io/config-api/), you’ll use the following /Endpoints;

Endpoint

Description

Add Hello Order Webhooks to a Project

When creating or editing a Project you can add Hello Order Webhooks within the `webhooks` property.

Set the type to `helloOrder` and structure to `default` in the request.

Endpoint: `https://config.bluedot.io/prod1/projects`

Example of adding a Hello Order Webhook:
```
"webhooks": \[{
    "type": "helloOrder",
    "structure": "default",
    "url": "<webhook URL goes here>"
}\]
```

The webhook request JSON structure
----------------------------------

JSON request body for a Hello Order event

{
    "notificationId": "8872f2bacfab5260691ce1c34795bc780ee95ae638150082076d18687f44f076",
    "notificationType": "helloOrder",
    "installRef": "1111111-2222-3333-4444-555555555555",
    "destinationId": "Store-001",
    "customerName": "John Smith",
    "orderId": "12345678",
    "etaDirection": "lessThan",
    "eta": 1,
    "status": "Arrived",
    "stateDisplayName": "Arrived",
    "projectId": "1111111-2222-3333-4444-555555555555",
    "accountId": "1111111-2222-3333-4444-555555555555",
    "isAcknowledged": false,
    "hsFields": {
       "Mobile Number": "0411234567",
       "Car Model": "Hyndai Tucson",
       "Car Color": "White",
       "Car Plate": "NM1234",
       "Parking Bay": 1
    },
    "lastUpdateTime": "2020-10-01T01:00:00.000Z",
    "eventTrigger": {
       "source": "mobile SDK",
       "eventType": "GEOTRIGGER"
    },
    "locations": \[
     {
       "longitude": 144.123123123,
       "latitude": \-33.123123123,
       "altitude": 100,
       "verticalAccuracy": 12.232323,
       "horizontalAccuracy": 12.232323,
       "bearing": 168,
       "speed": 6,
       "time": "2020-04-06T05:43:20.789Z"
     }
    \]
}

Hello Order Webhook body field description
------------------------------------------

**Field**

**Data type**

**Description**

**Example**

notificationType

String

This field denotes the type of notification being relayed from our servers to yours. For a Hello Order event, the type will be “helloOrder”.

 helloOrder

notificationId

String

The unique identifier of the Hello Order record.

8872f2bacfab5260691ce1c34795bc780ee95

ae638150082076d18687f44f076

projectId

String

The identifier of the project.

0ef516e2-fd11-454c-97bf-9ba53d45b885

accountId

String

The identifier of the account.

788d60a0-a512-4299-8750-8d7ba2bd14c2

installRef

String

A randomly issued installation reference, not tied to any personally identifiable data (PID) on the user’s device.

a7684ffd-2221-432c-9cb9-25fd241df39f

destinationId

String

The ID associated with the location setup in Canvas for the Zone

Store1234

customerName

 String

 The name of the customer who made the order

John Smith

orderId

 String

The identifier of the order

12345678

eta

 Number

The estimated time of arrival of the user to the store in seconds.

 60

etaDirection

 String

The direction of estimation – whether the device is more than or less than the number of seconds provided.

*    greaterThan
*   lessThan

 status

String

The status of the order

 Arrived

stateDisplayName

 String

 The display name of the order status on Hello Screens

 On The Way

hsFields

JSON Object

Key/Value pairs passed from the application to Bluedot Point SDK. This will not be returned as part of the request if no data set on the Mobile SDK.

     {

          “key1”: “value1”,

          “key2”: “value2”

      }

isAcknowledged

 boolean

 The indicator if the order is being viewed on Hello Sscreens

lastUpdateTime

String

UTC date and time when the order is updated.

2021-02-02T02:25:47.000Z

eventTrigger

JSON Object

The origin of the event that triggers the webhook event

2021-02-02T02:25:47.000Z

eventTrigger.source

 String

 The source of the event

*   mobile
*   web

eventTrigger.eventType

 String

 The type of the event

*   `REGISTRATION`
*   `NO_UPDATES_5_MINS`
*   `TEMPO_TIMEOUT`
*   `TEMPO_UPDATE`
*   `TEMPO_CANCELLED`
*   `GEOTRIGGER`
*   `onTheWay`
*   `arrival`
*   `fulfilled`
*   `ACKNOWLEDGEMENT`

locations

Array

The location details.

location.longitude

Number

Longitude component of the coordinate.

144.981730

location.latitude

Number

Latitude component of the coordinate.

\-37.819805

location.speed

Number

The travel speed of the device at the time of the event was reported as meters per second.

10

location.bearing

Number

The travel bearing of the device at the time of the event was reported in degrees.

120

location.horizontalAccuracy

Number

The estimated horizontal accuracy of the current location, in meters

10.0

 location.verticalAccuracy

 Number

The estimated vertical accuracy of the current location, in meters

 10.0