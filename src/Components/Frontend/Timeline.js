import React, { useEffect, useState } from "react";
import "../../style.scss";
import { timelineConfig } from "../../utils/config";
import { ArrowBack, ArrowForward } from "../../utils/icons";
import Theme3 from "../Backend/Themes/Theme3";
import Theme4 from "../Backend/Themes/Theme4";
import Styles from "../Common/Styles";
import ThemeStyles from "../Common/ThemeStyles";
import Theme6 from "../Backend/Themes/Theme6";
import Theme5 from "../Backend/Themes/Theme5";
import Theme7 from "../Backend/Themes/Theme7";

const Timeline = ({ attributes, id, isPremium, adminUrl }) => {
  const { timelines, theme, itemPosition, type } = attributes;
  const [visibleDescriptions, setVisibleDescriptions] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timelineEl = document.querySelector(`#${id} .timeline`);
    const timelineItems = document.querySelectorAll(
      `#${id} .timeline__items .timeline__item`
    );

    if (timelineEl) {
      timeline([timelineEl], timelineConfig(attributes));
    }

    if (timelineItems.length > 0) {
      if (theme === "timeline-with-accordion") {
        timelineItems.forEach((item) => {
          item.classList.remove("timeline__item--left");
          item.classList.add("timeline__item--right");
        });
      }
    }
  }, [timelines]);

  const labelEl = (timeline) => {
    return (
      <label
        className="timeline-label"
        dangerouslySetInnerHTML={{ __html: timeline.label }}
      ></label>
    );
  };

  const descriptionEl = (timeline) => {
    return (
      <p
        className="timeline-description"
        dangerouslySetInnerHTML={{ __html: timeline.description }}
      ></p>
    );
  };

  // Toggle description visibility
  const toggleDescription = (index) => {
    const descriptionElement = document.querySelector(
      `#tlgbTimelineItem-${index} .timeline__description`
    );

    if (descriptionElement) {
      const isVisible = visibleDescriptions[index];
      const height = isVisible ? 0 : descriptionElement.scrollHeight; // Collapse or expand

      // Apply the height dynamically for smooth transitions
      descriptionElement.style.maxHeight = `${height}px`;

      setVisibleDescriptions((prevState) => ({
        ...prevState,
        [index]: !isVisible, // Toggle visibility state
      }));
    }
  };

  useEffect(() => {
    Object.keys(visibleDescriptions).forEach((index) => {
      const descriptionElement = document.querySelector(
        `#tlgbTimelineItem-${index} .timeline__description`
      );

      if (descriptionElement) {
        if (visibleDescriptions[index]) {
          descriptionElement.style.maxHeight = `${descriptionElement.scrollHeight}px`; // Expand smoothly
        } else {
          descriptionElement.style.maxHeight = "0"; // Collapse smoothly
        }
      }
    });
  }, [visibleDescriptions, timelines]);

  const getClassForItem = (index) => {
    if (itemPosition === "both-side") {
      return index % 2 === 0 ? "right" : "left";
    } else if (itemPosition === "right") {
      return "left";
    }
    return "right";
  };

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

  const translateValue = -(activeIndex * (100 / 2));

  return (
    <>
      {theme === "default" || theme === "timeline-with-accordion" ? (
        <Styles attributes={attributes} id={id} />
      ) : (
        <ThemeStyles attributes={attributes} id={id} />
      )}

      <div
        className={`timeline-container ${
          !isPremium && theme !== "default" ? "blurred" : ""
        }`}
        id={id}
      >
        {!isPremium && theme !== "default" && (
          <div className="premium-overlay">
            <div className="premium-message">
              <p>Please active your license please!.</p>
              <button
                className="premium-btn"
                onClick={() =>
                  window.open(
                    `${adminUrl}tools.php?page=timeline-block#/pricing`,
                    "_blank"
                  )
                }
              >
                Renew Your License
              </button>
            </div>
          </div>
        )}

        {(theme === "default" || theme === "timeline-with-accordion") && (
          <div className="timeline tlgbTimeline">
            <div className="timeline__wrap">
              <div className="timeline__items">
                {timelines.map((timeline, index) => {
                  const { label, description } = timeline;
                  const isVisible = visibleDescriptions[index];
                  return (
                    <div
                      key={index}
                      className="timeline__item fadeIn"
                      id={`tlgbTimelineItem-${index}`}
                    >
                      <div className="timeline__content">
                        {theme === "timeline-with-accordion" ? (
                          <>
                            <label
                              onClick={() => toggleDescription(index)}
                              dangerouslySetInnerHTML={{
                                __html: label.replace(/\n/g, "<br />"),
                              }}
                            ></label>
                            <p
                              className={`timeline__description ${
                                isVisible ? "visible" : "hidden"
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: description.replace(/\n/g, "<br />"),
                              }}
                            ></p>
                          </>
                        ) : (
                          <>
                            <label
                              dangerouslySetInnerHTML={{
                                __html: label.replace(/\n/g, "<br />"),
                              }}
                            ></label>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: description.replace(/\n/g, "<br />"),
                              }}
                            ></p>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {theme === "theme-2" && (
          <div
            className={`timeline-container ${
              type === "horizontal" ? "horizontal" : "vertical"
            }`}
          >
            <button className="carousel-button prev" onClick={handlePrev}>
              <ArrowBack />
            </button>

            <div className="timeline-bar"></div>
            <div
              className="timeline-items"
              style={{ transform: `translateX(${translateValue}%)` }}
            >
              {timelines.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-item ${getClassForItem(index)}`}
                >
                  <div className="timeline-date">{event.date}</div>
                  <div
                    className="timeline-icon"
                    dangerouslySetInnerHTML={{ __html: event.icon }}
                  ></div>
                  <div className="timeline-content">
                    <label
                      className="timeline-title"
                      dangerouslySetInnerHTML={{ __html: event.label }}
                    ></label>
                    <p
                      className="timeline-description"
                      dangerouslySetInnerHTML={{ __html: event.description }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>

            <button className="carousel-button next" onClick={handleNext}>
              <ArrowForward />
            </button>
          </div>
        )}

        {theme === "theme-3" && (
          <Theme3
            attributes={attributes}
            labelEl={labelEl}
            descriptionEl={descriptionEl}
          />
        )}

        {theme === "theme-4" && (
          <Theme4
            attributes={attributes}
            labelEl={labelEl}
            descriptionEl={descriptionEl}
          />
        )}

        {theme === "theme-5" && (
          <Theme5
            attributes={attributes}
            labelEl={labelEl}
            descriptionEl={descriptionEl}
          />
        )}

        {theme === "theme-6" && (
          <Theme6
            attributes={attributes}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            labelEl={labelEl}
            descriptionEl={descriptionEl}
          />
        )}

        {theme === "theme-7" && (
          <Theme7
            attributes={attributes}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            labelEl={labelEl}
            descriptionEl={descriptionEl}
          />
        )}
      </div>
    </>
  );
};

export default Timeline;
