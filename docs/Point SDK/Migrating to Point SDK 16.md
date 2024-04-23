# Migrating to Point SDK 16

#### Learn how to migrate to the latest version of the Bluedot Mobile Point SDK.

The Point SDKs for iOS and Android have been updated with changes in APIs and behaviour, some of which require that you update your integration with the Point SDK. These changes are a part of our regular major version updates and aim to provide more data that can be used to enrich the user experience with your app. This guide will assist you in upgrading your integration by taking you through the latest changes.

Here are some things you need to know about the Point SDK version 16:

- **Enhanced Geo-Triggering Data:** The "*Entry"* and "*Exit"* callbacks have been updated with useful information to improve your use cases.

- **New Tempo Tracking callback:** The Tempo Service has a new callback with the user's ETA at runtime. You can now receive the user's ETA updates in your app, not only from the Tempo webhooks.

- **New Destination information:** You can now access a Destination (AKA Store) details from the Zones list. From the list of Zones, you can easily retrieve information for any Destinations linked to these Zones. This improvement simplifies reviewing and managing the relationship between Destinations and their corresponding Zones.

- **Removal of deprecated features and properties:**
    - **URL Action and Message Action:** The URL and Message actions were removed from our platform in May 2023. In SDK 16, we're catching up and removing the APIs, classes and properties related to these features.

    - **The Real-time Data Sync feature:** The Real-time Data Sync feature was designed for use cases where Zones frequently change, enabling the push of newly created Zones to the SDK in real-time. This functionality was exclusively available to apps using the Firebase SDK. Due to close to zero usage, the feature was discontinued in May 2023. We are now removing the associated APIs in SDK version 16.
    
    - Classes, Functions, and Properties that were deprecated in March 2021—version 15.4 for iOS and 15.3 for Android—have now been removed in SDK version 16.

- Updates to minimum supported platform versions for iOS and Android.

#### Migration Guides
Please refer to the migration guide for each platform to better understand these changes and ensure a smooth transition.
- [Android](../Point%20SDK/Android/Migration%20Guides/Migration%20guide%20to%20SDK%2016%20for%20Android.md)
- [iOS](../Point%20SDK/iOS/Migration%20Guides/)