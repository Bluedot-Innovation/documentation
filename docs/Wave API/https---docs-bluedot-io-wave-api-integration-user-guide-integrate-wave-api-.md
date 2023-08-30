1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Wave: Integration & User guide](https://docs.bluedot.io/wave-api-integration-user-guide/)
3.  Integrate Wave API

Integrate Wave API
==================

Overview
--------

During API integration, there are 3 important stages that align with your customer’s experience.

1.  Set the `Custom Event Metadata` to be attached with each Wave Event – this is usually at least the customer’s name and orderID.
2.  Define the `DestinationId` – this is where the customer is collecting their order. You can use anything, but we recommend using the normal Store Number or Restaurant ID.
3.  Define an Arrival callout (I’m here button) in the web page or app and set it up to submit a Wave API request when the callout

Endpoints
---------

Wave API is hosted in multiple regions worldwide to ensure the better performance of our services. Each region is completely independent and in a separated geographic area.

**REGION**

**URL**

APAC

[https://au1-events.bluedot.io/wave](https://au1-events.bluedot.io/wave)

EUROPE

[https://eu1-events.bluedot.io/wave](https://eu1-events.bluedot.io/wave)

NORTH AMERICA

[https://us1-events.bluedot.io/wave](https://us1-events.bluedot.io/wave)

If you’re not sure which region your account is in, please contact us at [help@bluedot.io](mailto:help@bluedot.io).

API reference
-------------

The API specification for Wave API can be found [here](https://events-docs.bluedot.io/#operation/postWaveEvents).

Wave Request Example
--------------------

To send a Wave event you’ll need to make a POST request to the Wave endpoint. It only requires to sign the request with the `projectId` and include the `destinationId` that it’s effectively the Zone the user has arrived.

You can also add context to the Wave Event, such as the user’s location, the event’s time, and other properties that can help you better understand your user’s behaviour.

### Request Signature

Wave API uses the `projectId` to sign requests. You’ll need to add the key `x-bluedot-api-key` with the `projectId` as the value in request’s headers as shown below:

"x-bluedot-api-key": "<YOUR\_PROJECT\_ID>"

You can find your `projectId` in the [Canvas](https://docs.bluedot.io/canvas/) in the Account section.

### Request Payload

#### Simple Example

// JSON
{
  "destinationId": "your\_zone\_destinationId"
}

#### Enriched Data Example

// JSON
{
  "destinationId": "melbourne\_store\_001",
  "customEventMetaData": {
    "userId": "your\_user\_id",
    "storeId": "your\_store\_id"
  },
  "location": {
    "longitude": 144.123123123,
    "latitude": \-33.123123123,
    "horizontalAccuracy": 12.232323,
    "bearing": 123,
    "speed": 2
  },
  "eventTime": "2018-09-02T00:08:16.000Z"
}

Using Wave API with Hello Screens
---------------------------------

The Wave Events can also inform Hello Screens of the arrival of a customer to a Zone. You just need to add the `OrderId` in the `customEventMetaData` as shown below:

// JSON
{
  "destinationId": "melbourne\_store\_001",
  "customEventMetaData": {
    "OrderId": "aslkfiowae"
  }
}

We also recommend using the other properties the Hello Screens provides, such as adding the customer’s name and any additional relevant information for your use case. The fields that have the prefix `hs_` will be displayed in the Order’s details.

// JSON
{
  "destinationId": "melbourne\_store\_001",
  "customEventMetaData": {
    "OrderId": "aslkfiowae"
    "hs\_Customer Name": "James",
    "hs\_Car Model": "Honda Civic",
    "hs\_Car Color": "Red",
    "hs\_Loyalty ID": "ABC123",
    "hs\_Mobile Number": "3231234567"
  }
}

### Updating the order’s state in Hello Screens

To update the state of order in Hello Screens with Wave API, you’ll need to include the property `eventType` in the Custom Event Meta Data. There are three main values to pass in `eventType`

**Event Type**

**Description**

`onTheWay`

Updates the order’s state in Hello Screens to “_On_ _the way_”. 

`arrival`

Updates the order’s state in Hello Screens to “_Customer_ _Arrived_”. For example when the user presses the “_I’m here_” button.

`updateOrder`

Allows adding extra information about the order without impacting the order’s state.  Only affects the fields with the `hs_` prefix. This might be useful when you get additional information after the customer has already started his journey to collect the order.

// JSON { 
  "destinationId": "melbourne\_store\_001", 
  "customEventMetaData": { 
    "OrderId": "aslkfiowae" 
    "hs\_Customer Name": "James",
    "eventType": "onTheWay"
  } 
}

Integrate Wave in your Web page using the Web SDK
-------------------------------------------------

*   [Quick start and initialization](https://docs.bluedot.io/web-sdk/quick-start-and-initialization/)
*   [Send your first Wave](https://docs.bluedot.io/web-sdk/send-your-first-wave/)