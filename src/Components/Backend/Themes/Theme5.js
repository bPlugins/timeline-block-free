import React from 'react';
import './Theme5.scss';


const Theme5 = ({ attributes, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines } = attributes;


  return (
    <div className="theme5-timeline">
      <div className="timeline-container">
        <div className="timeline-items">
          {timelines.map((timeline, index) => (
            <div key={index} className="timeline-item" onClick={() => setActiveIndex(index)}>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <div className="dot-childDiv"></div>
                </div>
              </div>
              <div className="timeline-content">
                <div className="text-orange-500 font-bold text-lg timeline-date">
                  {timeline.date}
                </div>
                {/* <label className="timeline-label" dangerouslySetInnerHTML={{ __html: timeline.label }}></label> */}
                {labelEl(timeline)}
                {/* <p className="timeline-description" dangerouslySetInnerHTML={{ __html: timeline.description }}></p> */}
                {descriptionEl(timeline)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme5;