Best practices
==============

### **Communication Design: Server-to-Server Integration**

The Orders API is specifically designed for **server-to-server communication**, offering a secure and efficient way to manage orders in Hello Screens. This ensures that sensitive data, such as API Keys and order details, are kept secure within your server environment.

If your use case involves direct communication between clients (e.g., mobile apps or browsers) and Hello Screens, we recommend using the existing [**Wave API**](../Wave%20API/Overview.md). This API is tailored for client-facing integrations, ensuring security and optimised workflows in such scenarios.

### **API Key Management**

This section highlights best practices and specific capabilities around API Key usage for secure and efficient access.

#### **Scoped API Keys**

To improve security and control, API Keys can be scoped to specific projects. This ensures that a key only has access to the data it’s intended for, reducing the impact of key exposure.

**Recommendations:**

- **Generate Separate Keys for Each Project:** Use individual API Keys for different integrations or applications.
- **Restrict Permissions:** Assign keys to only the endpoints or resources required by your project.
- **Monitor Usage Per Key:** Track usage and revoke keys if they are no longer needed.

**Example:** If you manage two projects—**`Project A`** and **`Project B`**—generate separate API Keys for each project and ensure they only access their respective data.

---