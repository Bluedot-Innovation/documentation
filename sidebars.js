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
      link: {
        type: "doc",
        id: "Point SDK/Overview",
      },
      items: [
        "Point SDK/Overview",
        {
          type: "category",
          label: "Android",
          link: {
            type: "doc",
            id: "Point SDK/Android/Overview",
          },
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
              ],
            },
            "Point SDK/Android/Location Permission & Notifications Best Practices",
            "Point SDK/Android/Best Practices & Recommendations",
            "Point SDK/Android/Caveats",
            "Point SDK/Android/Gradle 8",
            {
              type: "category",
              label: "Migration Guides",
              items: [
                "Point SDK/Android/Migration Guides/Migration guide to SDK 16 for Android",
                "Point SDK/Android/Migration Guides/Migrating from previous versions to v15.3.0",
              ]
            }
          ],
        },
        {
          type: "category",
          label: "iOS",
          link: {
            type: "doc",
            id: "Point SDK/iOS/Overview",
          },
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
                "Point SDK/iOS/Features/Enhanced SDK restart",
              ],
            },
            "Point SDK/iOS/Location Permission Best Practices",
            {
              type: "category",
              label: "Migration Guides",
              items: [
                "Point SDK/iOS/Migration Guides/Migration guide to SDK 16 for iOS",
                "Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0",
                "Point SDK/iOS/Migration Guides/Migration guide from previous versions to Point SDK v15.5.0",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "React Native",
          link: {
            type: "doc",
            id: "Point SDK/React Native/Overview",
          },
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
                "Point SDK/React Native/Migration Guides/Migration guide to 3.0.0",
                "Point SDK/React Native/Migration Guides/Migrating to 2.0.0 guide",
                "Point SDK/React Native/Migration Guides/Version 1.1.7 documentation",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Flutter",
          link: {
            type: "doc",
            id: "Point SDK/Flutter/Overview",
          },
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
          link: {
            type: "doc",
            id: "Point SDK/Xamarin/Overview",
          },
          items: [
            "Point SDK/Xamarin/Overview",
            "Point SDK/Xamarin/Android",
            "Point SDK/Xamarin/iOS",
          ],
        },
        {
          type: "category",
          label: "Cordova",
          link: {
            type: "doc",
            id: "Point SDK/Cordova/Overview",
          },
          items: [
            "Point SDK/Cordova/Overview",
            "Point SDK/Cordova/Quick Start",
            "Point SDK/Cordova/Geo-triggering",
            "Point SDK/Cordova/Tempo",
            "Point SDK/Cordova/Features",
            "Point SDK/Cordova/Events List"
          ],
        },
        "Point SDK/Migrating to Point SDK 16"
      ],
    },
    {
      type: "category",
      label: "Canvas",
      link: {
       type: "doc",
       id: "Canvas/Overview",
      },
      items: [
        "Canvas/Overview",
        "Canvas/Creating a new project",
        "Canvas/Add a new zone",
        "Canvas/Store management",
        "Canvas/What are Zone settings",
        "Canvas/What is Zone custom data",
        {
          type: "category",
          label: "Analytics",
          link: {
            type: 'doc',
            id: 'Canvas/Analytics/Historical Event Tracking'
          },
          items: [
            'Canvas/Analytics/Historical Event Tracking',
            'Canvas/Analytics/Hello Order Logs',
            'Canvas/Analytics/Scheduled Reports'
          ]
        },
        "Canvas/Mandatory two-factor authentication",
        "Canvas/Single Sign-On support",
        "Canvas/Setting up multiple environments",
        "Canvas/Event simulator guide",
        "Canvas/How to authenticate with Config API",
      ],
    },
    {
      type: "category",
      label: "Hello Screens",
      link: {
        type: "doc",
        id: "Hello Screens/Overview",
      },
      items: [
        "Hello Screens/Overview",
        "Hello Screens/Customer wait time goals",
        "Hello Screens/Order ticket details",
        "Hello Screens/Scheduled Pickup Time",
        "Hello Screens/Partner ETA",
        "Hello Screens/Grouping Orders",
        "Hello Screens/Consolidation Alerts",
        "Hello Screens/Custom Order States",
        "Hello Screens/Custom configuration per store",
        "Hello Screens/Mobile app",
        "Canvas/Single Sign-On support",
        "Hello Screens/Additional security layer",
      ],
    },
    {
      type: "category",
      label: "Now Ready",
      link: {
        type: "doc",
        id: "Now Ready/Overview",
      },
      items: [
        "Now Ready/Overview",
        "Now Ready/Configure Now Ready",
        "Now Ready/Integrate register endpoint",
      ],
    },
    {
      type: "category",
      label: "Tempo",
      link: {
        type: "doc",
        id: "Tempo/Overview",
      },
      items: [
        "Tempo/Overview",
        "Tempo/Integrate the Point SDK in your app",
        "Tempo/Isochrone time brackets",
        "Tempo/Create your destinations",
        "Tempo/Configure a Tempo webhook"
      ]
    },
    {
      type: "category",
      label: "APIs",
      items: [
        {
          type: "category",
          label: "Config API",
          link: {
            type: "doc",
            id: "APIs/Config API/Overview",
          },
          items: [
            "APIs/Config API/Overview",
            "APIs/Config API/How to authenticate with Config API",
          ],
        },
        {
          type: "category",
          label: "Analytics API",
          link: {
            type: "doc",
            id: "APIs/Analytics API/Overview",
          },
          items: [
            "APIs/Analytics API/Overview",
            "APIs/Analytics API/How to paginate responses",
          ],
        },
        {
          type: "category",
          label: "Wave API",
          link: {
            type: "doc",
            id: "APIs/Wave API/Overview",
          },
          items: [
            "APIs/Wave API/Overview",
            "APIs/Wave API/Integrate Wave API",
            "APIs/Wave API/Receiving Wave API events",
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Web SDK",
      link: {
        type: "doc",
        id: "Web SDK/Overview",
      },
      items: [
        "Web SDK/Overview",
        "Web SDK/Quick Start",
        "Web SDK/Send your first Wave",
        "Web SDK/Location permissions and best practices",
        "Web SDK/Interacting with Hello Screens",
        "Web SDK/NodeJs environment vs browser",
        "Web SDK/SDK retry behaviour",
        "Web SDK/User persistence in the SDK",
        "Web SDK/SDK development tools"
      ]
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "Webhooks/Overview",
      },
      items: [
        "Webhooks/Overview",
        "Webhooks/Geo-triggering",
        "Webhooks/Tempo",
        "Webhooks/Wave",
        "Webhooks/Hello order",
        "Webhooks/Webhooks retry",
        {
          type: "category",
          label: "V1",
          link: {
            type: "doc",
            id: "Webhooks/V1/Geo-triggering"
          },
          items: [
            "Webhooks/V1/Geo-triggering"
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: {
        type: "doc",
        id: "integrations/Overview",
      },
      items: [
        "integrations/Overview",
        "integrations/Adobe Experience",
        {
          type: "category",
          label: "Airship",
          link: {
            type: "doc",
            id: "integrations/Airship/Overview",
          },
          items: [
            "integrations/Airship/Overview",
            "integrations/Airship/Android",
            "integrations/Airship/iOS"
          ]
        },
        {
          type: "category",
          label: "Attentive",
          link: {
            type: "doc",
            id: "integrations/Attentive/Overview",
          },
          items: [
            "integrations/Attentive/Overview",
            "integrations/Attentive/Quick Start",
            "integrations/Attentive/Curbside experience",
            "integrations/Attentive/Location-based messages",
          ]
        },
        "integrations/Bbot",
        {
          type: "category",
          label: "Braze",
          link: {
            type: "doc",
            id: "integrations/Braze/Overview",
          },
          items: [
            "integrations/Braze/Overview",
            "integrations/Braze/Android",
            "integrations/Braze/iOS"
          ]
        },
        {
          type: "category",
          label: "CleverTap",
          link: {
            type: "doc",
            id: "integrations/CleverTap/Overview",
          },
          items: [
            "integrations/CleverTap/Overview",
            "integrations/CleverTap/Android",
            "integrations/CleverTap/iOS"
          ]
        },
        "integrations/Doordash",
        "integrations/Flipdish",
        "integrations/Incentivio",
        "integrations/Klaviyo",
        "integrations/Mobivity",
        "integrations/mParticle",
        "integrations/Olo",
        "integrations/OneSignal",
        {
          type: "category",
          label: "Oracle Responsys",
          link: {
            type: "doc",
            id: "integrations/Oracle Responsys/Overview",
          },
          items: [
            "integrations/Oracle Responsys/Overview",
            "integrations/Oracle Responsys/Android",
            "integrations/Oracle Responsys/iOS"
          ]
        },
        "integrations/Oracle Simphony",
        "integrations/Raydiant",
        "integrations/Safegraph",
        {
          type: "category",
          label: "Salesforce",
          link: {
            type: "doc",
            id: "integrations/Salesforce/Overview",
          },
          items: [
            "integrations/Salesforce/Overview",
            "integrations/Salesforce/Linking Salesforce Marketing Cloud to Canvas",
            "integrations/Salesforce/Create SFMC events",
            "integrations/Salesforce/Set up your Canvas account",
            "integrations/Salesforce/Journey setup",
            {
              type: "category",
              label: "Mobile SDK Integration",
              link: {
                type: "doc",
                id: "integrations/Salesforce/Mobile SDK Integration/Overview",
              },
              items: [
                "integrations/Salesforce/Mobile SDK Integration/Overview",
                "integrations/Salesforce/Mobile SDK Integration/Android",
                "integrations/Salesforce/Mobile SDK Integration/iOS"
              ]
            },
            "integrations/Salesforce/Bluedot data extension fields",
          ]
        },
        "integrations/Segment",
        "integrations/Tealium"
      ]
    },
    {
      type: "doc",
      id: "Custom Event Metadata",
      label: "Custom Event Metadata",
    },
    {
      type: "category",
      label: "Implementation and Best Practices Guides",
      link: {
        type: "doc",
        id: "Implementation and Best Practices Guides/Overview",
      },
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
      label: "Regions URLs",
      id: "Regions URLs",
    },
    {
      type: "doc",
      id: "Version release notes",
      label: "Version Release Notes",
    },
  ],
};

module.exports = sidebars;
