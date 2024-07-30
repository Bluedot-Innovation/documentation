
# Geo-Triggering webhook

Register Geo-trigger Webhooks to receive real-time Entry/Exit notifications from your customers.

## Selecting Webhooks Payload Version

When setting up webhooks from the dashboard, users can select the version of the Geo-triggering event payload. The rest of the events remain unchanged. Follow these steps to select the version:

1. Navigate to the webhooks configuration section in the dashboard.
2. Select the desired version (`1.0` or `2.0`) for the Geo-triggering event.
3. Save your changes.

![](../assets/Webhook%20-%20geotriggering%202.png)

## Geo-triggering event (V2.0)

The `2.0` version of the webhooks payload for Geo-triggering events includes a standardized structure that aligns with the Analytics API and SDK Entry and Exit events. This version provides additional data points for enhanced insights and uniformity.

### Root Level Fields

This table lists the primary fields found at the root level of the payload.

| Field          | Description                                                   |
|----------------|---------------------------------------------------------------|
| `ulid`         | Unique identifier for the event.                              |
| `retryCount`   | The number of retry attempts for the webhook delivery.        |
| `triggerChainId` | Identifier for the chain of triggers leading to this event. |
| `notificationType` | Type of notification (e.g., exit).                       |
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
| `appInfo.customEventMetaData.[KEY]` | The key of the custom event data key/value pair.                                               |
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
| `zoneInfo.customData.[KEY]`         | The key of the zone custom data key/value pair.                    |
| `zoneInfo.destination`                | Destination information.                                    |
| `zoneInfo.destination.destinationId`  | Destination identifier.                                     |
| `zoneInfo.destination.location`       | Location details of the destination.                        |
| `zoneInfo.destination.location.latitude` | Latitude of the destination.                             |
| `zoneInfo.destination.location.longitude` | Longitude of the destination.                           |
| `zoneInfo.destination.name`           | Name of the destination.                                    |
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
| `additionalFields.body_field1` | Custom field for additional body fields.                                                     |                                               |
| `webhookUniqueId`           | Unique ID for the webhook, available when webhook retry is enabled.                      |

For more details on webhook retry, please refer to the [Webhooks Retry Documentation](./Webhooks%20retry.md).


## Webhooks Payload Example

```json
{
    "payload": {
        "ulid": "01J1GPFGJJPY1NXSM76WDFXQ59",
        "retryCount": 0,
        "appInfo": {
            "appBuildVersion": "5.2.0",
            "customEventMetaData": {
                "key1": "value 1",
                "key2": "value 2"
            },
            "customerApplicationId": "au.com.bluedot",
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
                "Country": "USA",
                "State": "Florida"
            },
            "destination": {
                "destinationId": "bluedot",
                "location": {
                    "longitude": 144.123123123,
                    "latitude": -33.123123123
                },
                "name": "Bluedot"
            },
            "id": "45f3a3be-c542-4dcd-aba7-20cb2e671e8a",
            "name": "Bluedot zone"
        },
        "accountId": "39a22449-0000-4f2a-923c-1a78af0000",
        "installRef": "557a54be-0000-43ef-830c-3ef816cd0000",
        "triggerEvents": [
            {
                "applicationState": {
                    "batteryLevel": 40,
                    "blueBarEnabled": false,
                    "lastRuleUpdate": "2024-06-29T00:31:47.810Z",
                    "locationPermission": "while_using",
                    "viewState": "foreground"
                },
                "destinationId": "bluedot",
                "eventTime": "2024-06-29T00:31:48.221Z",
                "eventType": "fenceEntered",
                "fenceId": "c87bfa51-505e-4c28-bfd9-215b1594e9c3",
                "fenceName": "Fence 0",
                "localEventTime": "2024-06-28T20:31:48.221",
                "locations": [
                    {
                        "altitude": 100,
                        "bearing": -1,
                        "horizontalAccuracy": 12.232323,
                        "longitude": 144.123123123,
                        "latitude": -33.123123123,
                        "speed": -1,
                        "time": "2024-06-29T00:31:48.155Z",
                        "verticalAccuracy": 12.232323
                    }
                ],
                "triggerEngine": "bd"
            }
        ],
        "projectId": "d12ee4ee-0f1a-4b58-b7f1-1c6ea3098gs"
    },
    "additionalFields": {
        "body_field1": "value 1",
        "body_field2": "value 2"
    },
    "webhookUniqueId": "0b816c7264a86200ce3523c48435b913d9d6b060" // only available when webhook retry is enabled
}
```


:::info
For information about the `1.0` version of the webhooks payload for Geo-triggering events, please refer to the [Geo-triggering Webhooks Version 1.0 Documentation](./V1/Geo-triggering-v1.md)
:::

For further assistance, please contact us at help@bluedot.io.
