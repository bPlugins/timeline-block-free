import React, { useEffect, useRef } from 'react';
import './Theme5.scss';


const Theme5 = ({ attributes, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines, theme5Animation } = attributes;
  const containerRef = useRef(null);

  const animEnabled  = theme5Animation?.enabled !== false;
  const animType     = theme5Animation?.type     || "slide-up";
  const animDuration = theme5Animation?.duration ?? 600;
  const animDelay    = theme5Animation?.delay    ?? 120;

  // Intersection Observer - triggers staggered animation on each card
  useEffect(() => {
    if (!animEnabled || !containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("t5-anim-visible");
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
    <div className="theme5-timeline" ref={containerRef}>
      <div className="timeline-container">
        <div className="timeline-items">
          {timelines.map((timeline, index) => (
            <div
              key={index}
              className={`timeline-item ${animEnabled ? `t5-anim t5-anim--${animType}` : ""}`}
              style={{
                "--t5-anim-duration": `${animDuration}ms`,
                "--t5-anim-delay": `${index * animDelay}ms`,
              }}
              onClick={() => setActiveIndex && setActiveIndex(index)}
            >
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