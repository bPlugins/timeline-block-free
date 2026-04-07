import React, { useState, useEffect, useRef } from "react";
import "./Theme9.scss";

const Theme9 = ({
  attributes,
  activeIndex,
  setActiveIndex,
  labelEl,
  descriptionEl,
}) => {
  const { timelines, theme9Animation } = attributes;
  const [visibleDescriptions, setVisibleDescriptions] = useState({});
  const containerRef = useRef(null);

  const animEnabled  = theme9Animation?.enabled !== false;
  const animType     = theme9Animation?.type     || "slide-up";
  const animDuration = theme9Animation?.duration ?? 600;
  const animDelay    = theme9Animation?.delay    ?? 120;

  useEffect(() => {
    if (!animEnabled || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".theme9-card-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("t9-anim-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [timelines?.length, animEnabled, animType, animDuration, animDelay]);

  if (!timelines || timelines.length === 0) return null;

  // Toggle description visibility
  const toggleDescription = (index) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="theme9-container" ref={containerRef}>
      <div className="theme9-timeline">
        {timelines.map((timeline, index) => {
          const isVisible = visibleDescriptions[index];
          const hasCentury =
            timeline.centuryText && timeline.centuryText.trim() !== "";
          const bgColor = timeline.cardBg || attributes.itemBg || "#8b5e4a";
          const isActive = activeIndex === index;

          // Alternate left and right
          const positionClass =
            index % 2 === 0 ? "theme9-card--left" : "theme9-card--right";

          return (
            <div key={index} className="theme9-item-wrapper">
              {hasCentury && (
                <div className="theme9-century-wrapper">
                  <div className="theme9-century-badge">
                    <span>{timeline.centuryText}</span>
                  </div>
                </div>
              )}

              <div
                className={`theme9-card-wrapper ${positionClass} ${
                  isActive ? "tlgbNowEditing" : ""
                } ${animEnabled ? `t9-anim t9-anim--${animType}` : ""}`}
                style={{
                  "--t9-anim-duration": `${animDuration}ms`,
                  "--t9-anim-delay": `${index * animDelay}ms`,
                }}
                onClick={() => setActiveIndex && setActiveIndex(index)}
              >
                
                <div
                  className="theme9-card"
                  style={{ backgroundColor: bgColor }}
                >
                  <div
                    className="theme9-card-header"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDescription(index);
                      if (setActiveIndex) setActiveIndex(index);
                    }}
                  >
                    <div className="theme9-date">{timeline.date}</div>
                    <div className="theme9-title-row">
                      <div className="theme9-title">{labelEl(timeline)}</div>
                    </div>
                  </div>

                  <div
                    className="theme9-card-body"
                    style={{
                      maxHeight: isVisible ? "1000px" : "0",
                      opacity: isVisible ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.4s ease, opacity 0.4s ease",
                      marginTop: isVisible ? "15px" : "0",
                    }}
                  >
                    {descriptionEl(timeline)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Theme9;
