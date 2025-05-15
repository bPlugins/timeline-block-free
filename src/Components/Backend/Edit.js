import { produce } from 'immer';
import { useEffect, useState } from 'react';

import { usePremiumInEditor } from '../../../../bpl-tools/hooks';
import { timelineConfig } from '../../utils/config';
import Settings from '../Backend/Settings/Settings';
import Styles from '../Common/Styles';
import Theme2 from './Themes/Theme2';
import Theme3 from './Themes/Theme3';
import Theme4 from './Themes/Theme4';
import Theme5 from './Themes/Theme5';
import Theme6 from './Themes/Theme6';
import ThemeStyles from '../Common/ThemeStyles';
import { updateData } from '../../../../bpl-tools/utils/functions';

const Edit = props => {
	const { className, attributes, setAttributes, clientId } = props;
	const { timelines, type, labelLocation, startIndex, vigibleItems, moveItem, verticalTrigger, rtlMode, theme } = attributes;

	const [activeIndex, setActiveIndex] = useState(0);

	const id = `tlgbTimeline-${clientId}`;

	const { isPremium } = usePremiumInEditor('tlgbUtils', 'tlgbPipeChecker');


	const [visibleDescriptions, setVisibleDescriptions] = useState({});


	useEffect(() => {
		const timelineEl = document.querySelector(`#${id} .timeline`);
		const timelineItems = document.querySelectorAll(`#${id} .timeline__items .timeline__item`);

		if (timelineEl) {
			timeline([timelineEl], timelineConfig(attributes));
		}

		if (theme === "timeline-with-accordion") {
			if (timelineItems.length > 0) {
				timelineItems.forEach(item => {
					item.classList.remove("timeline__item--left");
					item.classList.add("timeline__item--right");
				});
			}
		}
	}, [type, labelLocation, verticalTrigger, moveItem, startIndex, vigibleItems, rtlMode, theme, timelines.length]);

	// Change Timeline Data
	const updateTimeline = (index, type, val) => {
		const newTimelines = produce(timelines, draft => {
			draft[index][type] = val;
		});
		setAttributes({ timelines: newTimelines });

		if (activeIndex !== index) {
			setActiveIndex(index);
		}
	}

	const updateObj = (property, val, ...props) => {
		setAttributes({ [property]: updateData(attributes[property], val, ...props) });
	}

	// Remove hidden-animated class for https://wordpress.org/support/topic/timeline-not-loading-on-mobile/
	useEffect(() => {
		const allTimelineItem = document.querySelectorAll(`#${id} .timeline__items .timeline__item`);

		setTimeout(() => {
			allTimelineItem?.forEach(item => {
				item.classList.remove('animated');
				item.classList.remove('hidden-animated');
			});
		}, 500);
	}, [timelines?.length]);


	// Toggle description visibility
	const toggleDescription = (index) => {
		const descriptionElement = document.querySelector(`#tlgbTimelineItem-${index} .timeline__description`);

		if (descriptionElement) {
			const isVisible = visibleDescriptions[index];
			const height = isVisible ? 0 : descriptionElement.scrollHeight; // Collapse or expand

			// Apply the height dynamically for smooth transitions
			descriptionElement.style.maxHeight = `${height}px`;

			setVisibleDescriptions(prevState => ({
				...prevState,
				[index]: !isVisible, // Toggle visibility state
			}));
		}
	};

	useEffect(() => {
		Object.keys(visibleDescriptions).forEach(index => {
			const descriptionElement = document.querySelector(`#tlgbTimelineItem-${index} .timeline__description`);

			if (descriptionElement) {
				if (visibleDescriptions[index]) {
					descriptionElement.style.maxHeight = `${descriptionElement.scrollHeight}px`; // Expand smoothly
				} else {
					descriptionElement.style.maxHeight = '0'; // Collapse smoothly
				}
			}
		});
	}, [visibleDescriptions, timelines]);



	const labelEl = (timeline) => {
		return <label className='timeline-label' dangerouslySetInnerHTML={{ __html: timeline.label }}></label>;
	};


	const descriptionEl = (timeline) => {
		return <p className='timeline-description' dangerouslySetInnerHTML={{ __html: timeline.description }}></p>;
	};


	return <>
		<Settings {...{ isPremium, attributes, setActiveIndex, activeIndex, setAttributes, updateTimeline, updateObj }} />

		<div className={className} id={id} >
			{
				(theme === "default" || theme === "timeline-with-accordion") ? <Styles attributes={attributes} id={id} /> : <ThemeStyles attributes={attributes} id={id} />
			}

			{
				(theme === 'default' || theme === "timeline-with-accordion") && <>
					<div className={`timeline tlgbTimeline ${theme === "timeline-with-accordion" && "accordion"}`}>
						<div className='timeline__wrap'>
							<div className='timeline__items'>
								{timelines?.map((item, index) => {
									const { label, description } = item;
									const isVisible = visibleDescriptions[index];

									return <div key={index} onClick={() => setActiveIndex(index)} className='timeline__item fadeIn' id={`tlgbTimelineItem-${index}`}>
										<div className={`timeline__content ${index === activeIndex ? 'tlgbNowEditing' : ''}`}>

											<label
												dangerouslySetInnerHTML={{ __html: label }} onClick={() => {
													theme === "timeline-with-accordion" && toggleDescription(index)
												}}></label>

											<p className={`timeline__description ${theme === "timeline-with-accordion" ? (isVisible ? 'visible' : 'hidden') : "visible"}`} dangerouslySetInnerHTML={{ __html: description }}>
											</p>
										</div>
									</div> // Timeline Item
								})}
							</div> {/* Timeline Items */}
						</div> {/* Timeline Wrap */}
					</div> {/* Timeline */}
				</>
			}

			{
				theme === "theme-2" && <Theme2
					attributes={attributes}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					updateTimeline={updateTimeline}
					clientId={clientId}
				/>
			}
			{
				theme === "theme-3" && <Theme3
					attributes={attributes}
					setActiveIndex={setActiveIndex}
					labelEl={labelEl}
					descriptionEl={descriptionEl}
				/>
			}

			{
				theme === "theme-4" && <Theme4
					attributes={attributes}
					setActiveIndex={setActiveIndex}
					labelEl={labelEl}
					descriptionEl={descriptionEl}
				/>
			}


			{
				theme === "theme-5" && <Theme5
					attributes={attributes}
					setActiveIndex={setActiveIndex}
					labelEl={labelEl}
					descriptionEl={descriptionEl}
				/>
			}


			{
				theme === "theme-6" && <Theme6
					attributes={attributes}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
					labelEl={labelEl}
					descriptionEl={descriptionEl}
				/>
			}

		</div>
	</>
};
export default Edit;