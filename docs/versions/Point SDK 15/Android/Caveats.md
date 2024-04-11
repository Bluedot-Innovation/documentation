Caveats
=================

Android 10 background location permission
-----------------------------------------

Android 10 added an additional level of [permission](https://developer.android.com/about/versions/10/privacy/changes#app-access-device-location) for users to control whether an application can access the device location from the background. The new background location permission [ACCESS\_BACKGROUND\_LOCATION](https://developer.android.com/reference/android/Manifest.permission.html#ACCESS_BACKGROUND_LOCATION) was added to the SDK’s Android Manifest. If background location access is required, when requesting location permissions the app should also request this permission, otherwise, the user will only be prompted to “Allow only while using the app”.

If your app is not using the foreground service implementation of the Bluedot Geo-triggering service and the user selects “Allow only while using the app” permission, then the Bluedot SDK cannot guarantee to generate triggers if your app is moved to the background as the application and SDK will not be getting location updates from the operating system. If receiving triggers from the background is vital, we suggest either using the foreground service or communicating to the user the value of allowing access to location data from the background.

To enable simpler compliance with the new Google Play [background location access  policy](https://support.google.com/googleplay/android-developer/answer/9799150) that apps must adhere to when requesting location data from the background, the Bluedot SDK will be removing the ACCESS\_BACKGROUND\_LOCATION manifest entry in the next major release. In the interim, if you wish to remove the merged manifest entry please add the following to your app’s manifest: 

```xml title="AndroidManifest"
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" tools:node="remove" />
```

Google Play Services out of date
--------------------------------

It is possible that some Android devices with an OS version less than 4.4 may not have an up-to-date version of Google Play Services installed. The error message: **Google Play Services out of date. Requires xxxxxxx but found xxxxxxx** in `logcat` indicates that the version of Google Play Services installed on the device requires an update. Visit the [Google Play Store](https://play.google.com/store/apps/details?id=com.google.android.gms&hl=en) to download and install the latest Play Services.