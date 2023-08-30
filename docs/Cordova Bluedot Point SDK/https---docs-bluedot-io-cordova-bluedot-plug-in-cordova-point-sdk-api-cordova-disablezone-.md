1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – disableZone

Cordova – disableZone
=====================

/\*
 \*  Disable a Zone from within the app using the Zone Id.
 \*/
exports.disableZone \= function( success, fail, zoneId )
{
    exec( success, fail, "BDPointSDK", "disableZone", \[ zoneId \] );
}

Description
-----------

An app may optionally disable (and later re-enable) Zones it receives from the Bluedot back-end systems. This is a device level operation that disables Zones only for the user.

By calling this function with the Zone Id, a Zone can be disabled and re-enabled by an app. Note that this will not over-ride any excluding conditions entered via the [Point Access](/point-access-web-ui/) web interface.

As an example; if you define a Zone in Point Access as active between 1:00 pm and 3:00 pm, calls to this function would have no apparent effect outside these times. During the Zone’s active period (e.g. at 2.30pm), the Zone will be active unless this function is called.

The Zone identifiers are retrieved by implementing the [zoneInfoCallback](/cordova-bluedot-plug-in/cordova-point-sdk-api/cordova-zoneinfocallback/) function and retrieving the ids from the Zone information returned.

Parameters
----------

### success (Function)

This is a function that will be called on successfully disabling a Zone.

#### Function parameters

None.

### fail (Function)

This is a function that will be called if the app is unable to disable a Zone; this could be from an invalid Zone Id or from the Zone already being disabled by this function.

#### Function parameters

String – Reason for Zone disablement failure.

### zoneId (String)

The Zone Id to use for the disable command.