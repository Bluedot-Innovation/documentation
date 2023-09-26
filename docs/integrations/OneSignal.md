OneSignal integration
=====================

Combine the power of Bluedot’s arrival and location awareness technology with OneSignal’s customer engagement solution for Push Notifications, Email, SMS & In-App to enable intelligent messaging for your customers based on real world events.

Our OneSignal integration updates the tags of OneSignal users to provide information about the event such as the target zone or destination, the event time, and the time to reach the destination for [Tempo](../Tempo/Overview.md) events. These can then be used to place users in OneSignal segments that can trigger message actions.  

Tags passed to OneSignal
------------------------

The following tags will be updated on the target OneSignal user (identified by the OneSignal `external_user_id`). Not all event types contain all the information, and so tags will be sent where available or sent as an empty string to ensure the latest tags represent only the latest event.

For a Geo-trigger entry or exit event the following information will be sent:
```json
{
    "bluedot_type": "entry", // Or "exit"
    "bluedot_eventTime": 1655345540, // Timestamp in Unix format
    "bluedot_zoneName": "Melbourne Cricket Ground", // The Zone name from Canvas
    "bluedot_destinationId": "abc123", // If the zone is linked to a destinationId, otherwise ""
    "bluedot_source": "iOS", // Or "android"
    "bluedot_tempoETA": ""
}
```

For a Tempo event the following information will be sent:
```json
{
    "bluedot_type": "tempo",
    "bluedot_eventTime": 1655345540, // Timestamp in Unix format
    "bluedot_zoneName": "Melbourne Cricket Ground", // The Zone name from Canvas
    "bluedot_destinationId": "abc123", // The destinationId set in Canvas
    "bluedot_source": "iOS", // Or "android"
    "bluedot_tempoETA": 600 // The estimated time to destination in seconds
}
```

And for a Wave event the following information will be sent:
```json
{
    "bluedot_type": "wave", // Or if the wave event contains an eventType, the event type eg "onTheWay" or "arrival"
    "bluedot_eventTime": 1655345540, // Timestamp in Unix format
    "bluedot_zoneName": "", // Not available for Wave events
    "bluedot_destinationId": "abc123", // The destinationId set in Canvas
    "bluedot_source": "web",
    "bluedot_tempoETA": ""
}
```
Setting up the OneSignal integration
------------------------------------

  
Before you begin the integration please ensure you have an active customer account with both Bluedot & OneSignal.

![](../assets/Screen-Shot-2022-06-16-at-12.48.58-pm.png)

  

1.  For Geo-trigger or Tempo events, ensure you have integrated the Bluedot SDK into your mobile app (this can be skipped for Wave events):

2.  [Android integration guide](../Point%20SDK/Android/Quick%20Start.md)
3.   [iOS integration guide](../Point%20SDK/iOS/Quick%20Start.md)

4.  Add your OneSignal `appId` via the Integrations > OneSignal section in Canvas.
5.  Select the event types you would like to be passed to OneSignal and click ‘Add’.
6.  When sending events via the Bluedot SDK or via the Wave API/Web SDK, ensure the `oneSignalExternalUserId` is included in the Custom Event Metadata (see below)

Once these steps are done, the integration is ready to go. Simply send a Wave, enter a geofence, or start a Tempo journey with a mobile device to trigger the Zone.

Custom Event Metadata in Bluedot events
---------------------------------------

To send events to Segment you’ll need to include the `external_user_id` in the [Custom Event Metadata](../Custom%20Event%20Metadata.md) of the event. Make sure to name the property `oneSignalExternalUserId`.  
An example will be: `"oneSignalExternalUserId": "<YOUR ONESIGNAL EXTERNAL USER ID>"`

:::info
The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. We suggest setting the custom data every time the SDK is authenticated in the app.
:::