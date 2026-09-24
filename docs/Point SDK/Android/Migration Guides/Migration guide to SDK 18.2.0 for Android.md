---
pagination_next: null
---

# Migration Guide to Point SDK V18.2.0 for Android

If you have implemented previous versions of the Android Point SDK, this guide will help you understand the steps required to migrate to version 18.2.0.

### Breaking Changes

#### The SDK no longer owns a foreground service for GeoTriggering or Tempo

Google Play policy no longer permits the `FOREGROUND_SERVICE_LOCATION` foreground service type to be used for geofencing, effective **October 28, 2026**. To comply with this policy, the SDK **no longer declares, starts, or displays a foreground service** for either GeoTriggering or Tempo.

Foreground-service ownership now moves to your app:

*   Your app declares its **own** `<service>` in its manifest (with the appropriate `android:foregroundServiceType`), starts it, and shows its own persistent notification.
*   Your app calls `ServiceManager.getInstance(context).linkForegroundService()` once that service is actually running, and `ServiceManager.getInstance(context).unlinkForegroundService()` when it stops.
*   **GeoTriggering** always runs via a background worker (`ACCESS_BACKGROUND_LOCATION`), with or without a linked foreground service - linking is entirely **optional** and only reduces location-update latency. Do not declare/run a `FOREGROUND_SERVICE_LOCATION`-typed service just to keep GeoTriggering linked unless your app independently qualifies for that foreground service type; geofencing alone does not qualify as of October 28, 2026.
*   **Tempo now requires a linked foreground service to start.** Calling `TempoService.builder().start(...)` with none linked fails synchronously with a new `ForegroundServiceNotLinkedError`. If the linked service later goes away mid-session (your app calls `unlinkForegroundService()`, or the service is killed/destroyed), Tempo stops immediately and reports the same error asynchronously via `TempoTrackingReceiver.tempoStoppedWithError()`.
*   There is a **single, shared link state** (`ServiceManager.isForegroundServiceLinked`) - not one per feature. If your app uses both GeoTriggering and Tempo, they share **one** linked service; don't build separate link/unlink bookkeeping per feature.

#### Removed / deprecated API surface

| Removed | Replacement |
|---|---|
| `GeoTriggerBuilder.notification(Notification)` | *(none - no longer accepted)* |
| `GeoTriggerBuilder.notificationId(Int)` | *(none - no longer accepted)* |
| `TempoBuilder.notification(Notification)` | *(none - no longer accepted, was previously mandatory)* |
| `TempoBuilder.notificationId(Int)` | *(none - no longer accepted)* |
| `ServiceManager.setForegroundServiceNotification(notification)` | `ServiceManager.linkForegroundService()` |
| `ServiceManager.setForegroundServiceNotification(notification, targetAllAPIs)` | `ServiceManager.linkForegroundService()` |
| SDK-declared `BlueDotPointService` / `TempoTrackingService` manifest entries | Your own app-owned `<service>` |
| `GeoTriggeringService.foregroundNotificationId()` / `(context)` | Deprecated no-ops kept for binary compatibility only |
| `TempoService.foregroundNotificationId()` / `(context)` | Deprecated no-ops kept for binary compatibility only |

If your app no longer compiles because of the removed methods above, that is expected - each call site is addressed in the steps below.

* * *

### Update your Manifest

Add (or confirm) these permissions if you plan to link a foreground service for either feature, or if you use Tempo at all (Tempo mandates linking):

```xml
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />
```

> If your app is **GeoTriggering-only** and doesn't need low-latency triggers, `FOREGROUND_SERVICE` / `FOREGROUND_SERVICE_LOCATION` can be dropped entirely - don't add a foreground service just to satisfy this migration if you don't need one.

