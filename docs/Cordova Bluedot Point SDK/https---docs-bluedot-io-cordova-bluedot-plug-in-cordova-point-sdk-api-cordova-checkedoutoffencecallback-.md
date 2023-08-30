1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – checkedOutOfFenceCallback

Cordova – checkedOutOfFenceCallback
===================================

/\*
 \*  For zones with check-out enabled.
 \*
 \*  Returns the following multipart status:
 \*      Parameter 1: Array identifying fence:
 \*          name (String)
 \*          description (String)
 \*          ID (String)
 \*      Parameter 2: Array of strings identifying zone containing fence:
 \*          name (String)
 \*          description (String)
 \*          ID (String)
 \*      Parameter 3: Date of check-out (Integer - UNIX timestamp)
 \*      Parameter 4: Dwell time in minutes (Unsigned integer)
 \*      Parameter 5: JSON Object of custom data (JSON Object)
 \*/
exports.checkedOutOfFenceCallback \= function( callback )
{
    exec( callback, null, "BDPointSDK", "checkedOutOfFenceCallback", \[\] );
}

Description
-----------

This function provides a callback function to the SDK that will be called when the device has checked out from a fence that it had previously checked into.  Identifying information on the fence, the zone, dwell time and custom data within the fence are passed back to the callback function as separate parameters.

Parameters
----------

### callback (Function)

This is a function that will be called when the device has triggered a Geofence or crossed a Geoline™.

#### Function parameters

The callback function has passed 5 parameters of fence information, including the zone the fence is within; each entry contains the following information in the order provided:

*   Parameter 1: Fence Info array
    *   Fence name
    *   Fence description
    *   Fence id
*   Parameter 2: Zone Info array
    *   Zone name
    *   Zone description
    *   Zone id
*   Parameter 3: Date of check-out; this is provided as a UNIX timestamp
*   Parameter 4: Time, in minutes, spent within the fence
*   Parameter 5: JSON Object of custom data

These strings can be accessed by using an `enum` as demonstrated in the `bdFunctions.js` Javascript wrapper that is bundled with the Bluedot plug-in.

const zoneInfoEnum \=
{
    name: 0,
    description: 1,
    ID: 2
}
const fenceInfoEnum \=
{
    name: 0,
    description: 1,
    ID: 2
}
 
/\*
 \*  This delegate function receives the data of a fence with a Custom action that has been checked out of by the SDK.
 \*  Refer to bluedotPointSDKCDVPlugin.js for more information.
 \*/
function fenceCheckOut( fenceInfo, zoneInfo, date, dwellTime, customData )
{
    //  Extract details for a status update
    var fenceName \= fenceInfo\[ fenceInfoEnum.name \];
    var zoneName \= zoneInfo\[ zoneInfoEnum.name \];
     
    updateStatus( fenceName + " has been left in " + zoneName + " after " + dwellTime + "minutes" );
    updateStatus( JSON.stringify(customData) );
}