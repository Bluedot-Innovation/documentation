Features
=====================

*   Custom Event Metadata
*   Enable / Disable Zones
*   Android features
    *   Foreground Service
*   iOS features
    *   App Restart Notification

Custom Event Metadata
---------------------

Custom event metadata is a feature which is available in the Rezolve Point SDK for our customers to set additional event-specific metadata to our location events. For further information refer to [Custom Event Metadata](../../Custom%20Data.md)

It is recommended to set the Custom Event Meta Data before starting GeoTriggering or Tempo.

:::info
Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Rezolve Point SDK throws an error as: Only 20 CustomEventMetaData fields are allowed.
:::

```js
BluedotPointSdk.setCustomEventMetadata({
  orderId: "order_123",
  storeId: "store_456",
  customerId: "789"
})
```

Enable / Disable Zones
----------------------

An app may optionally disable (and later re-enable) Zones by calling `setZoneDisableByApplication`. For further information refer to Enable or disable Zones documentation ([Android](../Android/Features/Enable%20or%20disable%20zones.md) | [iOS](../iOS/Features/Enable%20or%20disable%20zones.md)) 

```js
const zoneIdToDisable = "your_zone_id";
const disableZone = true;
```

BluedotPointSdk.setZoneDisableByApplication(zoneIdToDisable, disableZone);

If you want to check if a Zone is enabled or disabled you can use the method `isZoneDisablebyApplication` as below

```js
const zoneIdToDisable = "your_zone_id";

BluedotPointSdk.isZoneDiableByApplication(zoneIdToDisable)
  .then(isDisable => {
    if (!isDisable) {
      BluedotPointSdk.setZoneDisableByApplication(zoneIdToDisable, true)
    }
  })
  .catch(error => console.error('Error', error))
```


Android Features
----------------

### Foreground Service

Given the restrictions on accessing location data from the background, it is recommended that the Geo-triggering service be linked to a foreground service for low-latency updates, and the Tempo service **requires** a linked foreground service to start.

Since plugin version `4.0.0`, the plugin no longer declares, starts, or owns a foreground service notification itself (the `androidNotification` builder method has been removed from both `GeoTriggeringBuilder` and `TempoBuilder`). Ownership of the foreground service moved to your app: your app declares its own `<service>` in the Android manifest, starts it, displays its own persistent notification, and links it to the SDK via `ServiceManager.getInstance(context).linkForegroundService()` (native) or `BluedotPointSDK.linkForegroundService()` (JS).

*   **GeoTriggering** runs in background-worker mode with or without a linked foreground service — linking is optional and only reduces location-update latency.
*   **Tempo** fails to start if no foreground service is linked.
*   There is a single, shared link state — if your app uses both GeoTriggering and Tempo, they share one linked service.

For full setup instructions — including Android manifest changes, implementing your own foreground service, and linking it to the SDK — refer to the [Migration guide to 4.0.0](./Migration%20Guides/Migration%20guide%20to%204.0.0.md).

iOS Features
------------

### App Restart Notification

Rezolve Point SDK includes a method for apps to display app restart notification to user after app termination. For further details refer to [iOS Features – App restart](../iOS/Features/App%20restart%20notification.md)

The App restart method (`iOSAppRestartNotification`) is included in the `GeoTriggeringBuilder`. It should be set up before starting Geo-triggering. 

:::info
This feature is **not available in Tempo.**
:::

```js
const geoTriggeringService = new BluedotPointSdk.GeoTriggeringBuilder()

geoTriggeringService
  .iOSAppRestartNotification(
    "notification title", 
    "button text content"
  )
  .start(
    () => console.log("On success callback"),
    (error) => console.error("On error callback")
  )
```