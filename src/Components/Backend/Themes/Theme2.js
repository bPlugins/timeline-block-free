import React, { useEffect, useState } from 'react';
import '../../../style.scss';
import { ArrowBack, ArrowForward } from '../../../utils/icons';


const Theme2 = ({ attributes, activeIndex, setActiveIndex }) => {
  const { timelines, itemPosition, type } = attributes;
  const [inView, setInView] = useState(Array(timelines.length).fill(false));



  const observerOptions = {
    threshold: 1,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setInView((prev) => {
          const newState = [...prev];
          newState[index] = true; // Mark the item as in view
          return newState;
        });
      }
    });
  };


  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  }, []);


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


  const getClassForItem = (index) => {
    if (itemPosition === "both-side") {
      return index % 2 === 0 ? "right" : "left";
    } else if (itemPosition === "right") {
      return "left";
    }
    return "right";
  };



  return (
    <>
      <div className={`timeline-container ${type === "horizontal" ? "horizontal" : "vertical"}`} >

        <button className="carousel-button prev" onClick={handlePrev}>
          <ArrowBack />
        </button>

        <div className="timeline-bar"></div>
        <div className="timeline-items" style={{ transform: `translateX(${type === "horizontal" ? translateValue + "%" : "0%"})` }} >
          {timelines.map((event, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`timeline-item ${getClassForItem(index)} ${inView[index] ? "in-view" : ""}`}>
              <div className="timeline-date">{event.date}</div>
              <div className="timeline-icon" dangerouslySetInnerHTML={{ __html: event.icon }}></div>
              <div className="timeline-content">
                <label dangerouslySetInnerHTML={{ __html: event.label }}></label>
                <p className="timeline-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button next" onClick={handleNext}>
          <ArrowForward />
        </button>
      </div>
    </>
  );
};

export default Theme2;