---
pagination_next: null
---

Receiving Wave API events
============================

Wave API events are communicated to you in two ways:

1.  Via the Wave webhook
2.  Displayed on Hello screens

Using Wave API with Webhook
---------------------------

Details on how to configure and use Wave API with a Webhook are [here](../../Webhooks/Wave.md).

Using Wave API with Hello Screens
---------------------------------

The Wave events can also inform Hello Screens of the arrival of a customer to a Zone.

1\. You need to link a Destination to a Hello screen. More details [here](../../Hello%20Screens/Overview.md).  
2\. You just need to add the `OrderId` in the `customEventMetaData` of the Wave API request. More details [here](./Integrate%20Wave%20API.md).