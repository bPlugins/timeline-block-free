const slug = "timeline-block-block";
import { heroImage } from "./heroImage";

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro, licenseActiveNonce, deleteDataOnUninstall, uninstallNonce, adminUrl = '', nonce, action } = info;

  const proSuffix = isPremium ? ' Pro' : '';

  return {
    name: `Timeline Block${proSuffix}`,
    displayName: `Timeline Block${proSuffix} -  Create Horizontal or Vertical Timelines`,
    description: "Timeline Block Plugin helps you create beautiful, customizable timelines in WordPress with 6 unique themes and both horizontal and vertical layouts. Easily edit and style timelines in the editor—perfect for showcasing projects, stories, milestones, or events.",
    slug,
    version,
    isPremium,
    hasPro,
    deleteDataOnUninstall,
    uninstallNonce,
    adminUrl,
    nonce,
    action,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      thumbnail: heroImage,
      // proThumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}-pro.png`,
      // video: 'https://www.youtube.com/watch?v=milYZrqLJsE',
      // isYoutube: true  
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/timeline-block/`,
     // docs: `https://bplugins.com/docs/${slug}/`,
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
      url: `${adminUrl}post-new.php?post_type=timeline_block`
    }
  }
}

const gutenbergTabIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 12c0-4.14-3.36-7.5-7.5-7.5S4.5 7.86 4.5 12s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const shortcodeTabIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4H5v16h3M16 4h3v16h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const elementorTabIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 7h10M7 12h10M7 17h10M7 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const welcomeInfo = () => ({
  keywords: ['Horizontal', 'Vertical', 'Milestones', 'Roadmap', 'History'],
  keywordsLabel: 'Layouts',

  gettingStarted: {
    tabs: [
      {
        key: 'gutenberg',
        label: 'Gutenberg',
        icon: gutenbergTabIcon,
        steps: [
          {
            num: 1,
            title: 'Add the Timeline Block',
            body: 'Open the block editor. Click <strong>+</strong> or type <strong>/timeline-block</strong>.',
            link: { url: `/wp-admin/post-new.php?post_type=timeline_block`, label: 'Create Timeline' }
          },
          {
            num: 2,
            title: 'Choose Theme & Layout',
            body: 'Select between <strong>Horizontal</strong> or <strong>Vertical</strong> layout, and choose one of the beautiful styles.'
          },
          {
            num: 3,
            title: 'Add Content',
            body: 'Add milestone titles, description texts, and dates to build your story.'
          },
          {
            num: 4,
            title: 'Publish & Display',
            body: 'Hit <strong>Publish</strong> to save your timeline, then insert the block or shortcode wherever you want!'
          }
        ]
      },
      {
        key: 'shortcode',
        label: 'Shortcode',
        icon: shortcodeTabIcon,
        steps: [
          {
            num: 1,
            title: 'Create Timeline',
            body: 'Go to <strong>Timeline Block</strong> &rsaquo; <strong>Add New</strong> to build and style your timeline.',
          },
          {
            num: 2,
            title: 'Copy Shortcode',
            body: 'From the <strong>Timeline Block</strong> list, find your timeline and copy its shortcode (e.g. <code>[timeline_block id="123"]</code>).',
            link: { url: `/wp-admin/post-new.php?post_type=timeline_block`, label: 'View All Timelines' }
          },
          {
            num: 3,
            title: 'Paste Anywhere',
            body: 'Paste the copied shortcode into any page, post, or widget area using the Shortcode block.'
          },
          {
            num: 4,
            title: 'Publish & View',
            body: 'Hit <strong>Publish</strong> or <strong>Save</strong> to view your timeline live on the site.'
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
            title: 'Create Timeline',
            body: 'Go to <strong>Timeline Block</strong> &rsaquo; <strong>Add New</strong> to build and style your timeline.',
          },
          {
            num: 2,
            title: 'Copy Shortcode',
            body: 'From the <strong>Timeline Block</strong> list, find your timeline and copy its shortcode (e.g. <code>[timeline_block id="123"]</code>).',
            link: { url: `/wp-admin/post-new.php?post_type=timeline_block`, label: 'View All Timelines' }
          },
          {
            num: 3,
            title: 'Add to Page',
            body: 'Open any page/post in Elementor. Drag and drop the <strong>Shortcode</strong> or <strong>Text Editor</strong> widget into your canvas.'
          },
          {
            num: 4,
            title: 'Paste & Publish',
            body: 'Paste the copied shortcode into the widget settings and click <strong>Publish/Update</strong> to save.'
          }
        ]
      }
    ]
  },

  changelogs: [
     {
      version: "1.5.6 - 01 October 2026",
      type: "update",
      list: [
        "<strong>New:</strong> Added 35+ pre-built ready templates in the Template Library for quick 1-click import.",
        "<strong>New:</strong> Added new Pro blocks including Dynamic Post Timeline, Accordion Timeline, Company History Timeline, Career Timeline, Media Story Timeline, Event Schedule, Roadmap Timeline, and Year Navigator.",
        "<strong>Fix:</strong> Fixed WordPress.Security.NonceVerification.Missing PHPCS warnings in template library REST endpoints.",
        "<strong>Security:</strong> Improved template endpoints data sanitization and nonce verification security.",
        "<strong>Improvement:</strong> General performance, security, and code quality enhancements."
      ]
    },
    {
      version: "1.5.5 - 30 August 2026",
      type: "update",
      list: [
        "<strong>New:</strong> Added Load More feature — set initial display count, per - click reveal count, and custom button styling.",
        "<strong>New:</strong> Added Dynamic Post Timeline block — create timelines dynamically from any custom post type, filtered by taxonomy, terms, and author(Pro).",
        "<strong>New:</strong> Added Accordion Timeline block — collapsible groups of steps with custom status markers and interactive toggle(Pro).",
        "<strong>New:</strong> Added Company History Timeline block — interactive year card with clickable year rail and auto- slide navigation(Pro).",
        "<strong>New:</strong> Added new feature blocks including Career Timeline, Media Story Timeline, Event Schedule, Roadmap Timeline, and Year Navigator.",
        "<strong>Improvement:</strong> Improved editor preview for Horizontal and Vertical layouts with real - time live preview synchronization.",
        "<strong>Improvement:</strong> Improved Accordion Timeline expand/ collapse functionality in both editor and frontend.",
        "<strong>Update:</strong> Updated settings UI labels for Dot controls and styling options."
      ]
    },
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
        "<strong>Fix:</strong> Naming issue - The plugin name was too generic or implied false affiliation. Updated the name to comply with guidelines.",
        "<strong>Fix:</strong> Compliance: Removed all trialware/ feature-gating logic to ensure full functionality for all users.",
        "<strong>Fix:</strong> Fixed the unconditional loading of Freemius SDK to ensure telemetry is opt-in only.",
        "<strong>Improvement:</strong> Added explicit External Services and Source Code documentation in readme.txt.",
        "<strong>Fix:</strong> Requires at least value was using an invalid format (e.g., 6.5+). Corrected it.",
        "<strong>Fix:</strong> Editor block apiVersion was outdated (apiVersion 1). Updated to apiVersion 3.",
        "<strong>Fix:</strong> Allowed direct file access - Added <code>defined( 'ABSPATH' ) || exit;</code> to PHP files to prevent direct execution."
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
        "<strong>Improvement:</strong> Optimized plugin files & increased code readability."
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
        "<strong>New:</strong> Add Modern Dashboard & Fixed Issues."
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
    }
  ],
changelogsLimit: 5,
  changelogsReadMoreLabel: 'View More Changelogs',

     proFeatures: [
      "ShortCode to use Timeline Block anywhere.",
      "Eleven extra professional theme designs.",
      "35+ Readymade Templates",
      "Classic Editor for advanced formatting.",
      "Customizable and styled timeline icons.",
      "Advanced tools for ultimate design control.",
      "Animation effects for timeline items.",
      "Access to AI Timeline Content Generator.",
      "Media Story Timeline block with image, video & lightbox.",
      "Year Navigator block for company history pages.",
      "Product Roadmap block with statuses, progress & filters.",
      "Career Timeline block for resume & experience pages.",
      "Event Schedule block with horizontal time slots.",
      "Story Slide block for photo-led stories with a thumbnail timeline.",
      "History Slide block with year tabs, key figures and a progress bar."
    ]
})

