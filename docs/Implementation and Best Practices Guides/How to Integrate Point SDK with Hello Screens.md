How to Integrate Point SDK with Hello Screens
=============================================

### Overview

This guide will walk you through the process of integrating Bluedot's Tempo with Hello Screens to provide real-time order updates and customer arrival notifications.

:::info
Before starting this process, ensure that the store's creation in Bluedot's dashboard is complete. If the store setup is not yet finalised, please reach out to your Bluedot Customer Experience (CX) representative for assistance with this step or reach out to our team at [help@bluedot.io](mailto:help@bluedot.io)
:::

### Step 1: Register an Order

To integrate Tempo with Hello Screens, start by registering an order using the `/registerOrder` endpoint of the Wave API.

- **Endpoint**: `POST /hello/registerOrder`
- **Purpose**: This API call registers a new order within Hello Screens.

**Required Parameters**:

- `orderId`: A unique identifier for the order.
- `destinationId`: The ID of the store or location associated with the order.

**Response**:

- The response includes a `userToken`, which is essential for the next steps in the integration.

For further details, refer to the [Register Order API documentation](https://events-docs.bluedot.io/#tag/hello/operation/registerOrder).

### Step 2: Handling Webhooks (Optional)

You can retrieve the `userToken` through the **"REGISTRATION"** event type in Hello Screens webhooks. When an order is registered, this event triggers and provides a payload that includes the `userToken`, `orderId`, `destinationId`, and other relevant details. This allows your system to process the `userToken` asynchronously as the order events occur.

For more details on setting up and handling these webhooks, refer to the [Hello Webhooks documentation](https://docs.bluedot.io/Webhooks/Hello%20order).

### Step 3: Set Custom Data in Point SDK

Before starting the Geo-triggering and Tempo service, it’s crucial to set the custom data in the Point SDK. Custom data allows you to attach additional context, like the `orderId` and `userToken`, to SDK events. This data is then sent along with events triggered by the SDK, ensuring that Hello Screens receives all necessary information to track and display the order status.

Make sure to include the `orderId` and `userToken` in the custom data configuration before initiating any of the SDK services.

For more details, visit the [Custom Data in SDK Events guide](https://docs.bluedot.io/Custom%20Data#custom-data-in-sdk-events).

### Step 4: Initialise Point SDK’s Tempo Service

When starting the Tempo service in the Point SDK, you’ll need to provide a `destinationId`, which corresponds to the store where the customer is heading. This ID is crucial because it tells the SDK which store to calculate the ETA for. 

These `destinationIds` are set by the brand during the store creation process in Bluedot’s dashboard.

If the customer selects a different store for a future order, update the `destinationId` to ensure accurate ETA calculations.

For more details, see the [Tempo integration guide](https://docs.bluedot.io/Tempo/Integrate%20the%20Point%20SDK%20in%20your%20app) and [Store Management documentation](https://docs.bluedot.io/Canvas/Store%20management).

### Step 5: Start the Geo-triggering Service

After setting up custom data and initialising the Tempo service, the final step is to start the Geo-triggering service in the Point SDK. This service detects when a user enters or exits specific geofenced areas around the store (Usually the pickup area), enabling precise customer arrival detection.

For more details and implementation instructions, refer to the [Geo-triggering guide](https://docs.bluedot.io/Point%20SDK/iOS/Geo-triggering).

### Step 6: Stop the Geo-triggering and Tempo Services

It is important to stop the Geo-triggering and Tempo services once the customer arrives at the correct store to maintain customer privacy and ensure location tracking is only active when relevant.

- Keep track of the `destinationId` used to start the Tempo service.
- When an Entry event is reported by the Geo-triggering service, it will include a Zone ID.
- **Verify Zone ID and Destination ID**:
    - Use `getZonesAndFences()` ([Android](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine/-zone-info/index.html)) or `BDLocationManager.instance().zoneInfos` ([iOS](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(py)zoneInfos)) to retrieve all Zones.
    - Find the Zone that matches the Zone ID from the Entry event.
    - Check if the Zone's `destinationId` matches the one used to initiate Tempo (Step 4).
- If the `destinationId` matches, stop both Geo-triggering and Tempo services.

This ensures that customer location tracking is stopped as soon as they reach the intended store, respecting their privacy.

### Conclusion

Following these steps, you’ll successfully integrate Point SDK with Hello Screens, providing seamless and real-time order updates directly on your store’s display.