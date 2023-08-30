1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – stopRequiringUserInterventionForLocationServicesCallback

Cordova – stopRequiringUserInterventionForLocationServicesCallback
==================================================================

/\*
 \*  Provide a callback to be notified when user intervention is no longer required for Location Services on the device.
 \*/
exports.stopRequiringUserInterventionForLocationServicesCallback \= function( callback )
{
    exec( callback, null, "BDPointSDK", "stopRequiringUserInterventionForLocationServicesCallback", \[\] );
}

Description
-----------

This callback allows your app to be notified if user intervention is no longer required to enable Location Services.

Parameters
----------

### callback (Function)

This is a function that will be called when Location Services has been activated.

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
function stopRequiringUserInterventionForLocationServices( authorizationStatus )
{
    updateStatus( "This App no longer requires Location Services which are currently set to " + authorizationStatusEnum.properties\[authrizationStatus\] );
}

Notes
-----

This function is only called on iOS devices.