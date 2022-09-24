import './style.scss';

// Timeline
document.addEventListener('DOMContentLoaded', () => {
	const allTimeline = document.querySelectorAll('.wp-block-tlgb-b-timeline-block');
	allTimeline.forEach(timelineEl => {
		const attributes = JSON.parse(timelineEl.dataset.attributes);

		if (!attributes) return false;

		const { type, labelLocation, startIndex, moveItem, visibleItems, verticalTrigger, rtlMode } = attributes;

		timeline(document.querySelectorAll(`#${timelineEl.id} .timeline`), {
			mode: type || 'vertical',
			verticalStartPosition: labelLocation,
			horizontalStartPosition: labelLocation,
			forceVerticalMode: 600,
			verticalTrigger,
			moveItems: moveItem,
			startIndex,
			visibleItems,
			rtlMode
		});

		timelineEl?.removeAttribute('data-attributes');
	});
});