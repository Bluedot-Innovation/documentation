Tempo
===============

Tempo allows active tracking of a user’s location, as well as live ETA estimation.

Start Tempo
-----------

For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Rezolve Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Rezolve CX representative. **A linked foreground service is required** - Tempo will not start without one.

Tempo also requires Destination IDs to be defined, which [you can learn about here](../../Tempo/Create%20your%20destinations.md).

:::info
As of SDK 19.0.0, the SDK no longer owns a foreground service for Tempo. Your app must declare, start, and display the notification for its own foreground service, then call `ServiceManager.getInstance(context).linkForegroundService()` once that service is running. Calling `TempoService.builder().start(...)` with no foreground service linked fails synchronously with a new `ForegroundServiceNotLinkedError`. See the [Migration Guide to Point SDK V19.0.0 for Android](./Migration%20Guides/Migration%20guide%20to%20SDK%2019.0.0%20for%20Android.md) if you are upgrading from an earlier version.
:::

To start Tempo, start (or reuse) and link your own foreground service first, then start Tempo once linking is confirmed:

```kotlin
if (ServiceManager.getInstance(context).isBluedotServiceInitialized()) {
    // The Rezolve Point SDK is initialized, you can start Tempo.

    startYourForegroundServiceAndWaitForLink { linkError ->
        if (linkError != null) {
            // surface the failure / revert optimistic UI
            return@startYourForegroundServiceAndWaitForLink
        }

        TempoService.builder()
            .destinationId("myDestinationId")
            .start(myApplicationContext, // This context should be the Application context
                (error) -> {
                    if (error != null) {
                        // An error has occurred while starting Tempo.
                    } else {
                        // Tempo has started successfully.
                    }
                })
    }
} else {
    // The Rezolve Point SDK is not initialized. Initialize before starting Tempo
}
```

:::info
To learn more about implementing your own foreground service check the [Foreground service and persistent notification documentation](./Location%20Permission%20&%20Notifications%20Best%20Practices.md#foreground-service-and-persistent-notification)
:::

Receiving Tempo events
----------------------

The Tempo service emits [TempoTrackingUpdate](https://android-docs.bluedot.io/-rezolve%20-point%20-s-d-k/au.com.bluedot.point.net.engine.event/-tempo-tracking-update/index.html) which are tracking events with eta, etaDirection and [destination](https://android-docs.bluedot.io/-rezolve%20-point%20-s-d-k/au.com.bluedot.ruleEngine.model.rule/-destination/index.html) of the Tempo enabled store. 
To receive the TempoUpdateEvents and any Errors during the operation. You must extend 
[TempoTrackingReceiver](https://android-docs.bluedot.io/-rezolve%20-point%20-s-d-k/au.com.bluedot.point.net.engine/-tempo-tracking-receiver/index.html) Receiver and override below functions.


```kotlin
class ExampleTempoReceiver : TempoTrackingReceiver() {

   // Called with every tempotrackingUpdate received by device from backend with TempoTrackingUpdate
    override fun onTempoTrackingUpdate(tempoTrackingUpdate: TempoTrackingUpdate, context: Context) {
      // TempoTrackingUpdate class with eta, etaDirection and destination
    }

    // Called when there is an error that has caused Tempo to stop
    override fun tempoStoppedWithError(error: BDError, context: Context) {
        when (error) {
            is ForegroundServiceNotLinkedError -> {
                // The linked foreground service went away mid-session (your app called
                // unlinkForegroundService(), or the service was killed/destroyed).
                // Re-link and restart, or update your UI to reflect that tracking has stopped.
            }
            // ... existing error types (TempoInvalidDestinationIdError, BDTempoError, etc.)
        }
    }
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

Stopping Tempo is asynchronous; the call above does **not** guarantee `TempoService.isRunning()` is already `false` when it returns. If you need to act only once Tempo has actually finished stopping (for example, releasing a foreground service that was only linked for Tempo), use the `onStopped` overload instead:

```kotlin
TempoService.stop { 
    // Called once Tempo has fully finished stopping.
    releaseForegroundServiceIfUnused()
}
```