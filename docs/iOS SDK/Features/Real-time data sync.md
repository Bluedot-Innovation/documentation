Real-time Data Sync
==================================

Introduction
------------

If your use case requires configuration changes (Eg: changes to your Zone or geofence setup) to be synced to your app in real-time, rather than waiting for the next successful SDK authentication or rule download, you can make use of the Real-time Data Sync feature. Real-time Data Sync uses Firebase Cloud Messaging to send a push notification to your application whenever changes to the project rule set are made, informing the application to use the `notifyPushUpdateWithData` method on the Bluedot iOS SDK to trigger a new rule set download.

This documentation will guide you through activating Bluedot’s Real-time Data Sync along with Google Firebase Cloud Messaging.

1.  Integrate the Point SDK & add Google Firebase to your Android Project
2.  Set your Firebase Server key in the Canvas dashboard
3.  Connect Bluedot SDK with Firebase

Integrate Firebase SDK into your project
----------------------------------------

To add Firebase to your app, you will need to create a Firebase project and a Firebase configuration file. This can be achieved with the steps documented [here](https://firebase.google.com/docs/ios/setup).

### Disable Firebase method swizzling

Disable Firebase method swizzling by following the steps documented [here](https://firebase.google.com/docs/cloud-messaging/ios/client#method_swizzling_in).

### Handle disabled method swizzling

Once you have disabled method swizzling, you’ll need to explicitly map your APNs token to the FCM registration token. This can be achieved with the steps documented here.

If you wish to test APNS in a sandbox environment, you should map your token with the type FIRMessagingAPNSTokenTypeSandbox

// To test with Sandbox Account
\[\[FIRMessaging messaging\] setAPNSToken:deviceToken type:FIRMessagingAPNSTokenTypeSandbox\];

Set your Firebase Server key in Canvas
--------------------------------------

Information on setting the Firebase Server key for your Canvas project is [here](https://docs.bluedot.io/real-time-data-sync/).

Connect Bluedot with Firebase
-----------------------------

To receive Real-time Push Notification, you need to connect Point SDK with Firebase Service by uploading Firebase Server key to Canvas web interface and subscribe the topic with Bluedot Project ID.

### Subscribe the topic using Bluedot Project ID

To make sure that push notification will be delivered to your applications which is using specific Bluedot Project. Your client app needs to subscribe to the topic with Bluedot Project ID. The [FIRMessaging](https://firebase.google.com/docs/reference/ios/firebasemessaging/interface_f_i_r_messaging.html) class handles topic messaging functionality.

Also, your client needs to first register your app with both APNs and FCM to ensure that it can receive notifications.

To subscribe to a topic, implement the didReceiveRegistrationToken method in [FIRMessagingDelegate](https://firebase.google.com/docs/reference/ios/firebasemessaging/api/reference/Protocols/FIRMessagingDelegate.html) Protocol.

\- (void)messaging:(FIRMessaging \*)messaging didReceiveRegistrationToken:(NSString \*)fcmToken {
    NSLog(@"Subcribing to Topic...");
    NSString \*topic \= \[NSString stringWithFormat:@"%@", ProjectId\];
    \[\[FIRMessaging messaging\] subscribeToTopic: topic\];
}

![image](https://docs.bluedot.io/wp-content/uploads/2018/01/001-exclamation-mark.png)

This makes an asynchronous request to the FCM backend and subscribes the client to the given topic. If the subscription request fails initially, FCM retries until it can subscribe to the topic successfully.

Bluedot Push Interface
----------------------

When your client app has received the Real-time Push Notification, you need to pass the userInfo from the notification as a parameter to the method `notifyPushUpdateWithData:` from [BDLocationManager](https://docs.bluedot.io/wp-content/uploads/api/ios/category_b_d_location_manager_07_b_d_point_s_d_k_08.html):

\- (void)notifyPushUpdateWithData: (NSDictionary \*)data;

Put the method in `UNUserNotificationCenterDelegate userNotificationCenter:willPresentNotification:withCompletionHandler:` to handle notifications received when the client app is in the foreground. The message is a UNNotificationobject. Implement FIRMessagingDelegate applicationReceivedRemoteMessage: to handle all data messages that are sent to the client. The message is a FIRMessagingRemoteMessage object.

// Receive displayed notifications
#if defined(\_\_IPHONE\_10\_0) && \_\_IPHONE\_OS\_VERSION\_MAX\_ALLOWED >= \_\_IPHONE\_10\_0
\- (void)userNotificationCenter:(UNUserNotificationCenter \*)center
       willPresentNotification:(UNNotification \*)notification
         withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    NSDictionary \*userInfo \= notification.request.content.userInfo;
    \[BDLocationManager.instance notifyPushUpdateWithData:userInfo\];
    ...
}
 
// Receive data message
\- (void)applicationReceivedRemoteMessage:(FIRMessagingRemoteMessage \*)remoteMessage {
    \[BDLocationManager.instance notifyPushUpdateWithData:\[remoteMessage appData\]\];
    ...
}
#endif

![image](https://docs.bluedot.io/wp-content/uploads/2018/01/001-exclamation-mark.png)

Point SDK will only utilize data of push notification sent with unique identifier confirming whether it is a Bluedot data, and will ignore any other data received which does not contain Bluedot’s unique identifier.