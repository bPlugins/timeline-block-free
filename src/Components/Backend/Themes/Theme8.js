import React, { useEffect, useRef } from "react";
import "./Theme8.scss";

const CARD_COLORS = [
  "#f7c948", // yellow
  "#7ed4f5", // blue
  "#7ee87e", // green
  "#f07ab0", // pink
  "#c07ef7", // purple
  "#f97316", // orange
  "#34d399", // teal
  "#818cf8", // indigo
];

const Theme8 = ({ attributes, setActiveIndex, activeIndex, labelEl, descriptionEl }) => {
  const { timelines, theme8Animation } = attributes;
  const containerRef = useRef(null);

  const animEnabled  = theme8Animation?.enabled !== false;
  const animType     = theme8Animation?.type     || "slide-up";
  const animDuration = theme8Animation?.duration ?? 600;
  const animDelay    = theme8Animation?.delay    ?? 120;

  // Build rows: first item spans full width, then pairs
  const rows = [];
  if (timelines.length === 0) return null;

  const indexedTimelines = timelines.map((timeline, i) => ({ timeline, globalIndex: i }));

  rows.push({ items: [indexedTimelines[0]], full: true });
  for (let i = 1; i < indexedTimelines.length; i += 2) {
    const pair = [indexedTimelines[i]];
    if (i + 1 < indexedTimelines.length) pair.push(indexedTimelines[i + 1]);
    rows.push({ items: pair, full: false });
  }

  // Intersection Observer — triggers staggered animation on each card
  useEffect(() => {
    if (!animEnabled || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".theme8-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("t8-anim-visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [timelines.length, animEnabled, animType, animDuration, animDelay]);

  return (
    <div
      className="theme8-timeline"
      ref={containerRef}
    >
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={`theme8-row ${row.full ? "theme8-row--full" : "theme8-row--pair"}`}
        >
          {row.items.map(({ timeline, globalIndex }) => {
            const bgColor =
              timeline.cardBg && timeline.cardBg !== ""
                ? timeline.cardBg
                : CARD_COLORS[globalIndex % CARD_COLORS.length];
            const isActive = activeIndex === globalIndex;

            return (
              <div
                key={globalIndex}
                className={`theme8-card ${isActive ? "theme8-card--active tlgbNowEditing" : ""} ${animEnabled ? `t8-anim t8-anim--${animType}` : ""}`}
                style={{
                  "--card-bg": bgColor,
                  "--t8-anim-duration": `${animDuration}ms`,
                  "--t8-anim-delay": `${globalIndex * animDelay}ms`,
                }}
                onClick={() => setActiveIndex && setActiveIndex(globalIndex)}
              >
                <span className="theme8-badge">
                  {timeline.issueText && timeline.issueText !== ""
                    ? timeline.issueText
                    : `Issue #${globalIndex + 1}`}
                </span>
                <div className="theme8-card__title">{labelEl(timeline)}</div>
                <div className="theme8-card__desc">{descriptionEl(timeline)}</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Theme8;
