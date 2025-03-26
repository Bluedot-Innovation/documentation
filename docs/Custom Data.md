---
pagination_next: null
pagination_prev: null
---

# Custom Data Documentation

## Overview
Custom data in Bluedot products can be applied in four different contexts: SDK events, Wave API, Zones, and Destinations (Stores). Each type serves unique purposes:

1. **SDK Event Custom Data**: Ideal for adding details about the user, such as `external_customer_id`, `loyalty_number`, or `vehicle_plate`, enhancing user analytics and event tracking.
2. **Zone Custom Data**: Perfect for attaching information about the location or geofence, like `store_id`, `store_type`, `state`, or `dma_region`, enabling contextual event triggering.
3. **Wave API Custom Data**: Enhances order information, particularly useful for managing orders in Hello Screens.
4. **Destination (Store) Custom Data**: Lets you add specific information about your stores that will show up in webhooks and can be used for analytics and decision-making.

Understanding these differences allows for tailored implementations that best fit your application needs.

## Custom Data in SDK Events

### Description
Custom Event Metadata allows developers to attach additional information to SDK events, such as user-specific data, enhancing user analytics and event tracking.

:::info
Maximum 20 entries can be set in custom event metadata. If more than 20 entries are set, Bluedot SDK throws an error as: Only 20 CustomEventMetaData fields are allowed.
:::

### Usage Guidelines
1. **Setting Metadata:**
   - Should be set in the application (not in Activity/ViewController) before starting Geo-Triggering or Tempo.
   - Avoid setting metadata in custom action callbacks as these events might be processed immediately.

### Implementation

#### Android
```java
Map<String, String> eventMetaData = new HashMap<>();
eventMetaData.put("key1", "value1");
eventMetaData.put("key2", "value2");
ServiceManager.getInstance(context).setCustomEventMetaData(eventMetaData);
```

Detailed informaion the `setCustomEventMetaData` API can be found in the [Android SDK documentation](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine/-service-manager/set-custom-event-meta-data.html).

#### iOS
```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    BDLocationManager.instance()?.setCustomEventMetaData(["DeviceName" : UIDevice.current.name])
    BDLocationManager.instance()?.initialize(withProjectId: "MyProjectId") { error in
        guard error == nil else {
            print("Initialisation with Bluedot SDK failed \(error!.localizedDescription)")
            return
        }
    }
    return true
}
```

Detailed informaion the `setCustomEventMetaData` API can be found in the [iOS SDK documentation](https://ios-docs.bluedot.io/Classes/BDLocationManager.html#/c:objc(cs)BDLocationManager(im)setCustomEventMetaData:).

:::info
The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. The Custom Event Metadata can be set at any time, although we suggest setting the custom data before starting GeoTriggering or Tempo.
:::

## Custom Data in Wave API

### Description
Wave API allows the enhancement of order information with custom data, which is particularly useful for managing orders in Hello Screens.

### Implementation

#### Example Request
To display custom data on Hello Screens, prefix the custom data keys with `hs_`. Both `hs_` and non-`hs_` fields can be included in the same request.

```json
{
    "order_id": "12345",
    "custom_data": {
        "hs_Customer Name": "Mark Lee",
        "hs_Vehicle Plate": "abc123",
        "priority": "high",
        "delivery_time": "12:00 PM"
    }
}
```

For more information please refer to the [Wave API documentation](https://events-docs.bluedot.io/#tag/wave/operation/postWaveEvents).

## Custom Data in Zones

### Description
Zone Custom Data is used to attach specific information to geographical zones, triggering contextual events based on location. This can be done through Canvas. Check the [Zone Custom Data](./Canvas/What%20is%20Zone%20custom%20data.md) documentation for more details.

### Implementation
You could also use Config API to set Zone Custom Data. For more details please refer to [Config API documentation](https://config-docs.bluedot.io/#tag/zones/operation/addZone).

#### Example 
```json
{
    "zone_id": "zone123",
    "custom_data": {
        "store_id": "city_plaza_123",
        "store_type": "drive-tru",
        "campaign_id": "camp456"
    }
}
```

## Custom Data in Destinations (Stores)

### Description
Destination Custom Data lets you link specific information to your stores (destinations). This data shows up in all webhook events, making it easier to make more advance analytics based on store details.

### Implementation
You could also use Config API to set Zone Custom Data. For more details please refer to [Config API documentation](https://config-docs.bluedot.io/#tag/destinations/operation/addDestination).

### Example

```json
{
  "zoneInfo": {
    "destination": {
      "destinationId": "store123",
      "name": "Main Street Store",
      "customData": {
        "storeHours": "9AM-9PM",
        "storeType": "drive-thru",
        "region": "Northeast"
      }
    }
  }
}
```

If you have any questions please contact our team at [help@bluedot.io](mailto:help@bluedot.io)