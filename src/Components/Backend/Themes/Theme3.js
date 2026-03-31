import React, { useEffect, useRef } from 'react';
import './Theme3.scss';
const Theme3 = ({ attributes, setActiveIndex, labelEl, descriptionEl }) => {
  const { timelines, theme3Animation } = attributes;
  const containerRef = useRef(null);

  const animEnabled  = theme3Animation?.enabled !== false;
  const animType     = theme3Animation?.type     || "slide-up";
  const animDuration = theme3Animation?.duration ?? 600;
  const animDelay    = theme3Animation?.delay    ?? 120;

  // Intersection Observer - triggers staggered animation on each card
  useEffect(() => {
    if (!animEnabled || !containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("t3-anim-visible");
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
    <div className="theme3-timeline" ref={containerRef}>
      <div className="timeline-container">
        <div className="timeline-items">
          {timelines.map((timeline, index) => (
            <div
              key={index}
              className={`timeline-item ${animEnabled ? `t3-anim t3-anim--${animType}` : ""}`}
              style={{
                "--t3-anim-duration": `${animDuration}ms`,
                "--t3-anim-delay": `${index * animDelay}ms`,
              }}
              onClick={() => setActiveIndex && setActiveIndex(index)}
            >

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