const slug = "timeline-block-block";

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro, licenseActiveNonce } = info;

  const proSuffix = isPremium ? ' Pro' : '';

  return {
    name: `Timeline Block${proSuffix}`,
    displayName: `Timeline Block${proSuffix} - Beautiful Timeline Builder (Vertical & Horizontal Timelines)`,
    description: "Timeline Block Plugin helps you create beautiful, customizable timelines in WordPress with 6 unique themes and both horizontal and vertical layouts. Easily edit and style timelines in the editor—perfect for showcasing projects, stories, milestones, or events.",
    slug,
    version,
    isPremium,
    hasPro,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
      // proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
      // video: 'https://www.youtube.com/watch?v=milYZrqLJsE',
      // isYoutube: true  
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: '17342',
      plan_id: '28900',
      public_key: 'pk_624005a9d0c56ff46db6602f5f730',
    },
    licenseActiveNonce,
    changelogs: [
      {
        version: "1.4.0 - 13 April 2026",
        type: "update",
        list: [
          "Added animation options",
          "Improved responsiveness and fixed layout issues",
          "Added two new themes"
        ],
      },
      {
        version: "1.3.6 - 15 February 2026",
        type: "update",
        list: ["Update - Redesigned the dashboard with a modern and improved user interface, replacing the previous outdated layout."],
      },
      {
        version: "1.3.6 - 15 February 2026",
        type: "fix",
        list: ["Fixed: Removed unnecessary login restriction for shortcode display."],
      },
      {
        version: "1.3.5 - 27 January 2026",
        type: "fix",
        list: [
          "Fixed horizontal timeline issue",
          "Optimized plugin files & increase code readability",
        ],
      },
      {
        version: "1.3.4 - 24 January 2026",
        type: "fix",
        list: ["Fixed vulnerability issue"],
      },
      {
        version: "1.3.3 - 19 November 2025",
        type: "fix",
        list: ["Fixed issues"],
      },
      {
        version: "1.3.2 - 13 November 2025",
        type: "update",
        list: ["updated freemius version and readme.txt"],
      },
      {
        version: "1.3.1, 5 November 2025",
        type: "update",
        list: ["Updated freemius-lite sdk."],
      },
      {
        version: "1.3.0, 20 October 2025",
        type: "new",
        list: ["Add timeline block shortcode.", "Modified the plugin."],
      },
      {
        version: "1.2.4, 6 October 2025",
        type: "new",
        list: ["Add New Template"],
      },
      {
        version: "1.2.3, 15 September 2025",
        type: "update",
        list: ["Add Modern Dashboard & Fixed Issues"],
      },
      {
        version: "1.2.2, 23 July 2025",
        type: "fix",
        list: ["Fixed issues"],
      },
      {
        version: "1.2.1, 15 May 2025",
        type: "fix",
        list: ["Fixed text domain issue and SEO problem"],
      },
    ],
    proFeatures: [
      "ShortCode to use Timeline Block anywhere.",
      "Nine extra professional theme designs.",
      "Classic Editor for advanced formatting.",
      "Customizable and styled timeline icons.",
      "Advanced tools for ultimate design control.",
      "Animation effects for timeline items."
    ],
    startButton: {
      label: 'Start Now',
      url: `wp-admin/post-new.php?post_type=timeline_block`
    }
  }
}

export const demoInfo = {
  allInOneLabel: 'See All Demos',
  allInOneLink: "https://bblockswp.com/demo/timeline-block-all-demos/",
  demos: [
    {
      icon: "",
      title: "Default Timeline",
      type: "iframe",
      url: "https://bblockswp.com/demo/3111/",
    },
    {
      icon: "",
      title: "Default Customized Timeline",
      type: "iframe",
      url: "https://bblockswp.com/demo/customize-timeline-default-theme/",
    },
    {
      icon: "",
      title: "Template 1(Accordion Timeline)",
      type: "iframe",
      url: "https://bblockswp.com/demo/accordion-timeline-with-classic-editor-pro/",
    },
    {
      icon: "",
      title: "Template 2(Vertical & Horizontal Options)",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-with-icon-and-date-pro/",
    },
    {
      icon: "",
      title: "Template 3",
      type: "iframe",
      url: "https://bblockswp.com/demo/theme-3-pro/",
    },
    {
      icon: "",
      title: "Template 4",
      type: "iframe",
      url: "https://bblockswp.com/demo/theme-4-pro/",
    },
    {
      icon: "",
      title: "Template 5",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-5-pro/",
    },
    {
      icon: "",
      title: "Template 6",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-6-pro/",
    },
    {
      icon: "",
      title: "Template 7",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-7-pro/",
    },
    {
      icon: "",
      title: "Template 8",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-8-pro/",
    },
    {
      icon: "",
      title: "Template 9",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-9-pro/"
    }
  ],
}

export const pricingInfo = {
  logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
  pluginId: 17342,
  planId: 28900,
  licenses: [
    1,
    3,
    null
  ],
  button: {
    label: 'Buy Now ➜'
  },
  featured: {
    selected: 3, // choose from licenses item
  }
}

