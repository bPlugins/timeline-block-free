import { useEffect, useState } from "react";
import "../../style.scss";
import { timelineConfig } from "../../utils/config";
import Styles from "../Common/Styles";
import ThemeStyles from "../Common/ThemeStyles";

const Timeline = ({ attributes, id }) => {
  const { timelines, theme } = attributes;
  const [visibleDescriptions, setVisibleDescriptions] = useState({});


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


  return (
    <>
      {theme === "default" || theme === "timeline-with-accordion" ? (
        <Styles attributes={attributes} id={id} />
      ) : (
        <ThemeStyles attributes={attributes} id={id} />
      )}

      <div className="timeline-container" id={id}>
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
                              className={`timeline__description ${isVisible ? "visible" : "hidden"
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
      </div>
    </>
  );
};

export default Timeline;
