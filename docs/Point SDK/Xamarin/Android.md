Android -  Quick start
===================================

In order to successfully integrate the Xamarin wrapper for Point SDK, you would require a Bluedot account. Please contact our sales team by requesting a [demo](https://bluedotinnovation.com/demo).  Also, ensure that you also meet the [Android requirements](/android-sdk/android-requirements/).

The Bluedot Point SDK enables geolocation capability for apps by delivering accurate location awareness, while substantially reducing battery consumption compared to Android Location API or other standard methods. The Point SDK connects to the Bluedot’s backend system, Canvas, to download your pre-configured Geofences, GEOLINE™, conditions, and actions.

The Point SDK enables rapid development of location-aware apps. It delivers precise location awareness to the mobile application, but without the usual battery drain that would typically occur. There’s also no need for additional hardware, making it highly scalable. This means the Point SDK enables location-based apps and experiences that were previously impossible. The rest is up to you.

* * *

Step 1: Creating the Xamarin Android project
--------------------------------------------

Create the Xamarin Android project:

1\. Note: Ensure that your Visual Studio version is at least 15.3.

2\. Start a new Xamarin Visual Studio solution, select **Android App** template and click Next.

![](http://bluedot.lionwood.software/wp-content/uploads/2018/01/Create_New_Android_App_Solution.png)

3. Enter an App Name, Organization Name. Select Modern Development as target platforms and click Next.

![](http://bluedot.lionwood.software/wp-content/uploads/2018/01/Configure_Android_App.png)

4. Choose a folder to save the project (e.g. ‘Projects’) and select ‘**Create**’.

![](http://bluedot.lionwood.software/wp-content/uploads/2018/01/Configure_Android_App_Location.png)

* * *

Step 2: Add Bluedot.PointSDK.Android package
--------------------------------------------

1\. Right-click on Packages folder, select ‘_Add Packages…_‘. In the search box type Bluedot.

![](https://docs.bluedot.io/wp-content/uploads/2021/02/Screen-Shot-2021-02-04-at-2.21.38-pm-300x197.png)

* * *

Step 3: Minimal Point SDK Integration
-------------------------------------

1. Declare an instance of **ServiceManager** class, which is the entry point for an app to start using Point SDK.
```csharp
namespace appname
{
    [Activity(Label = "appname", MainLauncher = true, Icon = "@mipmap/icon")]
    public class MainActivity : Activity
    {
        ServiceManager serviceManager;
        ...
    }
}
```

2\. Instantiate the **ServiceManager** singleton object and invoke **initialize()** function inside **OnCreate()** by passing the _projectId_ and implementation of **IInitializationResultListener** for Initiliazing Bluedot SDK as below.

```csharp
namespace appname
{
    \[Activity(Label \= "appname", MainLauncher \= true, Icon \= "@mipmap/icon")\]
    public class MainActivity : Activity, IInitializationResultListener
    {
        ServiceManager serviceManager;
        ...
 
        protected override void OnCreate(Bundle savedInstanceState)
        {
            ...

          ServiceManager.getInstance(this).initialize("myProjectId", this);
            ...

        } 
       
       public void OnInitializationFinished(BDError error)
       {
         // Implement this function to receive Initialization status
         // error is reported if initialization is not success // otherwise error is null
       }

      ... 
      }
 }
 ```

3\. Extend BroadcastReceivers as **GeoTriggeringEventReceiver, TempoTrackingReceiver** and **BluedotServiceReceiver** to receive GeoTriggering callbacks, Tempo and Bluedot service error callbacks. Implement the functions of the classes as below:

**Point SDK Broadcast Receivers and Callbacks**
```csharp
namespace yourappname
{
 [BroadcastReceiver(Enabled = true)]
 [IntentFilter(new[] { "io.bluedot.point.GEOTRIGGER" })]
 public class AppGeoTriggerReceiver : GeoTriggeringEventReceiver
 {
    public override void OnZoneEntryEvent(ZoneEntryEvent entryEvent, Context context)
    {
      // This method will be called if the device entered into a Fence 
    }

    public override void OnZoneExitEvent(ZoneExitEvent exitEvent, Context context)
    {
      // This method will be called when a device exits the Fence for which OnZoneEntryEvent was reported.
      // Only applies to zones flagged as Exit enabled on Canvas
    }

   public override void OnZoneInfoUpdate(IList<ZoneInfo> zones, Context context)
   {
     //Passively receive Zones information 
   }
 }

[BroadcastReceiver(Enabled = true)]
[IntentFilter(new[] { "io.bluedot.point.TEMPO" })]
public class AppTempoReceiver : TempoTrackingReceiver
{
  public override void TempoStoppedWithError(BDError error, Context context)
  {
    // If Tempo tracking is stopped due to some Error
    // Human-readable string of error.getReason() can be useful to analyse the cause of the error. 
  }
}

[BroadcastReceiver(Enabled = true)]
[IntentFilter(new[] { "io.bluedot.point.SERVICE" })]
public class BluedotErrorReceiver : BluedotServiceReceiver
{
  public override void OnBluedotServiceError(BDError error, Context context)
  {
    // This gives you details if BlueDotPointService encounters error. 
    // Human-readable string of error.getReason() can be useful to analyse the cause of the error. 
  }
 }
}
```

4 (Optional). You can use the **SetCustomEventMetaData()** method to pass additional event-specific metadata to our Check-in and/or Check-out Notifications which is sent to our servers. Make sure to set this MetaData before calling the _initialize()_. Learn more about the Custom Event Metadata [here](https://docs.bluedot.io/custom-event-metadata/).

```csharp
namespace appname
{
    [Activity(Label = "appname", MainLauncher = true, Icon = "@mipmap/icon")]
    public class MainActivity : Activity,...
    {
        ServiceManager serviceManager;
        ... 
      
        protected override void OnCreate(Bundle savedInstanceState)
        {
            ...
            serviceManager = ServiceManager.GetInstance(this);
            // Set CustomEventMetadata 
            IDictionary<string, string> keyValuePairs = new Dictionary<string, string>(); 
            keyValuePairs.Add("store_id", "1234"); 
            keyValuePairs.Add("user_id", "3456"); 
            serviceManager.SetCustomEventMetaData(keyValuePairs); 
            ...
        } 
       ...
    }
}
```

* * *

Step 4: Next Steps
------------------

**Essential Guides:**

*   For a list of detailed Android Features, please refer to the documentation section on [Android – Features](/android-sdk/android-features/)
*   To avoid unexpected behaviour in the app, it is highly recommended to read [Android – Caveats](/android-sdk/android-caveats/)
*   For interacting with our Canvas backend, please refer to the documentation on [Android – Quick Start](https://docs.bluedot.io/android-sdk/android-quick-start/)

**Xamarin Android integration examples on GitHub** 

You can refer to Xamarin Android integration examples via the link below:

**[GitHub Examples](https://github.com/Bluedot-Innovation/PointSDK-Xamarin-minimal-app-Android "GitHub Examples")**

API Documentation can be assessed via the link below:

**[API Documentation](https://android-docs.bluedot.io/-bluedot-s-d-k/index.html "API Documentation")**