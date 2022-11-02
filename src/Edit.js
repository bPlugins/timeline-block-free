import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';

import Settings from './Settings';
import Style from './Style';

const Edit = props => {
    const { className, attributes, setAttributes, clientId } = props;
    const { timelines, type, labelLocation, startIndex, vigibleItems, moveItem, verticalTrigger, rtlMode } = attributes;

    useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        timeline(document.querySelectorAll(`#tlgbTimeline-${clientId} .timeline`), {
            forceVerticalMode: 800,
            mode: type,
            horizontalStartPosition: labelLocation,
            verticalStartPosition: labelLocation,
            verticalTrigger,
            moveItems: moveItem,
            startIndex: startIndex - 1,
            visibleItems: vigibleItems,
            rtlMode
        });
    }, [type, labelLocation, verticalTrigger, moveItem, startIndex, vigibleItems, rtlMode]);

    // Change Timeline Data
    const updateTimeline = (index, type, val) => {
        const newTimeline = [...timelines];
        newTimeline[index][type] = val;

        setAttributes({ timelines: newTimeline });
        setActiveIndex(index);
    };

    // Remove hidden-animated class for https://wordpress.org/support/topic/timeline-not-loading-on-mobile/
    useEffect(() => {
        const allTimelineItem = document.querySelectorAll(`#tlgbTimeline-${clientId} .timeline__items .timeline__item`);
        setTimeout(() => {
            allTimelineItem.forEach(item => {
                item.classList.remove('animated');
                item.classList.remove('hidden-animated');
            });
        }, 500);
    }, [timelines?.length]);

    return <>
        <Settings attributes={attributes} setAttributes={setAttributes} activeIndex={activeIndex} setActiveIndex={setActiveIndex} updateTimeline={updateTimeline} />

        <div className={className} id={`tlgbTimeline-${clientId}`}>
            <Style attributes={attributes} clientId={clientId} />

            <div className='timeline tlgbTimeline'>
                <div className='timeline__wrap'>
                    <div className='timeline__items'>
                        {timelines?.map((item, index) => {
                            const { label, description } = item;

                            return <div key={index} onClick={() => setActiveIndex(index)} className='timeline__item fadeIn' id={`tlgbTimelineItem-${index}`}>
                                <div className={`timeline__content ${index === activeIndex ? 'tlgbNowEditing' : ''}`}>
                                    <RichText tagName='label' value={label} onChange={val => updateTimeline(index, 'label', val)} placeholder={__('Timeline label', 'timeline-block')} inlineToolbar />

                                    <RichText tagName='p' value={description} onChange={val => updateTimeline(index, 'description', val)} placeholder={__('Timeline description', 'timeline-block')} inlineToolbar />
                                </div>
                            </div> // Timeline Item
                        })}
                    </div> {/* Timeline Items */}
                </div> {/* Timeline Wrap */}
            </div> {/* Timeline */}
        </div> {/* Timeline Block */}
    </>
};
export default Edit;