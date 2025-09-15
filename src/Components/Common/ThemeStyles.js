import React from "react";
import {
  getBackgroundCSS,
  getBorderCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";

const ThemeStyles = ({ attributes, id }) => {
  const {
    barBackground,
    iconStyles,
    contentBorder,
    labelTypo,
    itemTypo,
    labelColor,
    itemColor,
    dateStyles,
    horizontalDatePosition,
    theme,
    itemBg,
    barDotColor,
  } = attributes;
  const {
    iconColor,
    iconColorHover,
    background,
    borderControl,
    iconSize,
    iconContainerSize,
  } = iconStyles;

  // In this css file, Theme 2, 3, 4, 5, 6 all dynamic styles are applied.

  const mainSl = `#${id}`;
  const timelineContainer = `${mainSl} .timeline-container`;
  const timelineBar = `${timelineContainer} .timeline-bar`;
  const carouselBtn = `${timelineContainer} .carousel-button`;
  const timelineItemsContainer = `${mainSl} .timeline-items`;
  const timelineItem = `${timelineItemsContainer} .timeline-item`;
  const timelineIcon = `${timelineItem} .timeline-icon`;
  const timelineContent = `${timelineItem} .timeline-content`;
  const timelineDate = `${timelineItem} .timeline-date`;
  const timelineDot = `${timelineContainer} .timeline-dot-wrapper .timeline-dot`;

  return (
    <style>
      {`
        ${getTypoCSS("", labelTypo)?.googleFontLink}
        ${getTypoCSS(`${timelineContent} label`, labelTypo).styles}

        ${getTypoCSS("", itemTypo)?.googleFontLink}
        ${getTypoCSS(`${timelineContent} p`, itemTypo).styles}

        ${getTypoCSS("", dateStyles.dateTypo)?.googleFontLink}
	    	${getTypoCSS(`${timelineDate}`, dateStyles.dateTypo).styles}


        ${timelineContainer}.horizontal {
          ${
            horizontalDatePosition === "top"
              ? "padding-top: 150px"
              : "padding-bottom: 150px"
          }
        }
        ${timelineContainer}.horizontal .timeline-icon {
          ${
            horizontalDatePosition === "top" && theme === "theme-2"
              ? "top: -100px;"
              : "bottom: -100px;"
          }
        }
        ${timelineBar} {
          ${
            theme === "theme-2"
              ? horizontalDatePosition === "top"
                ? "top: 76px;"
                : "bottom: 76px;"
              : ""
          }
          background-color: ${barBackground};
        }
        ${timelineDot} {
          ${
            theme !== "theme-6"
              ? `background-color: ${barDotColor};`
              : `border: 4px solid ${barDotColor};`
          }
        }
        ${timelineContent} {
          border: ${contentBorder.width} ${contentBorder.style} ${
            contentBorder.color
          };
          border-top: ${contentBorder.top?.width} ${contentBorder.top?.style} ${
            contentBorder.top?.color
          };
          border-right: ${contentBorder.right?.width} ${
            contentBorder.right?.style
          } ${contentBorder.right?.color};
          border-bottom: ${contentBorder.bottom?.width} ${
            contentBorder.bottom?.style
          } ${contentBorder.bottom?.color};
          border-left: ${contentBorder.left?.width} ${
            contentBorder.left?.style
          } ${contentBorder.left?.color};
          background: ${itemBg};
        }
        ${timelineContent} .timeline-label{
          color: ${labelColor};
          display: block;
        }
        ${timelineContent} p{
          color: ${itemColor};
        }
        ${timelineIcon} {
          ${getBorderCSS(borderControl)}
          width: ${iconContainerSize}px;
          height: ${iconContainerSize}px;
          ${getBackgroundCSS(background.normal)}
        }
        ${timelineIcon} svg {
          fill: ${iconColor};
          width: ${iconSize}px;
          height: ${iconSize}px;
        }
        ${timelineIcon}:hover {
          color: ${iconColorHover};
        }
        ${timelineItem} {
          ${
            theme === "theme-5"
              ? `border-left: 5px solid ${barBackground};`
              : ""
          }
        }

        ${timelineItem}:hover .timeline-icon {
          ${getBackgroundCSS(background.hover)}
        }
        ${timelineItem}:hover .timeline-icon svg{
          fill: ${iconColorHover};
        }
        ${timelineDate} {
          color: ${dateStyles.dateColor};
          ${
            theme === "theme-2"
              ? horizontalDatePosition === "top"
                ? "top: -145px;"
                : "bottom: -145px;"
              : ""
          }
          ${
            theme === "theme-4"
              ? `width: ${dateStyles.dateContainerSize}px; height: ${
                  dateStyles.dateContainerSize
                }px; ${getBackgroundCSS(dateStyles.dateBg)}`
              : ""
          }
        }
        ${carouselBtn} {
          ${
            theme === "theme-2"
              ? horizontalDatePosition === "top"
                ? "top: 65px;"
                : "bottom: 65px;"
              : ""
          }
        }
      `}
    </style>
  );
};

export default ThemeStyles;
