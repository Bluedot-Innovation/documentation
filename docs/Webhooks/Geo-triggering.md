# Geo-Triggering Webhook

Register Geo-trigger Webhooks to receive real-time Entry, Exit, and Dwell notifications from your customers.

## Selecting Webhooks Payload Version

When setting up webhooks from the dashboard, users can select the version of the Geo-triggering event payload. The rest of the events remain unchanged. Follow these steps to select the version:

1. Navigate to the webhooks configuration section in the dashboard.
2. Select the desired version for the Geo-triggering event. We recommend using the latest version to access all available features.
3. Save your changes.

![](../assets/Webhook%20-%20geotriggering%202.png)

## Understanding Dwell Events

### What is a Dwell Event?

A Dwell event fires when a user remains within a geofence for a specified duration (dwell threshold). Unlike Entry and Exit events that fire when crossing a boundary, Dwell events fire based on time spent within the boundary.

## Geo-triggering event (V2.2)

The latest version of the webhooks payload for Geo-triggering events includes a standardized structure that aligns with the Analytics API and SDK Entry, Exit, and Dwell events. This version provides additional data points for enhanced insights and uniformity, including destination custom data and dwell event support.

### What's New in V2.2
- **Dwell Events**: Receive notifications when users remain within a geofence for a specified duration
- **Crossed Fences**: Track the history of fence crossings during a dwell event
- **Dwell Metrics**: Access `dwellThreshold` and `calculatedDwellTime` for dwell events
- **All V2.1 Features**: Includes destination custom data and standardized structure

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
| `zoneInfo.destination.customData`     | Custom data related to the destination (available in V2.1). |
| `zoneInfo.destination.customData.[KEY]` | The value of the destination custom data key/value pair (available in V2.1). |
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
| `triggerEvents[].dwellThreshold` | Duration in seconds that defines when a dwell event should fire. |
| `triggerEvents[].calculatedDwellTime` | Actual time in seconds the user has dwelled in the geofence. |
| `triggerEvents[].crossedFences` | Array of fences crossed during the dwell period (available for dwell events). |
| `triggerEvents[].crossedFences[].fenceId` | Identifier for the crossed fence. |
| `triggerEvents[].crossedFences[].fenceName` | Name of the crossed fence. |
| `triggerEvents[].crossedFences[].location` | Location data when the fence was crossed. |
| `triggerEvents[].crossedFences[].location.longitude` | Longitude at fence crossing. |
| `triggerEvents[].crossedFences[].location.latitude` | Latitude at fence crossing. |
| `triggerEvents[].crossedFences[].location.altitude` | Altitude at fence crossing. |
| `triggerEvents[].crossedFences[].location.horizontalAccuracy` | Horizontal accuracy at fence crossing. |
| `triggerEvents[].crossedFences[].location.verticalAccuracy` | Vertical accuracy at fence crossing. |
| `triggerEvents[].crossedFences[].location.bearing` | Bearing at fence crossing. |
| `triggerEvents[].crossedFences[].location.speed` | Speed at fence crossing. |
| `triggerEvents[].crossedFences[].location.time` | Timestamp of fence crossing. |
| `triggerEvents[].crossedFences[].crossTime` | Timestamp when the fence was crossed. |

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
    "notificationType": "dwell",
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
        "destinationId": "rezolve-id",
        "location": {
          "longitude": 144.123123123,
          "latitude": -33.123123123
        },
        "name": "Rezolve",
        "customData": {
          "StoreType": "Flagship",
          "Suburb": "Naperville",
          "MarketCode": "4567"
        }
      },
      "id": "45f3a3be-c542-4dcd-aba7-20cb2e671e8a",
      "name": "Rezolve zone"
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
        "destinationId": "rezolve-id",
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
        "triggerEngine": "bd",
        "crossedFences": [
          {
            "fenceId": "c87bfa51-505e-4c28-bfd9-215b1594e9c3",
            "fenceName": "Fence 0",
            "location": {
              "longitude": 144.123123123,
              "latitude": -33.123123123,
              "altitude": 100,
              "horizontalAccuracy": 12.232323,
              "verticalAccuracy": 12.232323,
              "bearing": -1,
              "speed": -1,
              "time": "2024-06-29T00:31:48.155Z"
            },
            "crossTime": "2024-06-29T00:31:48.221Z"
          },
          {
            "fenceId": "d98cfa62-616f-5d39-cge0-326c2705fa0d",
            "fenceName": "Fence 1",
            "location": {
              "longitude": 144.123456789,
              "latitude": -33.123456789,
              "altitude": 98,
              "horizontalAccuracy": 10.545454,
              "verticalAccuracy": 11.343434,
              "bearing": -1,
              "speed": -1,
              "time": "2024-06-29T00:35:22.456Z"
            },
            "crossTime": "2024-06-29T00:35:22.456Z"
          }
        ]
      },
      {
        "applicationState": {
          "batteryLevel": 40,
          "blueBarEnabled": false,
          "lastRuleUpdate": "2024-06-29T00:31:47.810Z",
          "locationPermission": "while_using",
          "viewState": "foreground"
        },
        "destinationId": "rezolve-id",
        "eventTime": "2024-06-29T00:41:48.221Z",
        "eventType": "dwell",
        "fenceId": "d98cfa62-616f-5d39-cge0-326c2705fa0d",
        "fenceName": "Fence 1",
        "dwellThreshold": 600,
        "calculatedDwellTime": 600,
        "localEventTime": "2024-06-28T20:41:48.221",
        "locations": [
          {
            "altitude": 98,
            "bearing": -1,
            "horizontalAccuracy": 10.545454,
            "longitude": 144.123456789,
            "latitude": -33.123456789,
            "speed": -1,
            "time": "2024-06-29T00:41:48.221Z",
            "verticalAccuracy": 11.343434
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
  "webhookUniqueId": "0b816c7264a86200ce3523c48435b913d9d6b060"
}
```


:::info
**Webhook Versions:**
Different versions of the Geo-triggering webhook payload are available to provide flexibility. For information about other versions, please refer to:
- **Version 2.1**: Entry and Exit events with destination custom data. See [V2.1 Documentation](./versions/Geo-triggering-v2-1.md)
- **Version 2.0**: Entry and Exit events without destination custom data. See [V2.0 Documentation](./versions/Geo-triggering-v2-0.md)
- **Version 1.0**: Legacy structure. See [V1.0 Documentation](./versions/Geo-triggering-v1-0.md)
:::

