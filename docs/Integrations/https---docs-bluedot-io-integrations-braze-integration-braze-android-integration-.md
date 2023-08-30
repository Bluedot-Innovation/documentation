1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Integrations](https://docs.bluedot.io/integrations/)
3.  [Braze Integration](https://docs.bluedot.io/integrations/braze-integration/)
4.  Braze Android Integration

Braze Android Integration
=========================

### Table of Contents

*   Getting Started
*   Integrate Bluedot Point SDK in your Project
*   Interaction between Braze SDK and Bluedot Point SDK

Getting Started
---------------

1\. Modify your `build.gradle` to include Braze SDK.

```
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

3\. Create appboy.xml under the res folder and add the following code. Create a Braze Android App and get the API key and replace it in the “REPLACE\_WITH\_YOUR\_API\_KEY”. Also, replace the “YOUR\_CUSTOM\_ENDPOINT\_OR\_CLUSTER” with the custom endpoint from Braze.

```
<?xml version\="1.0" encoding\="utf-8"?>
<resources>
    <string name\="com\_appboy\_api\_key"\>REPLACE\_WITH\_YOUR\_API\_KEY</string>
    <string translatable\="false" name\="com\_appboy\_custom\_endpoint"\>YOUR\_CUSTOM\_ENDPOINT\_OR\_CLUSTER</string>
    <bool translatable\="false" name\="com\_appboy\_firebase\_cloud\_messaging\_registration\_enabled"\>true</bool>
    <string translatable\="false" name\="com\_appboy\_firebase\_cloud\_messaging\_sender\_id"\>your\_fcm\_sender\_id\_here</string>
    <integer name\="com\_appboy\_default\_notification\_accent\_color"\>0xFFf33e3e</integer>
    <bool name\="com\_appboy\_handle\_push\_deep\_links\_automatically"\>true</bool>
</resources>
```

4\. In the AndroidManifest.xml add the following:  
a. The following permissions are required.

```
<uses-permission android:name\="android.permission.ACCESS\_FINE\_LOCATION" />
<uses-permission android:name\="android.permission.INTERNET" />
<uses-permission android:name\="android.permission.ACCESS\_NETWORK\_STATE" />
```

b. The following braze service should be included to handle push receipt and open intents.

```
<service android:name\="com.appboy.AppboyFirebaseMessagingService"\>
    <intent-filter>
        <action android:name\="com.google.firebase.MESSAGING\_EVENT" />
    </intent-filter>
</service>
```

Integrate Bluedot Point SDK in your Project
-------------------------------------------

To integrate Bluedot Point SDK in your project, please click [here](https://docs.bluedot.io/android-sdk/android-project-setup/)

Interaction between Braze SDK and Bluedot Point SDK
---------------------------------------------------

1\. We need to ask the user to give permission to use the location services. To do that, create a RequestPermissionActivity.kt and then add the below code.

```
internal val PERMISSION\_REQUEST\_CODE \= 1
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    //Request permission required for location
    ActivityCompat.requestPermissions(
        this,
        arrayOf(Manifest.permission.ACCESS\_COARSE\_LOCATION, Manifest.permission.ACCESS\_FINE\_LOCATION),
        PERMISSION\_REQUEST\_CODE
    )
}

override fun onRequestPermissionsResult(requestCode: Int, permissions: Array, grantResults: IntArray) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    when (requestCode) {
        PERMISSION\_REQUEST\_CODE \-> if (grantResults.size \> 0 && grantResults\[0\] \== PackageManager.PERMISSION\_GRANTED) {
            (application as MainApplication).initPointSDK()

        } else {
            //Permissions denied

        }
    }
    finish()
}
```

2\. We then create another class which will implements Bluedot InitializationResultListener and upon SDK initialisation, calls Braze’s changeUser API. To do that create MainApplication.kt class and add the below code.

```
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