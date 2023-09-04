1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Integrations](https://docs.bluedot.io/integrations/)
3.  [Oracle Responsys Integration](https://docs.bluedot.io/integrations/oracle-integration/)
4.  Oracle Android Integration

Oracle Android Integration
==========================

**Responsys & Bluedot SDK Integration**

Add the following repositories and dependencies to your application’s `build.gradle` file:

dependencies {
  implementation fileTree(dir: 'libs', include: \['PushIOManager.aar'\]) // Responsys PushIOManager
  implementation 'com.gitlab.bluedotio.android:point\_sdk\_android:15.3.4' //Bluedot Point SDK
  implementation 'com.google.firebase:firebase-core:16.0.8'
  implementation 'com.google.firebase:firebase-messaging:17.6.0'
  ...
}

apply plugin: 'com.google.gms.google-services'

The following code example demonstrates registering your app with Responsys SDK & also listen to Blue Dot Point SDK’s InitializationResultListener:

**  
Starting the Bluedot SDK**

1\. We need to ask the user to give permission to use the location services. To do that, create a RequestPermissionActivity.kt and then add the below code.

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

2\. The `ServiceManager` is the entry-point for an app to start using the Bluedot Point SDK. The app must get an instance of the ServiceManager class and invoke `initialize` method by providing the Project Id in order to initialize and start the Bluedot engine. The Project Id can be retrieved from the Bluedot Point Access account. It is important to pass a reference to `InitializationResultListener` so the app can receive initialization callbacks from the SDK.

Initializing the Bluedot SDK and requesting for Location permission from the user and setting a foreground notification.

public class MainApplication extends Application implements InitializationResultListener {

    ServiceManager mServiceManager;

    private final String projectId \= ""; //Project ID// for the App

    @Override
    public void onCreate() {
        super.onCreate();

        //Registering App with Responsys SDK
        PushIOManager.getInstance(getApplicationContext()).registerApp();
        //Set this you need InApp Push feature from Responsys
        PushIOManager.getInstance(this).setInAppFetchEnabled(true);

        // initialize Bluedot point sdk
        initPointSDK();
    }

    public void initPointSDK() {

        int checkPermissionCoarse \= ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.ACCESS\_COARSE\_LOCATION);
        int checkPermissionFine \= ActivityCompat.checkSelfPermission(getApplicationContext(), Manifest.permission.ACCESS\_FINE\_LOCATION);

        if(checkPermissionCoarse \== PackageManager.PERMISSION\_GRANTED && checkPermissionFine \== PackageManager.PERMISSION\_GRANTED) {
            mServiceManager \= ServiceManager.getInstance(this);

            if(!mServiceManager.isBlueDotPointServiceRunning()) {
                mServiceManager.initialize(projectId, this);
            }
        }
        else
        {
            requestPermissions();
        }

    }

    private void requestPermissions() {

        Intent intent \= new Intent(getApplicationContext(), RequestPermissionActivity.class);
        intent.setFlags(Intent.FLAG\_ACTIVITY\_NEW\_TASK);
        startActivity(intent);
    }

The following mandatory callbacks of the `InitializationResultListener` interface must be implemented. 

User should registerUserID on PushIOManager with any customer user-specific ID, by default we are using Bluedot Point SDK InstallRef (It is a unique identifier assigned to a device during installation) in onInitializationFinished() callback.

@Override public void onInitializationFinished(@Nullable BDError bdError) {
    if (bdError != null){
        Toast.makeText(getApplicationContext(),
                "Bluedot Initialization Error " + bdError.getReason(),
                Toast.LENGTH\_LONG).show();

        return;
    }

    PushIOManager.getInstance(getApplicationContext()).registerUserId(mServiceManager.getInstallRef());
}

3\. Next, we create a class, BluedotGeoTriggerReceiver.kt, which will receive Bluedot GeoTrigger events. Inside the callbacks ZoneInfo and FenceInfo details are populated in PIOGeoRegion and corresponding PushIOManager onGeoRegionEntered() / onGeoRegionExited() are called.

public class BluedotGeoTriggerReceiver extends GeoTriggeringEventReceiver {
    private final String TAG \= "BluedotApp";

    @Override
    public void onZoneInfoUpdate(@NotNull List<ZoneInfo\> list, @NotNull Context context) {
        Log.i(TAG, "Zones updated at: " + new Date().toString()
                + " ZoneInfos count: " + list.size());
    }

    @Override
    public void onZoneEntryEvent(@NotNull ZoneEntryEvent zoneEntryEvent, @NotNull Context context) {
        Log.i(TAG, "Zones entered at: " + new Date().toString()
                + " Zone name:" + zoneEntryEvent.toString());

        //Building GeoRegion  with Fence details
        PIOGeoRegion geoRegion\= new PIOGeoRegion();
        geoRegion.setGeofenceId(zoneEntryEvent.getFenceInfo().getId());
        geoRegion.setGeofenceName(zoneEntryEvent.getFenceInfo().getName());
        geoRegion.setZoneId(zoneEntryEvent.getZoneInfo().getZoneId());
        geoRegion.setZoneName(zoneEntryEvent.getZoneInfo().getZoneName());
        geoRegion.setSource("Bluedot SDK");

        //Reporting Checkin to Responsys
        PushIOManager.getInstance(context).onGeoRegionEntered(geoRegion,
                (s, pioRegionEventType, e) \-> {
                    Log.i(TAG,"onGeoRegionEntered  pioRegionEventType"+pioRegionEventType);
                    if(e != null) {
                        Log.i(TAG, "onGeoRegionEntered PIORegionException" + e.getErrorMessage() + "###" + e.getErrorDescription());
                    }
                });
    }

    @Override
    public void onZoneExitEvent(@NotNull ZoneExitEvent zoneExitEvent, @NotNull Context context) {
        Log.i(TAG, "Zones exited at: " + new Date().toString()
                + " Zone name:" + zoneExitEvent.toString());

        //Building GeoRegion with Fence details
        PIOGeoRegion geoRegion\= new PIOGeoRegion();
        geoRegion.setGeofenceId(zoneExitEvent.getFenceInfo().getId());
        geoRegion.setGeofenceName(zoneExitEvent.getFenceInfo().getName());
        geoRegion.setDwellTime(zoneExitEvent.getDwellTime());
        geoRegion.setZoneId(zoneExitEvent.getZoneInfo().getZoneId());
        geoRegion.setZoneName(zoneExitEvent.getZoneInfo().getZoneName());
        geoRegion.setSource("Bluedot SDK");

        //Reporting Checkout to Responsys
        PushIOManager.getInstance(context).onGeoRegionExited(geoRegion,
                (s, pioRegionEventType, e) \-> Log.i(TAG,"onGeoRegionExited "+s));
    }
}

4\. Finally, start Geo-triggering as per the [Bluedot Geo-triggering Android documentation](https://docs.bluedot.io/android-sdk/android-geo-triggering/).

For further information on the classes and methods discussed within this documentation, please refer to the [Android SDK documentation](https://docs.bluedot.io/android-sdk/).

**GitHub Sample Project**
-------------------------

A sample project which demonstrates the integration of the Responsys SDK and Bluedot Point SDK is available on **[GitHub](https://github.com/Bluedot-Innovation/OracleMinimalApp-Android)**.