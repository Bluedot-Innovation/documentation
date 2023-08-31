1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Now Ready](https://docs.bluedot.io/now-ready/)
3.  Integrate Register endpoint

Integrate Register endpoint
===========================

Once an order has been created in your system, you can register this order in NowReady by using the Register API. The API will return a `user_token` that will be used to generate the URL that it’s going to be sent to the user to open the NowReady app.

![](https://docs.bluedot.io/wp-content/uploads/2021/08/Now-Ready-Order-Registration-1024x315.png)

How to register an order?
-------------------------

You can use the following sample JSON payload to register an order:

1.  Replace the `DESTINATION_ID` with the DestinationId you’ve assigned to that store from Canvas. (For further details check this article). This field is required.
2.  Replace `ORDER_ID` with the ID you want the staff to associate the order with. This field is required.
3.  The rest of the fields within the `customEventMetaData` are optional and can be used to add any additional details about the order that can help you to provide a better experience to the customer.
4.  Send a POST request to the Register Order endpoint (`/hello/register`).

Register API uses the `projectId` to sign requests. You’ll need to add the key `x-bluedot-api-key` with the `projectId` as the value in request’s headers as shown below:

```
"x-bluedot-api-key": "<YOUR_PROJECT_ID>"
```

You can find your `projectId` in [Canvas](https://docs.bluedot.io/canvas/) in the Account section.

```json
{
    "destinationId": "<DESTINATION_ID>",
    "customEventMetaData": {
        "hs_orderId": "<ORDER_ID>",
         "hs_customerName": "John Doe",
         "hs_Mobile number": "0412356789",
         "hs_Vehicle make": "Honda",
         "hs_Vehicle model": "SDG",
         "hs_Vehicle plate": "123DFG",
         "hs_Parking bay": "213"
    },
     "eventTime": "2021-07-02T00:08:16.000Z"
}
```

5\. The response of the request will return the `userToken` that will be used to generate the URL that you’ll be sending to your customer when the order is ready to be collected.

```json
{
    "userToken": "ABc1234"
}
```

For more information about registering an order please check the [Events API reference documentation](https://events-docs.bluedot.io/#operation/registerOrder).

### Endpoints

Register API is hosted in multiple regions worldwide to ensure the better performance of our services. Each region is completely independent and in a separated geographic area.

**REGION**

**URL**

APAC

[https://au1-events.bluedot.io/](https://au1-events.bluedot.io/hello/register)[hello/register](https://au1-events.bluedot.io/hello/register)

EUROPE

[https://eu1-events.bluedot.io/](https://eu1-events.bluedot.io/hello/register)[hello/register](https://eu1-events.bluedot.io/hello/register)

NORTH AMERICA

[https://us1-events.bluedot.io/](https://us1-events.bluedot.io/hello/register)[hello/register](https://us1-events.bluedot.io/hello/register)

If you’re not sure which region your account is in, please contact us at [help@bluedot.io](mailto:help@bluedot.io).

### API reference

The API specification for Wave API can be found [here](https://events-docs.bluedot.io/#operation/postWaveEvents).

Generate a NowReady URL
-----------------------

With the `userToken` returned when registering an order, you can generate the URL that you’ll be sending to your customer once the order is ready to be collected. You

You just need to add the user token as the path of the Now Ready base URL.

**Examples:**

*   `https://us.nowready.io/<USER_TOKEN>`
*   `https://au.nowready.io/ABc123`

**Notes:**

*   Make sure to use the Now Ready URL for the region’s account. If you’re not sure which region your account is in, please contact us at [help@bluedot.io](mailto:help@bluedot.io).
*   The `userToken` it is only active for 24 hours by default. If would like to update the expiration time of the `userToken` please contact us at [help@bluedot.io](mailto:help@bluedot.io).

### Now Ready URL by region

**REGION**

**NOW READY URL**

APAC

[https://au.nowready.io](https://au.nowready.io)

Europe

[https://eu.nowready.io](https://eu.nowready.io)

North America

[https://us.nowready.io](https://us.nowready.io)