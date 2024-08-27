Tempo
==================

Tempo allows active tracking of a user’s location, as well as live ETA estimation.

Start Tempo
-----------

For this capability, the SDK needs to be initialized and the app must have location permission. You also need Tempo to be enabled for your Bluedot Account and can see the Tempo section in the Projects List page of your Canvas account. If that is not visible and you want to use this capability, please contact your Bluedot CX representative. 

**For Android a [foreground service notification](../Android/Best%20Practices%20&%20Recommendations.md) is also required.**

Tempo also requires Destination IDs to be defined, which [you can learn about here](../../Tempo/Create%20your%20destinations.md).

To start Tempo, you should use the `TempoBuilder`  class as below:

```js
import { Button } from 'react-native'
import BluedotPointSdk from 'bluedot-react-native'

export default function App() {
  // The SDK needs be initialized and the app must have location permissions.

  const tempoService = new BluedotPointSdk.TempoBuilder()
  function handleStartTempo() {
    tempoService
      .androidNotification( // Required
        "Notification channelId",
          "Notification channel name",
          "Notification title",
          "Notification content",
          1 // Notification ID - Optional
      ) 
      .start(
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

    BluedotPointSdk.on(
'tempoTrackingStoppedWithError', 
() => console.log("On tempoTrackingStoppedWithError callback")
);

  }, [])

  // Then start the Tempo service.
}
```

To see the full list of supported events please refer to React Native Events List.

Stop Tempo
----------

Once the Tempo service is no longer needed, you can stop the service.

```js
BluedotPointSdk.stopTempo(
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