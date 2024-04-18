---
pagination_next: null
---

Version 1.1.7 Documentation
==========================================


:::info
This wrapper includes the basic functionality of our SDK. We’ve open-sourced the code of this wrapper in case you’d like to expand it and implement your methods or logic.  
If you have any suggestions for expanding functionality or would like our team to review your implementation, please contact our engineering support team – [help@bluedot.io](mailto:help@bluedot.ok)
:::

Bluedot React Native is a wrapper around the Android Point SDK and iOS Point SDK, allowing for Bluedot integration in [React Native](https://facebook.github.io/react-native/) apps. 

Functionality is provided through one single npm package so you can use it for both platforms without downloading any extra packages.

See the full documentation or get the Bluedot React Native library on npm [here](https://www.npmjs.com/package/bluedot-react-native).

All Projects, Zones and Geofences configurations can be done through our [Canvas dashboard](../../../../Canvas/Overview.md).

How to install it?
------------------

In the root directory of your project run `$ npm install bluedot-react-native --save`.

### For iOS

1\. Within the `ios` directory run the following commands:

```sh
$ cd ios
$ brew install git\-lfs
$ git lfs install
$ pod install
```

2\. Setup your `info.plist` file as laid out on this [documentation page](../../iOS/Quick%20Start.md#update-your-infoplist-file).

### For Android

1\. Include Jitpack in your Maven dependencies in `build.gradle`
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

2. Make sure Jetify is available in your development environment

```sh
$ npx jetify
```

Usage
-----
```js
import BluedotPointSdk from 'bluedot-react-native';

class App extends React.Component() {
  componentDidMount = async () => {
    // Before starting the Bluedot Point SDK ask for Location Permissions // ... const channelId = 'Bluedot React Native' 
    const channelName = 'Bluedot React Native' 
    const title = 'Bluedot Foreground Service' 
    const content = "This app is running a foreground service using location services" 

    // Foreground Service for Android to improve trigger rate - iOS will ignore this. 
    BluedotPointSdk.setForegroundNotification(channelId, channelName, title, content, true) 

    // If you would like to add custom event meta data 
    BluedotPointSdk.setCustomEventMetaData({ userId: 'user_id_goes_here' })

    // Start Bluedot SDK 
    BluedotPointSdk.authenticate(
      'your_project_id', 
      '<Always | WhileInUse>', 
      () => console.log("On success"), 
      () => console.log("On fail")
    ) 
    
    // Register the events listeners
    BluedotPointSdk.on('zoneInfoUpdate', (event) \=> { 
      // ... 
    }) 
    BluedotPointSdk.on('checkedIntoFence', (event) \=> { 
      // ... 
    })
 
    BluedotPointSdk.on('checkedOutFromFence', (event) \=> { 
      // ... 
    })
 
    BluedotPointSdk.on('checkedIntoBeacon', (event) \=> { 
      // ... 
    })

    BluedotPointSdk.on('checkedOutFromBeacon', (event) \=> { 
      // ... 
    })
 
    BluedotPointSdk.on('startRequiringUserInterventionForBluetooth', (event) \=> { 
      // ... 
    })
 
    BluedotPointSdk.on('stopRequiringUserInterventionForBluetooth', (event) \=> { 
      // ... 
    })
 
    BluedotPointSdk.on('startRequiringUserInterventionForLocationServices', (event) \=> { 
      // ... 
    })

    BluedotPointSdk.on('stopRequiringUserInterventionForLocationServices', (event) \=> { 
      // ... 
    })

    // Tempo Methods
    BluedotPoinstSdk.startTempoTracking(
      '_destination_id_goes_here_',
      (error) => console.error('Start Tempo trackin error callback', error)
    )

    BluedotPointSdk.stopTempoTracking() 

    // Tempo events
    BluedotPointSdk.on('tempoStarted', () => {
      // ...
    })

    BluedotPointSdk.on('tempoStopped', () => {
      // ...
    })

    BluedotPointSdk.on('tempoStartError', (error) => {
      // ...
    })

    // Get Installation Reference.
    try {
      const installRef = await BluedotPointSdk.getInstallRef()
      console.log(installRef)
    } catch (error) {
      console.error(error)
    }

    // Check if the Bluedot SDK is already running.
    try {
      const isBluedotServiceRunning = await BluedotPointSdk.isBlueDotPointServiceRunning()
      console.log(isBluedotServiceRunning)
    } catch (error) {
      console.error(error)
    }
  }
}
```