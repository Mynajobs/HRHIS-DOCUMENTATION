module.exports = {
  title: "HRHIS",
  tagline:
    "Documentation for collection, collation, storage of Human resource for health Information software.",
  url: "https://udsm-dhis2-project.github.io/hris-api-docs/",
  baseUrl: "/hris-api-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "images/favicon.png",
  organizationName: "udsm-dhis2-project", // Usually your GitHub org/user name.
  projectName: "hris-api-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "HRHIS",
      hideOnScroll: false,
      //style: "primary",
      logo: {
        alt: "HRHIS Logo",
        src: "images/favicon.png",
      },
      items: [
        {
          to: "docs/users/introduction",
          label: "User Manual",
          position: "left",
        },
        {
          to: "docs/developers/basics",
          label: "Developer",
          position: "left",
        },
        {
          href: "https://github.com/udsm-dhis2-project/hris-api-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} UDSM-DHIS2`,
    },
    respectPrefersColorScheme: true,
    switchConfig: {
      darkIcon: "🌚",
    },
    announcementBar: {
      id: "info",
      content:
        "Discover the power of HRHIS through user and developer documentation",
      backgroundColor: "light-green",
      textColor: "white",
      isCloseable: false,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl:
            "https://github.com/udsm-dhis2-project/hris-api-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
