1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – enableZone

Cordova – enableZone
====================

/\*
 \*  Enable a "Zone previously disabled from within the app using the Zone Id.
 \*/
exports.enableZone \= function( success, fail, zoneId )
{
    exec( success, fail, "BDPointSDK", "enableZone", \[ zoneId \] );
}

Description
-----------

An app may optionally disable (and later re-enable) Zones it receives from the Bluedot back-end systems. This is a device level operation that re-enables Zones only for the user.

By calling this function with the Zone Id, a Zone previously disabled by calling the [disableZone](/cordova-bluedot-plug-in/cordova-point-sdk-api/cordova-disablezone/) function will be re-enabled.

The Zone identifiers are retrieved by implementing the [zoneInfoCallback](/cordova-bluedot-plug-in/cordova-point-sdk-api/cordova-zoneinfocallback/) function and retrieving the ids from the Zone information returned.

Parameters
----------

### success (Function)

This is a function that will be called on successfully re-enabling a previously disabled Zone.

#### Function parameters

None.

### fail (Function)

This is a function that will be called if the app is unable to re-enable a “Zone; this could be from an invalid Zone Id or from the Zone not being disabled by the [disableZone](/cordova-bluedot-plug-in/cordova-point-sdk-api/cordova-disablezone/) function.

#### Function parameters

String – Reason for Zone re-enablement failure.

### zoneId (String)

The Zone Id to use for the enable command.