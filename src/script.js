import './style.scss';

// Timeline
document.addEventListener('DOMContentLoaded', () => {
	const allTimeline = document.querySelectorAll('.wp-block-tlgb-b-timeline-block');
	allTimeline.forEach(timelineEl => {
		const attributes = JSON.parse(timelineEl.dataset.attributes);

		if (!attributes) return false;

		const { type, labelLocation, startIndex, moveItem, vigibleItems, verticalTrigger, rtlMode } = attributes;

		timeline(document.querySelectorAll(`#${timelineEl.id} .timeline`), {
			mode: type || 'vertical',
			verticalStartPosition: labelLocation,
			horizontalStartPosition: labelLocation,
			forceVerticalMode: 600,
			verticalTrigger,
			moveItems: moveItem,
			startIndex: startIndex - 1,
			visibleItems: vigibleItems,
			rtlMode
		});

		// Remove hidden-animated class for https://wordpress.org/support/topic/timeline-not-loading-on-mobile/
		const allTimelineItem = document.querySelectorAll(`#${timelineEl.id} .timeline__items .timeline__item`);
		setTimeout(() => {
			allTimelineItem.forEach(item => {
				item.classList.remove('hidden-animated');
			});
		}, 500);

		timelineEl?.removeAttribute('data-attributes');
	});
});