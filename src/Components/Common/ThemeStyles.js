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
    timelineBar: barStyles,
    theme8CardBorder ={},
    theme8CardShadow = {},
    theme9CenturyStyles,
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
  const timelineLabel = `${timelineItem} .timeline-label`;
  const timelineDescription = `${timelineItem} .timeline-description`;
  const timelineDot = `${timelineContainer} .timeline-dot-wrapper .timeline-dot`;
  const timelineProgressBar = `${timelineItemsContainer} .timeline-bar .timeline_progress-bar`;

  return (
    <style>
      {`
        ${getTypoCSS("", labelTypo)?.googleFontLink}
        ${getTypoCSS(`${timelineLabel}`, labelTypo).styles}
        ${theme === "theme-8" ? getTypoCSS(`#${id} .theme8-timeline .theme8-card .timeline-label`, labelTypo).styles : ""}
        ${theme === "theme-9" ? getTypoCSS(`#${id} .theme9-timeline .theme9-card .timeline-label`, labelTypo).styles : ""}

        ${getTypoCSS("", itemTypo)?.googleFontLink}
        ${getTypoCSS(`${timelineDescription}`, itemTypo).styles}
        ${theme === "theme-8" ? getTypoCSS(`#${id} .theme8-timeline .theme8-card .timeline-description`, itemTypo).styles : ""}
        ${theme === "theme-9" ? getTypoCSS(`#${id} .theme9-timeline .theme9-card .timeline-description`, itemTypo).styles : ""}

        ${getTypoCSS("", dateStyles.dateTypo)?.googleFontLink}
	    	${getTypoCSS(`${timelineDate}`, dateStyles.dateTypo).styles}
        ${theme === "theme-9" ? getTypoCSS(`#${id} .theme9-timeline .theme9-card .theme9-date`, dateStyles.dateTypo).styles : ""}

        ${theme === "theme-9" ? getTypoCSS("", theme9CenturyStyles?.centuryTypo)?.googleFontLink : ""}
        ${theme === "theme-9" ? getTypoCSS(`#${id} .theme9-century-badge span`, theme9CenturyStyles?.centuryTypo).styles : ""}


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
          }
          ${contentBorder.right?.color};
          border-bottom: ${contentBorder.bottom?.width} ${
            contentBorder.bottom?.style
          } ${contentBorder.bottom?.color};
          border-left: ${contentBorder.left?.width} ${
            contentBorder.left?.style
          } ${contentBorder.left?.color};
          background: ${itemBg};
        }
        ${timelineLabel}{
          color: ${labelColor};
          display: block;
        }
        ${timelineDescription} {
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

        ${timelineProgressBar} {
          ${getBackgroundCSS(barStyles?.progressBarbgColor)}
        }

        /* ── Theme 8 shared style overrides ── */
        ${theme === "theme-8" ? `
          #${id} .theme8-timeline .theme8-card .timeline-label {
            color: ${labelColor};
          }
          #${id} .theme8-timeline .theme8-card .timeline-description {
            color: ${itemColor};
          }
          #${id} .theme8-timeline .theme8-card {
            border: ${theme8CardBorder?.width || "3px"} ${theme8CardBorder?.style || "solid"} ${theme8CardBorder?.color || "#111111"};
            border-top: ${theme8CardBorder?.top?.width || theme8CardBorder?.width || "3px"} ${theme8CardBorder?.top?.style || theme8CardBorder?.style || "solid"} ${theme8CardBorder?.top?.color || theme8CardBorder?.color || "#111111"};
            border-right: ${theme8CardBorder?.right?.width || theme8CardBorder?.width || "3px"} ${theme8CardBorder?.right?.style || theme8CardBorder?.style || "solid"} ${theme8CardBorder?.right?.color || theme8CardBorder?.color || "#111111"};
            border-bottom: ${theme8CardBorder?.bottom?.width || theme8CardBorder?.width || "3px"} ${theme8CardBorder?.bottom?.style || theme8CardBorder?.style || "solid"} ${theme8CardBorder?.bottom?.color || theme8CardBorder?.color || "#111111"};
            border-left: ${theme8CardBorder?.left?.width || theme8CardBorder?.width || "3px"} ${theme8CardBorder?.left?.style || theme8CardBorder?.style || "solid"} ${theme8CardBorder?.left?.color || theme8CardBorder?.color || "#111111"};
            box-shadow: ${theme8CardShadow?.offsetX ?? 5}px ${theme8CardShadow?.offsetY ?? 5}px 0 ${theme8CardShadow?.color || "#111111"};
          }
          #${id} .theme8-timeline .theme8-card:hover {
            box-shadow: ${(theme8CardShadow?.offsetX ?? 5) + 2}px ${(theme8CardShadow?.offsetY ?? 5) + 2}px 0 ${theme8CardShadow?.color || "#111111"};
          }
        ` : ""}

        /* ── Theme 9 specific overrides ── */
        ${theme === "theme-9" ? `
          #${id} .theme9-timeline::before {
            background-color: ${barBackground || '#8b5e4a'} !important;
          }
          #${id} .theme9-card-wrapper.theme9-card--left::before,
          #${id} .theme9-card-wrapper.theme9-card--right::before {
            background-color: ${barBackground || '#8b5e4a'} !important;
          }
          #${id} .theme9-card {
            border: ${contentBorder?.width} ${contentBorder?.style} ${contentBorder?.color} !important;
            border-top: ${contentBorder?.top?.width} ${contentBorder?.top?.style} ${contentBorder?.top?.color} !important;
            border-right: ${contentBorder?.right?.width} ${contentBorder?.right?.style} ${contentBorder?.right?.color} !important;
            border-bottom: ${contentBorder?.bottom?.width} ${contentBorder?.bottom?.style} ${contentBorder?.bottom?.color} !important;
            border-left: ${contentBorder?.left?.width} ${contentBorder?.left?.style} ${contentBorder?.left?.color} !important;
          }
          #${id} .theme9-card .timeline-label {
            color: ${labelColor} !important;
          }
          #${id} .theme9-card .timeline-description {
            color: ${itemColor} !important;
          }
          #${id} .theme9-timeline .timeline-icon {
            ${getBorderCSS(iconStyles?.borderControl)}
            width: ${iconStyles?.iconContainerSize}px !important;
            height: ${iconStyles?.iconContainerSize}px !important;
            ${getBackgroundCSS(iconStyles?.background?.normal)}
            background-color: ${iconStyles?.background?.normal?.color || barDotColor || '#8b5e4a'} !important;
          }
          #${id} .theme9-timeline .timeline-icon svg {
            fill: ${iconStyles?.iconColor || '#fff'} !important;
            width: ${iconStyles?.iconSize}px !important;
            height: ${iconStyles?.iconSize}px !important;
          }
          #${id} .theme9-timeline .theme9-card-wrapper:hover .timeline-icon {
            ${getBackgroundCSS(iconStyles?.background?.hover)}
          }
          #${id} .theme9-timeline .theme9-card-wrapper:hover .timeline-icon svg {
            fill: ${iconStyles?.iconColorHover || '#fff'} !important;
          }
          #${id} .theme9-date {
            color: ${dateStyles?.dateColor || '#fff'} !important;
          }
          #${id} .theme9-century-badge {
            background-color: ${theme9CenturyStyles?.bg || '#1a1a1a'} !important;
            color: ${theme9CenturyStyles?.color || '#fff'} !important;
            border: ${theme9CenturyStyles?.borderWidth ?? 4}px solid ${theme9CenturyStyles?.borderColor || '#fff'} !important;
            border-radius: ${theme9CenturyStyles?.borderRadius ?? 50}% !important;
          }
        ` : ""}


      `}
    </style>
  );
};

export default ThemeStyles;
