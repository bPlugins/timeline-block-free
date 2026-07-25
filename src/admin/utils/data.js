import { gutenbergTabIcon, shortcodeTabIcon, elementorTabIcon } from './icons';
import { heroImage } from './heroImage';

const slug = "timeline-block-block";

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro, adminUrl = '', licenseActiveNonce, deleteDataOnUninstall, uninstallNonce } = info;

  return {
    name: `Timeline Block`,
    displayName: `Timeline Block - Beautiful Timeline Builder (Vertical & Horizontal Timelines)`,
    description: "Timeline Block Plugin helps you create beautiful, customizable timelines in WordPress with multiple themes and both horizontal and vertical layouts. Easily edit and style timelines in the editor—perfect for showcasing projects, stories, milestones, or events.",
    slug,
    version,
    isPremium,
    hasPro,
    adminUrl,
    deleteDataOnUninstall,
    uninstallNonce,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      thumbnail: heroImage 
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/timeline-block/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: '17342',
      plan_id: '28900',
      public_key: 'pk_624005a9d0c56ff46db6602f5f730',
    },
    licenseActiveNonce,
    startButton: {
      label: 'Start Now',
      url: `${adminUrl}/post-new.php?post_type=timeline_block`
    }
  };
};

export const welcomeInfo = (adminUrl) => ({
  keywords: ['Vertical Timeline', 'Horizontal Timeline', 'Responsive Layout', 'Milestones', 'Timeline Themes'],
  keywordsLabel: 'Features',

  gettingStarted: {
    tabs: [
      {
        key: 'gutenberg',
        label: 'Gutenberg',
        icon: gutenbergTabIcon,
        steps: [
          {
            num: 1,
            title: 'Add the Block',
            body: 'Open the block editor. Click <strong>+</strong> or type <strong>/Timeline Block</strong>.',
            link: { url: `${adminUrl}/post-new.php`, label: 'Open Editor' }
          },
          {
            num: 2,
            title: 'Configure layout',
            body: 'Choose from vertical or horizontal layouts and customize styles in the inspector.'
          },
          {
            num: 3,
            title: 'Publish',
            body: 'Hit Publish when ready.'
          }
        ]
      },
      {
        key: 'shortcode',
        label: 'ShortCode',
        icon: shortcodeTabIcon,
        steps: [
          {
            num: 1,
            title: 'Create via CPT',
            body: 'Go to <strong>Timeline Block › Add New</strong>.',
            link: { url: `${adminUrl}/post-new.php?post_type=timeline_block`, label: 'Add New' }
          },
          {
            num: 2,
            title: 'Configure',
            body: 'Add your timeline items and configure style settings in the sidebar.'
          },
          {
            num: 3,
            title: 'Copy Shortcode',
            body: 'Publish and copy the shortcode <code>[timeline_block id=POST_ID]</code> from the list table.'
          },
          {
            num: 4,
            title: 'Paste Anywhere',
            body: 'Paste the shortcode into any page or post using the Shortcode block.'
          }
        ]
      },
      {
        key: 'elementor',
        label: 'Elementor',
        icon: elementorTabIcon,
        steps: [
          {
            num: 1,
            title: 'Copy Shortcode',
            body: 'Create and configure your timeline, then copy the shortcode <code>[timeline_block id=POST_ID]</code> from the list.'
          },
          {
            num: 2,
            title: 'Open Elementor',
            body: 'Open any page or post with the Elementor Editor.'
          },
          {
            num: 3,
            title: 'Add Shortcode Widget',
            body: 'Search for the <strong>Shortcode</strong> widget in the Elementor panel and drag it to your section.'
          },
          {
            num: 4,
            title: 'Paste and Save',
            body: 'Paste your timeline shortcode into the widget settings and save the page.'
          }
        ]
      }
    ]
  },

  changelogs: [
    {
      version: "1.5.4 - 26 July 2026",
      type: "update",
      list: [
        "<strong>Improvement:</strong> Improved design and layout of the timeline block."
      ]
    },
    {
      version: "1.5.3 - 09 July 2026",
      type: "update",
      list: [
        "<strong>Update:</strong> Added support for WordPress 7.0.",
        "<strong>Fix:</strong> Improved performance and stability.",
        "<strong>New:</strong> Added two Premium Themes and AI Generate Timeline Content (Pro)." 
      ]
    },
    {
      version: "1.5.1 - 18 May 2026",
      type: "fix",
      list: [
        "<strong>Fix:</strong> Fixed stored XSS security vulnerability in timeline content rendering.",
        "<strong>Update:</strong> Updated text domain to match plugin slug for proper translation support.",
        "<strong>Fix:</strong> Fixed JavaScript translation loading issues.",
        "<strong>New:</strong> Added missing internationalization support for CPT labels and admin strings.",
        "<strong>Improvement:</strong> Optimized frontend asset loading and improved performance.",
        "<strong>Improvement:</strong> Improved shortcode validation and uninstall cleanup process.",
        "<strong>Fix:</strong> Fixed readme content issues and minor code quality problems.",
        "<strong>Improvement:</strong> General security, compatibility, and stability improvements."
      ],
    },
    {
      version: "1.5.0 - 11 May 2026",
      type: "fix",
      list: [
        "<strong>Update:</strong> Naming issue - The plugin name was too generic or implied false affiliation. Updated the name to comply with guidelines.",
        "<strong>Update:</strong> Compliance: Removed all trialware/ feature - gating logic to ensure full functionality for all users.",
        "<strong>Fix:</strong> Fixed the unconditional loading of Freemius SDK to ensure telemetry is opt-in only.",
        "<strong>Improvement:</strong> Added explicit External Services and Source Code documentation in readme.txt.",
        "<strong>Fix:</strong> Requires at least value was using an invalid format (e.g., 6.5+). Corrected it.",
        "<strong>Fix:</strong> Editor block apiVersion was outdated (apiVersion 1). Updated to apiVersion 3.",
        "<strong>Fix:</strong> Allowed direct file access - Added `defined( 'ABSPATH' ) || exit;` to PHP files to prevent direct execution."
      ],
    },
    {
      version: "1.4.0 - 13 April 2026",
      type: "update",
      list: [
        "<strong>New:</strong> Added animation options.",
        "<strong>Improvement:</strong> Improved responsiveness and fixed layout issues.",
        "<strong>New:</strong> Added two new themes."
      ],
    },
    {
      version: "1.3.6 - 15 February 2026",
      type: "update",
      list: [
        "<strong>Update:</strong> Redesigned the dashboard with a modern and improved user interface, replacing the previous outdated layout."
      ],
    },
    {
      version: "1.3.6 - 15 February 2026",
      type: "fix",
      list: [
        "<strong>Fix:</strong> Removed unnecessary login restriction for shortcode display."
      ],
    },
    {
      version: "1.3.5 - 27 January 2026",
      type: "fix",
      list: [
        "<strong>Fix:</strong> Fixed horizontal timeline issue.",
        "<strong>Improvement:</strong> Optimized plugin files & increase code readability."
      ],
    },
    {
      version: "1.3.4 - 24 January 2026",
      type: "fix",
      list: [
        "<strong>Fix:</strong> Fixed vulnerability issue."
      ],
    },
    {
      version: "1.3.3 - 19 November 2025",
      type: "fix",
      list: [
        "<strong>Fix:</strong> Fixed issues."
      ],
    },
    {
      version: "1.3.2 - 13 November 2025",
      type: "update",
      list: [
        "<strong>Update:</strong> Updated freemius version and readme.txt."
      ],
    },
    {
      version: "1.3.1 - 5 November 2025",
      type: "update",
      list: [
        "<strong>Update:</strong> Updated freemius-lite sdk."
      ],
    },
    {
      version: "1.3.0 - 20 October 2025",
      type: "new",
      list: [
        "<strong>New:</strong> Add timeline block shortcode.",
        "<strong>Update:</strong> Modified the plugin."
      ],
    },
    {
      version: "1.2.4 - 6 October 2025",
      type: "new",
      list: [
        "<strong>New:</strong> Add New Template."
      ],
    },
    {
      version: "1.2.3 - 15 September 2025",
      type: "update",
      list: [
        "<strong>Update:</strong> Add Modern Dashboard & Fixed Issues."
      ],
    },
    {
      version: "1.2.2 - 23 July 2025",
      type: "fix",
      list: [
        "<strong>Fix:</strong> Fixed issues."
      ],
    },
    {
      version: "1.2.1 - 15 May 2025",
      type: "fix",
      list: [
        "<strong>Fix:</strong> Fixed text domain issue and SEO problem."
      ],
    },
  ],
  changelogsLimit: 5,
  changelogsReadMoreLabel: 'View More Changelogs',

  proFeatures: [
    "ShortCode to use Timeline Block anywhere.",
    "Eleven extra professional theme designs.",
    "Classic Editor for advanced formatting.",
    "Customizable and styled timeline icons.",
    "Advanced tools for ultimate design control.",
    "Animation effects for timeline items.", 
    "Access to AI Timeline Content Generator"
  ],
});

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
    },
    {
      icon: "",
      title: "Sticky Scroll Story",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-sticky-scroll-story/"
    },
    {
      icon: "",
      title: "Rotary Wheel",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-rotary-wheel/" 
    }
  ],
};

export const pricingInfo = {
  logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
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
    selected: 3,
  }
};

export const settingsInfo = {
  ajaxAction: 'tlgbSaveUninstallOption',
  cleanupItems: [
    'All timeline shortcode posts (timeline_block post type).',
    'Plugin settings and configurations.'
  ]
};
