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

4. Function with an example to start FG mode Geo-trigger

```kotlin
fun startGeoTriggering(context: Context) {
  val geoTriggeringStatusListener = GeoTriggeringStatusListener { geoTriggerError: BDError? ->
    if (geoTriggerError != null) {
      Log.i("TAG", "Rezolve GeoTriggering start error: $geoTriggerError")
      return@GeoTriggeringStatusListener
    }
    Log.i("TAG", "Rezolve GeoTriggering start success")
  }

  val notification = createNotification(
    "foreground_notification_title",
    "foreground_notification_text", true, context
  )

  GeoTriggeringService.builder()
    .notification(notification)
    .start(context, geoTriggeringStatusListener)
}
```

5. Function with an example to start Tempo

```kotlin
fun startTempo(context: Context) {
  val tempoServiceStatusListener = TempoServiceStatusListener { tempoError: BDError? ->
    if (tempoError != null) {
      Log.i("TAG", "Rezolve Tempo start error: $tempoError")
      return@TempoServiceStatusListener
    }
    Log.i("TAG", "Rezolve Tempo start success")
  }
  val notification = createNotification(
    "foreground_notification_title", "foreground_notification_text",
    true, context
  )

  TempoService.builder().notification(notification)
    .destinationId("<YOUR-PROJECT-DESTINATION-ID>")
    .start(context, tempoServiceStatusListener)
}
```