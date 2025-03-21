Quick Start
==========================

To get the SDK loaded and running, you’ll need to:

1.  Install the Bluedot React Native npm package
2.  iOS: Install the Bluedot Point SDK Pod
3.  Set up the `build.gradle` file for Android
4.  Initialize the SDK

1\. Install the Bluedot React Native package
--------------------------------------------

In the root directory of your project run 

```bash
$ npm install bluedot-react-native --save
```

2\. iOS: Install the Bluedot Point SDK Pod
------------------------------------------

To install the Bluedot Point SDK pod run the following commands in the terminal from the root directory of your project:
```bash
$ cd ios
$ pod install
```

Make sure to update the `info.plist` file within the ios folder. For further information please refer to the section **Update your `info.plist` file** in the [iOS Quick Start Guide](../iOS/Quick%20Start.md)

3\. Android: Update the build.gradle file
-----------------------------------------

Include **Jitpack** in your Maven dependencies in the `build.gradle` file

```gradle
allprojects {
  repositories {
    ...
    // ADD IT HERE
    maven { 
      url "https://jitpack.io" 
    }
 }
}
```

Make sure **Jetify** is available in your development environment

```
$ npx jetify
```

4\. Initialize the SDK
----------------------

Now that the project has been set up, you can import and initialize the Bluedot React Native package from your App:

The `initialize` method expects 3 parameters:

| **Parameter**        | **Type** | **Description**                                                         |
|----------------------|----------|-------------------------------------------------------------------------|
| `projectId`          | String   | The project Id you’re going to use. This can be found in the Canvas.    |
| `onSuccess` callback | Function | Callback that will be executed when the SDK is successfully initialized |
| `onError` callback   | Function | Callback will be executed when the SDK did not initialize               |

```js
import React from 'react'
import BluedotPointSdk from 'bluedot-react-native';

export default function App() {
  React.useEffect(() => {
    BluedotPointSdk.initialize(
      "Your_bluedot_project_id",
      () => console.log("On Success Callback"),
      (error) => console.error("On Error Callback", error)
    )
  }, [])

  return (...)
}
```

Initialize Status
-----------------

You can use the `isInitialized` method to check the status of the SDK. It will return a boolean value.

```js
BluedotPointSdk.isInitialized()
  .then(status => console.log("Is Bluedot SDk initialized?", status))
  .catch(error => console.error("Error", error))
```

At this point, you’ve got the basics together, but to start receiving location events from the SDK, your need to use our Geo-triggering and/or Tempo features.