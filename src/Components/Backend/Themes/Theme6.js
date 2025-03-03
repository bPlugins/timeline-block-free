import React from 'react';
import { ArrowBack, ArrowForward } from '../../../utils/icons';
import './Theme6.scss';


const Theme6 = ({ attributes, activeIndex, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines, vigibleItems } = attributes;
  const translateValue = -(activeIndex * (100 / vigibleItems));

  const handleNext = () => {
    if (activeIndex < timelines.length - 2) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="theme6-timeline">
      <div className="timeline-container">
        <button className="carousel-button prev" onClick={handlePrev}>
          <ArrowBack />
        </button>
        <div className="timeline-bar"></div>
        <div className="timeline-items" style={{ transform: `translateX(${translateValue + "%"})` }}>
          {timelines.map((timeline, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ flex: `0 0 calc(${100 / vigibleItems}% - 60px)` }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="timeline-dot-wrapper">
                <div className='timeline-dot'></div>
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{timeline.date}</span>
                {/* <label className="timeline-label" dangerouslySetInnerHTML={{ __html: timeline.label }}></label> */}
                {labelEl(timeline)}
                {/* <p className="timeline-description" dangerouslySetInnerHTML={{ __html: timeline.description }}></p> */}
                {descriptionEl(timeline)}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={handleNext}>
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Theme6;