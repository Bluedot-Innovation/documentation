Partner ETA
===========

The Partner’s ETA feature allows you to pass ETA information third-party drivers or delivery partners provide directly into Hello Screens. This is valuable for operations that involve external delivery services, where the pickup or delivery time is determined by your partner, and you want to inform your store team in Hello Screens.

### **Implementing Partner ETA via Wave API**

#### **Event Structure and Requirements**

To display a partner’s ETA on Hello Screens, you will use the new `eventType`, `partnerOnTheWay`, which updates the order status to "On the way". Also, the event must include the `hs_partnerPickupTime` field in the `customEventMetaData`, which specifies the partner’s ETA as a future date and time. 

Here's a guide to help you correctly structure your Wave API event:

```json
{
    "destinationId": "dest-id",
    "userToken": "ab45DE7",
    "customEventMetaData": {
        "hs_Customer Name": "Emma Goldman",
        "hs_partnerPickupTime": "2024-03-04T05:15:00.000Z",
        "eventType": "partnerOnTheWay",
        "hs_orderId": "Order 22",
        //...other custom data fields here
    }
}
```

**Required Fields:**

- **`eventType`**: Must be set to **`partnerOnTheWay`** to ensure the order status updates correctly.
- **`hs_partnerPickupTime`**: This field should be set to an ISO 8601 timestamp indicating the expected arrival time of the partner. It must represent a future time, e.g., 15 minutes from the current time.

If either the **`hs_partnerPickupTime`** or **`eventType`** is missing from the payload, the event will be ignored, and the order status on the Hello Screens will not be updated. It is crucial that both fields are present and correctly formatted to ensure the system processes the event properly.

If no updates are received within 5 minutes, consider sending a standard **`onTheWay`** event to transition the order status, ensuring continuity in order status management.

### Understanding ETA Display Logic in Hello Screens

When integrating ETAs from third-party partners into Hello Screens, it's crucial to note that these ETAs are displayed according to pre-configured time brackets used by the Tempo system. This means that even if a partner system provides minute-to-minute ETA updates, Hello Screens will display the ETA within the specified brackets such as "Less than 15 minutes," "Less than 10 minutes," etc.

For example, if the default time brackets set for Tempo are 15, 10, 5, 2, and 1 minute(s), and a partner provides an ETA of 8 minutes, Hello Screens will display this as "Less than 10 minutes." This standardization helps maintain consistency in communication across different sources of ETA details and simplifies the information for your team.

The time brackets used by Tempo are configurable, if you need to update them to better align with your operational needs, just contact our team at [help@bluedot.io](mailto:help@bluedot.io).