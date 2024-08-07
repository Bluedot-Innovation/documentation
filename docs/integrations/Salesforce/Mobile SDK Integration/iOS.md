Salesforce iOS Integration
==========================

Overview
--------

This documentation describes the steps required to integrate the **Bluedot Point iOS SDK** and **MarketingCloudSDK** in an iOS App.

BluedotPointSDK-Salesforce integration
--------------------------------------

This integration depends on both **Salesforce MarketingCloudSDK** and **Point iOS SDK**. These dependencies are managed by a cocoapod and will be installed after executing `pod install` command. **Salesforce MarketingCloudSDK** v5.2.1 can be downloaded from [https://github.com/salesforce-marketingcloud/MarketingCloudSDK-iOS/releases/tag/v5.2.1](https://github.com/salesforce-marketingcloud/MarketingCloudSDK-iOS/releases/tag/v5.2.1).

Salesforce iOS MarketingCloudSDK Integration
--------------------------------------------

To integrate **MarketingCloudSDK** you need to add `MarketingCloudSDKConfiguration.json` file to your project.

```json
[{
    "name": "production",
    "appid": "__your app id__",
    "accesstoken": "__your access token__",
    "marketing_cloud_server_url": "__your app endpoint__",
    "mid": "__your account mid__",
    "etanalytics": false,
    "pianalytics": false,
    "location": false,
    "inbox": false,
    "uselegacypiidentifier": true
}]
```

And then add MarketingCloudSDKConfiguration.json to Copy Bundle Resources in your target’s Build Phases settings.

![](../../../assets/SDKConfigure6.png)

You can find more information [here](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/get-started/apple.html).

Bluedot Point iOS SDK Integration
---------------------------------

Requirements

1.  Device and Operating System: all Apple devices running iOS 10.0+ and GPS capability
2.  Operating Environment: Data connection (only authentication and rule download) and location services.
3.  Permissions: Background processing for location services, local notification.

To integrate PointSDK, please refer to the integration steps [here.](../../../Point%20SDK/iOS/Quick%20Start.md)

Bluedot/Salesforce Marketing Cloud integration
----------------------------------------------

To trigger Bluedot events in Salesforce Marketing Cloud, please ensure that the Contact Key is passed into Bluedot via the `CustomKey` field with `[BDLocationManager.instance setCustomEventMetaData]`:

```objectivec
@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
 
    ...
    successful = [[MarketingCloudSDK sharedInstance] sfmc_configure:&error];
 
    [[MarketingCloudSDK sharedInstance] sfmc_setContactKey:@"__your_contactKey__"];
 
    [BDLocationManager.instance setCustomEventMetaData:@{@"ContactKey": [[MarketingCloudSDK sharedInstance] sfmc_contactKey]}];
    BDLocationManager.instance.sessionDelegate = self;
    BDLocationManager.instance.locationDelegate = self;
 
    [BDLocationManager.instance authenticateWithApiKey:@"__your_ApiKey__" requestAuthorization:authorizedAlways];
}
```


:::info
The custom event metadata is not persisted across SDK sessions. If the SDK is logged out the custom event metadata is cleared by the SDK. We suggest setting the custom data every time the SDK is authenticated in the app.

More information on best practices of setting and using custom event metadata can be found [here](../../../Custom%20Data.md).
:::

**GitHub Sample Project**
-------------------------

A sample project which demonstrates the integration of JB4A iOS SDK and Bluedot Point iOS SDK  is available on **[GitHub](https://github.com/Bluedot-Innovation/Salesforce-Simple-Integration-Demo-iOS)**.