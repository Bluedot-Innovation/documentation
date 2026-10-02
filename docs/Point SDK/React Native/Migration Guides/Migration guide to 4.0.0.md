# Migration Guide to React Native Plugin 4.0.0

If you have implemented previous versions of the Bluedot React Native Plugin, this guide will help you understand the steps required to migrate to version 4.0.0.

### Breaking Changes

#### The plugin no longer owns a foreground service for GeoTriggering or Tempo

Google Play policy no longer permits the `FOREGROUND_SERVICE_LOCATION` foreground service type to be used for geofencing, effective **October 28, 2026**. To comply with this policy, the plugin **no longer declares, starts, or displays a foreground service** for either GeoTriggering or Tempo on Android.

If you choose to use a foreground service, ownership now moves to your app:

*   Your app declares its **own** `<service>` in its Android manifest (with the appropriate `android:foregroundServiceType`), starts it, and shows its own persistent notification.
*   Your app calls `ServiceManager.getInstance(context).linkForegroundService()` from inside that native service once it's actually running, and `ServiceManager.getInstance(context).unlinkForegroundService()` when it stops — **or** calls the plugin's new JS methods `BluedotPointSDK.linkForegroundService()` / `unlinkForegroundService()` from a JS callback fired once the native service is foregrounded.
*   **GeoTriggering** always runs via a background worker (`ACCESS_BACKGROUND_LOCATION`), with or without a linked foreground service — linking is entirely **optional** and only reduces location-update latency. Do not declare/run a `FOREGROUND_SERVICE_LOCATION`-typed service just to keep GeoTriggering linked unless your app independently qualifies for that foreground service type; geofencing alone does not qualify as of October 28, 2026.
*   **Tempo now requires a linked foreground service to start.** Calling `new TempoBuilder().start(...)` with none linked fails immediately. If the linked service later goes away mid-session (your app calls `unlinkForegroundService()`, or the service is killed/destroyed), Tempo stops immediately and reports a new `ForegroundServiceNotLinkedError` asynchronously via the `tempoStoppedWithError` event.
*   There is a **single, shared link state** in the SDK — not one per feature. If your app uses both GeoTriggering and Tempo, they share **one** linked service; don't build separate link/unlink bookkeeping per feature.

#### Removed API surface

| Removed | Replacement |
|---|---|
| `GeoTriggeringBuilder.androidNotification(channelId, channelName, title, content)` | *(none — no longer accepted)* |
| `TempoBuilder.androidNotification(channelId, channelName, title, content)` | *(none — no longer accepted, was previously mandatory for Tempo)* |
| `BluedotPointSDK.setNotificationIdResourceId()` | *(none — manage notification icons in your own service)* |

If your build fails because of the removed methods above, that is expected — each call site is addressed in the steps below.

* * *

### Update your Android dependencies

The 4.0.0 plugin requires the Android Point SDK **19.0.0** (previously, the foreground-service APIs described below were introduced as part of this native SDK release). If you are pulling these dependencies manually, update your app's `android/app/build.gradle` to pull the new coordinates:

```groovy
dependencies {
    implementation 'com.gitlab.bluedotio.android:point_sdk_android:19.0.0'
    implementation 'com.gitlab.bluedotio.android:point_sdk_push:19.0.0'
}
```

> If you were previously pinned to `18.0.0` (or earlier), bump both `point_sdk_android` and `point_sdk_push` together — they are released in lockstep and mixing versions is not supported.

### Update your Android Manifest

Add these permissions to your app's `android/app/src/main/AndroidManifest.xml` if you plan to link a foreground service for either feature, or if you use Tempo at all (Tempo mandates linking):

```xml
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

> If your app is **GeoTriggering-only** and doesn't need low-latency triggers, `FOREGROUND_SERVICE` / `FOREGROUND_SERVICE_LOCATION` can be dropped entirely — don't add a foreground service just to satisfy this migration if you don't need one.

Declare your own foreground service inside the `<application>` block:

```xml
<service
    android:name=".YourForegroundService"
    android:exported="false"
    android:foregroundServiceType="location" />
```

> ⚠️ If `foregroundServiceType="location"` is declared for a service whose *only* purpose is to keep GeoTriggering linked (not Tempo, which mandates it), your app — not the plugin — is responsible for independently qualifying for that foreground service type under Google Play policy. Geofencing alone does **not** qualify as of October 28, 2026.

* * *

### Implement your own Android foreground service

Your app is now responsible for creating, starting, and displaying the notification for its own foreground service, then linking it to the SDK. Create a new Kotlin/Java class in your Android project (e.g. `android/app/src/main/java/com/yourapp/YourForegroundService.kt`):

```kotlin
class YourForegroundService : Service() {

