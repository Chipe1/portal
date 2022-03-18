// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  'developer-docs': [
    {
      type: 'autogenerated',
      dirName: 'developer-docs',
    }
  ],
  'concepts': [
    {
      type: 'autogenerated',
      dirName: 'concepts',
    }
  ],
  'references': [
    {
      type: 'autogenerated',
      dirName: 'references',
    },
    {
      type: 'link',
      label: 'Canister SDK references',
      href: 'https://docs.rs/ic-cdk/',
    }
  ],
  'showcase': [
    {
      type: 'autogenerated',
      dirName: 'showcase',
    }
  ],
  'user-guides': [
    {
      type: 'autogenerated',
      dirName: 'user-guides',
    }
  ]
};

module.exports = sidebars;
