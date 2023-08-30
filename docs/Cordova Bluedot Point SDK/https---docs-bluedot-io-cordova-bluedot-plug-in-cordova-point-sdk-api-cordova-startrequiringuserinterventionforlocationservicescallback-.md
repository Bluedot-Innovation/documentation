1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – startRequiringUserInterventionForLocationServicesCallback

Cordova – startRequiringUserInterventionForLocationServicesCallback
===================================================================

/\*
 \*  Provide a callback to be notified when user intervention is required for Location Services on the device.
 \*  The callback provides an integer for current Location Service authorization status.
 \*/
exports.startRequiringUserInterventionForLocationServicesCallback \= function( callback )
{
    exec( callback, null, "BDPointSDK", "startRequiringUserInterventionForLocationServicesCallback", \[\] );
}

Description
-----------

This callback allows your app to be notified if user intervention is required as Location Services are not currently enabled on the device; your app will not be able to trigger any fences if Location Services has not been enabled.

Parameters
----------

### callback (Function)

This is a function that will be called when Location Services is currently not active on the mobile device.

#### Function parameters

The callback function is passed an integer parameter which indicates the current location service authorization status.

This integer can be accessed by using an `enum` as demonstrated in the `bdFunctions.js` Javascript wrapper that is bundled with the Bluedot plug-in.

const authorizationStatusEnum \=
{
    NotDetermined: 0,
    Restricted: 1,
    Denied: 2,
    AuthorizedAlways: 3,
    AuthorizedWhenInUse: 4,
    Authorized: 5,
    properties:
    {
        0: "Not determined",
        1: "Restricted",
        2: "Denied",
        3: "Authorized always",
        4: "Authorized when in use",
        5: "Authorized",
    }
}
      
/\*
 \*  This delegate function receives an integer for current location service authorization status.
 \*  Refer to bluedotPointSDKCDVPlugin.js for more information.
 \*/
function startRequiringUserInterventionForLocationServices( authorizationStatus )
{
    updateStatus( "This App requires Location Services which are currently set to " + authorizationStatusEnum.properties\[authrizationStatus\] );
}

Notes
-----

This function is only called on iOS devices.