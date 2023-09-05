Tempo
===============

Tempo allows active tracking of a user’s location, as well as live ETA estimation.

Start Tempo
-----------

For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Bluedot Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Bluedot CX representative.

:::info
For Android, a [foreground service notification](https://docs.bluedot.io/android-sdk/android-location-permission-notifications-best-practices/#fgnotification) is also required.
:::

Tempo also requires Destination IDs to be defined, which you can learn about [here](https://docs.bluedot.io/tempo/create-your-destinations/).

To start Tempo, refer to the sample code below:

```js
function doStartTempo() {
    // The SDK needs be initialized and the app must have location permissions.
    if (device.platform === "iOS") {
        io.bluedot.cordova.plugin.iOSStartTempoTracking(
            function () { console.log("Start Tempo Successful") },
            function (error) { console.log("Start Tempo Failed: " + error) },
            "YOUR_DESTINATION_ID");
    } else if (device.platform === "Android") {
        const androidNotificationParams = {
            channelId: 'Bluedot Cordova',
            channelName: 'Bluedot Cordova',
            title: 'Bluedot Foreground Service - Tempo',
            content: "This app is running a foreground service using location services",
            notificationId: -1
        }

        io.bluedot.cordova.plugin.androidStartTempoTracking(
            function () { console.log("Start Tempo Successful") },
            function (error) { console.log("Start Tempo Failed: " + error) },
            "YOUR_DESTINATION_ID",
            androidNotificationParams.channelId,
            androidNotificationParams.channelName,
            androidNotificationParams.title,
            androidNotificationParams.content,
            androidNotificationParams.notificationId
        );
    }
}
```

Receiving Tempo events
----------------------

The Tempo service does not issue events under normal operation. Instead, it only issues events if there is an error with operation. Tracking events are instead delivered via webhook, as configured in the Canvas UI.

Subscribe to receive the Tempo events:
```js
function subscribeToTempoEvents() {
    // Register callbacks functions for receiving Tempo events
    io.bluedot.cordova.plugin.tempoStoppedWithErrorCallback( tempoTrackingStoppedWithErrorCallback );
    io.bluedot.cordova.plugin.tempoTrackingExpiredCallback( tempoTrackingExpiredCallback );

    // Then start the Tempo service.
}

function tempoTrackingStoppedWithErrorCallback(error) {
   console.log("Tempo stopped with error: " + error);
}

function tempoTrackingExpiredCallback() {
   console.log("Tempo Tracking Expired");
}
```

Stop Tempo
----------

Once the Tempo service is no longer needed, you can stop the service.

```js
io.bluedot.cordova.plugin.stopTempoTracking(
    function () { console.log("Stop Tempo Successful") },
    function (error) { console.error("Stop Tempo Failed: " + error) }
)
```

Tempo Status
------------

You can use the `isTempoRunning` method to check the status of the Tempo service. It will return a `boolean` value.
```js
io.bluedot.cordova.plugin.isTempoRunning(
    function (isRunning) { console.log("Is Tempo Running: " + isRunning) }
);
```