Migration Guide to 3.0.0
========================

The Bluedot Flutter plugin version 3.0.0 is a major update, bringing the underlying Android Point SDK up to version 19.0.0.

This update includes one breaking change:

- Android - the SDK no longer starts, owns, or displays a foreground service notification for GeoTriggering or Tempo. Your app must now implement and own its own `foreground service`, and link it to the Point SDK.

> `bluedot_point_sdk_push` 2.0.0 is released alongside this version and requires `bluedot_point_sdk: ^3.0.0` (its native Android Maven coordinates must match the core plugin's Point SDK version). Apps staying on `bluedot_point_sdk` 2.x should keep using `bluedot_point_sdk_push` 1.x.

* * *

### Why this change

Google Play policy no longer permits the `FOREGROUND_SERVICE_LOCATION` foreground service type to be used for geofencing, effective **October 28, 2026**. To comply with this policy, the Android Point SDK can no longer declare, start, or display its own foreground service for either feature.

* * *

### Removed APIs

| Removed | Replacement |
|---|---|
| `GeoTriggeringBuilder.androidNotification(...)` | *(none - no longer accepted)* |
| `TempoBuilder.androidNotification(...)` | *(none - no longer accepted, was previously mandatory)* |
| `BluedotPointSdk.instance.setNotificationIcon(...)` | *(none - your own foreground service builds and shows its own notification)* |

If your app no longer compiles because of the removed methods above, that is expected - each call site is addressed below.

### New APIs

#### `BluedotPointSdk.instance.linkForegroundService()` / `unlinkForegroundService()`

Android only - no-op on iOS. Call `linkForegroundService()` once your own foreground service has successfully started (e.g. from its `onCreate()` after `startForeground()`), and `unlinkForegroundService()` when it stops. Both calls are idempotent - calling `linkForegroundService()` while already linked, or `unlinkForegroundService()` while not linked, is a no-op rather than an error.

```dart
await BluedotPointSdk.instance.linkForegroundService();
await BluedotPointSdk.instance.unlinkForegroundService();
```

#### `BluedotPointSdk.instance.isForegroundServiceLinked()`

Android only - always returns `false` on iOS. Returns whether a foreground service is currently linked.

```dart
bool linked = await BluedotPointSdk.instance.isForegroundServiceLinked();
```

#### `io.bluedot.bluedot_point_sdk.BluedotForegroundServiceLinker` (native Android helper)

A native-Android helper, exposed by the plugin, for your app's own foreground `Service` to call directly instead of going back through the Dart method channel:

```kotlin
import io.bluedot.bluedot_point_sdk.BluedotForegroundServiceLinker

BluedotForegroundServiceLinker.link(context)
BluedotForegroundServiceLinker.unlink(context)
BluedotForegroundServiceLinker.isForegroundServiceLinked(context)
```

Since the plugin already depends on the Point SDK internally, your app does **not** need its own `point_sdk_android` Gradle dependency just to link/unlink - avoiding keeping a second SDK version in sync.

#### New `isForegroundServiceNotLinked` argument on `tempoTrackingStoppedWithError`

If Tempo stops because the linked foreground service went away mid-session, the `tempoTrackingStoppedWithError` event arguments now also include `isForegroundServiceNotLinked: true`. Handle this explicitly if your app uses Tempo.

* * *

### Behaviour changes

- **GeoTriggering** continues to run via a background worker regardless of whether a foreground service is linked. Linking one is entirely **optional** and only reduces location-update latency.
- **Tempo now requires a linked foreground service to start.** Calling `TempoBuilder.start(...)` with none linked fails synchronously. If the linked foreground service is lost while Tempo is tracking, Tempo stops and reports it asynchronously via the `tempoTrackingStoppedWithError` event, with `isForegroundServiceNotLinked: true`.
- There is a **single, shared link state** - not one per feature. If your app uses both GeoTriggering and Tempo, share one foreground service/link between them rather than building separate bookkeeping for each.

* * *

### Update your Android manifest

Declare your own foreground service (name/package it to match your app's conventions):

```xml
<service
    android:name=".YourForegroundService"
    android:exported="false"
    android:foregroundServiceType="location" />
```

> If your app is **GeoTriggering-only** and doesn't need low-latency triggers, you can skip declaring a foreground service entirely - don't add one just to satisfy this migration if you don't need it.

Remove any explicit `<service>` overrides for the SDK's previous foreground services, if present in your manifest.

* * *

### Implement your own foreground service

Your app is now responsible for creating, starting, and displaying the notification for its own foreground service, then linking it to the Point SDK via `BluedotForegroundServiceLinker`:

```kotlin
class YourForegroundService : Service() {

    override fun onCreate() {
        super.onCreate()
        try {
            startForeground(NOTIFICATION_ID, buildNotification())
            BluedotForegroundServiceLinker.link(applicationContext)
        } catch (e: Throwable) {
            // ForegroundServiceStartNotAllowedException (API 31+), SecurityException /
            // MissingForegroundServiceTypeException (API 34+) if location permission is missing.
            stopSelf()
        }
    }

    override fun onDestroy() {
        BluedotForegroundServiceLinker.unlink(applicationContext)
        super.onDestroy()
    }

    override fun onBind(intent: Intent?): IBinder? = null
}
```

Then bridge it from Dart with a `MethodChannel` so you can start/stop it from `MainActivity` and await its link before starting GeoTriggering/Tempo - see the full reference implementation in the example app's [`BluedotTrackingService.kt`](https://github.com/Bluedot-Innovation/Flutter-Minimal-Integration/blob/main/android/app/src/main/kotlin/io/bluedot/flutter_minimal_app/BluedotTrackingService.kt), [`MainActivity.kt`](https://github.com/Bluedot-Innovation/Flutter-Minimal-Integration/blob/main/android/app/src/main/kotlin/io/bluedot/flutter_minimal_app/MainActivity.kt) and [`foreground_service.dart`](https://github.com/Bluedot-Innovation/Flutter-Minimal-Integration/blob/main/lib/helpers/foreground_service.dart).

* * *

### Update your GeoTriggering start code

Remove `.androidNotification(...)` calls - they no longer compile:

```dart
// Before
BluedotPointSdk.instance
    .geoTriggeringBuilder()
    .androidNotification(channelId, channelName, title, content, notificationId)
    .start();

// After
BluedotPointSdk.instance.geoTriggeringBuilder().start();
```

If you previously used the foreground-service notification for low-latency triggers, decide whether to start and link your own foreground service before calling `.start()`. If you don't, no foreground-service work is required for GeoTriggering - it keeps running in background-worker mode.

* * *

### Update your Tempo start code

Remove `.androidNotification(...)` - Tempo's builder no longer has it, and a linked foreground service is now **mandatory** instead. Start (or reuse) and link your foreground service first, and only start Tempo once linking is confirmed:

```dart
// Before
BluedotPointSdk.instance
    .tempoBuilder()
    .androidNotification(channelId, channelName, title, content, notificationId)
    .start(destinationId);

// After
await ForegroundService.start(); // your own helper - see reference implementation above
await BluedotPointSdk.instance.tempoBuilder().start(destinationId);
```

Handle the **new failure mode** on `tempoTrackingStoppedWithError` - if the linked foreground service goes away while Tempo is tracking, Tempo stops and reports it with `isForegroundServiceNotLinked: true`:

```dart
case TempoEvents.tempoTrackingStoppedWithError:
  var isForegroundServiceNotLinked = args['isForegroundServiceNotLinked'] == true;
  if (isForegroundServiceNotLinked) {
    // Tempo stopped because the linked foreground service went away mid-session.
    // Re-link and restart, or update your UI to reflect that tracking has stopped.
  }
  break;
```

**When stopping both features**, only stop your foreground service once neither needs it:

```dart
BluedotPointSdk.instance.stopGeoTriggering().then((_) {
  BluedotPointSdk.instance.isTempoRunning().then((isTempoRunning) {
    if (!isTempoRunning) ForegroundService.stop();
  });
});
```

* * *

### `bluedot_point_sdk_push`

If your app uses the optional `bluedot_point_sdk_push` package, bump it to `2.0.0` alongside `bluedot_point_sdk` `3.0.0` - its native Android Maven coordinates must match the core plugin's Point SDK version. No Dart-level API changes are required.
