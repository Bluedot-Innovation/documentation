Key concepts
============

To get the most out of the Orders API, it’s important to understand the core ideas behind its design. This section covers the fundamental workflows and error-handling mechanisms that will help you
effectively integrate the API.

### **When to Use the Orders API**

The Orders API is ideal in the following scenarios:

- **Standalone Use:**

    Use the Orders API by itself when you need to manage orders without relying on real-time geolocation or the Point SDK. For example:

    - Cancel incomplete orders after 24 hours.
    - Update order details (e.g., delivery address or special instructions) directly from a server-side system.
    - Listen to ETA updates from third-party delivery partners and use the **`updateOrder`** event type to reflect these changes in Hello Screens.
- **Combined with Point SDK:**

    Use the Orders API alongside the Point SDK to enrich location-based updates with additional order details. For example:

    - Register orders with the Orders API, passing the generated **`userToken`** and order ID as metadata in the Point SDK custom event. This enables automatic updates for ETA and arrival detection in Hello Screens.
    - Use the **`updateOrder`** event type to add or change details, such as when a customer provides additional information (e.g., car color or pickup bay number).

---

### **Order Lifecycle**

Orders in Hello Screens follow a clear lifecycle that the API reflects:

1. **Order Creation:**

    Submit a new order using the **`Create Order`** endpoint. This sets the order's initial state.

2. **Order Updates:**

    Modify an existing order’s details (e.g., status, delivery information, customer details) using the **`updateOrder`** event type.

3. **Order Cancellation:**

    Cancel orders when necessary using the **`cancelled`** event type.


---

### **Event Types**

The **`eventType`** field in the Orders API indicates the action associated with an order at a specific point in its lifecycle. This field helps Hello Screens understand and reflect the current state or action being performed, ensuring accurate tracking and visibility.

#### **Predefined Event Types**

The Orders API supports the following predefined event types:

- **`registration`:** Used when an order is first registered in Hello Screens.
- `updateOrder`**:** Used to update the order details without changing the order status.
- **`onTheWay`:** Indicates the customer is on their way to the destination.
- **`partnerOnTheWay`:** Used when a delivery partner or staff member is en route to fulfil the order.
- **`arrival`:** Marks the arrival of the customer or delivery partner at the destination.
- **`fulfilled`:** Indicates that the order has been successfully completed.
- **`cancelled`:** Indicates that the order has been cancelled.

#### **Custom Event States**

In addition to the predefined **`eventType`** values, you can define **custom states** to align with your specific operational workflows. Custom states allow you to tailor the order lifecycle to your business needs.

**Example:**

A business may add custom states like:

- **`"preparingOrder"`**: To reflect when an order is being prepared.
- **`"readyForPickup"`**: To notify staff when an order is ready for collection.

For more details on implementing custom order states, refer to the [Hello Screens Custom Order States documentation](https://docs.bluedot.io/Hello%20Screens/Custom%20Order%20States).

---

### **Custom Data vs. Hello Screens Fields**

The Orders API supports two ways to include additional information in an event payload: **`customEventMetaData`** and **`hsFields`**. While both allow you to pass detailed order information, they serve distinct purposes depending on whether the data is for backend processing or for sharing with the store staff.

#### **1. `hsFields`**

- **Purpose:**

    Use **`hsFields`** to provide details that need to be displayed to store staff through Hello Screens. This information is typically operational and helps the team process the order efficiently.

    These fields are visible in the **order modal** or **order details** screens used by the store.

- **Example Use Cases:**
    - Displaying a customer's car model, color, and plate number for curbside pickup.
    - Showing the parking bay number where a customer is waiting.
    - Indicating a customer’s mobile number for direct communication.

#### **2. `customEventMetaData`**

- **Purpose:**

    Use **`customEventMetaData`** to include information that is important for managing, tracking, or analysing the order but does not need to be visible to store staff or displayed in Hello Screens.

    The list of custom data fields **won't** be included to the API responses but will be sent via [Hello Order Webhooks](https://docs.bluedot.io/Webhooks/Hello-order). This data remains backend-focused and is primarily for use in your internal systems or analytics tools.

- **Example Use Cases:**
    - Tracking partner delivery IDs for system integrations.
    - Including an internal reference ID for analytics purposes.

---

### **Order ID Behaviour**

Order IDs are essential part of managing orders with Orders API. While they’re typically tied to an order for a 24-hour period, they should be unique for each combination of `destinationId`(store) and `projectId`. The API also provides flexibility to overwrite existing orders if needed.

#### **Key Considerations:**

1. **24 Hours Behaviour:**  By default, an `orderId` can’t be reused or registered again within 24 hours for the same store and project. The countdown resets each time an event is recorded for the order (e.g., an update or status change).
2. **Updating Orders:** If the details of an order change (e.g., delivery address or items), use the `updateOrder` event Type to modify the existing order.
3. **Overwriting Orders:** If you need to reuse an existing `orderId` within the 24-hour period, you can set the `forceOverwrite` property to `true` when submitting a new order. This replaces the current order associated with the same `orderId`.

While this can be helpful in certain situations, we recommend using it only when necessary. Overwriting orders too frequently impacts order tracking data and analytics consistency. Use a unique `orderId` for each store and project combo whenever possible.

**Error Example:**

```json
{
	"errorType": "ValidationError",
	"errorMessages": {
		"errorDescription": "Order already exists with that orderId in the target destination. Either use PUT to update the order or set forceOverwrite to true to overwrite the existing order with a new one."
	}
}
```
