
Send your first Wave
==========================

What’s a Wave?
--------------

Wave events provide customer order updates that can be used on any platform. This data then propagates through the Bluedot Arrival platform, updating user status appropriately and firing any webhooks attached. More details [here](../APIs/Wave%20API/Integrate%20Wave%20API.md).

Sending Wave with custom data
-----------------------------

First, ensure that your Bluedot JS SDK is initialized, as documented [here](./Quick%20Start.md).

Next, send a Wave with any additional data you might need:
```js
bluedot.wave.send("<myDestinationId>", {"myCustomDataKey1": "myCustomDataValue1"})
```

Sending a Wave with template data
---------------------------------

For templated data such as Hello, use the helper tool as described [here](./Interacting%20with%20Hello%20Screens.md).

Receiving a Wave
----------------

A notification for a customer’s arrival to the store for collecting an order when Wave is used in your app or web page can be received via Webhooks or seen on Hello screens. More details [here](../APIs/Wave%20API/Receiving%20Wave%20API%20events.md).