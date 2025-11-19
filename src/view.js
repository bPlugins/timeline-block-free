import { createRoot } from "react-dom/client";

import Timeline from "./Components/Frontend/Timeline";
import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const timelineBlockEls = document.querySelectorAll(
    ".wp-block-tlgb-b-timeline-block"
  );
  timelineBlockEls.forEach((timelineBlockEl) => {
    const attributes = JSON.parse(timelineBlockEl.dataset.attributes);

    const isPremium = tlgbIsPipeChecker;

    createRoot(timelineBlockEl).render(
      <>
        <Timeline
          attributes={attributes}
          id={timelineBlockEl.id}
          isPremium={isPremium}
        />
      </>
    );

    timelineBlockEl?.removeAttribute("data-attributes");
  });
});
