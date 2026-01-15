# Geo-Triggering Webhook V2.1

:::info
**You're viewing an older version**

For the latest features and improvements, see the current version.

[View Latest Documentation](../Geo-triggering.md)
:::

---

Register Geo-trigger Webhooks to receive real-time Entry and Exit notifications from your customers.

## Selecting Webhooks Payload Version

When setting up webhooks from the dashboard, users can select the version of the Geo-triggering event payload. Follow these steps to select the version:

1. Navigate to the webhooks configuration section in the dashboard.
2. Select **Version 2.1** for the Geo-triggering event.
3. Save your changes.

![Webhook Version Selection](../../assets/Webhook%20-%20geotriggering%202.png)

## Geo-triggering event (V2.1)

The `2.1` version of the webhooks payload for Geo-triggering events includes a standardized structure that aligns with the Analytics API and SDK Entry and Exit events. This version provides additional data points for enhanced insights and uniformity, including destination custom data.

### What's Included in V2.1
- ✅ **Entry Events**: `eventType: "fenceEntered"`
- ✅ **Exit Events**: `eventType: "fenceExited"`
- ✅ **Destination Custom Data**: Access custom data in `zoneInfo.destination.customData`
- ✅ **Standardized Structure**: Aligned with Analytics API and SDK events
- ❌ **Dwell Events**: Not available (use V2.2 for Dwell events)

### Root Level Fields

This table lists the primary fields found at the root level of the payload.

| Field          | Description                                                   |
|----------------|---------------------------------------------------------------|
| `ulid`         | Unique identifier for the event.                              |
| `retryCount`   | The number of retry attempts for the webhook delivery.        |
| `triggerChainId` | Identifier for the chain of triggers leading to this event. |
| `notificationType` | Type of notification (e.g., entry, exit).                |
| `receivedAt`   | Timestamp when the event was received.                        |
| `submissionTime` | Timestamp when the event was submitted.                    |
| `accountId`    | Account identifier.                                           |
| `installRef`   | Reference ID for the installation.                            |
| `projectId`    | Project identifier.                                           |


### `appInfo` fields

This table details the fields within the `appInfo` object, providing information about the application.

| Field                                     | Description                                                                 |
|-------------------------------------------|-----------------------------------------------------------------------------|
| `appInfo.appBuildVersion`                 | Build version of the application.                                           |
| `appInfo.customEventMetaData`             | Custom metadata related to the event.                                        |
| `appInfo.customEventMetaData.[KEY]` | The value of the custom event data key/value pair.                                               |
| `appInfo.customerApplicationId`           | Application identifier.                                                     |
| `appInfo.minimumOSVersion`                | Minimum OS version supported by the application.                            |
| `appInfo.sdkVersion`                      | SDK version used by the application.                                        |


### `deviceInfo` fields

This table lists the fields within the `deviceInfo` object, containing details about the device.

| Field             | Description                           |
|-------------------|---------------------------------------|
| `deviceInfo.deviceType` | Type of device (e.g., iPhone14,7). |
| `deviceInfo.os`   | Operating system of the device.       |
| `deviceInfo.osVersion` | Operating system version of the device. |

### `zoneInfo` fields

This table provides information about the `zoneInfo` object, including details about the zone and destination.

| Field                                 | Description                                                 |
|---------------------------------------|-------------------------------------------------------------|
| `zoneInfo.customData`                 | Custom data related to the zone.                            |
| `zoneInfo.customData.[KEY]`         | The value of the zone custom data key/value pair.                    |
| `zoneInfo.destination`                | Destination information.                                    |
| `zoneInfo.destination.destinationId`  | Destination identifier.                                     |
| `zoneInfo.destination.location`       | Location details of the destination.                        |
| `zoneInfo.destination.location.latitude` | Latitude of the destination.                             |
| `zoneInfo.destination.location.longitude` | Longitude of the destination.                           |
| `zoneInfo.destination.name`           | Name of the destination.                                    |
| `zoneInfo.destination.customData`     | Custom data related to the destination (new in V2.1).       |
| `zoneInfo.destination.customData.[KEY]` | The value of the destination custom data key/value pair (new in V2.1). |
| `zoneInfo.id`                         | Zone identifier.                                            |
| `zoneInfo.name`                       | Name of the zone.                                           |

### `triggerEvents` fields

This table describes the fields within the `triggerEvents` array, detailing the events that triggered the notification.

| Field                                    | Description                                                                             |
|------------------------------------------|-----------------------------------------------------------------------------------------|
| `triggerEvents[].applicationState`       | State of the application at the time of the event.                                      |
| `triggerEvents[].applicationState.batteryLevel` | Battery level of the device at the time of the event.                              |
| `triggerEvents[].applicationState.blueBarEnabled` | Indicates if the Background Location Usage Indicator was enabled at the time of the event.                                               |
| `triggerEvents[].applicationState.lastRuleUpdate` | Timestamp of the last rule update.                                                  |
| `triggerEvents[].applicationState.locationPermission` | Location permission status of the application.                              |
| `triggerEvents[].applicationState.viewState` | View state of the application (foreground or background).                              |
| `triggerEvents[].destinationId`          | Identifier for the destination associated with the event.                              |
| `triggerEvents[].eventTime`              | Timestamp of the event.                                                                |
| `triggerEvents[].eventType`              | Type of the event (e.g., fenceEntered, fenceExited).                                   |
| `triggerEvents[].fenceId`                | Identifier for the geofence associated with the event.                                 |
| `triggerEvents[].fenceName`              | Name of the geofence associated with the event.                                        |
| `triggerEvents[].localEventTime`         | Local time of the event.                                                               |
| `triggerEvents[].locations`              | Array of location data associated with the event.                                      |
| `triggerEvents[].locations[].altitude`   | Altitude at the time of the event.                                                     |
| `triggerEvents[].locations[].bearing`    | Bearing at the time of the event.                                                      |
| `triggerEvents[].locations[].horizontalAccuracy` | Horizontal accuracy of the location data.                                            |
| `triggerEvents[].locations[].latitude`   | Latitude at the time of the event.                                                     |
| `triggerEvents[].locations[].longitude`  | Longitude at the time of the event.                                                    |
| `triggerEvents[].locations[].speed`      | Speed at the time of the event.                                                        |
| `triggerEvents[].locations[].time`       | Timestamp of the location data.                                                        |
| `triggerEvents[].locations[].verticalAccuracy` | Vertical accuracy of the location data.                                               |
| `triggerEvents[].triggerEngine`          | Engine used to trigger the event (e.g., bd).                                           |

