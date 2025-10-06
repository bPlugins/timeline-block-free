import React from "react";
import "./Theme7.scss";

const Theme7 = ({ attributes, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines } = attributes;

  return (
    <div className="theme7-timeline">
      <div className="timeline-container">
        <div className="timeline-items">
          <div className="timeline-bar">
            <div className="timeline_progress-bar"></div>
          </div>

          {timelines.map((timeline, index) => (
            <div
              className="timeline-item"
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              <div className="timeline_left">
                <div className="timeline_left-content">
                  {timeline.label && labelEl(timeline)}
                  {timeline.date && (
                    <span className="timeline-date">{timeline.date}</span>
                  )}
                </div>
              </div>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline_right">{descriptionEl(timeline)}</div>
            </div>
          ))}

          <div className="overlay-fade-top"></div>
          <div className="overlay-fade-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Theme7;
