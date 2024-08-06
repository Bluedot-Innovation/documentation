Features
=====================

*   Custom Event Metadata
*   Enable / Disable Zones
*   Android features
    *   Foreground Notification
*   iOS features
    *   App Restart Notification

Custom Event Metadata
---------------------

Custom event metadata is a feature which is available in the Bluedot Point SDK for our customers to set additional event-specific metadata to our location events. For further information refer to [Custom Event Metadata](../../Custom%20Data.md)

It is recommended to set the Custom Event Meta Data before starting GeoTriggering or Tempo.

:::info
Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error as: Only 20 CustomEventMetaData fields are allowed.
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

### Foreground Notification

Given the restrictions on accessing location data from the background, it is recommended that the Geo-triggering service be run as a foreground service, and the Tempo service must be run as a foreground service. For more information refer to [Android – Location Permission & Notifications Best Practices](../Android/Location%20Permission%20&%20Notifications%20Best%20Practices.md)

The Foreground Notification method (`androidNotification`) is included in the `GeoTriggeringBuilder` and the `TempoBuilder` classes. It should be set up before starting any of the Geo-triggering or Tempo services as below.

**Geo-triggering**
```js
const geoTriggeringService = new BluedotPointSdk.GeoTriggeringBuilder()

geoTriggeringService
  .androidNotification(
    "notification channel Id", 
    "notification channel name",
    "notification title",
    "notification content",
    "notification ID" // optional
  )
  .start(
    () => console.log("On success callback"),
    (error) => console.error("On error callback")
  )
```

**Tempo**
```js
const tempoService = new BluedotPointSdk.TempoBuilder()

tempoService
  .androidNotification(
    "notification channel Id",
    "notification channel name"
    "notification title", 
    "notification content",
    "notification ID" // optional
  )
  .start(
    () => console.log("On success callback"),
    (error) => console.error("On error callback")
  )
```

iOS Features
------------

### App Restart Notification

Bluedot Point SDK includes a method for apps to display app restart notification to user after app termination. For further details refer to [iOS Features – App restart](../iOS/Features/App%20restart%20notification.md)

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