Declare your own foreground service (name/package it to match your app's conventions):

```xml
<service
    android:name=".YourForegroundService"
    android:exported="false"
    android:foregroundServiceType="location" />
```

> ⚠️ If `foregroundServiceType="location"` is declared for a service whose *only* purpose is to keep GeoTriggering linked (not Tempo, which mandates it), your app - not the SDK - is responsible for independently qualifying for that foreground service type under Google Play policy. Geofencing alone does **not** qualify as of October 28, 2026.

Remove any explicit `<service>` overrides for `BlueDotPointService` / `TempoTrackingService` if present in your manifest.

* * *

### Implement your own foreground service

Your app is now responsible for creating, starting, and displaying the notification for its own foreground service, then linking it to the SDK.

```kotlin
class YourForegroundService : Service() {

    override fun onCreate() {
        super.onCreate()
        try {
            startForeground(NOTIFICATION_ID, buildNotification())
            ServiceManager.getInstance(applicationContext).linkForegroundService()
            // Notify anything waiting on the link (e.g. before starting Tempo) here.
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
}
```

Notes:

*   `Context.startForegroundService()` only *schedules* `onCreate()` on the main thread - it is **not** synchronous. Don't start Tempo immediately after `startForegroundService()` returns; that races the link and fails with `ForegroundServiceNotLinkedError`. Start Tempo from a callback that fires once linking is actually confirmed (e.g. from `onCreate()`/`onStartCommand()`).
*   Before stopping your foreground service, check real SDK state - `TempoService.isRunning()` and (if you use it for low-latency GeoTriggering) `GeoTriggeringService.isRunning()` - and only stop the service if nothing still needs it.
*   If you use **both** GeoTriggering and Tempo, share **one** foreground service and **one** link - `ServiceManager` only tracks a single link state globally.

* * *

### Update your GeoTriggering start code

Remove `.notification()` / `.notificationId()` calls - they no longer compile:

```kotlin
// Before
GeoTriggeringService.builder()
    .notificationId(123)
    .notification(myPersistentNotification)
    .start { error -> /* ... */ }

// After
GeoTriggeringService.builder()
    .start { error -> /* ... */ }
```

If you previously used the foreground-service notification for low-latency triggers, decide (matching your own app's UX/settings, e.g. a "high accuracy" toggle) whether to start and link your own foreground service before calling `.start()`. If you didn't, no foreground-service work is required for GeoTriggering - it will keep running in background-worker mode.

Everything else (zone entry/exit callbacks, `GeoTriggeringService.isRunning()`, `GeoTriggeringService.stop()`) is unchanged.

* * *

### Update your Tempo start code

Remove `.notification()` / `.notificationId()` - Tempo's builder no longer has them, and a linked foreground service is now **mandatory** instead:

```kotlin
// Before
TempoService.builder()
    .notificationId(1234)
    .notification(myPersistentNotification)
    .destinationId(destId)
    .start(tempoStatusListener)

// After - start (or reuse) and link your foreground service FIRST, then start
// Tempo once linking is confirmed (see above for why this must not happen
// "immediately after start()").
startYourForegroundServiceAndWaitForLink { linkError ->
    if (linkError != null) {
        // surface the failure / revert optimistic UI
        return@startYourForegroundServiceAndWaitForLink
    }
    TempoService.builder()
        .destinationId(destId)
        .start(tempoStatusListener)
}
```

Handle the **new failure mode**: if the linked foreground service goes away while Tempo is tracking (your app calls `unlinkForegroundService()`, or the service is killed), Tempo stops and reports a fatal `ForegroundServiceNotLinkedError` asynchronously:

```kotlin
override fun tempoStoppedWithError(error: BDError, context: Context) {
    when (error) {
        is ForegroundServiceNotLinkedError -> {
            // Tempo stopped because the linked foreground service went away
            // mid-session. Re-link and restart, or update your UI to reflect
            // that tracking has stopped.
        }
        // ... existing error types (TempoInvalidDestinationIdError, BDTempoError, etc.)
    }
}
```

If you don't already override `tempoStoppedWithError()`, add one - this failure mode did not exist before this migration.

**When stopping Tempo**, prefer the new `onStopped` overload if anything downstream depends on `TempoService.isRunning()` being `false` (in particular, releasing a foreground service link that was only used for Tempo):

```kotlin
// Before
TempoService.stop()
releaseForegroundServiceIfUnused() // may run before Tempo has actually finished stopping

// After
TempoService.stop { releaseForegroundServiceIfUnused() } // guaranteed to run after Tempo has fully stopped
```

* * *

### Clean up deprecated call sites

*   If you built a `Notification` object solely to pass into `GeoTriggerBuilder` or `TempoBuilder`, move that notification-building code into your own foreground service's `onCreate()` - the SDK no longer accepts or displays a `Notification` for either feature.
*   `GeoTriggeringService.foregroundNotificationId()` / `TempoService.foregroundNotificationId()` (and their `(context)` overloads) still compile but are now permanently unused no-ops. Remove call sites if straightforward; otherwise it's safe to leave them - they won't break the build, only return meaningless values.

### New APIs

#### **New `TempoService.stop(onStopped: () -> Unit)` overload**

Stopping Tempo is asynchronous; plain `TempoService.stop()` does **not** guarantee `TempoService.isRunning()` is already `false` when it returns. Use the `onStopped` overload whenever something depends on Tempo having actually finished stopping (e.g. tearing down a foreground service that was only linked for Tempo).

```kotlin
TempoService.stop { 
    // Called once Tempo has fully finished stopping
}
```

#### **New `ServiceManager.linkForegroundService()` / `unlinkForegroundService()`**

Call these from your own app-owned foreground service to link/unlink GeoTriggering and Tempo to it.

```kotlin
ServiceManager.getInstance(context).linkForegroundService()
ServiceManager.getInstance(context).unlinkForegroundService()

// Query current link state
ServiceManager.getInstance(context).isForegroundServiceLinked
```

#### **New `ForegroundServiceNotLinkedError`**

Returned synchronously from Tempo's `start()` call if no foreground service is linked, and asynchronously via `TempoTrackingReceiver.tempoStoppedWithError()` if the linked service goes away while Tempo is tracking.

### Best Practices & Recommendations

These matter most if you don't link a foreground service for GeoTriggering (it then depends entirely on OS background scheduling), but are good practice universally:

1.  **Don't use Android's Location Button** (API 31+ one-time/foreground-only access) - it cannot grant `ACCESS_BACKGROUND_LOCATION` and is revoked once your app backgrounds.
2.  **Request permissions in the correct order, as separate requests** on API 30+: fine location first, then - only after it's granted - background location as its own request.
3.  **Show an in-app rationale** before the system background-location dialog, telling users to choose "Allow all the time".
4.  **Prompt users to disable battery optimisation** via `Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS` - the single most impactful thing for background reliability, especially on Samsung/Xiaomi/Oppo/Huawei. Confirm your Play Store listing and privacy policy already declare this use case.
5.  **Guide users to OEM-specific "unrestricted" background settings** where applicable.
6.  **Always call `GeoTriggeringService.builder().start()` from the foreground** (a visible, `STARTED` activity/fragment) - never from a `BroadcastReceiver`, background `Service`, or push handler.
7.  **Set user expectations around latency** if no foreground service is linked for GeoTriggering - consider a setup checklist covering items 2–5.

