
Send your first Wave
==========================

What’s a Wave?
--------------

Wave events provide customer order updates that can be used on any platform. This data then propagates through the Bluedot Arrival platform, updating user status appropriately and firing any webhooks attached. More details [here](https://docs.bluedot.io/wave-api-integration-user-guide/).

Sending Wave with custom data
-----------------------------

First, ensure that your Bluedot JS SDK is initialized, as documented [here](https://docs.bluedot.io/web-sdk/quick-start-and-initialization/).

Next, send a Wave with any additional data you might need:
```js
bluedot.wave.send("<myDestinationId>", {"myCustomDataKey1": "myCustomDataValue1"})
```

Sending a Wave with template data
---------------------------------

For templated data such as Hello, use the helper tool as described [here](https://docs.bluedot.io/web-sdk/interacting-with-hello-screens/).

Receiving a Wave
----------------

A notification for a customer’s arrival to the store for collecting an order when Wave is used in your app or web page can be received via Webhooks or seen on Hello screens. More details [here](https://docs.bluedot.io/wave-api-integration-user-guide/receiving-of-wave-api-events/).