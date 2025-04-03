Quick Start
=====================

To get the base SDK loaded and running, you’ll need to:

1.  [Import the SDK](./Quick%20Start.md#import-the-sdk)
2.  [Update your Android Manifest file](./Quick%20Start.md#manifest-requirements)
3.  [Initialize the SDK](./Quick%20Start.md#initialize-the-sdk)

* * *

Import the SDK
--------------

Bluedot Point SDK for Android is integrated into an application project as a Gradle dependency. Follow the steps below to integrate the SDK into your project.

1\. Edit the root `build.gradle` file to include a JitPack entry in the repositories section.

```gradle
...
allprojects {
   repositories {
      ...
      maven { url 'https://jitpack.io' }
   }
}
```

2\. Include the Bluedot Point SDK as a dependency in the app’s `build.gradle` file within the dependencies section.

```gradle
dependencies {
     ...
     implementation 'com.gitlab.bluedotio.android:point_sdk_android:17.1.0'
 }
```

Manifest requirements
---------------------

In order to receive Bluedot service error events after initialization, a class that implements [`BluedotServiceReceiver`](https://android-docs.bluedot.io/-bluedot%20-s-d-k%20-docs/au.com.bluedot.point.net.engine/-bluedot-service-receiver/index.html) should be implemented and registered in the AndroidManifest:

```kotlin
class ExampleBluedotServiceReceiver : BluedotServiceReceiver() {
     override fun onBluedotServiceError(error: BDError, context: Context) {
        // Handle error here.
     }
 }
 ```
 
 ```xml title="AndroidManifest"
 <application android:label\="@string/app_name" >
     <receiver
        android:name="<path to your BluedotServiceReceiver implementation>"
        android:enabled="true"
        android:exported="false"
     >
        <intent-filter>
           <action android:name="io.bluedot.point.SERVICE" />
        </intent-filter>
     </receiver>
 </application>
 ```

Initialize the SDK
------------------

Now that the project has been set up, should initialize the Bluedot Point SDK from your Application class’s `onCreate` function with:

```kotlin
ServiceManager.getInstance(this).initialize("myProjectId", 
     (error) -> {
        // Handle initialization result
 });
```

At this point, you’ve got the basics together, but to get value from the SDK you’ll need to start getting location events – you can do so by using our [Geo-triggering](./Geo-triggering.md) or [Tempo](./Tempo.md) features.
