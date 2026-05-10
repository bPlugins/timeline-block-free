import { produce } from "immer";
import { useEffect, useState, useRef } from "react";
import { withSelect } from "@wordpress/data";
import { timelineConfig } from "../../utils/config";
import Settings from "../Backend/Settings/Settings";
import Styles from "../Common/Styles";
import ThemeStyles from "../Common/ThemeStyles";
import { updateData } from "../../../../bpl-tools/utils/functions";
import { useBlockProps } from "@wordpress/block-editor";
import FrontShortCode from "./Front_Short_code";

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
  const timelineRef = useRef(null);

  const blockProps = useBlockProps({ className });

  const isBlockEditor = window?.wp?.blockEditor;

  useEffect(() => {
    if (timelineRef.current) {
      timeline([timelineRef.current], timelineConfig(attributes));  
        const timelineItems = timelineRef.current.querySelectorAll('.timeline__item');

        // Force all items to be visible in editor by removing animation classes
        timelineItems.forEach((item) => {
          item.classList.remove("animated");
          item.classList.remove("hidden-animated");
        });

        if (theme === "timeline-with-accordion") {
          if (timelineItems.length > 0) {
            timelineItems.forEach((item) => {
              item.classList.remove("timeline__item--left");
              item.classList.add("timeline__item--right");
            });
          }
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
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
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

      <div {...blockProps} id={id}>
        {isBlockEditor && postType === "timeline_block" && (
          <FrontShortCode shortCode={`[timeline_block id=${currentPostId}]`} />
        )}

        {theme === "default" || theme === "timeline-with-accordion" ? (
          <Styles attributes={attributes} id={id} />
        ) : (
          <ThemeStyles attributes={attributes} id={id} />
        )}

        {(theme === "default" || theme === "timeline-with-accordion") && (
          <>
            <div
              ref={timelineRef}
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
                    );
                  })}
                </div>
              </div>
            </div>
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
