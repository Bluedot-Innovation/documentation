Migrating to 2.0.0 Guide
=======================================

The Bluedot React Native wrapper version is a major rewrite of our APIs. It includes many updates such as:

*   A simple and easier way to initialize the Point SDK.
*   Giving you more control on when to start & stop Geo-triggering and Tempo features.

Update to initialization call  

--------------------------------

The SDK authentication call has changed from: 

```js
BluedotPointSdk.authenticate( 
  "your_applicationId", 
  "Location permissions <Always | WhileInUse>", 
  () => console.log("Success callback"), 
  () => console.error("Error callback") 
);
```

To:

```js
BluedotPointSdk.initialize(
 "your_projectId",
 () => console.log("Success callback"),
 () => console.log("Error callback")
);
```

To check if the SDK is initialized:

```js
// Async / Await
const isBluedotSdkInitialized = await BluedotPointSdk.isInialized()

// Promise
BluedotPointSdk.isInitialized()
 .then((isInitialized) => console.log("Is the SDK initialized?", isInitialized));
 ```

New / Updates in 2.0.0
----------------------

*   Moving forward, `apiKey` will be replaced by `projectId`. You can find the `projectId` in [Canvas](https://docs.bluedot.io/canvas/). 
*   Bluedot Point SDK **no longer requests for OS location permissions on initialization** as per the previous API.
    *   We encourage you to requests the OS the location permissions that you require (Always or When in Use), at an opportune moment from within your app. For example, when a user places an order within the app, at this point you can start Geo-triggering tracking and as well requesting for location permission.
    *   If you want to request _Always Allow_ permission immediately after the user grants the _When In Use_ permission level for iOS devices then please refer to changes from _react-native-permissions_ library [here](https://github.com/zoontek/react-native-permissions/pull/529/files#r550209147)
*   The SDK will **not** start triggering Geofeatures immediately after initialization as per the previous API. You will have to make the call explicitly to start / stop Geo-triggering.

 Explicit calls to start & stop Geo-triggering feature
------------------------------------------------------

In the version 2.0.0, we give more control to you on when to start and stop Geo-triggering features. To start and stop triggering Geofeatures, you will need to explicitly call the API.  

### Notes

1.  You can start the Geo-triggering feature only while your app is in the foreground.
2.  Stopping Geo-triggering has the intended effect of stopping location services on the app, thereby conserving battery on your user’s device, unless there’s another Bluedot SDK service is active such as Tempo.
    *   Once the stopGeoTriggering method is called the SDK will stop tracking the device. The deprecated logout method is no longer needed. The SDK will be initialized only once.

New Geo-triggering API
----------------------
```js
import { Button } from 'react-native'
import BluedotPointSdk from 'bluedot-react-native'

export default function App() {
  // The SDK needs be initialized and the app must have location permissions.
  const geoTriggeringService = new BluedotPointSdk.GeoTriggeringBuilder()

  function handleStartGeoTriggering() {
    geoTriggeringService.start(
      () => console.log("On Success Callback"),
      () => console.error("On Error Callback"),
    )
  }

  return <Button title="Start Geo-Triggering" onPress={handleStartGeoTriggering} />
}
```

Receiving Geo-trigger events
----------------------------

The events to receive Geo-triggering events have been changed from:

```js
// When device enters a Zone
BluedotPointSdk.on("checkedIntoFence", (event) => console.log(event));

// When device exits a Zone
BluedotPointSdk.on("checkedOutFromFence", (event) => console.log(event));
```

To:

```js
// When device enters a Zone
BluedotPointSdk.on("enterZone", (event) => console.log(event));

// When device exits a Zone
BluedotPointSdk.on("exitZone", (event) => console.log(event));
```

### Notes:

*   Moving forward, beacon related events will no longer be supported. You may continue to use the deprecated events to receive beacon related callbacks.
*   The zoneInfoUpdate will be called after start Geo-triggering API is called.

Updates to Tempo API
--------------------

The Tempo the API has changed from

```js
// Start Tempo
BluedotPointSdk.startTempoTracking("destinationId", () => console.log("Callback"));

// Stop Tempo
BluedotPointSdk.stopTempoTracking();
```

To:
```jsx
import { Button, View } from 'react-native'
import BluedotPointSdk from 'bluedot-react-native'

export default function App() {
  // The SDK needs be initialized and the app must have location permissions.

  const tempoService = new BluedotPointSdk.TempoBuilder()

  function handleStartTempo() {
    tempoService
      // * The Android Foreground notfication is required by Tempo *
      .androidNotification(
        "Android notification channel Id",
        "Android notification channel name",
        "Android notification title",
        "Android notification content"
      ) 
      .start(
        "Destination ID",
        () => console.log("On Success Callback"),
        () => console.error("On Error Callback"),
      )
  }

  function handleStopTempo() {
    BluedotPointSdk.stopTempoTracking(
      () => console.log("On Success Callback"),
      () => console.log("On Error Callback")
    )
  }

  return (
    <View>
      <Button title="Start Tempo" onPress={handleStartTempo} />
      <Button title="Stop Tempo" onPress={handleStopTempo} />  
    </View>
  ) 
}
```

Receiving Tempo errors
----------------------

To receive the errors events while the Tempo feature is active you can subscribe to the following events:

```js
BluedotPointSdk.on("tempoTrackingDidExpire", (event) => console.log(event));
BluedotPointSdk.on("tempoTrackingStoppedWithError", (event) => console.log(event));
```

Android: Set Foreground Service Notification
--------------------------------------------

To set the Foreground Service Notification for Android devices the API has changed from:

```js
const channelId = 'Bluedot React Native'
const channelName = 'Bluedot React Native'
const title = 'Bluedot Foreground Service'
const content = "This app is running a foreground service using location services"
const shouldTargetAllApis = true

BluedotPointSdk.setForegroundNotification(
  channelId, 
  channelName, 
  title, 
  content,
  shouldTargetAllApis
)
```

Now setting the Foreground notification is part of the GeoTriggeringBuilder and TempoBuilder classes:

```js
const channelId = "Bluedot React Native"
const channelName = "Bluedot React Native"
const title = 'Bluedot Foreground Service'
const content = "This app is running a foreground service using location services"
const notificationId = "Bluedot Forground Service"

const geoTriggeringService = new BluedotPointSdk.GeoTriggeringBuilder();

function handleStartGeoTriggering() {
  geoTriggeringService
  .androidNotification( 
    channelId,
    channelName,
    title,
    content,
    notificationId // Optional
  ) 
  .start(
    () => console.log("On Success Callback"),
    () => console.error("On Error Callback"),
  )
}

const tempoService = new BluedotPointSdk.TempoBuilder()

function handleStartTempo() {
  tempoService
    // * The Android Foreground notfication is required by Tempo *
    .androidNotification( 
      channelId,
      channelName,
      title,
      content,
      notificationId // Optional
    ) 
    .start(
      "Destination ID",
      () => console.log("On Success Callback"),
      () => console.error("On Error Callback"),
    )
}
```