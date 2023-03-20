import { __ } from '@wordpress/i18n';

const options = {
	types: [
		{ label: __('Vertical', 'timeline-block'), value: 'vertical' },
		{ label: __('Horizontal', 'timeline-block'), value: 'horizontal' }
	],
	topBottom: [
		{ label: __('Top', 'timeline-block'), value: 'top' },
		{ label: __('Bottom', 'timeline-block'), value: 'bottom' }
	],
	leftRight: [
		{ label: __('Left', 'timeline-block'), value: 'left' },
		{ label: __('Right', 'timeline-block'), value: 'right' }
	],
	fontStyles: [
		{ label: __('Normal', 'timeline-block'), value: 'normal' },
		{ label: __('Italic', 'timeline-block'), value: 'italic' }
	],
	fontWeights: [
		{ label: __('Normal', 'timeline-block'), value: 'normal' },
		{ label: __('Bold', 'timeline-block'), value: 'bold' }
	],

	generalStyleTabs: [
		{ name: 'general', title: __('General', 'timeline-block') },
		{ name: 'style', title: __('Style', 'timeline-block') },
	],
};
export default options;
