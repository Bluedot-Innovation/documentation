Real-time Data Sync
======================================

Introduction
------------

If your use case requires configuration changes (Eg: changes to your Zone or geofence setup) to be synced to your app in real-time – rather than waiting for the next successful SDK rule download (link to RD explanation). This documentation will guide you through activating Bluedot’s Real-time Data Sync along with Google Firebase Cloud Messaging.

1.  Integrate the Point SDK & add Google Firebase to your Android Project
2.  Set your Firebase Server key in the Canvas dashboard
3.  Connect Bluedot SDK with Firebase

Integrate Firebase SDK into your project
----------------------------------------

To add Firebase to your app, you will need to create a Firebase project and a Firebase configuration file.

Set your Firebase Server key in Canvas
--------------------------------------

Information on setting the Firebase Server key for your Canvas project is [here](https://docs.bluedot.io/real-time-data-sync/).

Connect Bluedot SDK with Firebase
---------------------------------

### Subscribe the topic using Bluedot Project ID

To make sure that push notification will be delivered to your applications which is using specific Bluedot Project. Your client app needs to subscribe to the topic with Bluedot Project ID. This is achieved using the code below. It is recommended to add the line to the GeoTriggeringService start success callback.

```kotlin
GeoTriggeringService.builder()
        .notificationId(123)
         .notification(createNotification(SERVICE_TITLE, SERVICE_CONTENT, true, this))
         .start(this, error -> {
             if (error != null) {
                //log error
                return;
             }
            //If Start GeoTrigger is success then add this line
            FirebaseMessaging.getInstance().subscribeToTopic(projectId);
         });
```

Bluedot Push Interface
----------------------

The last step is to provide the received push notification’s data object to Bluedot’s notifyPushUpdate method, to process the push and trigger rule set refresh. This method is to be placed inside the `onMessageReceived` callback of your service that extends FirebaseMessagingService, demonstrated below.

```java
public class MyFirebaseMessagingService extends FirebaseMessagingService {
    @Override
     public void onMessageReceived(RemoteMessage remoteMessage) {
        super.onMessageReceived(remoteMessage);
        //Add these lines
        ServiceManager serviceManager = ServiceManager.getInstance(this);
        serviceManager.notifyPushUpdate(remoteMessage.getData());
        ...
     }
}
```

:::info
**Disclaimer:** Bluedot Point SDK will only utilize the data of push notifications sent containing a unique Bluedot identifier, and will ignore all other push notifications.
:::