Android Integration
=========================

### Table of Contents

*   Getting Started
*   Integrate Bluedot Point SDK in your Project
*   Interaction between Braze SDK and Bluedot Point SDK

Getting Started
---------------

1\. Modify your `build.gradle` to include Braze SDK.

```gradle
repositories {
...
    maven { 
        url "https://appboy.github.io/appboy-android-sdk/sdk" 
    }
}
```

Braze supports a few push providers: FCM, GCM, ADM. We recommend using Firebase. However, you can choose other.

2. In the app gradle add

implementation "com.appboy:android-sdk-ui:+"

3\. Create `appboy.xml` under the res folder and add the following code. Create a Braze Android App and get the API key and replace it in the `“REPLACE_WITH_YOUR_API_KEY”`. Also, replace the `“YOUR_CUSTOM_ENDPOINT_OR_CLUSTER”` with the custom endpoint from Braze.

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="com_appboy_api_key">REPLACE_WITH_YOUR_API_KEY</string>
    <string translatable="false" name="com_appboy_custom_endpoint">YOUR_CUSTOM_ENDPOINT_OR_CLUSTER</string>
    <bool translatable="false" name="com_appboy_firebase_cloud_messaging_registration_enabled">true</bool>
    <string translatable="false" name="com_appboy_firebase_cloud_messaging_sender_id">your_fcm_sender_id_here</string>
    <integer name="com_appboy_default_notification_accent_color">0xFFf33e3e</integer>
    <bool name="com_appboy_handle_push_deep_links_automatically">true</bool>
</resources>
```

4\. In the `AndroidManifest.xml` add the following:  
a. The following permissions are required.

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

b. The following braze service should be included to handle push receipt and open intents.

```xml
<service android:name="com.appboy.AppboyFirebaseMessagingService">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>
```

Integrate Bluedot Point SDK in your Project
-------------------------------------------

To integrate Bluedot Point SDK in your project, please click [here](https://docs.bluedot.io/android-sdk/android-project-setup/)

Interaction between Braze SDK and Bluedot Point SDK
---------------------------------------------------

1\. We need to ask the user to give permission to use the location services. To do that, create a RequestPermissionActivity.kt and then add the below code.

```java
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

2\. We then create another class which will implements Bluedot InitializationResultListener and upon SDK initialisation, calls Braze’s changeUser API. To do that create MainApplication.kt class and add the below code.

```java
class MainApplication : Application(), InitializationResultListener {

    private lateinit var mServiceManager: ServiceManager
    
    private val projectId \= Bluedot Project Id for the App

    override fun onCreate() {
        super.onCreate()

        registerActivityLifecycleCallbacks(AppboyLifecycleCallbackListener(false, false))

        // initialize Bluedot point sdk
        initPointSDK()
    }

    fun initPointSDK() {
        val checkPermissionFine \= 
            ActivityCompat.checkSelfPermission( applicationContext, Manifest.permission.ACCESS\_FINE\_LOCATION ) 

        if (checkPermissionFine \== PackageManager.PERMISSION\_GRANTED) { 
            mServiceManager \= ServiceManager.getInstance(this) 
            if (!mServiceManager.isBluedotServiceInitialized) { 
                mServiceManager.initialize(projectId, this) 
            } 
        } else { 
            requestPermissions() 
        }
    }

    private fun requestPermissions() {
        val intent \= Intent(applicationContext, RequestPermissionActivity::class.java)
        intent.flags \= Intent.FLAG\_ACTIVITY\_NEW\_TASK
        startActivity(intent)
    }
}    
```

This method is called when BlueDotPointService started successfully, your app logic code using the Bluedot service could start from here. Replace “YOUR\_BRAZE\_USER\_ACCOUNT” with the Braze user account.

```
    override fun onInitializationFinished(error: BDError?) {
        if (error != null) {
            Toast.makeText(
                applicationContext,
                "Bluedot Point SDK initialization error: ${error.reason}",
                Toast.LENGTH\_LONG
            ).show()
            return
        }

        Appboy.getInstance(this).changeUser(YOUR\_BRAZE\_USER\_ACCOUNT)
        println("Bluedot Point SDK authenticated")
    }
```

3\. Next, we create a class which will receive Bluedot GeoTrigger events, which we will then log the event via the Braze API. To do that create BluedotGeoTriggerReceiver.kt class and add the below code.

```
class BluedotGeoTriggerReceiver: GeoTriggeringEventReceiver() {
    private val customEventEntry \= YOUR CUSTOM ENTRY EVENT NAME
    private val customEventExit \=YOUR CUSTOM EXIT EVENT NAME

    override fun onZoneEntryEvent(entryEvent: ZoneEntryEvent, context: Context) {
        println("Zone ${entryEvent.zoneInfo.zoneName}, fence ${entryEvent.fenceInfo.name} entered at: ${Date()}")

        val eventProperties \= AppboyProperties()
        eventProperties.addProperty("zone\_id", entryEvent.zoneInfo.zoneId)
        eventProperties.addProperty("zone\_name", entryEvent.zoneInfo.zoneName)
        eventProperties.addProperty("latitude", entryEvent.locationInfo.latitude)
        eventProperties.addProperty("longitude", entryEvent.locationInfo.longitude)
        eventProperties.addProperty("fence\_id", entryEvent.fenceInfo.id)
        eventProperties.addProperty("fence\_name", entryEvent.fenceInfo.name)

        entryEvent.zoneInfo.getCustomData()?.forEach { data \->
            eventProperties.addProperty(data.key, data.value)
        }

        Appboy.getInstance(context).logCustomEvent(customEventEntry, eventProperties)
    }

    override fun onZoneExitEvent(exitEvent: ZoneExitEvent, context: Context) {
        println("Zone ${exitEvent.zoneInfo.zoneName}, fence ${exitEvent.fenceInfo.name} exited at: ${Date()}")

        val eventProperties \= AppboyProperties()
        eventProperties.addProperty("zone\_id", exitEvent.zoneInfo.zoneId)
        eventProperties.addProperty("zone\_name", exitEvent.zoneInfo.zoneName)
        eventProperties.addProperty("dwellTime", exitEvent.dwellTime)
        eventProperties.addProperty("fence\_id", exitEvent.fenceInfo.id)
        eventProperties.addProperty("fence\_name", exitEvent.fenceInfo.name)

        exitEvent.zoneInfo.getCustomData()?.forEach { data \->
            eventProperties.addProperty(data.key, data.value)
        }

        Appboy.getInstance(context).logCustomEvent(customEventExit, eventProperties)
    }

    override fun onZoneInfoUpdate(zones: List<ZoneInfo\>, context: Context) {
        println("Zones updated at: ${Date()} \\nZoneInfos count: ${zones.count()}")
    }
}
```