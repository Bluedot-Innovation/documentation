1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – foregroundNotification

Cordova – foregroundNotification
================================

    /*
    *  Sets notification for service to run in foreground, required for Android O and above   
    */
    exports.foregroundNotification = function( channelId, channelName, title, content, targetAllAPIs )
    {
    exec( null, null, "BDPointSDK", "foregroundNotification", [ channelId, channelName, title, content, targetAllAPIs ] );  
    }

### [](https://www.npmjs.com/package/bluedot-plugin#description-13)Description

**This function needs to be called before making the authenticate() call, to provide the notification to the SDK for foreground notification**

This functions sets foreground notification for the Bluedot service for Android Oreo and above devices.  Foreground notification is needed as per the [background limitation requirements](https://developer.android.com/about/versions/oreo/background) for Android Oreo and above.

### [](https://www.npmjs.com/package/bluedot-plugin#parameters-13)Parameters

#### [](https://www.npmjs.com/package/bluedot-plugin#channelid-string)channelId (String)

The id of the channel. Must be unique per package. A current channel Id used by the application can be provided.

#### [](https://www.npmjs.com/package/bluedot-plugin#channelname-string)channelName (String)

The name of the channel, recommended maximum length is 40 characters. A current channel name used by the applicattion can be provided.

#### [](https://www.npmjs.com/package/bluedot-plugin#title-string)title (String)

The title of the notification that will appear when the application is running.

#### [](https://www.npmjs.com/package/bluedot-plugin#content-string)content (String)

The content of the notification that will appear when the application is running.

#### [](https://www.npmjs.com/package/bluedot-plugin#targetallapis-bool)targetAllAPIs (Bool)

Set flag to true to show foreground service notification on all Android OS.  Set to false only required for apps targeting Android Oreo and above.