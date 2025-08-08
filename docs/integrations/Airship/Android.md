Android Integration
===========================

Getting Started
---------------

### Integration Example

You can find our [Rezolve – Airship Android Example on GitHub](https://github.com/Bluedot-Innovation/BluedotAirshipDemoApp-Android) or follow the steps below to integrate Airship and Bluedot PointSDK.

### Integrate Airship SDK into your App

Details on integrating the Airship SDK can be found on their documentation website [here](https://docs.airship.com/platform/android/getting-started/).

### Integrate Rezolve Point SDK in your Project

To integrate Point SDK, please refer to the integration steps [here](../../Point%20SDK/Android/Quick%20Start.md)

Interaction between Airship SDK and Rezolve Point SDK
----------------------------------------------------

### Start Airship Services

1\. Start Airship services by overriding `onCreate` in your custom Application class

```kotlin
override fun onCreate() {    
    super.onCreate()

    UAirship.takeOff(this, OnReadyCallback {
      // Enable user notifications
      it.pushManager.userNotificationsEnabled = true
    })
}
```

or add `Autopilot` configuration to `AndroidManifest.xml`

```xml
<meta-data android:name="com.urbanairship.autopilot" android:value="com.package.yourAirshipAutopilotClass"/>
```

### Setup Rezolve Location Services

1\. Start PointSDK at the entry point in your application by overriding `onCreate()` and replace your Rezolve ProjectId in `<Your Rezolve Project ID>`:
```kotlin
super.onCreate();
 ...
 // start Point SDK
boolean locationPermissionGranted = ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED

if (locationPermissionGranted) {
  serviceManager = ServiceManager.getInstance(this);
  if (!serviceManager.isBluedotServiceInitialized()) {
    InitializationResultListener resultListener = bdError -> {
    String text = "Initialization Result "

    if (bdError != null) {
      text = text + bdError.reason
      Log.i("Rezolve", text)
    }
    else {
      startGeoTriggering()
    }
  }
  serviceManager.initialize("<Your Rezolve Project ID>", resultListener)
 }
}
else
{
   requestLocationPermissions()
}
```

2\. Start Geo-triggering feature
```kotlin
public void startGeoTriggering() {
  // Start Geo-triggering feature
  GeoTriggeringService.builder()
    .start(this, geoTriggerError -> {
      if (geoTriggerError != null) {
        Log.i("Rezolve", "Error in starting GeoTrigger" + geoTriggerError.reason)
      }
      else {
        Log.i("Rezolve", "GeoTrigger started successfully")
      }
  });
}
```

3\. Receiving Geo-trigger events

Create a receiver in the Manifest to receive Geo-trigger events (such as entering a location):

```xml
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

Implement the receiver

```java
public class ExampleGeoTriggerReceiver extends GeoTriggeringEventReceiver {
  @Override
  public void onZoneEntryEvent(@NotNull ZoneEntryEvent entryEvent, @NotNull Context context) {
    ...
  }

  @Override
  public void onZoneExitEvent(@NotNull ZoneExitEvent exitEvent, @NotNull Context context) {
    ...
  }
}
```

:::info
`Exit` does not apply to GEOLINE™.
:::

### Use Case

**Objective:** To trigger `automated message` pushed to the user when their device checks in into `Geofence` .

**Setting Automated Message:** Automated message to be setup via `Urban Airship Dashboard`, to trigger when a new event is posted.

```kotlin
override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {
  val builder = CustomEvent.Builder("bluedot_place_entered")
  builder.setInteraction("location", entryEvent.zoneInfo.zoneId)
  entryEvent.zoneInfo.zoneName?.let { builder.addProperty("bluedot_zone_name", it) }
  entryEvent.zoneInfo.customData?.let {
    for ((key, value) in it) {
      builder.addProperty(key, value)
    }
  }
  val event = builder.build()
  event.track()
}

override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {
  val builder = CustomEvent.Builder("bluedot_place_exited")
  builder.setInteraction("location", exitEvent.zoneInfo.zoneId)
  exitEvent.zoneInfo.zoneName?.let { builder.addProperty("bluedot_zone_name", it) }
  exitEvent.zoneInfo.customData?.let {
    for ((key, value) in it) {
      builder.addProperty(key, value)
    }
  }

  if (exitEvent.dwellTime != -1) {
    builder.addProperty("dwell_time", exitEvent.dwellTime)
  }
  val event = builder.build()
  event.track()
}
```