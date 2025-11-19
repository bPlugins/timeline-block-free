const slug = "timeline-block-block";

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro, adminUrl } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Timeline Block${proSuffix}`,
    displayName: `Timeline Block${proSuffix} -  Create Horizontal or Vertical Timelines`,
    description:
      "Timeline Block Plugin helps you create beautiful, customizable timelines in WordPress with 6 unique themes and both horizontal and vertical layouts. Easily edit and style timelines in the editor—perfect for showcasing projects, stories, milestones, or events.",
    slug,
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
    // video: "https://www.youtube.com/watch?v=mUlMpuPMP5Q",
    // isYoutube: true,
    adminUrl,
    version,
    isPremium,
    hasPro,
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/timeline-block/`,
      // docs: `https://bplugins.com/products/b-timeline/`, // Add Documentation link here
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: "17342",
      plan_id: "28900",
      public_key: "pk_624005a9d0c56ff46db6602f5f730",
    },
  };
};

export const changelogs = [
  {
    version: "1.3.3 - 19 November 2025",
    list: ["Fixed issues"],
  },
  {
    version: "1.3.2 - 13 November 2025",
    list: ["updated freemius version and readme.txt"],
  },
  {
    version: "1.3.1, 5 November 2025",
    list: ["Updated freemius-lite sdk."],
  },
  {
    version: "1.3.0, 20 October 2025",
    list: ["Add timeline block shortcode.", "Modified the plugin."],
  },
  {
    version: "1.2.4, 6 October 2025",
    list: ["Add New Template"],
  },
  {
    version: "1.2.3, 15 September 2025",
    list: ["Add Modern Dashboard & Fixed Issues"],
  },
  {
    version: "1.2.2, 23 July 2025",
    list: ["Fixed issues"],
  },
  {
    version: "1.2.1, 15 May 2025",
    list: ["Fixed text domain issue and SEO problem"],
  },
  {
    version: "1.2.0, 6 May 2025",
    list: ["Fixed text domain issue and SEO problem"],
  },
  {
    version: "1.1.5, 16 March 2025",
    list: ["Fixed issues"],
  },
  {
    version: "1.1.4, 9 March 2025",
    list: ["Fixed issues", "Updated Readme"],
  },
  {
    version: "1.1.3, 8 Feb 2025",
    list: ["Fixed issues"],
  },
  {
    version: "1.1.2",
    list: ["Fixed issues"],
  },
  {
    version: "1.1.1, 27 Jan 2025",
    list: ["Updated SDK version"],
  },
  {
    version: "1.1.0, 16 Jan 2025",
    list: ["Uploaded v1.1.0 – premium version with incredible features"],
  },
  {
    version: "1.0.7, 14 Feb 2024",
    list: ["Fixed issue"],
  },
  {
    version: "1.0.6",
    list: ["Fixed issue"],
  },
  {
    version: "1.0.5",
    list: ["Added text area to write HTML"],
  },
  {
    version: "1.0.4",
    list: ["Fixed Start Index and Visible Items"],
  },
  {
    version: "1.0.3",
    list: ["Fixed mobile not showing"],
  },
  {
    version: "1.0.2",
    list: [
      "Removed jQuery dependency",
      "Added ability to remove, duplicate and add a timeline from the toolbar",
      "Added translation support",
    ],
  },
  {
    version: "1.0.0",
    list: ["Initial Release"],
  },
];

export const demoInfo = {
  title: "Live Overview",
  description: "Click on any section to view it live",
  layout: "list",
  allInOneLabel: "See All Demos",
  allInOneLink: "https://bblockswp.com/demo/timeline-block-all-demos/",
  demos: [
    {
      icon: "",
      title: "Default Timeline",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/3111/",
    },
    {
      icon: "",
      title: "Default Customized Timeline",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/customize-timeline-default-theme/",
    },
    {
      icon: "",
      title: "Template 1(Accordion Timeline)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/accordion-timeline-with-classic-editor-pro/",
    },
    {
      icon: "",
      title: "Template 2(Vertical & Horizontal Options)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-with-icon-and-date-pro/",
    },
    {
      icon: "",
      title: "Template 3",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/theme-3-pro/",
    },
    {
      icon: "",
      title: "Template 4",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/theme-4-pro/",
    },
    {
      icon: "",
      title: "Template 5",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-5-pro/",
    },
    {
      icon: "",
      title: "Template 6",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-6-pro/",
    },
    {
      icon: "",
      title: "Template 7",
      description: "",
      category: "",
      type: "iframe",
      url: "https://bblockswp.com/demo/timeline-block-theme-7-pro/",
    },
  ],
};

