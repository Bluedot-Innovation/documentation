---
pagination_next: null
---

Additional Security Layer
=========================

Hello Screens has an optional layer of security that would, if enabled, only allow authorized users to register new orders. Additionally, only requests with a valid `userToken` can update existing orders. This feature works in tandem with the existing security requirement of a valid `x-bluedot-api-key` to be provided with any requests to create/ modify an order.

If you want to enable this feature for your account please contact our team at [help@bluedot.io](mailto:help@bluedot.io).

When this security feature is enabled, you will need:

1\. A valid `accessToken` to register an order in Wave API.  
2\. To include the `userToken` (returned when registering the order) with any subsequent requests to update the order either through Point SDK or Wave API.

Authorising a Register Order request
------------------------------------

Requests to register a new order using **Wave API** `/hello/register` endpoint will require a valid `accessToken` in the `Authorization` headers of the request (In addition to `x-bluedot-api-key`).

To get an `accessToken` you need to authenticate via **Config API** `/sessions` endpoint. To learn more check [Config API Authentication documentation](https://config-docs.bluedot.io/#section/Authentication).

Include the `accessToken` in the headers of the `/hello/register` request:

### Example header
```
POST https://us1-events.bluedot.io/hello/register HTTP/1.1
 Authorization: Bearer 
 "x-bluedot-api-key":
```

You will receive your `userToken` in the response. This must be included in any subsequent requests made to update this order.

### Example response
```json
{
    "userToken": "abc123"
}
```
:::info
Make sure to use the Wave API’s endpoint of the region of your account. If you’re not sure which region your account is in, contact our Support Team
:::

Authorising orders updates
--------------------------

In order to update an order you’ll need to include the `userToken` in the Custom Event Meta Data of Point SDK or in the body of a Wave API request.

### Point SDK

Before starting Tempo, it is necessary to include the `userToken` in the Custom Event Meta Data along with the other required fields, such as the `orderId`.

* Check [Hello Screens documentation](../Hello%20Screens/Overview.md) for more details about the required fields.  
* Check [Custom Event Meta Data documentation](../Custom%20Data.md) to learn how to pass custom data in the SDK events.

### Wave API

When updating the status of a registered order, you’ll need to include the `userToken` at the root level of the body’s request.

**Example Wave API body**

```json
{
    "destinationId": "store-destination-id",
    "userToken": "valid-user-token",
    "customEventMetaData": {
        "hs_orderId": "qwe123",
        "eventType": "onTheWay"
    }
}
```