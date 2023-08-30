1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Wave: Integration & User guide](https://docs.bluedot.io/wave-api-integration-user-guide/)
3.  Receiving of Wave API events

Receiving of Wave API events
============================

Wave API events are communicated to you in two ways:

1.  Via the Wave webhook
2.  Displayed on Hello screens

Using Wave API with Webhook
---------------------------

Details on how to configure and use Wave API with a Webhook are [here](https://docs.bluedot.io/webhooks/wave-webhooks/).

Using Wave API with Hello Screens
---------------------------------

The Wave events can also inform Hello Screens of the arrival of a customer to a Zone.

1\. You need to link a Destination to a Hello screen. More details [here](https://docs.bluedot.io/hello-screens/).  
2\. You just need to add the `OrderId` in the `customEventMetaData` of the Wave API request. More details [here](https://docs.bluedot.io/wave-api-integration-user-guide/integrate-wave-api/).