    override fun onCreate() {
        super.onCreate()
        try {
            startForeground(NOTIFICATION_ID, buildNotification())
            ServiceManager.getInstance(applicationContext).linkForegroundService()
            // Notify anything waiting on the link (e.g. a JS callback) here.
        } catch (e: Exception) {
            // ForegroundServiceStartNotAllowedException (API 31+), SecurityException /
            // MissingForegroundServiceTypeException (API 34+) if location permission is missing.
            stopSelf()
        }
    }

    override fun onDestroy() {
        ServiceManager.getInstance(applicationContext).unlinkForegroundService()
        super.onDestroy()
    }

    override fun onBind(intent: Intent?): IBinder? = null

    private fun buildNotification(): Notification {
        val channelId = "your_tracking_channel"
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val nm = getSystemService(NotificationManager::class.java)
            if (nm.getNotificationChannel(channelId) == null) {
                nm.createNotificationChannel(
                    NotificationChannel(channelId, "Location Tracking",
                        NotificationManager.IMPORTANCE_LOW)
                )
            }
            return Notification.Builder(this, channelId)
                .setContentTitle("Tracking active")
                .setContentText("Your app is monitoring your location.")
                .setSmallIcon(R.drawable.ic_notification)
                .setOngoing(true)
                .build()
        } else {
            return Notification.Builder(this)
                .setContentTitle("Tracking active")
                .setSmallIcon(R.drawable.ic_notification)
                .build()
        }
    }

    companion object {
        const val NOTIFICATION_ID = 1001
    }
}
```

Notes:

*   `Context.startForegroundService()` only *schedules* `onCreate()` on the main thread — it is **not** synchronous. Don't start Tempo immediately after `startForegroundService()` returns; that races the link and fails with `ForegroundServiceNotLinkedError`. Start Tempo from a callback that fires once linking is actually confirmed.
*   Before stopping your foreground service, check real SDK state — `BluedotPointSDK.isTempoRunning()` and `BluedotPointSDK.isGeoTriggeringRunning()` — and only stop the service if nothing still needs it.
*   If you use **both** GeoTriggering and Tempo, share **one** foreground service and **one** link — the SDK only tracks a single link state globally.

To start and stop the service from your React Native JS code, create a small native module in your Android project that bridges the service lifecycle:

```kotlin
class TrackingServiceModule(reactContext: ReactApplicationContext)
    : ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "TrackingService"

    @ReactMethod
    fun start() {
        val intent = Intent(reactApplicationContext, YourForegroundService::class.java)
        reactApplicationContext.startForegroundService(intent)
    }

    @ReactMethod
    fun stop() {
        val intent = Intent(reactApplicationContext, YourForegroundService::class.java)
        reactApplicationContext.stopService(intent)
    }
}
```

Register the module in your `ReactPackage` implementation and register the package in `MainApplication.kt` as you would any other native module.

* * *

### Update your GeoTriggering start code

Remove `.androidNotification()` calls — they no longer exist:

```js
// Before
new BluedotPointSDK.GeoTriggeringBuilder()
    .androidNotification('channel_id', 'Channel Name', 'Tracking active', 'Your app is monitoring your location.')
    .iOSAppRestartNotification(title, buttonText) // iOS unchanged
    .start(onSuccess, onError)

// After
new BluedotPointSDK.GeoTriggeringBuilder()
    .iOSAppRestartNotification(title, buttonText) // iOS unchanged
    .start(onSuccess, onError)
```

If you previously relied on the foreground-service notification for low-latency GeoTriggering, decide whether to start and link your own foreground service before calling `.start()`. If you didn't use the notification for GeoTriggering, no foreground-service work is required — GeoTriggering will keep running in background-worker mode.

Everything else (`enterZone`, `exitZone`, `zoneInfoUpdate` callbacks, `BluedotPointSDK.isGeoTriggeringRunning()`, `BluedotPointSDK.stopGeoTriggering()`) is unchanged.

* * *

### Update your Tempo start code

Remove `.androidNotification()` — Tempo's builder no longer has it, and a linked foreground service is now **mandatory** instead. Start (or reuse) your foreground service **before** calling Tempo's `start()`, and wait until linking is confirmed:

```js
// Before
new BluedotPointSDK.TempoBuilder()
    .androidNotification('channel_id', 'Channel Name', 'Tracking active', 'Your app is monitoring your location.')
    .start(destinationId, onSuccess, onError)