export const demoInfo = {
  allInOneLabel: 'See All Demos',
  allInOneLink: "https://bblockswp.com/demo/timeline-block-all-demos/",
  demos: [
    {
      icon: "",
      title: "Default Timeline",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline/",
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
    },
    {
      icon: "",
      title: "Media Story Timeline Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-media-story-timeline/"
    },
    {
      icon: "",
      title: "Accordion Timeline Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-accordion-timeline/"
    },
    {
      icon: "",
      title: "Year Navigator Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-year-navigator/"
    },
    {
      icon: "",
      title: "Product Roadmap Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-product-roadmap/"
    },
    {
      icon: "",
      title: "Career Timeline Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-career-timeline/"
    },
    {
      icon: "",
      title: "Event Schedule Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-event-schedule/"
    },
    {
      icon: "",
      title: "Dynamic Post Timeline Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-dynamic-post-timeline/"
    },
    {
      icon: "",
      title: "Company History Timeline Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-company-history-timeline/"
    } ,
    {
      icon: "",
      title: "Story Slide",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-story-slide/"
    },
    {
      icon: "",
      title: "History Slide",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-history-slide/"
    },
    {
      icon: "",
      title: "Showcase Timeline Block",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-showcase-timeline/"
    },
    {
      icon: "",
      title: "Readymade 35+ Templete",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-ready-timeline-templete/"
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
