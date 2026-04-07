import { __ } from "@wordpress/i18n";
import { FileText, LifeCirle, ThumbUp } from "./icons";

export const options = {
  types: [
    { label: __("Vertical", "timeline-block"), value: "vertical" },
    { label: __("Horizontal", "timeline-block"), value: "horizontal" },
  ],
  topBottom: [
    { label: __("Top", "timeline-block"), value: "top" },
    { label: __("Bottom", "timeline-block"), value: "bottom" },
  ],
  leftRight: [
    { label: __("Left", "timeline-block"), value: "left" },
    { label: __("Right", "timeline-block"), value: "right" },
  ],
};

export const generalStyleTabs = [
  { name: "general", title: __("General", "textdomain") },
  { name: "style", title: __("Style", "textdomain") },
];

export const themeOptions = [
  { label: "Default", value: "default" },
  { label: "Timeline with Accordion", value: "timeline-with-accordion" },
  { label: "Timeline with Icon and Date", value: "theme-2" },
  { label: "Theme 3", value: "theme-3" },
  { label: "Theme 4", value: "theme-4" },
  { label: "Theme 5", value: "theme-5" },
  { label: "Theme 6", value: "theme-6" },
  { label: "Theme 5", value: "theme-5" },
  { label: "Theme 7", value: "theme-7" },
  { label: "Theme 8", value: "theme-8" },
  { label: "Theme 9", value: "theme-9" },
];
export const itemPositionOptions = [
  { label: "Both Side", value: "both-side" },
  { label: "Right Side", value: "right" },
  { label: "Left Side", value: "left" },
];

export const proFeatures = [
  {
    name: "Added 6 Beautiful Themes",
    description:
      "Extend your plugin with these 6 themes. By using this timeline you can create a lot of themes.",
  },
  {
    name: "Horizontal / Vertical Option in every themes",
    description:
      "Customize your timeline like horizontal or vertical in some theme as a option. It's easy and beautiful to customize.",
  },
  {
    name: "Added Classic Editor",
    description:
      "As Timeline content you can use classic editor. You can add image and edit your content on your own.",
  },
  {
    name: "Add Icon to your every story.",
    description: "Add and edit your story icon on your own.",
  },
  {
    name: "Change Icon and Story Date Position",
    description:
      "You can change icon position when you're on horizontal timeline.",
  },
  {
    name: "Added Powerful Shortcode Plugin",
    description:
      "By this plugin you can use a powerful shortcode timeline plugin with some incredible features. which enabled you to embed the Timeline anywhere in the site.",
  },
];

export const helpfulLinks = [
  {
    title: "Need any Assistance?",
    description:
      "Our Expert Support Team is always ready to help you out promptly.",
    icon: <LifeCirle></LifeCirle>,
    link: "https://bplugins.com/support",
    linkText: "Contact Support",
  },
  {
    title: "Looking for Documentation?",
    description:
      "We have detailed documentation on every aspects of the plugin.",
    icon: <FileText></FileText>,
    link: "https://ctb.bplugins.com/docs",
    linkText: "Documentation",
  },
  {
    title: "Liked This Plugin?",
    description:
      "Glad to know that, you can support us by leaving a 5 &#11088; rating.",
    icon: <ThumbUp></ThumbUp>,
    link: "https://wordpress.org/support/plugin/icon-list-block/reviews/",
    linkText: "Rate the Plugin",
  },
];
