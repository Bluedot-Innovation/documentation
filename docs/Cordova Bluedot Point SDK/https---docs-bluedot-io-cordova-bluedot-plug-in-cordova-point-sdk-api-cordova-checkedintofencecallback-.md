1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – checkedIntoFenceCallback

Cordova – checkedIntoFenceCallback
==================================

/\*
 \*  Provide a multi-part callback for a fence with a Custom Action being checked into.
 \*
 \*  Returns the following multipart status to the callback function:
 \*      Parameter 1: Array identifying fence:
 \*          name (String)
 \*          description (String)
 \*          ID (String)
 \*      Parameter 2: Array of strings identifying zone containing fence:
 \*          name (String)
 \*          description (String)
 \*          ID (String)
 \*      Parameter 3: Array of doubles identifying location which triggers fence:
 \*          Date of check-in (Integer - UNIX timestamp)
 \*          Latitude of check-in (Double)
 \*          Longitude of check-in (Double)
 \*          Bearing of check-in (Double)
 \*          Speed of check-in (Double)
 \*      Parameter 4: Fence is awaiting check-out (Boolean)
 \*      Parameter 5: JSON Object of custom data (JSON Object)
 \*/
exports.checkedIntoFenceCallback \= function( callback )
{
    exec( callback, null, "BDPointSDK", "checkedIntoFenceCallback", \[\] );
}

Description
-----------

This function provides a callback function to the SDK that will be called when the device has triggered a Geofence or crossed a Geoline™.  Identifying information on the fence, the zone and location are passed back to the callback function as separate parameters.

Parameters
----------

### callback (Function)

This is a function that will be called when the device has triggered a Geofence or crossed a Geoline™.

#### Function parameters

The callback function has passed 5 parameters of the fence information, including the zone the fence is within; each entry contains the following information in the order provided:

*   *   Parameter 1: Fence Info array
        *   Fence name
        *   Fence description
        *   Fence id
    *   Parameter 2: Zone Info array
        *   Zone name
        *   Zone description
        *   Zone id
    *   Parameter 3: Location Info array
        *   Date of check-in; this is provided as a UNIX timestamp
        *   Latitudinal coordinate at the point of check-in
        *   Longitudinal coordinate at the point of check-in
        *   Bearing degree of check-in
            
        *   Speed of check-in
            
    *   Parameter 4: Fence is awaiting check-out
    *   Parameter 5: JSON Object of custom data (JSON Object)

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
const locationInfoEnum \=
{
    timestamp: 0,
    latitude: 1,
    longitude: 2,
    bearing: 3,
    speed: 4
}
 
/\*
 \*  This delegate function receives the data of a fence with a Custom action that has been triggered by the SDK.
 \*  Refer to bluedotPointSDKCDVPlugin.js for more information.
 \*/
function fenceTrigger( fenceInfo, zoneInfo, locationInfo, willCheckOut, customData )
{
    //  Extract details for a status update
    var fenceName \= fenceInfo\[ fenceInfoEnum.name \];
    var zoneName \= zoneInfo\[ zoneInfoEnum.name \];
    var lat \= locationInfo \[ locationInfoEnum.latitude \];
    var lon \= locationInfo \[ locationInfoEnum.longitude \];
 
    updateStatus( fenceName + " has been triggered in " + zoneName + " at " + lat + ":" + lon );
    updateStatus( JSON.stringify(customData) );
 
    if ( willCheckOut \== true )
    {
        updateStatus( "Fence is awaiting check-out" )
    }
}