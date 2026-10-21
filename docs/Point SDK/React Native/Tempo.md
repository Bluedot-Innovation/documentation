Tempo
==================

Tempo allows active tracking of a user’s location, as well as live ETA estimation.

Start Tempo
-----------

For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Rezolve Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Rezolve CX representative. 

**Tempo requires a linked foreground service on Android to start.** Since plugin version `4.0.0`, the plugin no longer declares, starts, or owns a foreground service notification itself — your app is responsible for declaring its own foreground service, starting it, and linking it to the SDK before calling `TempoBuilder.start()`. If no foreground service is linked, `start()` fails immediately. If the linked service goes away while Tempo is tracking, Tempo stops and reports a `ForegroundServiceNotLinkedError` via the `tempoStoppedWithError` event. See the [Migration guide to 4.0.0](./Migration%20Guides/Migration%20guide%20to%204.0.0.md) for full setup instructions, including the Android manifest changes, implementing your own foreground service, and linking it via `ServiceManager` or `BluedotPointSDK.linkForegroundService()`.

Tempo also requires Destination IDs to be defined, which [you can learn about here](../../Tempo/Create%20your%20destinations.md).

To start Tempo, you should use the `TempoBuilder`  class as below:

```js
import { Button, NativeModules, Platform } from 'react-native'
import BluedotPointSdk from 'bluedot-react-native'

export default function App() {
  // The SDK needs be initialized and the app must have location permissions.

  const tempoService = new BluedotPointSdk.TempoBuilder()
  async function handleStartTempo() {
    if (Platform.OS === 'android') {
      // Start and link your own foreground service before starting Tempo.
      // See the Migration guide to 4.0.0 for how to implement and link this service.
      NativeModules.TrackingService.start()
      await waitForServiceLinked()
    }

    tempoService.start(
      "Destination ID",
      () => console.log("On Success Callback"),
      () => console.error("On Error Callback")
    )
  }

  return <Button title="Start Tempo" onPress={handleStartTempo} />
}
```

Receiving Tempo events
----------------------

The Tempo service does not issue events under normal operation. Instead, it only issues events if there is an error with the operation. Tracking events are instead delivered via webhook, as configured in the Canvas UI.

Subscribe to receive the Tempo events. To do so use the method `on` as below. 

```js
import React from 'react'
import BluedotPointSdk from 'bluedot-react-native'

export default function App() {
  React.useEffect(() => {
    // Register to Tempo events
    BluedotPointSdk.on(
'tempoTrackingDidExpire', 
() => console.log("On tempoTrackingDidExpire callback")
);

BluedotPointSdk.on('tempoStoppedWithError', (event) => {
  if (event.isForegroundServiceNotLinked) {
    // Tempo stopped because the linked foreground service went away mid-session
    // (Android only, since plugin version 4.0.0).
    console.log("Tempo stopped: foreground service not linked")
  } else {
    console.error("On tempoStoppedWithError callback", event.error)
  }
});

}, [])

// Then start the Tempo service.
}
```

To see the full list of supported events please refer to React Native Events List.

Stop Tempo
----------

Once the Tempo service is no longer needed, you can stop the service. On Android, stop Tempo first and only stop your foreground service afterwards, to ensure the SDK is fully stopped before the link is released.

```js
BluedotPointSdk.stopTempoTracking(
() => console.log("On success callback"),
() => console.error("On error callback")
)
```

Tempo Status
------------

You can use the `isTempoRunning` method to check the status of the Geo-triggering service. It will return a boolean value.

```js
BluedotPointSdk.isTempoRunning()
  .then(isRunning => console.log("Is the Tempo service running?", isRunning))
  .catch(error => console.error("Error", error))
```