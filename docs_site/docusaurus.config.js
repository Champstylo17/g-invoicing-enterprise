module.exports = {
  title: 'G-Invoicing Docs',
  tagline: 'Documentation for G-Invoicing Enterprise Platform',
  url: 'https://yourdomain.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'g-invoicing-docs',
  themeConfig: {
    navbar: {
      title: 'G-Invoicing',
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
