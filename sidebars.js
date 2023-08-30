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
    { type: 'doc', id: 'intro', label: 'Introduction' },
    {
      type: 'category',
      label: 'Android',
      items: [
        "Android SDK/Quick Start",
        "Android SDK/Geo-triggering",
        "Android SDK/Tempo",
        {
          type: 'category',
          label: 'Features',
          items: [
            "Android SDK/Features/Enable or disable zones",
            "Android SDK/Features/Real-time data sync",
          ]
        },
        "Android SDK/Location Permission & Notifications Best Practices",
        "Android SDK/Best Practices & Recommendations",
        "Android SDK/Caveats",
        "Android SDK/Gradle 8",
        "Android SDK/Migrating from previous versions to v15.3.0"
      ],
    },
    {
      type: 'category',
      label: 'iOS',
      items: [
        "iOS SDK/Quick Start",
        "iOS SDK/Geo-triggering",
        "iOS SDK/Tempo",
        {
          type: 'category',
          label: 'Features',
          items: [
            "iOS SDK/Features/App restart notification",
            "iOS SDK/Features/Blue bar",
            "iOS SDK/Features/Enable or disable zones",
            "iOS SDK/Features/Real-time data sync",
            "iOS SDK/Features/Enhanced SDK restart",
          ]
        },
        "iOS SDK/Location Permission Best Practices",
        {
          type: 'category',
          label: 'Migration Guides',
          items: [
            "iOS SDK/Migration Guides/Migration guide from previous versions to Point SDK v15.4.0",
            "iOS SDK/Migration Guides/Migration guide from previous versions to Point SDK v15.5.0"
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Canvas',
      items: [
        "Canvas/Overview",
        "Canvas/Creating a new project",
        "Canvas/Add a new zone",
        "Canvas/Store management",
        "Canvas/What are Zone settings",
        "Canvas/What is Zone custom data",
        "Canvas/Setting up multiple environments",
        "Canvas/Event simulator guide",
        "Canvas/How to authenticate with Config API",
        
      ],
    },
  ]
};

module.exports = sidebars;
