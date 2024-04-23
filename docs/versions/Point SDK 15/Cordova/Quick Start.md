Quick Start
=====================

To get the SDK loaded and running, you will need to:

1.  Install the Bluedot Cordova package
2.  iOS: Install iOS SDK
3.  Android: Install Android SDK
4.  Initialize the SDK

1\. Install the Bluedot Cordova package
---------------------------------------

In the root directory of your project, run

```bash
$ cordova plugin add @bluedot\-innovation/cordova\-plugin
```

2\. iOS: Install iOS SDK
------------------------

In the root directory of your project, run
```bash
$ cordova platform add ios
$ cordova run ios
```

3\. Android: Install Android SDK
--------------------------------

In the root directory of your project, run

```bash
$ cordova platform add android
$ cordova run android
```

4\. Initialize the SDK
----------------------

Now that the project has been set up, you can import and initialize the Bluedot Cordova package from your App:

The `initializeWithProjectId` method expects 3 parameters:

| **Parameter**              | **Type** | **Description**                                                         |
|----------------------------|----------|-------------------------------------------------------------------------|
| `initializationSuccessful` | Function | The callback will be executed when the SDK is successfully initialized. |
| `initializationFailed`     | Function | The callback will be executed when the SDK did not initialize.          |
| `projectId`                | String   | The project Id you’re going to use. This can be found in the Canvas.    |

```js
function doInitialize()
{ 
    // Initialize SDK
    io.bluedot.cordova.plugin.initializeWithProjectId(
         function () { console.log("Initialization Successful") },
         function (error) { console.log("Initialization Failed with error: " + error) },
         "YOUR_PROJECT_ID");
}
```

### Initialization Status

You can use the `isInitialized` method to check the status of the SDK. It will return a `boolean` value.

```js
function doIsInitialized()
 {
    io.bluedot.cordova.plugin.isInitialized(
        function (isInitialized) { console.log("Is SDK Initialized: " + isInitialized) }
    );
 }
```

At this point, you’ve got the basics together, but to start receiving location events from the SDK, your need to use our [Geo-triggering](./Geo-triggering.md) and/or [Tempo](./Tempo.md) features.