## Additional Fields

In addition to the payload, there are additional fields included:

| Field                       | Description                                                                               |
|-----------------------------|-------------------------------------------------------------------------------------------|
| `additionalFields.body_field1` | Custom field for additional body fields.                                                   |
| `webhookUniqueId`           | Unique ID for the webhook, available when webhook retry is enabled.                      |

For more details on webhook retry, please refer to the [Webhooks Retry Documentation](../Webhooks%20retry.md).

## Webhooks Payload Example

```json
{
    "payload": {
        "ulid": "01J1GPFGJJPY1NXSM76WDFXQ59",
        "retryCount": 0,
        "appInfo": {
            "appBuildVersion": "5.2.0",
            "customEventMetaData": {
                "hs_orderId": "ORD-2024-1234",
                "hs_customerName": "Sarah Johnson"
            },
            "customerApplicationId": "com.coffeeshop.mobile",
            "minimumOSVersion": "15.0",
            "sdkVersion": "16.1.0"
        },
        "triggerChainId": "00093f0f-28e7-4128-a4b3-5576af71dae3",
        "notificationType": "entry",
        "receivedAt": "2024-06-29T00:31:48.294Z",
        "deviceInfo": {
            "deviceType": "iPhone14,2",
            "os": "iOS",
            "osVersion": "16.7.1"
        },
        "submissionTime": "2024-06-29T00:31:48.237Z",
        "zoneInfo": {
            "customData": {
                "storeRegion": "Northeast",
                "storeType": "Urban"
            },
            "destination": {
                "destinationId": "store-chicago-loop-001",
                "location": {
                    "longitude": -87.6298,
                    "latitude": 41.8781
                },
                "name": "Downtown Chicago Coffee Shop",
                "customData": {
                    "storeManager": "Mike Chen",
                    "driveThruLanes": "2",
                    "peakHours": "7-9am, 12-2pm"
                }
            },
            "id": "45f3a3be-c542-4dcd-aba7-20cb2e671e8a",
            "name": "Chicago Loop Pickup Zone"
        },
        "accountId": "acc-39a22449-cafe-4f2a-923c-1a78af012345",
        "installRef": "inst-557a54be-user-43ef-830c-3ef816cd6789",
        "triggerEvents": [
            {
                "applicationState": {
                    "batteryLevel": 75,
                    "blueBarEnabled": false,
                    "lastRuleUpdate": "2024-06-29T00:31:47.810Z",
                    "locationPermission": "always",
                    "viewState": "background"
                },
                "destinationId": "store-chicago-loop-001",
                "eventTime": "2024-06-29T00:31:48.221Z",
                "eventType": "fenceEntered",
                "fenceId": "fence-parking-lot-entrance",
                "fenceName": "Parking Lot Entrance",
                "localEventTime": "2024-06-28T19:31:48.221",
                "locations": [
                    {
                        "altitude": 180.5,
                        "bearing": 45,
                        "horizontalAccuracy": 8.5,
                        "longitude": -87.6298,
                        "latitude": 41.8781,
                        "speed": 5.2,
                        "time": "2024-06-29T00:31:48.155Z",
                        "verticalAccuracy": 3.2
                    }
                ],
                "triggerEngine": "bd"
            }
        ],
        "projectId": "proj-d12ee4ee-0f1a-4b58-b7f1-1c6ea3098abc"
    },
    "additionalFields": {
        "storeId": "CHI-001",
        "region": "midwest"
    },
    "webhookUniqueId": "webhook-0b816c7264a86200ce3523c48435b913d9d6b060"
}
```

---

## Version Comparison

| Feature                     | V2.1 (This Version) | V2.2 (Latest) |
| --------------------------- | ------------------- | ------------- |
| **Entry Events**            | ✅                   | ✅             |
| **Exit Events**             | ✅                   | ✅             |
| **Dwell Events**            | ❌                   | ✅             |
| **Destination Custom Data** | ✅                   | ✅             |
| **Crossed Fences Array**    | ❌                   | ✅             |
| **Standardized Structure**  | ✅                   | ✅             |

**When to use V2.1:**
- You only need Entry and Exit events
- You don't need Dwell event tracking
- Your integration is already built for V2.1

**When to upgrade to V2.2:**
- You need Dwell event support
- You want to track fence crossing history
- You're building a new integration

[View V2.2 Documentation](../Geo-triggering.md)

---

:::info
**Other Webhook Versions:**
- **Version 2.0**: Entry and Exit events without destination custom data. See [V2.0 Documentation](./Geo-triggering-v2-0.md)
- **Version 1.0**: Legacy structure. See [V1.0 Documentation](./Geo-triggering-v1-0.md)
:::
