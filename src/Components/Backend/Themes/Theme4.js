import React, { useEffect, useRef } from 'react';
import './Theme4.scss';


const Theme4 = ({ attributes, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines, theme4Animation } = attributes;
  const containerRef = useRef(null);

  const animEnabled  = theme4Animation?.enabled !== false;
  const animType     = theme4Animation?.type     || "slide-up";
  const animDuration = theme4Animation?.duration ?? 600;
  const animDelay    = theme4Animation?.delay    ?? 120;

  // Intersection Observer - triggers staggered animation on each card
  useEffect(() => {
    if (!animEnabled || !containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("t4-anim-visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [timelines.length, animEnabled, animType, animDuration, animDelay]);


  return (
    <div className="theme4-timeline" ref={containerRef}>
      <div className="timeline-container">
        <div className="timeline-bar">
        </div>
        <div className="timeline-items">
          {timelines.map((timeline, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'even-item' : ''} ${animEnabled ? `t4-anim t4-anim--${animType}` : ""}`}
              style={{
                "--t4-anim-duration": `${animDuration}ms`,
                "--t4-anim-delay": `${index * animDelay}ms`,
              }}
              onClick={() => setActiveIndex(index)}
            >
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