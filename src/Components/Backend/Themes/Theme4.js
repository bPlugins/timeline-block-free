import React from 'react';
import './Theme4.scss';


const Theme4 = ({ attributes, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines } = attributes;

  return (
    <div className="theme4-timeline">
      <div className="timeline-container">
        <div className="timeline-bar">
        </div>
        <div className="timeline-items">
          {timelines.map((timeline, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'even-item' : ''}`} onClick={() => setActiveIndex(index)}>
              <div className="timeline-content-wrapper">
                <div className="timeline-content">
                  {/* <label className="timeline-label" dangerouslySetInnerHTML={{ __html: timeline.label }}></label> */}
                  {labelEl(timeline)}
                  {/* <p className="timeline-description" dangerouslySetInnerHTML={{ __html: timeline.description }}></p> */}
                  {descriptionEl(timeline)}
                </div>
              </div>
              <div className="timeline-date">{timeline.date}</div>
              <div className="empty-div"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme4;