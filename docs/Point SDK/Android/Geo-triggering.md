Geo-triggering
========================

Start Geo-triggering
--------------------

Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline™). For this capability, the SDK needs to be initialized and the app must have location permission. For many use cases, a foreground service notification is also recommended.

To start Geo-triggering, you should create and start the [GeoTriggeringService](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-geo-triggering-service/index.html).


### Start with Foreground Service Norification

To achieve optimal performance of the SDK, we recommend initiating the Geo-triggering service with the Foreground Service Notification.

```kotlin
if (ServiceManager.getInstance(context).isBluedotServiceInitialized()) {
    // The Bluedot SDK is initialized, you can start Geo-triggering.

    GeoTriggeringService.builder()
            .notification(notificationReference) // Notification to use to run Geo-triggering as a foreground service.
            .notificationId(myNotificationId) // Optional id to use for foreground service notification. Use if your app will 
                                              // run additional foreground services, or you wish to update the notification.
            .start(myApplicationContext, // This context should be the Application context.
                   error -> {
                       if (error != null) {
                           // Something went wrong when starting Geo-triggering. Handle error here.
                           return;
                       }
                       // Geo-triggering has started successfully. Handle success here.
                   });
} else {
    // The Bluedot SDK is not initialized. Initialize before starting Geo-triggering.
}
```


### Start without the Foreground Service Notification

In scenarios where the Foreground Service Notification is not required, you can start the Geo-triggering service as demonstrated below. For guidance on when to use this approach, please consult your Customer Experience (CX) representative.
 

```kotlin
if (ServiceManager.getInstance(context).isBluedotServiceInitialized()) {
    // The Bluedot SDK is initialized, you can start Geo-triggering.

    GeoTriggeringService.builder()
        .start(myApplicationContext, // This context should be the Application context.
            error -> {
                if (error != null) {
                    // Something went wrong when starting Geo-triggering. Handle error here.
                    return;
                }
                // Geo-triggering has started successfully. Handle success here.
            });
} else {
    // The Bluedot SDK is not initialized. Initialize before starting Geo-triggering.
}
```

:::info
To learn more about the Foreground Service Notification check the [Foreground service and persistent notification documentation](./Location%20Permission%20&%20Notifications%20Best%20Practices.md#foreground-service-and-persistent-notification)
:::

Receiving Geo-trigger events
----------------------------

Create a receiver in the Manifest to receive geo-trigger events (such as entering a location):

```xml title="AndroidManifest"
<application android:label="@string/app_name" >
     <receiver
        android:name="my.package.ExampleGeoTriggerReceiver"
        android:enabled="true"
        android:exported="false"
     >
        <intent-filter>
           <action android:name="io.bluedot.point.GEOTRIGGER" />
        </intent-filter>
     </receiver>
 </application>
 ```

```kotlin
class ExampleGeoTriggerReceiver : GeoTriggeringEventReceiver() {
    override fun onZoneInfoUpdate(zones: List<ZoneInfo>, context: Context) {
        // Notification that the local cache of zones has been updated.
     }
 
    override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {
        // Notification that a zone has been entered/Geoline™ crossed.
     }
 
     override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {
        // Notification that an exit detection-enabled zone has been exited.
     }   
 }
 ```

Stop Geo-triggering
-------------------

If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service.

```kotlin
GeoTriggeringService.stop(myContext, error -> { 
    if (error != null) {
        // Something went wrong stopping Geo-triggering. Handle error here.
        return;
    }
    
    // Geo-triggering stopped successfully. Handle success here.
});
```

Geo-triggering start and stop status are provided through callbacks on the  [`geoTriggeringStatusListener`](https://android-docs.bluedot.io/-bluedot-s-d-k/au.com.bluedot.point.net.engine/-geo-triggering-status-listener/index.html), implemented as lambda functions in the above examples.