Segment integration
===================

Bluedot is a location platform that provides an accurate and simple geofencing platform for apps. After integrating the Bluedot SDK and setting geofences, customer’s can create personalised location-based experiences for their users.

Segment provides the customer data infrastructure that helps businesses put their customers first. Using Segment, companies can collect, unify and connect their first-party data to over 200 marketing, analytics and data warehouse tools.

With this integration, Bluedot’s first-party, accurate, and privacy-compliant location data can be connected and utilised across all of the platforms and apps supported by Segment.

Integration Overview
--------------------

Before beginning the integration, please ensure you have an active customer account with Bluedot & Segment.

1\. Decide on the custom data you’ll be passing from the Bluedot Events to Segment:

a. [Custom Event Metadata](../Custom%20Event%20Metadata.md) (max. 20)  
b. [Custom Zone Data](../Canvas/What%20is%20Zone%20custom%20data.md) (max. 20)

2. Integrate the Bluedot SDK within your mobile app:

a. [Android integration guide](../Point%20SDK/Android/Quick%20Start.md)  
b. [iOS integration guide](../Point%20SDK/iOS/Quick%20Start.md)

3. Add a Bluedot source to your Segment workspace from the Sources Catalog.

4\. Add your Segment `writeKey` via the Integrations > Segment section in Canvas.

Send events to Segment
----------------------

To send events to Segment, you’ll need to include the Segment’s `userId` in the [Custom Event Metadata](../Custom%20Event%20Metadata.md) of the Bluedot event. Make sure to name the property `segment_userId`.  
An example will be:

`"segment_userId": "<YOUR SEGMENT USER ID>"   `

For more details, check the [Bluedot source documentation in Segment](https://segment.com/docs/connections/sources/catalog/cloud-apps/bluedot/)

:::info
The [Custom Event Metadata](../Custom%20Event%20Metadata.md) is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. We suggest setting the custom data every time the SDK is authenticated in the app.
:::

Events
------

The table below lists events that Bluedot sends to Segment. These events appear as tables in Segment’s warehouse and as regular events in other Segment’s Destinations.

| **EVENT NAME**                     | **DESCRIPTION**                                                        |
|------------------------------------|------------------------------------------------------------------------|
| `Entry Geofence`                   | Device breaches a geofence.                                            |
| `Exit Geofence`                    | Device exits a geofence                                                |
| `Tempo ETA Update`                 | Tempo ETA update                                                       |
| `Tempo Stop`                       | Tempo stops tracking ETA                                               |
| `Order Registered`                 | Wave register order                                                    |
| `Customer On The Way (Web)`        | Wave event type `onTheWay`                                             |
| `Customer Arrived (Web)`           | Wave event type `arrival`                                              |
| `Custom Web Event: { event type }` | Wave custom event types. (for example, `eventType: "pickedComplete"`). |

If you have any technical issues or questions, please reach us at [**_help@bluedot.io_**](mailto:help@bluedot.io)