import './style.scss';
import { timelineConfig } from './utils/config';

// Timeline
document.addEventListener('DOMContentLoaded', () => {
	const timelineEls = document.querySelectorAll('.wp-block-tlgb-b-timeline-block');
	timelineEls.forEach(timelineEl => {
		const attributes = JSON.parse(timelineEl.dataset.attributes);

		if (!attributes) return false;

		timeline(document.querySelectorAll(`#${timelineEl.id} .timeline`), timelineConfig(attributes));

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