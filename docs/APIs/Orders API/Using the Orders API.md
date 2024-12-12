Using the Orders API
====================

This section walks you through each endpoint of the Orders API, explaining its functionality and providing real-world examples to help you integrate it effectively into your workflows.

---

### **1. Create Order**

Use this endpoint to register a new order in Hello Screens when the **`orderId`** is unique and hasn’t been created within the last 24 hours. Ideal for initiating order tracking workflows.

**Endpoint:**

**`POST /orders`**

**Headers:**

- `x-bluedot-api-key`:  **`<your_api_key>`** (required)
- **`Content-Type`**: **`application/json`**

**Request Payload Example:**

```json
{
  "projectId": "1111111-2222-3333-4444-555555555555",
  "destinationId": "Store-001",
  "orderId": "1234",
  "customerName": "Alia Lopez",
  "eventType": "onTheWay",
  "hsFields": {
    "Mobile Number": "0411234567",
    "Car Model": "Hyndai Tucson",
    "Car Color": "White",
    "Car Plate": "NM1234",
    "Parking Bay": "1"
  },
  "customEventMetaData": {
    "Mobile Number": "0411234567",
    "Car Model": "Hyndai Tucson",
    "Car Color": "White",
    "Car Plate": "NM1234",
  }
}
```

**Response Example (Success):**

```json
{
	"destinationId": "south-yarra",
	"projectId": "0bf79864-e556-45f2-94c0-259a2f939033",
	"orderId": "1234",
	"userToken": "LaBpkkR",
	"status": "Registered",
	"customerName": "Alia Lopez",
	"hsFields": {
		"Mobile Number": "0411234567",
		"Car Model": "Hyndai Tucson",
		"Car Color": "White",
		"Car Plate": "NM1234",
		"Parking Bay": "1"
	},
	"lastUpdateTime": "2024-12-03T02:00:33.317Z",
	"lastTransitionTime": "2024-12-03T02:00:33.317Z",
	"isAcknowledged": false,
	"helloId": "8a883760-f9e1-4b62-9ea1-e8a215f5fb2e"
}
```

---

### **2. Update Order**

Use this endpoint to modify the details of an existing order, such as updating delivery information, item quantities, or the order’s status. Ensure the **`userToken`** matches the original order.

**Endpoint:**

**`PUT /orders/{orderId}`**

**Headers:**

- `x-bluedot-api-key`:  **`<your_api_key>`** (required)
- **`Content-Type`**: **`application/json`**

**Request Payload Example:**

In this request we’ll update the order previously created with a new `eventType` and `hsFields` details.

- `"eventType":"arrival"` to notify the store that the customer has arrived at the curbside parking area.
- Add the `"Parking Bay"` details in the `hsFields` to make this information available to store staff in Hello Screens.

```json
{
  "projectId": "1111111-2222-3333-4444-555555555555",
  "destinationId": "Store-001",
  "orderId": "1234",
  "customerName": "Alia Lopez",
  "eventType": "arrival",
  "hsFields": {
    "Parking Bay": "1"
  }
}
```

**Response Example (Success):**

```json
{
	"destinationId": "south-yarra",
	"projectId": "0bf79864-e556-45f2-94c0-259a2f939033",
	"orderId": "1234",
	"userToken": "LaBpkkR",
	"status": "Registered",
	"customerName": "Alia Lopez",
	"hsFields": {
		"Mobile Number": "0411234567",
		"Car Model": "Hyndai Tucson",
		"Car Color": "White",
		"Car Plate": "NM1234",
		"Parking Bay": "1"
	},
	"lastUpdateTime": "2024-12-03T02:00:33.317Z",
	"lastTransitionTime": "2024-12-03T02:00:33.317Z",
	"isAcknowledged": false,
	"helloId": "8a883760-f9e1-4b62-9ea1-e8a215f5fb2e"
}
```

---