1.  [Developer Documentation](https://docs.bluedot.io)
2.  Real-time Data Sync

Real-time Data Sync
===================

Certain use cases demand that the Geofences and GEOLINE™, as well as the associated Actions and Conditions associated with them on the backend, are synced to the mobile devices immediately rather than waiting for the next [Rule Download](https://bluedotinnovation.zendesk.com/hc/en-us/articles/360001249775-What-is-a-Rule-Download-).

The Point SDK can be optionally configured to receive push notifications to enable the real-time data sync. The present implementation supports integration through Google Firebase cloud messaging.

Create your Firebase project
----------------------------

To add Zone data sync support to your application you will need to add Firebase to your app, you will need to create a Firebase project. This can be achieved by the following steps:

1.  If you don’t have a Google Firebase account, then create a free account by clicking on the Get started for free button on the home page of [Firebase website](https://firebase.google.com/).
2.  You can register for a Firebase account using a Gmail account.
3.  Create a new Firebase project in the [Firebase console](https://console.firebase.google.com/), if you have an existing Google project associated with your mobile app, you can import it by selecting **Import Google Project.** To create a new project click on **Create New Project****.**
4.  A new dialog will appear, enter your project’s name and select your country/region and click on the Create Project button.
5.  You will be taken to your Firebase project page.
6.  Navigate to the **Project settings** page by selecting the settings icon next to the project name and then select the Project settings link in the navigation menu.
7.  Navigate to the **CLOUD MESSAGING** tab.
8.  Here you will find the **`Server key`** under the **Project credentials** section, which is required to be added to your Bluedot Project on Canvas.

![](https://docs.bluedot.io/wp-content/uploads/2018/11/Firebase-Cloud-Messaging-Server-Key.png)

Setup Firebase API key for your Bluedot project
-----------------------------------------------

### Create a new Project and add the Firebase Web API Key for it

1.  Login into Canvas
2.  Choose Project from the menu in the top right corner
3.  Tap the Edit Details button
4.  Add the Firebase API Key
5.  Update

![](https://docs.bluedot.io/wp-content/uploads/2020/02/edit-project-300x284.png)

Enter the Firebase Web API Key from the Firebase project setting to the Firebase API Key field. Using this key we will be able to communicate with Firebase to deliver the zones that need to be synced.

Sync Zones updates to mobile applications
-----------------------------------------

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

The new zone updates are synced every 5 mins to the mobile devices.

### Canvas Zone updates

The newly added, updated or deleted zones from Canvas will be automatically synced to all your mobile devices using the Firebase API Key that was added to the Project details.

### Config API Zone updates

By default, all Zones created, updated or deleted via the Config API are not automatically synced to the mobile devices.

If you wish for newly created or updated Zones to be synced immediately to the mobile devices then add the `shouldSync` field in the POST and PUT JSON requests.

The API specification for Zones can be found [here](https://config-docs.bluedot.io/#tag/zones).

Sample POST JSON request:

{
    "name": "Sample fence",
    "minimumRetriggerTime": 3600,
    "geofeatures": \[{
        "name": "Sample fence",
        "radius": 40,
        "center": {
            "latitude": \-37.818036,
            "longitude": 144.9775493
        },
        "color": "#429BD5",
        "type": "circle",
    }\],
    "projectId": "6e4aeb98-05b3-4b3f-b9ac-3b9a169e395c",
    "triggerOnExit": false,
    "shouldSync": true
}

If you wish for deleted Zones to be synced immediately to the mobile devices then add `shouldSync` as a parameter in the DELETE request.

{Base Config API URL}/zones/{zoneId}?shouldSync\=true

### Bulk zone updates

For bulk Zone updates via API scripts we suggest setting the `shouldSync` value to `false` in the Zone requests, this is to avoid multiple real-time data sync push messages sent to mobile devices.

![image](https://docs.bluedot.io/wp-content/uploads/2021/07/info.png)

If your use case requires all Zones updates to be immediately synced to the mobile devices, please contact Bluedot helpdesk to discuss possible options.

Integrate real-time data sync in your applications
--------------------------------------------------

*   [Android](https://docs.bluedot.io/android-sdk/android-features/android-features-real-time-data-sync/)
*   [iOS](https://docs.bluedot.io/ios-sdk/ios-features/ios-features-real-time-data-sync/)