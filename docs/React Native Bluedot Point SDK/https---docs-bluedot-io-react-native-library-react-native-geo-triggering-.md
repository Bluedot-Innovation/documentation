1.  [Developer Documentation](https://docs.bluedot.io)
2.  [React Native Bluedot Point SDK Wrapper](https://docs.bluedot.io/react-native-library/)
3.  React Native Geo-triggering

React Native Geo-triggering
===========================

Geo-triggering allows the automatic detection of location context change events (such as entering or exiting a geofence, or crossing a Geoline™). For this capability, the SDK needs to be initialized and the app must have location permission.

Start Geo-triggering
--------------------

To start geo-triggering, you should use the `GeoTriggeringBuilder`  as below:
```
import { Button } from 'react-native'
import BluedotPointSdk from 'bluedot-react-native'

export default function App() {
  // The SDK needs be initialized and the app must have location permissions.

  const geoTriggeringService \= new BluedotPointSdk.GeoTriggeringBuilder()
  function handleStartGeoTriggering() {
    geoTriggeringService.start(
      () \=> console.log("On Success Callback"),
      () \=> console.error("On Error Callback"),
    )
  }

  return <Button title\="Start Geo-Triggering" onPress\={handleStartGeoTriggering} />
}
```

Receiving Geo-trigger events
----------------------------

Subscribe to receive Geo-triggering events. To do so use the method `on` as below. 

**Note:** _As E__ntry_ _events may occur immediately upon staring Geo-triggering, it is recommended ed to subscribe to the events before starting the Geo-triggering service._

```
import React from 'react'
import BluedotPointSdk from 'bluedot-react-native'

export default function App() {
  React.useEffect(() \=> {
    // Register to Geo-triggering events
    BluedotPointSdk.on('enterZone', () \=> console.log("On enterZone callback"));
    BluedotPointSdk.on('exitZone', () \=> console.log("On exitZone callback"));
  }, \[\])

  // Then start the Geo-triggering service.
}
```

Stop Geo-triggering
-------------------

If you only need geo-triggering for a limited period, once that period is over, you can stop the geo-trigger service.
```
BluedotPointSdk.stopGeoTriggering(
  () => console.log("On success callback"),
  () => console.error("On error callback")
)
```

Geo-triggering Status
---------------------

You can use the `isGeoTriggeringRunning` method to check the status of the Geo-triggering service. It will return a boolean value.

```
BluedotPointSdk.isGeoTriggeringRunning()
  .then(isRunning \=> console.log("Is the Geo-triggering service running?", isRunning))
  .catch(error \=> console.error("Error", error))
```