Tempo
===============

Tempo allows active tracking of a user’s location, as well as live ETA estimation.

Start Tempo
-----------

For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Bluedot Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Bluedot CX representative. A foreground service notification is also required.

Tempo also requires Destination IDs to be defined, which [you can learn about here](../../../Tempo/Create%20your%20destinations.md).

To start Tempo, you should

```kotlin
if (ServiceManager.getInstance(context).isBluedotServiceInitialized()) {
    // The Bluedot SDK is initialized, you can start Tempo.
    
    TempoService.builder()
        .notificationId(myNotificationId)
        .notification(notificationReference)
        .destinationId("myDestinationId")
        .start(myApplicationContext, // This context should be the Application context
            (error) -> {
                if (error != null) {
                    // An error has occurred while starting Tempo.
                } else {
                    // Tempo has started successfully.
                }
            })
} else {
    // The Bluedot SDK is not initialized. Initialize before starting Tempo
}
```

Receiving Tempo events
----------------------

The Tempo service does not issue events under normal operation. Instead, it only issues events if there is an error with the operation. Tracking events are instead delivered via webhook, as configured in the Canvas UI.

```kotlin
class ExampleTempoReceiver : TempoTrackingReceiver() {
    // Called when there is an error that has caused Tempo to stop
    override fun tempoStoppedWithError(error: BDError, context: Context) {
        //error during Tempo     }
 }
```

The receiver must be registered in the app's manifest:
```xml title="AndroidManifest"
<application android:label="@string/app_name" \>
    <receiver
        android:name="my.package.ExampleTempoReceiver"
        android:enabled="true"
        android:exported="false"
     >
        <intent-filter>
           <action android:name="io.bluedot.point.TEMPO" />
        </intent-filter>
     </receiver>
 </application>
 ```

Stop Tempo
----------

Once the Tempo service is no longer needed, you can stop the service.

```kotlin
val tempoStopError: BDError? = TempoService.stop(myContext)
if (tempoStopError != null) {
    // An error occurred, the SDK or Tempo may not have been initialized correctly.
}
```