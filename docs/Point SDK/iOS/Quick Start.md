Quick Start
=================

To get the base SDK loaded and running, you’ll need to:

1.  The latest major version of Xcode
2.  [Import the SDK](https://docs.bluedot.io/ios-sdk/ios-quick-start#import-sdk)
3.  [Add the required frameworks to your project](https://docs.bluedot.io/ios-sdk/ios-quick-start#add-frameworks)
4.  [Update your .plist file](https://docs.bluedot.io/ios-sdk/ios-quick-start#update-info-plist)
5.  [Initialize the SDK](https://docs.bluedot.io/ios-sdk/ios-quick-start#initialize-sdk)

Import the SDK
--------------

### Option 1: Importing Point SDK with CocoaPods

Follow the [CocoaPods installation instructions](https://guides.cocoapods.org/using/using-cocoapods.html). [BluedotPointSDK](https://cocoapods.org/pods/BluedotPointSDK) can be added into the `Podfile` as a dependency:

1. Create a Podfile in your project directory and add a ‘BluedotPointSDK’ dependency

```sh
pod 'BluedotPointSDK'
```
2. Open up the Workspace and follow the rest of the steps on this page to complete the project setup.

### Option 2: Importing Point SDK with Carthage

Follow the [Carthage installation instructions](https://github.com/Carthage/Carthage#installing-carthage). BluedotPointSDK can be added into the Cartfie as a dependency.

1. Create a [Cartfile](https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md#cartfile) in your project directory, and add a `BluedotPointSDK` dependency

```
github "Bluedot-Innovation/PointSDK-iOS"
```

2. Run $ carthage bootstrap in your project directory. This will fetch BDPointSDK into a [Carthage/Checkouts](https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md#carthagecheckouts) folder and download a pre-compiled framework.

3. On your application targets’ General settings tab, in the Embedded Binaries section, drag and drop BDPointSDK from the [Carthage/Build](https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md#carthagebuild) folder on disk.

4. On your application targets’ Build Phases settings tab, click the + icon and choose New Run Script Phase. Create a Run Script in which you specify your shell (ex: `/bin/sh`), add the following contents to the script area below the shell:

```sh
$(which carthage) copy\-frameworks
```

5. Add the path to the BDPointSDK under “Input Files”.

```sh
$(SRCROOT)/Carthage/Build/iOS/BDPointSDK.framework
```

6. Add the paths to the copied BDPointSDK to the “Output Files”.
```sh
$(BUILT\_PRODUCTS\_DIR)/$(FRAMEWORKS\_FOLDER\_PATH)/BDPointSDK.framework
```

7\. With output files specified alongside the input files, Xcode only needs to run the script when the input files have changed or the output files are missing. This means dirty builds will be faster when you haven’t rebuilt frameworks with Carthage.

### Option 3: Swift Package Manager

1.  Open _Xcode -> Preferences -> Accounts_ and add an account by clicking the plus sign at the bottom
2.  Select the GitHub option and enter your GitHub’s email and personal access token
3.  Using the same account **star** ⭐️ the [https://github.com/Bluedot-Innovation/PointSDK-iOS](https://github.com/Bluedot-Innovation/PointSDK-iOS) repository.
4.  Open an _Add Package Dependency_ dialog. You can find more details on [https://developer.apple.com/documentation/swift\_packages/adding\_package\_dependencies\_to\_your\_app](https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app)
5.  Select the GitHub account you just added and search for the `PointSDK-iOS`
6.  Select the right version and press the _Add Package_ button

**NOTE:** You’ll need to use the latest major version of XCode.

Add the required frameworks
---------------------------

Point SDK requires the usage of some iOS SDK frameworks. Add the following frameworks in the ‘Link Binary with Libraries’ section of your Target’s Build Phases.

*   CoreLocation
*   CoreMotion
*   System Configuration
*   MapKit
*   CoreGraphics
*   UIKit

Next, go to Build Settings, and set the “**Always Embed Swift Standard Libraries**” Option to “**Yes**”.

**NOTE:** If BitCode is set to YES, the resulting IPA file size will increase. However, when you submit the app, Apple will recompile it for each platform, and the resulting size installed by app user will be much smaller.

Update your info.plist file
---------------------------

To address differences in the hardware capability of iOS devices, Apple has implemented a scheme of string-keys for apps to declare the hardware features it requires. These are stored in a file named info.plist. Running an app on an iOS device with insufficient hardware support may crash the app or result in a degraded experience. Declaring the required hardware features within info.plist allows iOS, and the AppStore, to identify in advance whether a given device should even attempt to download and execute the app.

Further information on this can be found here:

1.  [Requiring the Presence of Location Services in iOS App](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/LocationAwarenessPG/CoreLocation/CoreLocation.html)
2.  [info.plist iOS Keys Reference](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/uid/TP40009252-SW1)

Follow the steps below to configure the info.plist settings:

*   For an entirely new app, add: ‘Required Device Capabilities’: `gps`, `location-services`, `accelerometer`  
    Note that this is not necessary for already-published apps.
*   Privacy – Location When In Use Usage Description as the key, and select the type of `String`: The value should be a usage description that denotes the use of location services by your app, e.g. Your location is used to detect your arrival so your order can be brought to you.
*   Background operation  
    If you want the Bluedot SDK to be able to trigger locations or send location updates while in the background, you’ll also need the same setup for Privacy – Location Always Usage Description and Privacy – Location Always and When In Use Usage Description.

Then, add the following key to the UIBackgroundModes section of the `info.plist`: `location`

Initialize the SDK
------------------

Now that the project has been set up, should initialize the Bluedot Point SDK from your App Delegate’s `didFinishLaunchingWithOptions` with:

```swift
import BDPointSDK

func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
    BDLocationManager.instance()?.initialize(withProjectId: projectId){ error in 
        guard error == nil else {
            print("There was an error initializing the Bluedot SDK: \(error.localizedDescription)")
            return
        }
    }
    return true
}
```

At this point, you’ve got the basics together, but to get value from the SDK you’ll need to start getting location events – you can do so by using our Geo-triggering or Tempo features.