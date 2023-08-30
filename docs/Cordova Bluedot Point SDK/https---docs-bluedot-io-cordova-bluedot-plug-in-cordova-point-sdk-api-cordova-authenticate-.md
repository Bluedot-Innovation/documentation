1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Cordova Bluedot Point SDK Plugin](https://docs.bluedot.io/cordova-bluedot-plug-in/)
3.  [Cordova – Version 1.X.X Archive](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/)
4.  [Cordova – Point SDK API](https://docs.bluedot.io/cordova-bluedot-plug-in/cordova-version-1-x-x-archive/cordova-point-sdk-api/)
5.  Cordova – authenticate

Cordova – authenticate
======================

/\*
 \*  Authenticate a Bluedot Point session.
 \*  The success function call provides an error code and an optional string for any warnings after successful
 \*  authentication.
 \*      An error code of 0 entails no additional warnings.
 \*  The fail function call provides a string with the reason for failure.
 \*/
exports.authenticate \= function( success, fail, apiKey, authorizationLevel )
{
    exec( success, fail, "BDPointSDK", "authenticate", \[ apiKey, authorizationLevel \] );
}

Description
-----------

This function is utilised to start an authenticated session with Point SDK.  The credentials are returned from creating a Project on the Bluedot Canvas dashboard.

Parameters
----------

### success (Function)

This is a function that will be called on successful authentication with the Bluedot Canvas back-end.  This entails which a current authenticated session is now underway; an app only has to be authenticated once for the entire runtime of the app.

On occasion, successful authentication can return a warning to notify the app that there is something to be aware of.  This is passed back as an error code and warning message.

#### Function parameters

Integer – Error code. This code will be zero if there are no issues during authentication; if there is an issue to be aware of (for example, on an Android device, Wi-Fi has been switched off), then this code is returned here.

String – A warning message with a description of the error code.

### fail (Function)

This is a function that will be called if authentication with the Bluedot Canvas back-end fails.

#### Function parameters

String – Reason for authentication failure.

### apiKey (String)

The API Key is part of the credentials returned from creating an app on the Bluedot Canvas dashboard; an API Key is associated with each app that you create.

### authorizationLevel (au.com.bluedot.BDAuthorizationLevel)

Authorization level will instruct SDK to request appropriate location authorization when the SDK starts. This parameter will be ignored in the Android project.

Notes
-----

You can obtain the credentials for each app after registering and logging in to the Canvas dashboard.

/\*
 \*  A delegate function for dealing with successful authentication.
 \*  If authentication was successful but has an issue, then this is passed back to the app with
 \*  an associated message.
 \*/
function authenticationSuccessful( errorCode, message )
{
    if ( typeof message \=== "undefined" || errorCode \== 0 )
    {
        updateStatus( "Authentication successful" );
    }
    else
    {
        updateStatus( "Authentication successful but " + warning );
    }
}
 
/\*
 \*  A delegate function for dealing with a failed authentication.
 \*/
function authenticationFailed( error )
{
    updateStatus( "Authentication failed: " + error );
}