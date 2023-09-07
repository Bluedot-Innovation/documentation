SDK Development Tools
===========================

While developing using the Web SDK certain features have been added to make the SDK easier to work with such as Typescript, configurable location behaviour and debug mode.  

Typescript
----------

Typescript helps you ensure that the correct inputs are provided to each function and facilitates code completion in IDEs. While many editors will automatically identify the types of exported object, if you have a need to explicitly type any object these types are exported in the package root. Types can be identified by PascalCase naming conventions, to distinguish them from functions and objects which are camelCase.

```js
import { bluedot, createHelloModel, HelloModel } from "@bluedot-innovation/javascript-sdk"

const helloModel: HelloModel = createHelloModel()
```

Debug Mode
----------

During development it may be useful to enable debug mode to provide more detail on the actions the Web SDK is performing behind the scenes. Debug mode logs important actions to the console, as well as any errors which occur. Debug mode can be enabled and disabled via the config object. Debug mode can provide information on when initialization is successful, when network requests are retried due to network failure, and when location tracking begins and ends.

```js
import { bluedot } from "@bluedot-innovation/javascript-sdk"

// Initialize the SDK with debug mode enabled
bluedot.config.setDebugModeEnabled(true)
bluedot.setLocationEnabled(true)
bluedot.config.setUserPersistenceEnabled(true)
bluedot.initialize("your-project-id-here")

// Send a wave event
bluedot.wave.send("your-destination-id-here", {orderId: "order-id-here"})
```

Example debug output:

![Web SDK Debug mode example](https://docs.bluedot.io/wp-content/uploads/2021/05/8-debug-mode-1024x575.png)

Configuring Location Behaviour
------------------------------

If location permissions are granted by the user, the Web SDK can provide location information returned by mobile browser environments. Location information will only be attached if the received location has an accuracy below the minimum required accuracy. This is set in meters and defaults to 50 meters, however if you wish to change this threshold this value can be set in the configuration object. If the required accuracy is not received from the browser within a set amount of time the event will be sent without location data attached. The amount of time to wait can be similarly configured, and defaults to 5 seconds.

```js
import { bluedot } from "@bluedot-innovation/javascript-sdk"

bluedot.config.setLocationMinimumAccuracy(100) // Sets minimum accuracy to 100 meters
bluedot.config.setLocationTimeout(2000) // Sets location timeout to 2 seconds
```