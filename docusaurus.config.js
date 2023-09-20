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
  url: 'https://bluedot-innovation.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',
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
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Bluedot.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['swift', 'kotlin', 'java', 'objectivec', 'gradle', 'dart','csharp']
      },
    }),
};

module.exports = config;
