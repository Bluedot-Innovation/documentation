---
pagination_next: APIs/Wave API/Integrate Wave API
---

Wave: Integration & User guide
==============================

If you don’t have an app or don’t have the development resources to integrate the Rezolve Point SDK at the moment and still want to know when your customers reach the store to collect an order, then Wave is the solution for you. Wave is a lightweight API endpoint that provides customer arrival notifications that can be used on any platform. You can implement an Arrival callout on your web page or app that lets you know when your customers have arrived to collect the order.

With Wave, you can send a notification to your backend when a user has been notified from your mobile app or web app that it has arrived at the destination.

This Event is ideal for scenarios where:

*   The user didn’t grant location permissions to your Mobile App.
*   Web apps where the browser doesn’t have access to all the location capabilities of mobile.
*   Curbside scenarios where the customer can take a long period of time to collect the order, and you don’t want to track the device’s location.

If you’d like to know if Wave is the best fit for your use case, please contact your Rezolve CX representative.

Getting started with Wave in 3 steps
------------------------------------

1\. [Integrate the Wave in your app or webpage](../Wave%20API/Integrate%20Wave%20API.md)  
You’ll call the Wave API endpoint when the customer clicks on the “I’m here” button in your app or web page, define the `DestinationId` & attach any `customEventMetadata` (Eg. the Order ID and the customer’s name)

2\. [Create your Destination(s)](../../Tempo/Create%20your%20destinations.md)  
The Destination is the store or restaurant where your customer is collecting their mobile order from. Every Destination has a set of lat/long coordinates & a unique `DestinationID` (which you choose). You can create a Destination in the Canvas dashboard or using the Config API.

3\. [Setup receiving of Wave events](./Receiving%20Wave%20API%20events.md)  
A notification for a customer’s arrival to the store for collecting an order when Wave is used in your app or web page can be received via Webhooks or seen on Hello screens.

API reference
-------------

The API specification for the Wave API can be found [here](https://events-docs.bluedot.io/).
