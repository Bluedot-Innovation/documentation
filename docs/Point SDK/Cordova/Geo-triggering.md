1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  Cordova – Geo-triggering

Cordova – Geo-triggering
========================

Geo-triggering allows for the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline™). For this capability, the SDK needs to be initialized and the app must have been granted location permission.

Start Geo-triggering
--------------------

To start geo-triggering:

function doStartGeoTriggering() 
{
    // The SDK needs be initialized and the app must have location permissions.
    if (device.platform \=== "iOS") {
        io.bluedot.cordova.plugin.iOSStartGeoTriggering(
            function () { console.log("Start Geotriggering Successful") },
            function (error) { console.log("Start Geotriggering Failed with error: " + error) }
        );
    } else if (device.platform \=== "Android") {
        const androidNotificationParams \= {
            channelId: "Bluedot Cordova",
            channelName: "Bluedot Cordova",
            title: "Bluedot Foreground Service - Geo-triggering",
            content:
              "This app is running a foreground service using location services",
            notificationId: 123,
          };

        io.bluedot.cordova.plugin.androidStartGeoTriggering(
            function () { console.log("Start Geotriggering Successful") },
            function (error) { console.log("Start Geotriggering Failed with error: " + error) },
            androidNotificationParams.channelId,
            androidNotificationParams.channelName,
            androidNotificationParams.title,
            androidNotificationParams.content,
            androidNotificationParams.notificationId
        );
   }
    
}

Receiving Geo-trigger events
----------------------------

Register callback functions to receive Geo-triggering events.

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

As entry events may occur immediately upon starting Geo-triggering, it is recommended to subscribe to the events before starting the Geo-triggering service.

function subscribeToGeoTriggeringEvents() 
{
   // Register callbacks functions for receiving geo-triggering events
   io.bluedot.cordova.plugin.zoneInfoUpdateCallback( zoneUpdateCallbackFunction );
   io.bluedot.cordova.plugin.enteredZoneCallback( zoneEnteredCallbackFunction );
   io.bluedot.cordova.plugin.exitedZoneCallback( zoneExitedCallbackFunction );
 
   // Then start the Geo-triggering service.
}

function zoneUpdateCallbackFunction( zoneInfos )
{
    console.log( "Zones updated for " + zoneInfos.length + " zones" );
}

function zoneEntered( fenceInfo, zoneInfo, locationInfo, willCheckOut, customData )
{
    console.log("Zone entered");
}

function zoneExited( fenceInfo, zoneInfo, date, dwellTime, customData )
{
    console.log("Zone exited");
}

Stop Geo-triggering
-------------------

If you only need geo-triggering for a limited period, once that period is over, you should stop the geo-triggering service.

io.bluedot.cordova.plugin.stopGeoTriggering(
   function () { console.log("Stop Geotriggering Successful") },
   function (error) { console.log("Stop Geotriggering Failed with error: " + error) }
);

Geo-triggering Status
---------------------

You can use the `isGeoTriggeringRunning` method to check the status of the Geo-triggering service.

io.bluedot.cordova.plugin.isGeoTriggeringRunning(
    function (isRunning) { console.log("Is Geo Triggering Running: " + isRunning) }
);