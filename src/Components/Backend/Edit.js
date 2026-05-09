import { produce } from "immer";
import { useEffect, useState } from "react";
import { withSelect } from "@wordpress/data";
import { timelineConfig } from "../../utils/config";
import Settings from "../Backend/Settings/Settings";
import Styles from "../Common/Styles";
import ThemeStyles from "../Common/ThemeStyles";
import { updateData } from "../../../../bpl-tools/utils/functions";
import ClipBoard from "./ShortCodeClip";
//import { useBlockProps } from '@wordpress/block-editor';

const Edit = (props) => {
  const {
    className,
    attributes,
    setAttributes,
    clientId,
    currentPostId,
    postType,
  } = props;
  const {
    timelines,
    type,
    labelLocation,
    startIndex,
    vigibleItems,
    moveItem,
    verticalTrigger,
    rtlMode,
    theme,
  } = attributes;

  const [activeIndex, setActiveIndex] = useState(0);

  const id = `tlgbTimeline-${clientId}`;

  const [visibleDescriptions, setVisibleDescriptions] = useState({});

  const shortcode = `[timeline_block id=${currentPostId}]`;
  const isBlockEditor = window?.wp?.blockEditor;

  useEffect(() => {
    const timelineEl = document.querySelector(`#${id} .timeline`);
    const timelineItems = document.querySelectorAll(
      `#${id} .timeline__items .timeline__item`
    );

    if (timelineEl) {
      timeline([timelineEl], timelineConfig(attributes));
    }

    if (theme === "timeline-with-accordion") {
      if (timelineItems.length > 0) {
        timelineItems.forEach((item) => {
          item.classList.remove("timeline__item--left");
          item.classList.add("timeline__item--right");
        });
      }
    }
  }, [
    type,
    labelLocation,
    verticalTrigger,
    moveItem,
    startIndex,
    vigibleItems,
    rtlMode,
    theme,
    timelines.length,
  ]);

  // Change Timeline Data
  const updateTimeline = (index, type, val) => {
    const newTimelines = produce(timelines, (draft) => {
      draft[index][type] = val;
    });
    setAttributes({ timelines: newTimelines });

    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const updateObj = (property, val, ...props) => {
    setAttributes({
      [property]: updateData(attributes[property], val, ...props),
    });
  };

  // Remove hidden-animated class for https://wordpress.org/support/topic/timeline-not-loading-on-mobile/
  useEffect(() => {
    const allTimelineItem = document.querySelectorAll(
      `#${id} .timeline__items .timeline__item`
    );

    setTimeout(() => {
      allTimelineItem?.forEach((item) => {
        item.classList.remove("animated");
        item.classList.remove("hidden-animated");
      });
    }, 500);
  }, [timelines?.length]);

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
      <Settings
        {...{
          attributes,
          setActiveIndex,
          activeIndex,
          setAttributes,
          updateTimeline,
          updateObj,
        }}
      />
      <div className={className} id={id}>
          {isBlockEditor && postType === "timeline_block" && (
            <ClipBoard shortcode={shortcode} />
          )}

          {theme === "default" || theme === "timeline-with-accordion" ? (
            <Styles attributes={attributes} id={id} />
          ) : (
            <ThemeStyles attributes={attributes} id={id} />
          )}

          {(theme === "default" || theme === "timeline-with-accordion") && (
            <>
              <div
                className={`timeline tlgbTimeline ${theme === "timeline-with-accordion" && "accordion"
                  }`}
              >
                <div className="timeline__wrap">
                  <div className="timeline__items">
                    {timelines?.map((item, index) => {
                      const { label, description } = item;
                      const isVisible = visibleDescriptions[index];

                      return (
                        <div
                          key={index}
                          onClick={() => setActiveIndex(index)}
                          className="timeline__item fadeIn"
                          id={`tlgbTimelineItem-${index}`}
                        >
                          <div
                            className={`timeline__content ${index === activeIndex ? "tlgbNowEditing" : ""
                              }`}
                          >
                            <label
                              dangerouslySetInnerHTML={{ __html: label }}
                              onClick={() => {
                                theme === "timeline-with-accordion" &&
                                  toggleDescription(index);
                              }}
                            ></label>

                            <p
                              className={`timeline__description ${theme === "timeline-with-accordion"
                                  ? isVisible
                                    ? "visible"
                                    : "hidden"
                                  : "visible"
                                }`}
                              dangerouslySetInnerHTML={{ __html: description }}
                            ></p>
                          </div>
                        </div>
                      ); // Timeline Item
                    })}
                  </div>{" "}
                  {/* Timeline Items */}
                </div>{" "}
                {/* Timeline Wrap */}
              </div>{" "}
              {/* Timeline */}
            </>
          )}
      </div>


    </>
  );
};
export default withSelect((select) => {
  const currentPostId = select("core/editor").getCurrentPostId();
  const postType = select("core/editor").getCurrentPostType?.();
  return {
    currentPostId,
    postType,
  };
})(Edit);
