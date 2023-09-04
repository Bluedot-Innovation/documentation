How to authenticate with Config API
===================================

The Config API uses **Bearer authentication** (also called **token authentication)** following the [OAuth 2.0 standards](https://www.oauth.com/oauth2-servers/access-tokens/access-token-response/).  
All API requests must be made over HTTPS and requests without a valid Bearer token will fail.

### How to get an authentication token

To get your authentication token you’ll need to initiate a session. It will generate an accessToken that can be used for any subsequent requests to Config API.

The following steps will guide you to authenticate to our Config API

1.  Make a `POST` request to the `/sessions` with your credentials
    ```json
    {
      "email": "user@email.com",
      "password": "Secret_Password_123"
    }
    ```

2.  The response will return an object with the following structure
    ```json
    {
      "statusCode": 201,
      "idToken": "string",
      "accessToken": "string",
      "refreshToken": "string"
    }
    ```

3.  Subsequent requests to the API can be made by passing in `Bearer <accessToken>` into the request Authorization headerThis is an example of how you would get the list of Projects
  ```js
    // NODE.JS
    const https \= require('https');
    
    const options \= {
      host: 'config.bluedot.io',
      path: '/prod1/projects',
      headers: { 'Authorization': 'Bearer <accessToken>' }
    };
    
    const data \= \[\]
    
    https.get(options, (res) \=>; {
      res.setEncoding('utf8');
    
      res.on('data', chunk \=> {
        data.push(chunk)
      });
    
      res.on('error', error \=> {
        console.error(error)
      })
     
      res.on('end', () \=> {
        console.log(data);
      })
    });
  ```

Expiry time of the Tokens
-------------------------

`accessToken`: An Access Token is a credential that can be used by an application to access the Configuration API. It is active for 1 hour.

`refreshToken`: The Refresh Token is a special token that can be used to obtain a renewed `accessToken`. It is active for 60 days.

Best Practises on using the Session API
---------------------------------------

1.  Have a fail/retry strategy for using the access token – if it expires, catch the failure, reauthenticate to get a new access token and try again.
2.  The refresh token can be used, but for an m2m integration, it’s less important (the email/password can be used instead). The refresh token is typically used by less secure clients such as browsers.

Explore Config API
------------------

Config API has a number of endpoints that can help you manage your Bluedot account, including creating new Zones or updating the configuration of a Projects. For further information please refer to [Config API Reference](https://config-docs.bluedot.io/)