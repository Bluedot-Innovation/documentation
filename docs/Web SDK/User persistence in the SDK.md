User Persistence in the SDK
=================================

In order to identify users, a field called `installRef` is sent with events in a browser environment. This is a UUID value that is generated to allow you to identify customers across multiple wave events and multiple interactions with a site which uses the SDK.

By default user persistence is disabled, meaning that each time a page is loaded or refreshed a new `installRef` will be generated. Until that page is reloaded the same UUID will be sent with each triggered event, so for example if the page allows a user to send an On The Way event, and then later an Arrived event, as long as the page is not reloaded both these events will contain the same `installRef` value. If the page is accessed another time in the same browser, a new `installRef` will be sent with events the following time.

The SDK also provides the ability to store the `installRef` in the browser’s local storage mechanism, meaning that the generated `installRef` will be saved and reused on subsequent visits to the page. This allows for more detailed analysis of events which have been sent, as repeat customers can be identified. As user tracking is something which is regulated by legislation in many countries, please ensure you have received the required permission from the user to store this kind of information before enabling this feature.

To enable this feature, simply call `setUserPersistenceEnabled(true)` prior to sending a wave event. 

```js
import { bluedot } from "@bluedot-innovation/javascript-sdk"

bluedot.initialize("your project id")
bluedot.config.setUserPersistenceEnabled(true)
bluedot.wave.send("your destination id")
```

Once the feature is enabled and an `installRef` has been saved to localStorage, it will be used when sending events regardless of whether a call to `setUserPersistenceEnabled` has been made in the current implementation of the SDK. If at any point you wish to delete any stored `installRefs` and have them generated fresh on load as before, simply call `setUserPersistenceEnabled(false)`. Please be aware that once deleted there is no way to retrieve previously stored `installRefs`.


:::info
As `localStorage` is only available in browser environments, at this time `installRef` behaviour is not supported in Node or React Native environments, and no `installRef` will be sent with Wave events from these environments.
:::