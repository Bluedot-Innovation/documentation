1.  [Developer Documentation](https://docs.bluedot.io)
2.  [Integrations](https://docs.bluedot.io/integrations/)
3.  [Salesforce Marketing Cloud Integration](https://docs.bluedot.io/integrations/salesforce-integration/)
4.  Integrate the Point SDK

Integrate the Point SDK
=======================

### Integration Prerequisite

You’ll first need to integrate the Point SDK into your mobile app. You can find step-by-step integration guides here:

*   [Android integration](https://docs.bluedot.io/android-sdk/)
*   [iOS integration](https://docs.bluedot.io/ios-sdk/)

For most use cases, it’s also important to integrate the Journey Builder SDK. Detailed documentation is available here for [Android](http://salesforce-marketingcloud.github.io/JB4A-SDK-Android/) and [iOS](http://salesforce-marketingcloud.github.io/JB4A-SDK-iOS/).

To allow push capabilities to be available from Salesforce Marketing Cloud, add FCM ID obtained from your Firebase account to Salesforce Mobile Push Administration Page for the App.

Please refer to below screenshot for reference:

![](https://docs.bluedot.io/wp-content/uploads/2019/05/Screen-Shot-2019-05-16-at-3.25.20-pm-e1557984665466.png)

Integrating SDK to Android App
------------------------------

The SDK comes with the minimum requirements, which are needed to be satisfied for the SDK to start working, this means updating the AndroidManifest.xml file, which is the main configuration file of every Android project. Once this is done, the Salesforce Marketing Cloud Contact Key will need to be passed into the SDK to allow Bluedot triggers to be associated with the correct user profile – a detailed step by step guideline is available [here](https://docs.bluedot.io/integrations/salesforce-integration/mobile-sdk-integration/salesforce-android-integration/).

Integrating SDK to iOS App
--------------------------

Once the SDK is integrated, the Salesforce Marketing Cloud Contact Key will need to be passed into the SDK to allow Bluedot triggers to be associated with the correct user profile – a detailed step by step guideline is available [here](https://docs.bluedot.io/integrations/salesforce-integration/mobile-sdk-integration/salesforce-ios-integration/).