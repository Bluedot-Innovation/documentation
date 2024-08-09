DoorDash Integration
====================

The DoorDash integration with Hello Screens enhances your store's ability to manage deliveries effectively by providing real-time updates on dasher ETAs and arrival statuses. This integration ensures that your order management process is seamless, with continuous updates that help store staff prepare orders just in time for pickup, reducing wait times and improving customer satisfaction.


### Enable the Integration in Hello Screens:

- Navigate to the Integrations section in Canvas.
- Enable the DoorDash integration.
- Copy the provided Webhook URL and Authorization token. These will be used later in the DoorDash Developer Portal.

(Consider placing a screenshot here of the Canvas interface showing where to find the Webhook URL and Authorization token)

### Configure Webhooks in DoorDash Developer Portal:

- Log in to the DoorDash Developer Portal.
- Navigate to Webhooks.
- Click Add Webhook and paste the Webhook URL copied from Canvas.
- Set the Authorization Type to "Basic" and enter the Authorization token.
- Select the environment (Sandbox or Production) and save.

(Consider adding a screenshot here of the DoorDash Webhooks page with the "Basic" Authorization type selected and the fields highlighted)

To learn more about setting up webhooks in DoorDash, check the [DoorDash documentation](https://developer.doordash.com/en-US/docs/drive/how_to/webhooks/).

### Event Handling in Hello Screens:

- `DASHER_CONFIRMED`: When this event is received, the order is registered in Hello Screens, ensuring that the store is aware of the upcoming delivery from the start. This marks the beginning of the order tracking process in the system.

- `dasher_enroute_to_pickup`: As this event is received every 30 seconds, Hello Screens updates the order ticket with the dasher’s latest ETA. This allows the store staff to precisely time the preparation of the order, reducing the chance of delays and ensuring that the order is ready when the dasher arrives.

- `DASHER_CONFIRMED_PICKUP_ARRIVAL`: Once this event is received, the order ticket in Hello Screens is updated to "Arrived." This status change immediately notifies staff that the dasher is at the pickup location, prompting them to hand off the order without delay.

To explore additional features and configuration options, please refer to the [Hello Screens documentation](../Hello%20Screens/Overview.md).