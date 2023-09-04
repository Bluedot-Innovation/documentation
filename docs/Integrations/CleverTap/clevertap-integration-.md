CleverTap Integration
=====================

- [CleverTap Integration](#clevertap-integration)
  - [**Background**](#background)
  - [**Integration architecture diagram**](#integration-architecture-diagram)
  - [**Bluedot setup**](#bluedot-setup)
    - [Creating a new Project](#creating-a-new-project)
    - [Adding a Zone](#adding-a-zone)
  - [**CleverTap setup**](#clevertap-setup)
      - [**Setting up a CleverTap journey powered by Bluedot**](#setting-up-a-clevertap-journey-powered-by-bluedot)
  - [**Integrating SDK to Android App**](#integrating-sdk-to-android-app)
  - [**Integrating SDK to iOS App**](#integrating-sdk-to-ios-app)
  - [**Integration examples**](#integration-examples)
  - [**Contact Details**](#contact-details)

**Background**
--------------

Bluedot is a location platform that provides an accurate and simple geofencing platform for apps. After integrating the Bluedot SDK and setting geofences, customers can create personalized location-based experiences for their users.

CleverTap enables mobile marketers to analyze, segment, engage, and measure their mobile marketing efforts. The mobile marketing platform combines real-time customer insights, an advanced segmentation engine, and powerful engagement tools into one intelligent marketing platform, making it easy to collect, analyze, and act on customer insights in milliseconds.

**Integration architecture diagram**
------------------------------------

![](https://docs.bluedot.io/wp-content/uploads/2021/06/Bluedot-CleverTap-System-Architecture-1024x576.png)

**Bluedot setup**
-----------------

### Creating a new Project

Creating a Project is your first step. All your Zones and all geofeatures exist within a Project. More information on adding and managing the Bluedot Canvas project can be found [here](https://docs.bluedot.io/canvas/creating-a-new-project/).

### Adding a Zone

You’ll need to create a Zone before you can start adding in specific Geofeatures. Each Zone can have one or many Geofeatures – that’s up to you and your use-case. More information on adding and managing Zones can be found [here](https://docs.bluedot.io/canvas/add-a-new-zone/).

**CleverTap setup**
-------------------

We use custom events to trigger Campaigns in CleverTap. Once you follow the steps above under Bluedot Setup, you will start seeing Bluedot events arriving in the CleverTap dashboard as Bluedot zones are triggered. Once those events have been registered with CleverTap, you can then use these in analytics and to kick off engagement journeys.

#### **Setting up a CleverTap journey powered by Bluedot**

![ClerverTap journery](https://docs.bluedot.io/wp-content/uploads/2020/02/CT-Action.png)

To set up a CleverTap journey triggered by a user entering or exiting a location, drag and drop an “Action” into the entry criteria field. Once the entry criteria look like the image above, click it and fill out the basic requirements for the journey. In the second section, select “+ Create an ad-hoc segment”.  
![Create a segment](https://docs.bluedot.io/wp-content/uploads/2020/02/CT-Events.png)

Here, you can select the bluedot\_place\_entered or bluedot\_place\_exited events as the triggering event, and add filters to specify under which circumstances a journey should be triggered (in the above example, when the a\_custom\_field attribute equals with\_custom\_data, which might be populated from Bluedot zone custom data).  
![Create a build](https://docs.bluedot.io/wp-content/uploads/2020/02/CT-Builds.png)

Once the action entry criteria is setup, standard CleverTap behaviors can be defined, all triggered by the user’s interaction with a physical location.

More information on CleverTap Journeys can be found [here](https://docs.clevertap.com/docs/journeys).

**Integrating SDK to Android App**
----------------------------------

A detailed step by step guideline is available [here](https://docs.bluedot.io/integrations/clevertap-integration/clevertap-android-integration/https://docs.bluedot.io/integrations/clevertap-integration/clevertap-android-integration/).

**Integrating SDK to iOS App**
------------------------------

A detailed step by step guideline is available [here](https://docs.bluedot.io/integrations/clevertap-integration/clevertap-ios-integration/).

**Integration examples**
------------------------

Android – [https://github.com/Bluedot-Innovation/PointSDK-CleverTapIntegrationExample-Android](https://github.com/Bluedot-Innovation/PointSDK-CleverTapIntegrationExample-Android)

iOS – [https://github.com/Bluedot-Innovation/PointSDK-CleverTapSDK-IntegrationExample-iOS](https://github.com/Bluedot-Innovation/PointSDK-CleverTapSDK-IntegrationExample-iOS)

**Contact Details**
-------------------

If you have any technical issues or questions you please use [help@bluedot.io](mailto:help@bluedot.io) to reach out to our Melbourne-based Engineering team.