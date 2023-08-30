1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – logOut

Cordova – logOut
================

/\*
 \*  Log out of an authenticated session with Bluedot back-end systems.
 \*  The fail function call provides a string with the reason for failure.
 \*/
exports.logOut \= function( success, fail )
{
    exec( success, fail, "BDPointSDK", "logOut", \[\] );
}

Description
-----------

This function ends an authenticated session with the Bluedot back-end.

Parameters
----------

### success (Function)

This is a function that will be called on successfully logging out from the Bluedot back-end systems.  This entails there is no longer an authenticated session available to your app.

#### Function parameters

None.

### fail (Function)

This is a function that will be called if logging out with the Bluedot back-end systems fails.

#### Function parameters

String – Reason for logging out failure.