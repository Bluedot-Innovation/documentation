1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Integrations](https://docs.bluedot.io/integrations/)
3.  [Airship Integration](https://docs.bluedot.io/integrations/airship-integration/)
4.  Airship Android Integration

Airship Android Integration
===========================

Getting Started
---------------

### Integration Example

You can find our [Bluedot – Airship Android Example on GitHub](https://github.com/Bluedot-Innovation/BluedotAirshipDemoApp-Android) or follow the steps below to integrate Airship and Bluedot PointSDK.

### Integrate Airship SDK into your App

Details on integrating the Airship SDK can be found on their documentation website [here](https://docs.airship.com/platform/android/getting-started/).

### Integrate Bluedot PointSDK in your Project

To integrate Point SDK, please refer to the integration steps [here](https://docs.bluedot.io/android-sdk/android-quick-start/)

Interaction between Airship SDK and Bluedot PointSDK
----------------------------------------------------

### Start Airship Services

1\. Start Airship services by overriding `onCreate` in your custom Application class

```
override fun onCreate() {    
    super.onCreate()

    UAirship.takeOff(this, OnReadyCallback {
      // Enable user notifications
      it.pushManager.userNotificationsEnabled \= true
    })
}
```

or add `Autopilot` configuration to `AndroidManifest.xml`

```
<meta-data android:name\="com.urbanairship.autopilot" android:value\="com.package.yourAirshipAutopilotClass"/>
```

### Setup Bluedot Location Services

1\. Start PointSDK at the entry point in your application by overriding `onCreate()` and replace your Bluedot ProjectId in `<Your Bluedot Project ID>`:
```
super.onCreate();
 ...
 // start Point SDK
boolean locationPermissionGranted \= ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.ACCESS\_FINE\_LOCATION) \== PackageManager.PERMISSION\_GRANTED

if (locationPermissionGranted) {
  serviceManager \= ServiceManager.getInstance(this);
  if (!serviceManager.isBluedotServiceInitialized()) {
    InitializationResultListener resultListener \= bdError \-> {
    String text \= "Initialization Result "

    if (bdError != null) {
      text \= text + bdError.reason
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

public void startGeoTriggering() {
  // Start Geo-triggering feature
  GeoTriggeringService.builder()
    .start(this, geoTriggerError \-> {
      if (geoTriggerError != null) {
        Log.i("Bluedot", "Error in starting GeoTrigger" + geoTriggerError.reason)
      }
      else {
        Log.i("Bluedot", "GeoTrigger started successfully")
      }
  });
}

3\. Receiving Geo-trigger events

Create a receiver in the Manifest to receive Geo-trigger events (such as entering a location):

```
<application android:label\="@string/app\_name" \>
  <receiver
    android:name\="my.package.ExampleGeoTriggerReceiver"
    android:enabled\="true"
    android:exported\="false"
  \>
    <intent-filter>
      <action android:name\="io.bluedot.point.GEOTRIGGER" />
    </intent-filter>
  </receiver>
</application>
```

Implement the receiver

```
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

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

`Exit` does not apply to GEOLINE™.

### Use Case

**Objective:** To trigger `automated message` pushed to the user when their device checks in into `Geofence` .

**Setting Automated Message:** Automated message to be setup via `Urban Airship Dashboard`, to trigger when a new event is posted.

```
override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {
  val builder \= CustomEvent.Builder("bluedot\_place\_entered")
  builder.setInteraction("location", entryEvent.zoneInfo.zoneId)
  entryEvent.zoneInfo.zoneName?.let { builder.addProperty("bluedot\_zone\_name", it) }
  entryEvent.zoneInfo.customData?.let {
    for ((key, value) in it) {
      builder.addProperty(key, value)
    }
  }
  val event \= builder.build()
  event.track()
}

override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {
  val builder \= CustomEvent.Builder("bluedot\_place\_exited")
  builder.setInteraction("location", exitEvent.zoneInfo.zoneId)
  exitEvent.zoneInfo.zoneName?.let { builder.addProperty("bluedot\_zone\_name", it) }
  exitEvent.zoneInfo.customData?.let {
    for ((key, value) in it) {
      builder.addProperty(key, value)
    }
  }

  if (exitEvent.dwellTime != \-1) {
    builder.addProperty("dwell\_time", exitEvent.dwellTime)
  }
  val event \= builder.build()
  event.track()
}
```