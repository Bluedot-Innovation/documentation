Android Integration
=============================

### Table of Contents

*   Getting Started
*   Integrate Bluedot Point SDK in your Project
*   Interaction between CleverTap SDK and Bluedot Point SDK

Getting Started
---------------

Modify your `build.gradle` to include CleverTap SDK.

```gradle
dependencies {
    ...
    implementation 'com.google.android.gms:play-services-base:17.6.0'
    implementation 'androidx.core:core:1.3.0'
    implementation 'com.android.installreferrer:installreferrer:2.1'

    implementation 'com.clevertap.android:clevertap-android-sdk:4.1.1'
    implementation 'com.google.firebase:firebase-messaging:20.2.4'

    //Bluedot Point SDK
    implementation 'com.gitlab.bluedotio.android:point\_sdk\_android:15.3.4'
}

apply plugin: 'com.google.gms.google-services'
```

Integrate Bluedot Point SDK in your Project
-------------------------------------------

To integrate Bluedot Point SDK in your project, please click [here](https://docs.bluedot.io/android-sdk/)

Interaction between CleverTap SDK and Bluedot Point SDK
-------------------------------------------------------

1\. We need to ask the user to give permission to use the location services. To do that, create a RequestPermissionActivity.kt and then add the below code.

```java
public class RequestPermissionActivity extends AppCompatActivity {

    final int PERMISSION\_REQUEST\_CODE \= 1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        //Request permission required for location
        ActivityCompat.requestPermissions(this, new String\[\]{Manifest.permission.ACCESS\_COARSE\_LOCATION, Manifest.permission.ACCESS\_FINE\_LOCATION}, PERMISSION\_REQUEST\_CODE);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String\[\] permissions, int\[\] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        switch (requestCode) {
            case PERMISSION\_REQUEST\_CODE:
                if (grantResults.length \> 0 && grantResults\[0\] \== PackageManager.PERMISSION\_GRANTED) {
                    ((MainApplication)getApplication()).initPointSDK();
                } else {
                    //Permissions denied
                }
                break;
        }
        finish();
    }
}
```

2\. We then create another class which will implements Bluedot InitializationResultListener and upon SDK initialisation. To do that create MainApplication.kt class and add the below code.

public class MainApplication extends Application implements InitializationResultListener {

    private ServiceManager serviceManager;
    private final String projectId \= ""; //Project Id for the Point Demo App

    @Override
    public void onCreate() {
        super.onCreate();

        //Start the CleverTap SDK.
        initCleverTap();

        //Start the Bluedot Point SDK
        initPointSDK();
    }

    public void initPointSDK() {

        int checkPermissionCoarse \= ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.ACCESS\_COARSE\_LOCATION);
        int checkPermissionFine \= ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.ACCESS\_FINE\_LOCATION);

        if(checkPermissionCoarse \== PackageManager.PERMISSION\_GRANTED && checkPermissionFine \== PackageManager.PERMISSION\_GRANTED) {
            serviceManager \= ServiceManager.getInstance(this);

            if(!serviceManager.isBlueDotPointServiceRunning()) {
                serviceManager.initialize(projectId, this);
            }
        }
        else
        {
            requestPermissions();
        }
    }

    private void initCleverTap() {
        ActivityLifecycleCallback.register(this);
    }

    private void requestPermissions() {

        Intent intent \= new Intent(getApplicationContext(), RequestPermissionActivity.class);
        intent.setFlags(Intent.FLAG\_ACTIVITY\_NEW\_TASK);
        startActivity(intent);
    }

    @Override
    public void onInitializationFinished(@Nullable BDError bdError) {
        if (bdError != null){
            Toast.makeText(getApplicationContext(),
                    "Bluedot Initialization Error " + bdError.getReason(),
                    Toast.LENGTH\_LONG).show();

            return;
        }
    }
}

3\. Next, we create a class which will receive Bluedot GeoTrigger events, which we will then log the event via the CleverTap API. To do that create BluedotGeoTriggerReceiver.kt class and add the below code.

public class BluedotGeoTriggerReceiver extends GeoTriggeringEventReceiver {
    private final String TAG \= "BluedotApp";

    @Override
    public void onZoneInfoUpdate(@NotNull List<ZoneInfo\> list, @NotNull Context context) {
        Log.i(TAG, "Zones updated at: " + new Date().toString()
                + " ZoneInfos count: " + list.size());
    }

    @Override
    public void onZoneEntryEvent(@NotNull ZoneEntryEvent zoneEntryEvent, @NotNull Context context) {
        sendCustomEvent(
                "YOUR CUSTOM ENTRY EVENT NAME",
                zoneEntryEvent.getZoneInfo(),
                \-1,
                zoneEntryEvent.getZoneInfo().getCustomData(),
                context);
    }

    @Override
    public void onZoneExitEvent(@NotNull ZoneExitEvent zoneExitEvent, @NotNull Context context) {
        sendCustomEvent(
                "YOUR CUSTOM EXIT EVENT NAME",
                zoneExitEvent.getZoneInfo(),
                zoneExitEvent.getDwellTime(),
                zoneExitEvent.getZoneInfo().getCustomData(),
                context);
    }

    private void sendCustomEvent(String eventName, ZoneInfo zoneInfo, int dwellTime, Map<String, String\> customDataMap, Context context) {
        CleverTapAPI cleverTap \= CleverTapAPI.getDefaultInstance(context);
        HashMap<String, Object\> checkInAction \= new HashMap<String, Object\>();
        checkInAction.put("bluedot\_zone\_id", zoneInfo.getZoneId());
        checkInAction.put("bluedot\_zone\_name", zoneInfo.getZoneName());
        if(customDataMap != null && !customDataMap.isEmpty()) {
            for(Map.Entry<String, String\> data : customDataMap.entrySet()) {
                checkInAction.put(data.getKey(), data.getValue());
            }
        }

        if(dwellTime != \-1) {
            checkInAction.put("dwell\_time", dwellTime);
        }

        cleverTap.pushEvent(eventName, checkInAction);
    }
}