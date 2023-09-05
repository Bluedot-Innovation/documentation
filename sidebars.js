/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  defaultSidebar: [
    { type: "doc", id: "intro", label: "Introduction" },
    {
      type: "category",
      label: "Point SDK",
      items: [
        {
          type: "category",
          label: "Android",
          items: [
            "Point SDK/Android/Overview",
            "Point SDK/Android/Quick Start",
            "Point SDK/Android/Geo-triggering",
            "Point SDK/Android/Tempo",
            {
              type: "category",
              label: "Features",
              items: [
                "Point SDK/Android/Features/Enable or disable zones",
                "Point SDK/Android/Features/Real-time data sync",
              ],
            },
            "Point SDK/Android/Location Permission & Notifications Best Practices",
            "Point SDK/Android/Best Practices & Recommendations",
            "Point SDK/Android/Caveats",
            "Point SDK/Android/Gradle 8",
            "Point SDK/Android/Migrating from previous versions to v15.3.0",
          ],
        },
        {
          type: "category",
          label: "iOS",
          items: [
            "Point SDK/iOS/Overview",
            "Point SDK/iOS/Quick Start",
            "Point SDK/iOS/Geo-triggering",
            "Point SDK/iOS/Tempo",
            {
              type: "category",
              label: "Features",
              items: [
                "Point SDK/iOS/Features/App restart notification",
                "Point SDK/iOS/Features/Blue bar",
                "Point SDK/iOS/Features/Enable or disable zones",
                "Point SDK/iOS/Features/Real-time data sync",
                "Point SDK/iOS/Features/Enhanced SDK restart",
              ],
            },
            "Point SDK/iOS/Location Permission Best Practices",
            {
              type: "category",
              label: "Migration Guides",
              items: [
                "Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0",
                "Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.5.0",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "React Native",
          items: [
            "Point SDK/React Native/Overview",
            "Point SDK/React Native/Quick Start",
            "Point SDK/React Native/Geo-triggering",
            "Point SDK/React Native/Tempo",
            "Point SDK/React Native/Features",
            "Point SDK/React Native/Events List",
            {
              type: "category",
              label: "Migration Guides",
              items: [
                "Point SDK/React Native/Migration Guides/Migrating to 2.0.0 guide",
                "Point SDK/React Native/Migration Guides/Version 1.1.7 documentation",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Flutter",
          items: [
            "Point SDK/Flutter/Overview",
            "Point SDK/Flutter/Quick Start",
            "Point SDK/Flutter/Geo-triggering",
            "Point SDK/Flutter/Tempo",
            "Point SDK/Flutter/Features",
            "Point SDK/Flutter/Events List"
          ],
        },
        {
          type: "category",
          label: "Xamarin",
          items: [
            "Point SDK/Xamarin/Overview",
            "Point SDK/Xamarin/Android",
            "Point SDK/Xamarin/iOS",
          ],
        },
        {
          type: "category",
          label: "Cordova",
          items: [
            "Point SDK/Cordova/Overview",
            "Point SDK/Cordova/Quick Start",
            "Point SDK/Cordova/Geo-triggering",
            "Point SDK/Cordova/Tempo",
            "Point SDK/Cordova/Features",
            "Point SDK/Cordova/Events List"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Canvas",
      items: [
        "Canvas/Overview",
        "Canvas/Creating a new project",
        "Canvas/Add a new zone",
        "Canvas/Store management",
        "Canvas/What are Zone settings",
        "Canvas/What is Zone custom data",
        "Canvas/Mandatory two-factor authentication",
        "Canvas/Setting up multiple environments",
        "Canvas/Event simulator guide",
        "Canvas/How to authenticate with Config API",
      ],
    },
    {
      type: "category",
      label: "Hello Screens",
      items: [
        "Hello Screens/Overview",
        "Hello Screens/Customer wait time goals",
        "Hello Screens/Mobile app",
        "Hello Screens/Additional security layer",
      ],
    },
    {
      type: "category",
      label: "Now Ready",
      items: [
        "Now Ready/Overview",
        "Now Ready/Configure Now Ready",
        "Now Ready/Integrate register endpoint",
      ],
    },
     {
      type: "category",
      label: "APIs",
      items: [
        {
          type: "category",
          label: "Config API",
          items: [
            "APIs/Config API/Overview",
            "APIs/Config API/How to authenticate with Config API",
          ],
        },
        {
          type: "category",
          label: "Analytics API",
          items: [
            "APIs/Analytics API/Overview",
            "APIs/Analytics API/How to paginate responses",
          ],
        },
        {
          type: "category",
          label: "Wave API",
          items: [
            "APIs/Wave API/Overview",
            "APIs/Wave API/Integrate Wave API",
            "APIs/Wave API/Receiving Wave API events",
          ],
        },
        {
          type: "doc",
          label: "Regions URLs",
          id: "APIs/Regions URLs",
        }
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      items: [
        "Webhooks/Overview",
        "Webhooks/Geo-triggering",
        "Webhooks/Tempo",
        "Webhooks/Wave",
        "Webhooks/Hello order",
      ],
    },
    {
      type: "doc",
      id: "Custom Event Metadata",
      label: "Custom Event Metadata",
    },
    {
      type: "category",
      label: "Implementation and Best Practices Guides",
      items: [
        "Implementation and Best Practices Guides/Overview",
        "Implementation and Best Practices Guides/Curbside & Pickup implementation guide",
        "Implementation and Best Practices Guides/Drive-thru implementation guide",
        "Implementation and Best Practices Guides/Marketing & Gamification implementation guide",
        "Implementation and Best Practices Guides/Submitting apps with location services guide",
      ],
    },
    {
      type: "doc",
      id: "Version release notes",
      label: "Version Release Notes",
    },
  ],
};

module.exports = sidebars;