// After — start and link the foreground service first, then start Tempo
if (Platform.OS === 'android') {
    NativeModules.TrackingService.start()
    // Wait for a real confirmation that the service is linked before proceeding.
    // Implement this via a native event or callback from your service's onCreate().
    await waitForServiceLinked()
}

new BluedotPointSDK.TempoBuilder()
    .start(destinationId, onSuccess, onError)
```

> ⚠️ Do **not** call `TempoBuilder.start()` in the same tick as `NativeModules.TrackingService.start()`. The service's `onCreate()` runs asynchronously on the main thread — starting Tempo immediately after scheduling the service start will race the link and fail. Use a real callback or event from within the service's `onCreate()` to confirm the link before proceeding.

Handle the **new failure mode**: if the linked foreground service goes away while Tempo is tracking (your app calls `unlinkForegroundService()`, or the service is killed), Tempo stops and reports a `ForegroundServiceNotLinkedError` via the existing `tempoStoppedWithError` event. The event payload now includes an `isForegroundServiceNotLinked` boolean flag:

```js
BluedotPointSDK.on('tempoStoppedWithError', (event) => {
    if (event.isForegroundServiceNotLinked) {
        // Tempo stopped because the linked foreground service went away mid-session.
        // Re-link and restart, or update your UI to reflect that tracking has stopped.
    } else {
        // Handle other Tempo errors (invalid destination ID, network, etc.)
        console.error('Tempo error:', event.error)
    }
})
```

**When stopping Tempo**, stop Tempo first and only stop the foreground service afterwards. This ensures the SDK is fully stopped before the link is released:

```js
// Before
NativeModules.TrackingService.stop()  // may release the link while Tempo is still stopping
BluedotPointSDK.stopTempoTracking(onSuccess, onError)

// After
BluedotPointSDK.stopTempoTracking(() => {
    // Tempo has fully stopped — now safe to stop the foreground service
    if (Platform.OS === 'android') {
        NativeModules.TrackingService.stop()
    }
}, onError)
```

* * *

### Remove setNotificationIdResourceId

Remove any calls to `BluedotPointSDK.setNotificationIdResourceId()` — this method no longer exists. Set your notification icon in your own foreground service's `buildNotification()` method instead.

* * *

### New APIs

#### `BluedotPointSDK.linkForegroundService()` / `unlinkForegroundService()` (Android only)

Two new Promise-returning methods are available for apps that manage their foreground service lifecycle via a JS-driven callback (e.g. a third-party foreground service library that fires a JS event once `startForeground()` has succeeded):

```js
// Called from a JS callback once your native service has successfully called startForeground():
await BluedotPointSDK.linkForegroundService()
// Now safe to start GeoTriggering or Tempo

// Called when the service is stopping (if not already unlinked natively in onDestroy()):
await BluedotPointSDK.unlinkForegroundService()
```

> If your own foreground service class already calls `ServiceManager.getInstance(context).linkForegroundService()` / `unlinkForegroundService()` natively (as shown in the service implementation above), you do **not** need to call these JS methods — the link is already managed at the native layer.

#### `isForegroundServiceNotLinked` flag on `tempoStoppedWithError`

The `tempoStoppedWithError` event payload now includes an `isForegroundServiceNotLinked: true` field when Tempo stops because the linked foreground service went away mid-session. See the Tempo start code section above for the updated handler.

* * *

### iOS

No changes are required for iOS. `GeoTriggeringBuilder.iOSAppRestartNotification()` and all other iOS APIs continue to work as before.

* * *

### Google Play Store Submission

Since your app owns the foreground service, **your app is responsible for justifying its use case** in the Play Store declaration for `FOREGROUND_SERVICE_LOCATION`.

*   **Tempo (arrival / ETA tracking)** qualifies as a navigation or delivery use case. When completing the foreground service declaration, describe the feature in user-facing terms (e.g. *"The app tracks the user's journey to a destination to provide real-time ETA updates and notify staff of the user's arrival"*) and confirm the foreground notification is visible at all times while tracking is active.
*   **GeoTriggering-only apps** — geofencing alone does not qualify for `FOREGROUND_SERVICE_LOCATION` as of October 28, 2026. If GeoTriggering is your only use case, do not declare this foreground service type and do not link a foreground service. GeoTriggering will continue to operate in background-worker mode.
*   Ensure your app's privacy policy discloses real-time location collection for journey/arrival tracking if you use Tempo.
