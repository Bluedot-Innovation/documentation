1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – stopRequiringUserInterventionForBluetoothCallback

Cordova – stopRequiringUserInterventionForBluetoothCallback
===========================================================

/\*
 \*  Provide a callback to be notified when user intervention is no longer required for Bluetooth on the device.
 \*/
exports.stopRequiringUserInterventionForBluetoothCallback \= function( callback )
{
    exec( callback, null, "BDPointSDK", "stopRequiringUserInterventionForBluetoothCallback", \[\] );
}

Description
-----------

This callback allows your app to be notified if user intervention is no longer required for Bluetooth on the device; this will generally occur once a user has switched on Bluetooth or if there are no longer any beacons nearby on the Point Access web site.

Parameters
----------

### callback (Function)

This is a function that will be called when Bluetooth is no longer required by the device.

#### Function parameters

None.

Notes
-----

This function is only called on iOS devices.