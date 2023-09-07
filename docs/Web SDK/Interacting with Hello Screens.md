Interacting with Hello Screens
====================================

What’s Hello Screens?
---------------------

Hello Screens are a super fast & super simple dashboard that your team can use to see a customer’s ETA and get visual and audible notifications exactly when they Arrive. It is hardware-free. With a responsive design that runs in-browser, you can use an existing device you have on-site – this may be a tablet from a 3rd party ordering app, the web browser on your POS hardware, or even the mobile device in your Floor Managers pocket. More information [here](../Hello%20Screens/Overview.md).

Sending Hello-ready events
--------------------------

For events to considered valid to update the Hello Screens UI and API, it requires the appropriate `destinationId`,   `orderId` as well as an `eventType` field to be supplied in the custom event metadata passed in with the event. The most reliable method to interact with the Hello framework is to use a Hello Model object when preparing data for your events.

Using the Hello Model
---------------------

The Hello Model is a convenience data object to assist in submitting valid events for the Hello product. You can use it to submit a Wave event with correctly formatted and valid Hello data fields.

```js
import {
 bluedot,
 createHelloModel
} from '@bluedot-innovation/javascript-sdk'

...
const helloModel \= createHelloModel()
helloModel.setOrderId("myOrderId") // An Order ID must be provided for Hello events.
 .setEventType("onTheWay")         // An Event Type must be provided for Hello events.
 .setMobileNumber("+1234567890")
 .setCustomerName("Jane Doe");

const destinationId \= "myDestination"

bluedot.wave.send(destinationId, helloModel);
```

For further details check the Web SDK API documentation [here](https://bluedot-javascript-sdk-docs.bluedot.io/)