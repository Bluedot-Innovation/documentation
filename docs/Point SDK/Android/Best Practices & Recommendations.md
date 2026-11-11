Best Practices & Recommendations
==========================================

When initializing the Rezolve Point SDK at app startup, there are some edge cases where the app doesn’t have network access when the user hasn’t used it in a while. To ensure the Rezolve SDK starts the Geo-triggering and Tempo services correctly, please follow these recommendations:

Whenever the SDK is interacted with (e.g. `startGeoTrigger`/`startTempo`), Rezolve recommends that the initialization status is checked and initialized if that has not happened yet.

Steps to use Geo-Trigger/Tempo
------------------------------

1\. Get `ServiceManager` instance.

2\. Check for `isBluedotServiceInitialized`, if not initialized call `serviceManager.initialize(..)` and start Geo-trigger inside Initialize success callback.

3\. Inside the `InitializationResultListener`, On success reported back from Rezolve, prepare to start Geo-Trigger/Tempo.

```kotlin
val serviceManager = ServiceManager.getInstance(context)
if (!serviceManager.isBluedotServiceInitialized) {
  val resultListener = InitializationResultListener { initializationError ->
    if (initializationError != null) {
      Log.i("TAG", "Initialization Error: " + initializationError.reason)
      return@InitializationResultListener
    }
    Log.i("TAG", "Rezolve Initialization Success")

    //Check for GeoTrigger already running
    if (!GeoTriggeringService.isRunning()) {
      //Start Geo-Trigger
      startGeoTriggering(context)
    }

    //Check for Tempo already running
    if (!TempoService.isRunning(context)) {
      //or startTempo here
      startTempo(context)
    }
 }
 serviceManager.initialize("<YOUR-PROJECT-ID>", resultListener)
} else {
    //SDK is already initialized, Now if required start Geo-trigger/Tempo

    //Check for GeoTrigger already running
    if (!GeoTriggeringService.isRunning()) {
      //Start Geo-Trigger
      startGeoTriggering(context)
    }

    //Check for Tempo already running
    if (!TempoService.isRunning(context)) {
      //or startTempo here
      startTempo(context)
    }
}
```

4. Function with an example to start Geo-trigger

:::info
As of SDK 19.0.0, the SDK no longer accepts a `notification()`/`notificationId()` on `GeoTriggerBuilder`. Your app owns its own foreground service and notification - see [Foreground service and persistent notification](./Location%20Permission%20&%20Notifications%20Best%20Practices.md#foreground-service-and-persistent-notification) and the [Migration Guide to Point SDK V19.0.0 for Android](./Migration%20Guides/Migration%20guide%20to%20SDK%2019.0.0%20for%20Android.md).
:::

```kotlin
fun startGeoTriggering(context: Context) {
  val geoTriggeringStatusListener = GeoTriggeringStatusListener { geoTriggerError: BDError? ->
    if (geoTriggerError != null) {
      Log.i("TAG", "Rezolve GeoTriggering start error: $geoTriggerError")
      return@GeoTriggeringStatusListener
    }
    Log.i("TAG", "Rezolve GeoTriggering start success")
  }

  // Optionally start and link your own foreground service here first if you
  // want low-latency triggers (see Foreground service and persistent notification).

  GeoTriggeringService.builder()
    .start(context, geoTriggeringStatusListener)
}
```

5. Function with an example to start Tempo

:::info
Tempo requires a foreground service to be linked before it will start, and no longer accepts a `notification()`/`notificationId()` on `TempoBuilder`.
:::

```kotlin
fun startTempo(context: Context) {
  val tempoServiceStatusListener = TempoServiceStatusListener { tempoError: BDError? ->
    if (tempoError != null) {
      Log.i("TAG", "Rezolve Tempo start error: $tempoError")
      return@TempoServiceStatusListener
    }
    Log.i("TAG", "Rezolve Tempo start success")
  }

  // Start (or reuse) and link your own foreground service, then start Tempo
  // once linking is confirmed - see Foreground service and persistent notification.
  startYourForegroundServiceAndWaitForLink { linkError ->
    if (linkError != null) {
      return@startYourForegroundServiceAndWaitForLink
    }

    TempoService.builder()
      .destinationId("<YOUR-PROJECT-DESTINATION-ID>")
      .start(context, tempoServiceStatusListener)
  }
}
```