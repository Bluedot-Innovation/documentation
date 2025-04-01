# Migration Guide: Transitioning from Wave API to Orders API

## **1. Introduction**

The Orders API is designed to complement and enhance the functionality provided by the Wave API. While both APIs will coexist, the Orders API introduces significant improvements in flexibility, feedback mechanisms, and streamlined workflows for order registration and management. This guide aims to help you transition to the Orders API by outlining key differences, advantages, and migration steps.

Migrating to the Orders API allows you to take advantage of the following enhancements:

- **Improved Authentication:** Orders API requires a dedicated API Key generated from the Canvas Dashboard, replacing the `x-bluedot-api-key` header used in Wave API.
- **Enhanced Metadata Structure:** Metadata is now split into `hsFields` (store staff visibility) and `customEventMetaData` (backend processing), improving flexibility and clarity.
- **Simplified Updates:** Orders API eliminates the need for a `userToken` for modifications, allowing updates directly with the API Key.
- **Comprehensive Scheduling Support:** Scheduling and partner pickup times are now handled more explicitly, with dedicated fields for better clarity and alignment.
- **Real-Time Feedback:** The Orders API provides detailed feedback when requests cannot be processed, helping developers quickly identify and address issues.

---

## **2. Key Differences Between Wave API and Orders API**

| **Feature** | **Wave API** | **Orders API** |
| --- | --- | --- |
| **Authentication** | Requires `x-bluedot-api-key` header (value is `projectId`). | Requires `x-bluedot-api-key` header with an API Key generated from Canvas. |
| **Project ID** | Used as the API key value. | Required field in the payload. |
| **Order Updates** | Requires `userToken` for modifications. | Directly updated using an API Key. |
| **Scheduling** | Handled via `hs_scheduledTimeForCollection` in `customEventMetaData`. | Handled via `scheduledTimeForCollection` field at the root level. |
| **Partner Pickup Time** | Managed via `hs_partnerPickupTime` in `customEventMetaData`. | Managed via `partnerPickupTime` field at the root level and event type `partnerOnTheWay` |
| **Metadata Handling** | Metadata stored in `customEventMetaData` with `hs_` prefixes. | Splits metadata into `hsFields` (staff-visible) and `customEventMetaData` (backend). |

## **3. Migration Steps**

### **Prerequisites**

- Obtain an API Key for Orders API from the Canvas Dashboard (More details [here](../../Canvas/API%20Keys%20management.md)).
- Review the [Orders API documentation](./Overview.md).
- Update your application to accommodate new endpoints and authentication methods.

### **Step 1: Update Authentication**

The first step in migrating to the Orders API is updating the authentication method. Unlike the Wave API, which used your project ID as the API key, the Orders API requires a dedicated API Key that must be generated from the Canvas Dashboard.

For detailed instructions on generating and using your API Key, see the [Authentication section](./Getting%20started.md#authentication) in the Getting Started guide.

2. **Update Your Requests:**
   Replace the `x-bluedot-api-key` header with your new API Key:

- **Wave API Example:**
    
    ```bash
    "x-bluedot-api-key": "<projectId>"
    ```
    
- **Orders API Example:**
    
    ```bash
    "x-bluedot-api-key": "<Your_API_Key>"
    ```

:::info
Your existing project ID won't work for authentication - make sure to use an API Key generated from Canvas instead.
:::

### **Step 2: Update Order Registration Payload**

Adapt the payload structure to fit the Orders API format, ensuring proper field mapping.

| **Wave API Payload** | **Orders API Payload** |
| --- | --- |
| `customEventMetaData` stores metadata. | Metadata divided into `hsFields` and `customEventMetaData`. |
| `eventType` used as a field within `customEventMetaData`. | `eventType` is now a top-level field. |
| Scheduling handled via `hs_scheduledTimeForCollection`. | Scheduling handled via `scheduledTimeForCollection`. |
| Partner pickup time handled via `hs_partnerPickupTime`. | Partner pickup time handled via `partnerPickupTime` and event type `partnerOnTheWay` |

### **Step 3: Scheduling Orders**

In the Wave API, scheduling orders is handled using `hs_scheduledTimeForCollection` within `customEventMetaData`. In the Orders API, scheduling is elevated to a dedicated `scheduledTimeForCollection` field at the root level, simplifying and standardising the process

- **Wave API Scheduling Example:**
    
    ```json
    {
      "destinationId": "dest-id",
      "customEventMetaData": {
        "hs_Customer Name": "Customer Name",
        "hs_scheduledTimeForCollection": "2023-12-31T12:00:00.000Z",
        "eventType": "registration",
        "hs_orderId": "Order123"
      },
      "eventTime": "2023-12-31T12:00:00.000Z"
    }
    ```
    
- **Orders API Scheduling Example:**
    
    ```json
    {
      "destinationId": "Store-001",
      "orderId": "12345678",
      "projectId": "your-project-id",
      "eventType": "registration",
      "scheduledTimeForCollection": "2023-12-31T12:00:00.000Z",
      "customerName": "John Doe",
      "hsFields": {
        "Mobile Number": "0412345678"
      }
    }
    ```
    

### **Step 4: Update Partner Pickup Time Handling**

When handling partner pickup times in the Orders API, the `partnerPickupTime` field must be set at the root level. Additionally, the `eventType` must be explicitly set to `partnerOnTheWay`. If the `eventType` is omitted or incorrect, the update will fail with an error.

- **Wave API Example:**
    
    ```json
    {
      "destinationId": "dest-id",
      "userToken": "ab45DE7",
      "customEventMetaData": {
        "hs_Customer Name": "Emma Goldman",
        "hs_partnerPickupTime": "2024-03-04T05:15:00.000Z",
        "eventType": "partnerOnTheWay",
        "hs_orderId": "Order22"
      }
    }
    ```
    
- **Orders API Example:**
    
    ```json
    {
      "destinationId": "Store-001",
      "orderId": "Order22",
      "projectId": "your-project-id",
      "eventType": "partnerOnTheWay",
      "partnerPickupTime": "2024-03-04T05:15:00.000Z",
      "customerName": "Emma Goldman",
      "hsFields": {
        "Car Plate": "ABC123"
      }
    }
    ```
    

### **Step 6: Grouping Orders**

In the Wave API, order grouping is achieved using the `hs_orderGroupId` field within `customEventMetaData`. Orders are grouped on Hello Screens when at least two orders share the same `hs_orderGroupId` within the same day. This grouping resets daily, so only orders from the current day are considered.

In the Orders API, grouping is managed using the `orderGroupId` field, now located within `hsFields`. This improves clarity and aligns with the Orders API’s metadata structure.

- **Wave API Grouping Example:**
    
    ```json
    {
      "destinationId": "dest-id",
      "userToken": "ab45DE7",
      "customEventMetaData": {
        "hs_Customer Name": "Mark Herrera",
        "hs_orderGroupId": "abc123",
        "eventType": "onTheWay",
        "hs_orderId": "Order 1"
      }
    }
    ```
    
- **Orders API Grouping Example:**
    
    ```json
    {
      "destinationId": "Store-001",
      "orderId": "Order1",
      "projectId": "your-project-id",
      "eventType": "onTheWay",
      "customerName": "Mark Herrera",
      "hsFields": {
        "orderGroupId": "abc123"
      }
    }
    ```
    