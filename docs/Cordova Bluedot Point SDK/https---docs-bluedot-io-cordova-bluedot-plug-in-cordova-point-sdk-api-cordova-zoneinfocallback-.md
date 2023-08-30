1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – zoneInfoCallback

Cordova – zoneInfoCallback
==========================

/\*
 \*  Provide a callback to receive Zone Info updates.  The callback is called with the following parameters:
 \*      Parameter 1: Array of Zones
 \*          Array of strings identifying each Zone:
 \*              name (String)
 \*              description (String)
 \*              ID (String)
 \*/
exports.zoneInfoCallback \= function( callback )
{
    exec( callback, null, "BDPointSDK", "zoneInfoCallback", \[\] );
}

Description
-----------

This function provides a callback function to the SDK that will be called when Zone information is downloaded to your app.  This can happen after initial authentication, after each Rule Download Interval has expired during the lifetime running of your app or when you have reached a geographical limit within a large set of Geofences.

This function should only be called after successful authentication with the Bluedot back-end systems using the [authenticate](/cordova-bluedot-plug-in/cordova-point-sdk-api/cordova-authenticate/) function.

Parameters
----------

### callback (Function)

This is a function that will be called when an array of Zones has been downloaded to your app.

#### Function parameters

The callback function is passed one parameter as an array of Zone Information; each entry in this array contains an array of strings in the following order:

*   *   Zone name
    *   Zone description
    *   Zone id

These strings can be accessed by using an `enum` as demonstrated in the `bdFunctions.js` Javascript wrapper that is bundled with the Bluedot plug-in.

const zoneInfoEnum \=
{
    name: 0,
    description: 1,
    ID: 2
}
     
/\*
 \*  This delegate function receives an array of Zone Infos.
 \*  Refer to bluedotPointSDKCDVPlugin.js for more information.
 \*/
function zoneUpdate( zoneInfos )
{
    updateStatus( Zones info has been updated for " + zoneInfos.length + " zones" );
 
    //  Process each of the Zone
    for( pos = 0; pos < zoneInfos.length; pos++ )
    {
        var zoneInfo = zoneInfos\[ pos \];
         
        //  Extract details for a status update
        var name = zoneInfo\[ zoneInfoEnum.name \];
        var description = zoneInfo\[ zoneInfoEnum.description \];
         
        updateStatus( "Zone " + name + " : " + description );
    }  
}