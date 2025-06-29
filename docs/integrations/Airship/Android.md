Android Integration
===========================

Getting Started
---------------

### Integration Example

You can find our [Bluedot – Airship Android Example on GitHub](https://github.com/Bluedot-Innovation/BluedotAirshipDemoApp-Android) or follow the steps below to integrate Airship and Bluedot PointSDK.

### Integrate Airship SDK into your App

Details on integrating the Airship SDK can be found on their documentation website [here](https://docs.airship.com/platform/android/getting-started/).

### Integrate Bluedot PointSDK in your Project

To integrate Point SDK, please refer to the integration steps [here](../../Point%20SDK/Android/Quick%20Start.md)

Interaction between Airship SDK and Bluedot PointSDK
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

### Setup Bluedot Location Services

1\. Start PointSDK at the entry point in your application by overriding `onCreate()` and replace your Bluedot ProjectId in `<Your Bluedot Project ID>`:
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
      Log.i("Bluedot", text)
    }
    else {
      startGeoTriggering()
    }
  }
  serviceManager.initialize("<Your Bluedot Project ID>", resultListener)
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
        Log.i("Bluedot", "Error in starting GeoTrigger" + geoTriggerError.reason)
      }
      else {
        Log.i("Bluedot", "GeoTrigger started successfully")
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
```kotlin
class AppGeoTriggerReceiver : GeoTriggeringEventReceiver() {

	override fun onZoneInfoUpdate(context: Context) {
		...
	}
	
	override fun onZoneEntryEvent(entryEvent: GeoTriggerEvent, context: Context) {
		...
	}
	
	override fun onZoneExitEvent(exitEvent: GeoTriggerEvent, context: Context) {
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
override fun onZoneEntryEvent(entryEvent: GeoTriggerEvent, context: Context) {
  val builder = CustomEvent.Builder("bluedot_place_entered")
  builder.setInteraction("location", entryEvent.zoneInfo.id)
  builder.addProperty("bluedot_zone_name", entryEvent.zoneInfo.name)
  entryEvent.zoneInfo.customData?.let {
    for ((key, value) in it) {
      builder.addProperty(key, value)
    }
  }
  val event = builder.build()
  event.track()
}

override fun onZoneExitEvent(exitEvent: GeoTriggerEvent, context: Context) {
  val builder = CustomEvent.Builder("bluedot_place_exited")
  builder.setInteraction("location", exitEvent.zoneInfo.id)
  builder.addProperty("bluedot_zone_name", exitEvent.zoneInfo.name)
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