export const filterDemoInfo = {
  categories: [
    { label: "All", value: "all", col: 3, height: "300px" },
    { label: "Hero", value: "hero", col: 3 },
    { label: "Ticker", value: "ticker", col: 3 },
    { label: "FAQ", value: "faq", col: 1, height: "400px" },
    {
      label: "Call To Actions",
      value: "call-to-actions",
      col: 2,
      height: "350px",
    },
    { label: "Testimonial", value: "testimonial", col: 3 },
    { label: "Info List", value: "info-list", col: 2, height: "350px" },
    { label: "About", value: "about", col: 3, height: "300px" },
    { label: "Timeline", value: "timeline", col: 3 },
    { label: "Team", value: "team", col: 1 },
  ],
  demos: [
    {
      title: "Testimonial Hero",
      categories: ["hero", "testimonial"],
      url: "https://images.pexels.com/photos/32837692/pexels-photo-32837692.jpeg",
    },
    {
      title: "luxurious fanion furniture store website",
      categories: ["about", "faq"],
      url: "https://www.shutterstock.com/image-vector/luxuriou…tion-furniture-store-website-260nw-2558738679.jpg",
    },
    {
      title: "Home Page Hero",
      categories: ["ticker", "faq"],
      url: "https://www.shutterstock.com/image-vector/pet-adopt-website-homepage-hero-260nw-2572368469.jpg",
    },
    {
      title: "Pet healthcare grooming food shop",
      categories: ["ticker", "faq"],
      url: "https://www.shutterstock.com/image-vector/pet-healthcare-grooming-food-shop-260nw-2572367501.jpg",
    },
    {
      title: "Store",
      categories: ["timeline", "call-to-actions"],
      url: "https://www.shutterstock.com/image-vector/pet-healthcare-grooming-food-shop-260nw-2572367493.jpg",
    },
    {
      title: "Modern Furniture landing page design",
      categories: ["about", "faq"],
      url: "https://www.shutterstock.com/image-vector/modern-furniture-landing-page-design-260nw-2558737307.jpg",
    },
    {
      title: "Web Design Elements",
      categories: ["ticker"],
      url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
    },
    {
      title: "Modern Original Style Search Banners",
      categories: ["ticker"],
      url: "https://img.freepik.com/premium-vector/set-modern-original-style-search-banners_105895-325.jpg",
    },
    {
      title: "Objects Collection",
      categories: ["ticker"],
      url: "https://img.freepik.com/free-vector/web-objects-collection_23-2147543149.jpg",
    },
    {
      title: "Web Ad",
      categories: ["ticker"],
      url: "https://img.freepik.com/free-vector/create-your-ad-web_23-2147510092.jpg",
    },
    {
      title: "Templates Applications",
      categories: ["ticker"],
      url: "https://img.freepik.com/premium-vector/set-navbar-templates-applications_1062041-141.jpg",
    },
    {
      title: "Design Elements Flat Style",
      categories: ["team", "testimonial"],
      url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
    },
    {
      title: "Design Elements Flat Style",
      categories: ["team", "info-list"],
      url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
    },
  ],
};

export const pricingInfo = {
  cycles: [
    {
      cycle: "lifetime",
      label: "Lifetime",
      isDefault: false,
    },
  ],
  plans: [
    {
      name: "Single Site",
      quantity: 1,
      prices: {
        // monthly: "4.99",
        // annual: "47.88",
        lifetime: "29.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
    {
      name: "3 Sites",
      quantity: 3,
      prices: {
        // monthly: "8.99",
        // annual: "83.88",
        lifetime: "79.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: true,
      note: "",
    },
    {
      name: "Unlimited Sites",
      quantity: "null",
      prices: {
        // monthly: "33.99",
        // annual: "299",
        lifetime: "199.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
  ],
  features: [
    "ShortCode supported",
    "A lagacy version of B Timeline plugin.",
    "Add Classic Editor for Timeline Description",
    "7 Brand New Unique Timeline Templates",
    "Responsive Design",
    "Customization Options for All Templates",
  ],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    text: "Popular",
  },
};

export const featureCompareInfo = {
  title: "Features",
  plans: [
    {
      id: "ztbk4ex2fyi",
      name: "Free Plan",
      color: "#485781",
    },
    {
      id: "lhmjqhkeyi",
      name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>29.99/Lifetime</span>`,
      color: "#146EF5",
    },
  ],
  features: [
    {
      label: "Embed Code",
      plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
    },
    {
      label: "Edit Font Size",
      plans: ["ztbk4ex2fyi", "lhmjqhkeyi"],
    },
    {
      label: "Display Code Snippets to Frontend",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Set Editor Height and Width",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Edit Tab Size",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Change Editor Theme",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Different Language For Syntax",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Display Heading",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Display Copy Button",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Line numbers",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Highlight Active Line",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Fold Gutter(Collapse Code)",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Enable Autocompletion",
      plans: ["lhmjqhkeyi"],
    },
    {
      label: "Wrap Your Code",
      plans: ["lhmjqhkeyi"],
    },
  ],
};
