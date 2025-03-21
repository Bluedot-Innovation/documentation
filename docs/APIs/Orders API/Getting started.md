Getting started
===============

Before you can start using the Orders API, there are a few setup steps to complete. This section will guide you through:

- Authenticating your requests using API Keys.
- Setting up your environment with the appropriate base URL.
- Configuring headers and parameters.

### **Authentication**

The Orders API uses API Key-based authentication to secure your requests. Here's how it works:

1. **Generate an API Key:**
    - Navigate to the **Canvas** dashboard.
    - Go to the **API Management** section and create an API Key for the Orders API (Admin permissions required).
    - Save the API Key securely; you'll need it for all requests.
    
    For more details about managing API keys, see the [API Keys documentation](../../Canvas/API%20Keys%20management.md).
    
2. **Include the API Key in Requests:**
    - Add the API Key to the **`x-bluedot-api-key`** header of your requests:
        
        ```makefile
        "x-bluedot-api-key": <your_api_key>
        ```
        
3. **Revoking API Keys:**
    - If an API Key is compromised or no longer needed, you can revoke it in the Canvas. Deleted keys will no longer grant access.

### **Base URLs**

The Orders API provides region-specific endpoints to optimise performance and comply with regional regulations. Use the URL that matches your account's region:

- **US Region: `https://us1-orders.bluedot.io`**
- **EU Region: `https://eu1-orders.bluedot.io`**
- **APAC Region: `https://au1-orders.bluedot.io`**

Make sure you’re using the correct URL for your region to avoid errors.

### **Headers and Common Parameters**

To ensure your requests are processed correctly, include the following headers in every request:

- **Authorization:** Your API Key (required).
- **Content-Type:** Always set to **`application/json`** for request payloads.
- **Accept:** Recommended value is **`application/json`**.

Example:

```
POST /orders
Host: us1-orders.bluedot.io
Authorization: Bearer <your_api_key>
Content-Type: application/json
Accept: application/json
```