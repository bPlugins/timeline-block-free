import { BlockControls, InspectorControls } from "@wordpress/block-editor";
import { TabPanel, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "react";

// Settings Components
import { tabController } from "../../../../../bpl-tools/utils/functions";

import { BBlocksAds } from "../../../../../bpl-tools/Components";
import { AboutProModal } from "../../../../../bpl-tools/ProControls";
import { generalStyleTabs } from "../../../utils/options";
import General from "./General/General";
import Styles from "./Styles/Styles";
import BlockPreview from "./Panel/BlockPreview";
import { themeSwitch, toolTipPresets } from "../../../utils/functions";

const Settings = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
  updateTimeline,
  isPremium,
  updateObj,
}) => {
  const { timelines, theme } = attributes;
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  const premiumProps = {
    isPremium,
    setIsProModalOpen,
  };

  const addTimeline = () => {
    setAttributes({
      timelines: [
        ...timelines,
        {
          icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z'/></svg>",
          date: "02-02-2002",
          label: "January",
          description: "Note of the january month",
          isAddTinyEditor: false,
        },
      ],
    });
    setActiveIndex(timelines.length);
  };

  const duplicateTimeline = () => {
    const duplicatedTimelineItem = { ...timelines[activeIndex] };

    setAttributes({
      timelines: [
        ...timelines.slice(0, activeIndex + 1),
        duplicatedTimelineItem,
        ...timelines.slice(activeIndex + 1),
      ],
    });
    setActiveIndex(activeIndex + 1);
  };

  const removeTimeline = () => {
    setAttributes({
      timelines: [
        ...timelines.slice(0, activeIndex),
        ...timelines.slice(activeIndex + 1),
      ],
    });

    setActiveIndex(0 === activeIndex ? 0 : activeIndex - 1);
  };

  return (
    <>
      <InspectorControls>
        {!isPremium && <BBlocksAds />}

        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  addTimeline={addTimeline}
                  duplicateTimeline={duplicateTimeline}
                  updateTimeline={updateTimeline}
                  removeTimeline={removeTimeline}
                  activeIndex={activeIndex}
                  premiumProps={premiumProps}
                  updateObj={updateObj}
                  setActiveIndex={setActiveIndex}
                />
              )}

              {"style" === tab.name && (
                <Styles attributes={attributes} setAttributes={setAttributes} />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <ToolbarGroup className="bPlToolbar">
          <ToolbarButton
            icon="trash"
            label={__(
              `Remove Timeline No ${activeIndex + 1}`,
              "timeline-block"
            )}
            onClick={removeTimeline}
          />

          <ToolbarButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
              >
                <path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z" />
              </svg>
            }
            label={__(`Copy Timeline No ${activeIndex + 1}`, "timeline-block")}
            onClick={duplicateTimeline}
          />

          <ToolbarButton
            icon="plus"
            label={__("Add Timeline", "timeline-block")}
            onClick={addTimeline}
          />
        </ToolbarGroup>

        <BlockPreview
          options={toolTipPresets}
          isPremium={isPremium}
          value={theme}
          onChange={(val) => setAttributes(themeSwitch(val, attributes))}
        ></BlockPreview>
      </BlockControls>

      <AboutProModal
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        link={`${isPremium.adminUrl}edit.php?post_type=timeline_block&page=tlgb-dashboard#/pricing`}
      >
        <li>
          &emsp;
          <strong>{__("Added 7 Beautiful Themes: ", "custom-html")}</strong>
          {__(
            "Extend your plugin with these 7 themes. By using this timeline you can create a lot of themes.",
            "timeline-block"
          )}
        </li>
        <li>
          &emsp;
          <strong>
            {__(
              "Horizontal / Vertical Option in every themes: ",
              "timeline-block"
            )}
          </strong>
          {__(
            "Customize your timeline like horizontal or vertical in some theme as a option. It's easy and beautiful to customize.",
            "timeline-block"
          )}
        </li>
        <li>
          &emsp;
          <strong>{__("Added Classic Editor: ", "timeline-block")}</strong>
          {__(
            "As Timeline content you can use classic editor. You can add image and edit your content on your own.",
            "timeline-block"
          )}
        </li>
        <li>
          &emsp;
          <strong>
            {__("Add Icon to your every story: ", "timeline-block")}
          </strong>
          {__("Add and edit your story icon on your own.", "timeline-block")}
        </li>
        <li>
          &emsp;
          <strong>
            {__("Change Icon and Story Date Position: ", "timeline-block")}
          </strong>
          {__(
            "Change language for different language syntax.",
            "custom - html"
          )}
        </li>
        <li>
          &emsp;
          <strong>
            {__("Change Icon and Story Date Position: ", "timeline-block")}
          </strong>
          {__(
            "You can change icon position when you're on horizontal timeline",
            "timeline-block"
          )}
        </li>
        <li>
          &emsp;
          <strong>
            {__("Added Powerful Shortcode Timeline Plugin: ", "timeline-block")}
          </strong>
          {__(
            "By this plugin you can use a powerful shortcode timeline plugin with some incredible features. which enabled you to embed the Timeline anywhere in the site.",
            "timeline-block"
          )}
        </li>
      </AboutProModal>
    </>
  );
};
export default Settings;
