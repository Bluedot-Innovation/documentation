Android Integration
=========================

Getting Started
---------------

1\. Add the dependency in the app's build gradle add
```gradle
implementation "com.braze:android-sdk-ui:+"
implementation "com.braze:android-sdk-location:+"
```

2\. Create `braze.xml` under the `res/values` folder and add the following code. Create a Braze Android App and get the API key and replace it in the `“YOUR-APP-IDENTIFIER-API-KEY”`. Also, replace the `“YOUR-BRAZE-ENDPOINT”` with the custom endpoint from Braze.

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="com_braze_api_key">YOUR-APP-IDENTIFIER-API-KEY</string>
    <string translatable="false" name="com_braze_custom_endpoint">YOUR-BRAZE-ENDPOINT</string>
    <bool name="com_braze_enable_location_collection">true</bool>
    <bool name="com_braze_fallback_firebase_cloud_messaging_service_enabled">true</bool>
    <string name="com_braze_fallback_firebase_cloud_messaging_service_classpath">com.company.OurFirebaseMessagingService</string>
</resources>
```

3\. In the `AndroidManifest.xml` add the following:  
a. The following permissions are required.

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

b. The following braze service should be included to handle push receipt and open intents.

```xml
<service android:name="com.braze.push.BrazeFirebaseMessagingService"
  android:exported="false">
  <intent-filter>
    <action android:name="com.google.firebase.MESSAGING_EVENT" />
  </intent-filter>
</service>
```

Integrate Rezolve Point SDK in your Project
-------------------------------------------

To integrate Rezolve Point SDK in your project, please click [here](../../Point%20SDK/Android/Quick%20Start.md)

Interaction between Braze SDK and Rezolve Point SDK
---------------------------------------------------

1\. We need to ask the user to give permission to use the location services. To do that, create a `RequestPermissionActivity.kt` and then add the below code.

```kotlin
internal val PERMISSION_REQUEST_CODE = 1
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    //Request permission required for location
    ActivityCompat.requestPermissions(
        this,
        arrayOf(Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION),
        PERMISSION_REQUEST_CODE
    )
}

override fun onRequestPermissionsResult(requestCode: Int, permissions: Array, grantResults: IntArray) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    when (requestCode) {
        PERMISSION_REQUEST_CODE -> if (grantResults.size > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            (application as MainApplication).initPointSDK()

        } else {
            //Permissions denied

        }
    }
    finish()
}
```

2\. We then create another class which will implements Rezolve `InitializationResultListener` and upon SDK initialisation, calls Braze’s changeUser API. To do that create `MainApplication.kt` class and add the below code.

```kotlin
class MainApplication : Application(), InitializationResultListener {

    private lateinit var mServiceManager: ServiceManager
    private val projectId = REZOLVE-PROJECT-ID

    override fun onCreate() {
        super.onCreate()

        registerActivityLifecycleCallbacks(BrazeActivityLifecycleCallbackListener())

        // Initialize Rezolve Point SDK
        initPointSDK()
    }

    fun initPointSDK() {
        val checkPermissionFine = 
            ActivityCompat.checkSelfPermission(applicationContext, Manifest.permission.ACCESS_FINE_LOCATION) 

        if (checkPermissionFine == PackageManager.PERMISSION_GRANTED) { 
            mServiceManager = ServiceManager.getInstance(this) 
            if (!mServiceManager.isBluedotServiceInitialized) { 
                mServiceManager.initialize(projectId, this) 
            } 
        } else { 
            requestPermissions() 
        }
    }

    private fun requestPermissions() {
        val intent = Intent(applicationContext, RequestPermissionActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK
        startActivity(intent)
    }
}    
```

This method is called when Rezolve Point service started successfully, your app logic code using the Rezolve service could start from here. Replace “BRAZE_USER_ID” with the Braze user account.

```kotlin
override fun onInitializationFinished(error: BDError?) {
	if (error != null) {
		Toast.makeText(
			applicationContext,
			"Rezolve Point SDK initialization error: ${error.reason}",
			Toast.LENGTH_LONG
		).show()
		return
	}

	Braze.getInstance(this).changeUser(BRAZE_USER_ID)
	println("Rezolve Point SDK authenticated")
}
```

3\. Next, we create a class which will receive Rezolve Geo-Trigger events, which we will then log the event via the Braze API. To do that create `BluedotGeoTriggerReceiver.kt` class and add the below code.

```kotlin
class BluedotGeoTriggerReceiver: GeoTriggeringEventReceiver() {
    private val customEventEntry = YOUR_CUSTOM_ENTRY_EVENT_NAME
    private val customEventExit = YOUR_CUSTOM_EXIT_EVENT_NAME

   override fun onZoneEntryEvent(geoTriggerEvent: GeoTriggerEvent, context: Context) {
        println("Zone ${geoTriggerEvent.zoneInfo.name}, fence ${geoTriggerEvent.entryEvent()?.fenceName} entered at: ${Date()}")

        val eventProperties = BrazeProperties()
        eventProperties.addProperty("zone_id", geoTriggerEvent.zoneInfo.id)
        eventProperties.addProperty("zone_name", geoTriggerEvent.zoneInfo.name)
        eventProperties.addProperty("latitude",
            geoTriggerEvent.entryEvent()?.locations?.get(0)?.latitude
        )
        eventProperties.addProperty("longitude", geoTriggerEvent.entryEvent()?.locations?.get(0)?.longitude)
        eventProperties.addProperty("fence_id", geoTriggerEvent.entryEvent()?.fenceId)
        eventProperties.addProperty("fence_name", geoTriggerEvent.entryEvent()?.fenceName)

        geoTriggerEvent.zoneInfo.customData?.forEach { data ->
            eventProperties.addProperty(data.key, data.value)
        }

        Braze.getInstance(context).logCustomEvent(customEventEntry, eventProperties)
    }

    override fun onZoneExitEvent(geoTriggerEvent: GeoTriggerEvent, context: Context) {
        println("Zone ${geoTriggerEvent.zoneInfo.name}, fence ${geoTriggerEvent.exitEvent()?.fenceName} exited at: ${Date()}")

        val eventProperties = BrazeProperties()
        eventProperties.addProperty("zone_id", geoTriggerEvent.zoneInfo.id)
        eventProperties.addProperty("zone_name", geoTriggerEvent.zoneInfo.name)
        eventProperties.addProperty("dwellTime", geoTriggerEvent.exitEvent()?.dwellTime)
        eventProperties.addProperty("fence_id", geoTriggerEvent.exitEvent()?.fenceId)
        eventProperties.addProperty("fence_name", geoTriggerEvent.exitEvent()?.fenceName)

        geoTriggerEvent.zoneInfo.customData.forEach { data ->
            eventProperties.addProperty(data.key, data.value)
        }

        Braze.getInstance(context).logCustomEvent(customEventExit, eventProperties)
    }
}
```