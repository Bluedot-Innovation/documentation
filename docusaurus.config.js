// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bluedot Documentation',
  tagline: 'Developer Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.bluedot.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'Bluedot-Innovation',
  projectName: 'documentation',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'Bluedot Documentation Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://bluedot.io/blog/',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'mailto:help@bluedot.io',
            label: 'Contact Us',
            position: 'right',
          },
          {
            href: 'https://select-region.bluedot.io/',
            label: 'Sign In',
            position: 'right',
          },
          {
            href: 'https://bluedot.io/demo/',
            label: 'Request Free Demo',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['swift', 'kotlin', 'java', 'objectivec', 'gradle', 'dart','csharp']
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '2NCSK8Z8T6',
  
        // Public API key: it is safe to commit it
        apiKey: '2f862b54cf71f1350d20e84980b27d50',
  
        indexName: 'bluedot'
      }
    }),

    plugins:[
      [
        '@docusaurus/plugin-client-redirects',
        // Redirects from old documentation pages
        {
          redirects: [
            {
              from: ['/integrations/adobe-experience-platform-integration'],
              to: '/integrations/Adobe Experience',
            },
            {
              from: ['/integrations/airship-integration/'],
              to: '/integrations/Airship/Overview',
            },
            {
              from: ['/integrations/airship-integration/urban-airship-android-integration/'],
              to: '/integrations/Airship/Android',
            },
            {
              from: ['/integrations/airship-integration/urban-airship-ios-integration/'],
              to: '/integrations/Airship/iOS',
            },
            {
              from: ['/integrations/attentive-integration/'],
              to: '/integrations/Attentive/Overview',
            },
            {
              from: ['/integrations/attentive-integration/installing-the-attentive-bluedot-integration/'],
              to: '/integrations/Attentive/Quick Start',
            },
            {
              from: ['/integrations/attentive-integration/curbside-experience/'],
              to: '/integrations/Attentive/Curbside experience',
            },
            {
              from: ['/integrations/attentive-integration/location-based-messages/'],
              to: '/integrations/Attentive/Location-based messages',
            },
            {
              from: ['/integrations/bbot-integration'],
              to: '/integrations/Bbot',
            },
            {
              from: ['/integrations/braze-integration'],
              to: '/integrations/Braze/Overview',
            },
            {
              from: '/integrations/braze-integration/braze-android-integration/',
              to: '/integrations/Braze/Android'
            },
            {
              from: '/integrations/braze-integration/braze-ios-integration/',
              to: '/integrations/Braze/iOS'
            },
            {
              from: '/integrations/clevertap-integration/',
              to: '/integrations/CleverTap/Overview'
            },
            {
              from: '/integrations/clevertap-integration/clevertap-android-integration/',
              to: '/integrations/CleverTap/Android'
            },
            {
              from: '/integrations/clevertap-integration/clevertap-ios-integration/',
              to: '/integrations/CleverTap/iOS'
            },
            {
              from: '/integrations/flipdish-integration/',
              to: '/integrations/Flipdish'
            },
            {
              from: '/integrations/incentivio-integration/',
              to: '/integrations/Incentivio'
            },
            {
              from: '/integrations/klaviyo-integration/',
              to: '/integrations/Klaviyo'
            },
            {
              from: '/integrations/mobivity-integration/',
              to: '/integrations/Mobivity'
            },
            {
              from: '/integrations/mparticle-integration/',
              to: '/integrations/mParticle'
            },
            {
              from: '/integrations/olo-integration/',
              to: '/integrations/Olo'
            },
            {
              from: '/integrations/one-signal-integration/',
              to: '/integrations/OneSignal'
            },
            {
              from: '/integrations/oracle-integration/',
              to: '/integrations/Oracle Responsys/Overview'
            },
            {
              from: '/integrations/oracle-integration/android/',
              to: '/integrations/Oracle Responsys/Android'
            },
            {
              from: '/integrations/oracle-integration/ios/',
              to: '/integrations/Oracle Responsys/iOS'
            },
            {
              from: '/integrations/oracle-simphony-pos-integration/',
              to: '/integrations/Oracle Simphony'
            },
            {
              from: '/integrations/raydiant-integration/',
              to: '/integrations/Raydiant'
            },
            {
              from: '/integrations/safegraph-integration/',
              to: '/integrations/Safegraph'
            },
            {
              from: '/integrations/safegraph-integration/',
              to: '/integrations/Safegraph'
            },
            {
              from: '/integrations/salesforce-integration/',
              to: '/integrations/Salesforce/Overview'
            },
            {
              from: '/integrations/salesforce-integration/linking-salesforce-marketing-cloud-your-canvas-account/',
              to: '/integrations/Salesforce/Linking Salesforce Marketing Cloud to Canvas'
            },
            {
              from: '/integrations/salesforce-integration/create-sfmc-events/',
              to: '/integrations/Salesforce/Create SFMC events'
            },
            {
              from: '/integrations/salesforce-integration/create-sfmc-events/',
              to: '/integrations/Salesforce/Set up your Canvas account'
            },
            {
              from: '/integrations/salesforce-integration/journey-setup/',
              to: '/integrations/Salesforce/Journey setup'
            },
            {
              from: '/integrations/salesforce-integration/mobile-sdk-integration/',
              to: '/integrations/Salesforce/Mobile SDK Integration/Overview'
            },
            {
              from: '/integrations/salesforce-integration/mobile-sdk-integration/salesforce-android-integration/',
              to: '/integrations/Salesforce/Mobile SDK Integration/Android'
            },
            {
              from: '/integrations/salesforce-integration/mobile-sdk-integration/salesforce-ios-integration/',
              to: '/integrations/Salesforce/Mobile SDK Integration/iOS'
            },
            {
              from: '/integrations/salesforce-integration/mobile-sdk-integration/salesforce-ios-integration/',
              to: '/integrations/Salesforce/Mobile SDK Integration/iOS'
            },
            {
              from: '/integrations/salesforce-integration/bluedot-data-extension-fields/',
              to: '/integrations/Salesforce/Bluedot data extension fields'
            },
            {
              from: '/integrations/segment-integration/',
              to: '/integrations/Segment'
            },
            {
              from: '/integrations/tealium-integration/',
              to: '/integrations/Tealium'
            },
            {
              from: '/android-sdk/',
              to: '/Point SDK/Android/Overview'
            },
            {
              from: '/android-sdk/',
              to: '/Point SDK/Android/Overview'
            },
            {
              from: '/android-sdk/android-quick-start/',
              to: '/Point SDK/Android/Quick Start'
            },
            {
              from: '/android-sdk/android-geo-triggering/',
              to: '/Point SDK/Android/Geo-triggering'
            },
            {
              from: '/android-sdk/android-tempo/',
              to: '/Point SDK/Android/Tempo'
            },
            {
              from: '/android-sdk/android-location-permission-notifications-best-practices/',
              to: '/Point SDK/Android/Location Permission & Notifications Best Practices'
            },
            {
              from: '/android-sdk/android-best-practices-recommendations/',
              to: '/Point SDK/Android/Best Practices & Recommendations'
            },
            {
              from: '/android-sdk/android-caveats/',
              to: '/Point SDK/Android/Caveats'
            },
            {
              from: '/android-sdk/android-caveats/',
              to: '/Point SDK/Android/Caveats'
            },
            {
              from: '/ios-sdk/',
              to: '/Point SDK/iOS/Overview'
            },
            {
              from: '/ios-sdk/ios-quick-start/',
              to: '/Point SDK/iOS/Quick Start'
            },
            {
              from: '/ios-sdk/ios-geo-triggering/',
              to: '/Point SDK/iOS/Geo-triggering'
            },
            {
              from: '/ios-sdk/ios-tempo/',
              to: '/Point SDK/iOS/Tempo'
            },
            {
              from: '/ios-sdk/ios-location-permission-best-practices/',
              to: '/Point SDK/iOS/Location Permission Best Practices'
            },
            {
              from: '/react-native-library/',
              to: '/Point SDK/React Native/Overview'
            },
            {
              from: '/react-native-library/react-native-migrating-to-2-0-0-guide/',
              to: '/Point SDK/React Native/Migration Guides/Migrating to 2.0.0 guide'
            },
            {
              from: '/flutter-library/',
              to: '/Point SDK/Flutter/Overview'
            },
            {
              from: '/cordova-bluedot-plug-in/',
              to: '/Point SDK/Cordova/Overview'
            },
            {
              from: '/xamarin-bluedot-wrapper/',
              to: '/Point SDK/Xamarin/Overview'
            },
            {
              from: '/xamarin-bluedot-wrapper/xamarin-ios-quick-start-guide/',
              to: '/Point SDK/Xamarin/iOS'
            },
            {
              from: '/tempo/',
              to: '/Tempo/Overview'
            },
            {
              from: '/web-sdk/',
              to: '/Web SDK/Overview'
            },
            {
              from: '/config-api/',
              to: '/APIs/Config API/Overview'
            },
            {
              from: '/custom-event-metadata/',
              to: '/Custom Event Metadata'
            },
            {
              from: '/version-release-notes/',
              to: '/Version release notes'
            },
            {
              from: '/supported-platforms/',
              to: '/Supported Platforms'
            },
            {
              from: '/canvas/',
              to: '/Canvas/Overview'
            },
            {
              from: '/canvas/creating-a-new-project/',
              to: '/Canvas/Creating a new project'
            },
            {
              from: '/canvas/add-a-new-zone/',
              to: '/Canvas/Add a new zone'
            },
            {
              from: '/canvas/add-a-new-zone/',
              to: '/Canvas/Add a new zone'
            },
            {
              from: '/canvas/store-management/',
              to: '/Canvas/Store management'
            },
            {
              from: '/canvas/what-are-zone-settings/',
              to: '/Canvas/What are Zone settings'
            },
            {
              from: '/canvas/what-are-zone-settings/what-is-custom-data/',
              to: '/Canvas/What is Zone custom data'
            },
            {
              from: '/webhooks/',
              to: '/Webhooks/Overview'
            },
            {
              from: '/Canvas/Analytics/Hello%20Reports',
              to: '/Canvas/Analytics/Scheduled Reports'
            }
          ]
        }
      ]
    ]
};

module.exports = config;
