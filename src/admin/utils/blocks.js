import { timelineIcon } from '../../utils/icons';

// The Pro block folders (`src/blocks/*`) are not part of the free build, so the
// upsell cards below take their icons from a local copy instead.
import {
	mediaStoryIcon,
	yearNavIcon,
	roadmapIcon,
	careerIcon,
	eventScheduleIcon,
	dynamicPostIcon,
	accordionIcon,
	companyHistoryIcon,
	storySlideIcon,
	historySlideIcon,
	showcaseIcon,
	storyTimelineIcon
} from './proBlockIcons';

const docsURL = 'https://bplugins.com/docs/timeline-block-block/';

// The `name` value must match how blocks are keyed in the disabled-blocks
// option: the free block uses "b-timeline-block"; each pro block uses its
// build/blocks folder name. The Timeline Builder picker is deliberately absent
// — it is plumbing for the CPT, not a block anyone toggles.
// TODO: add `demo:` links once the demo pages are live on bblockswp.com.
export default [
	{
		name: 'b-timeline-block',
		title: 'Timeline Block',
		icon: timelineIcon,
		demo: 'https://bblockswp.com/demo/timeline-block-all-demos/',
		docs: docsURL,
		required: true,
		status: 'published'
	},
	{
		name: 'media-story-timeline',
		title: 'Media Story Timeline',
		icon: mediaStoryIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-media-story-timeline/',
		status: 'published'
	},
	{
		name: 'year-navigator',
		title: 'Year Navigator',
		icon: yearNavIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-year-navigator/',
		status: 'published'
	},
	{
		name: 'roadmap-timeline',
		title: 'Product Roadmap',
		icon: roadmapIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-product-roadmap/',
		status: 'published'
	},
	{
		name: 'career-timeline',
		title: 'Career Timeline',
		icon: careerIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-career-timeline/',
		status: 'published'
	},
	{
		name: 'event-schedule',
		title: 'Event Schedule',
		icon: eventScheduleIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-event-schedule/',
		status: 'published'
	},
	{
		name: 'dynamic-post-timeline',
		title: 'Dynamic Post Timeline',
		icon: dynamicPostIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-dynamic-post-timeline/',
		status: 'published'
	},
	{
		name: 'accordion-timeline',
		title: 'Accordion Timeline',
		icon: accordionIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-accordion-timeline/',
		status: 'published'
	},
	{
		name: 'company-history-timeline',
		title: 'Company History Timeline',
		icon: companyHistoryIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-company-history-timeline/',
		status: 'published'
	},
	{
		name: 'story-slide',
		title: 'Story Slide',
		icon: storySlideIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-story-slide/',
		status: 'published'
	},
	{
		name: 'history-slide',
		title: 'History Slide',
		icon: historySlideIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-history-slide/',
		status: 'published'
	},
	{
		name: 'showcase-timeline',
		title: 'Showcase Timeline',
		icon: showcaseIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-showcase-timeline/',
		status: 'published'
	},
	{
		name: 'interactive-story-timeline',
		title: 'Interactive Story Timeline',
		icon: storyTimelineIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/interactive-story-timeline-block/',
		status: 'published'
	},
	{
		name: 'readymade-timeline',
		title: 'Readymade 35+ Templete',
		icon: showcaseIcon,
		isPremium: true,
		badge: 'New',
		demo: 'https://bblockswp.com/demo/timeline-block-ready-timeline-templete/',
		status: 'published'
	}
];
