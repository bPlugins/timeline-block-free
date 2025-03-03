import React from 'react';
import './Theme3.scss';
const Theme3 = ({ attributes, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines } = attributes;


  return (
    <div className="theme3-timeline">
      <div className="timeline-container">
        <div className="timeline-items">
          {timelines.map((timeline, index) => (
            <div key={index} className="timeline-item" onClick={() => setActiveIndex(index)}>

              <div className="timeline-date">
                {timeline.date}
              </div>

              <div className="timeline-dot-wrapper">
                <div className="timeline-dot">
                  <div></div>
                </div>
              </div>

              <div className="timeline-content-wrapper">
                <div className="timeline-content">
                  {labelEl(timeline)}
                  {descriptionEl(timeline)}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Theme3;