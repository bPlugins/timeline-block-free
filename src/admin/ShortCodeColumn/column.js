/* eslint-disable no-console */
import './column.scss';

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    const container = event.target.closest("[data-shortcode]");
    if ( ! container ) {
      return;
    }

    const shortcode = container.getAttribute("data-shortcode");
    const input = container.querySelector("input");
    const tooltip = container.querySelector(".tooltip");

    // Copy to clipboard
    if ( input ) {
      input.select();
      input.setSelectionRange(0, 99999); // For mobile devices
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shortcode).then(() => {
        if ( tooltip ) {
          tooltip.classList.add("visible");
          tooltip.innerText = wp.i18n.__("Copied!", "timeline-block");
          setTimeout(() => {
            tooltip.classList.remove("visible");
            tooltip.innerText = wp.i18n.__("Copy To Clipboard", "timeline-block");
          }, 2000);
        }
      }).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    } else {
      // Fallback
      try {
        document.execCommand("copy");
        if ( tooltip ) {
          tooltip.classList.add("visible");
          tooltip.innerText = wp.i18n.__("Copied!", "timeline-block");
          setTimeout(() => {
            tooltip.classList.remove("visible");
            tooltip.innerText = wp.i18n.__("Copy To Clipboard", "timeline-block");
          }, 2000);
        }
      } catch (err) {
        console.error('Fallback copy failed: ', err);
      }
    }
  });

  // Reset tooltip on mouseout via delegation
  document.addEventListener("mouseout", (event) => {
    const container = event.target.closest("[data-shortcode]");
    if ( container ) {
      const tooltip = container.querySelector(".tooltip");
      if ( tooltip && ! container.contains(event.relatedTarget) ) {
        tooltip.classList.remove("visible");
        tooltip.innerText = wp.i18n.__("Copy To Clipboard", "timeline-block");
      }
    }
  });
});
