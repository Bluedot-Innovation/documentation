1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Integrations](https://docs.bluedot.io/integrations/)
3.  Attentive Integration

Attentive Integration
=====================

This integration brings together the power of location-based technology and personalized mobile messaging to help brands create unique and engaging experiences for their customers. With Bluedot’s accurate location data and Attentive’s powerful messaging platform, brands can now deliver targeted and relevant messages to their customers in real-time based on their exact location. In this documentation, we will walk you through the setup and configuration process for the integration, as well as provide examples of how to use it to drive engagement and growth for your business.

Location-based Messages
-----------------------

Send targeted, location-based SMS messages to your customers. You can use this feature to send notifications about new deals or offers when a customer enters a specific store or to send surveys as soon as the customer leaves the geofenced area. For more information, check the [Attentive’s Location-based Messages documentation.](https://docs.bluedot.io/integrations/attentive-integration/location-based-messages/)

Curbside Experience wi Now Ready
--------------------------------

Send an SMS with a link to access [Now Ready](https://docs.bluedot.io/now-ready/) – our web-based curbside experience. Implement a curbside solution that enables SMS messaging and updates during the order pickup journey. With Bluedot [Hello Screens](https://docs.bluedot.io/hello-screens/), store staff are updated in real-time on impending customer arrival.

For more information check the [Attentive – Bluedot Curbside Experience documentation.](https://docs.bluedot.io/integrations/attentive-integration/curbside-experience/)

How does it work?
-----------------

When a new order is registered, Bluedot will call [Attentive’s Custom Events API](https://docs.attentivemobile.com/openapi/reference/tag/Custom-Events/) to with the basic user and order details, then you can use [Attentive’s Journey Builder](https://www.attentivemobile.com/messaging) to craft the content of the SMS.

You can register orders from one of our Order Management partners (I.E., Olo) or [Bluedot’s Register Order API](https://events-docs.bluedot.io/#operation/registerOrder).

If you have any technical issues or questions please use [**_help@bluedot.io_**](mailto:help@bluedot.io) to reach out to our team.