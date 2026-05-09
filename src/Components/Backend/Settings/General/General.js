import {
  Button,
  Dashicon,
  PanelBody,
  PanelRow,
  RangeControl,
  TextareaControl,
  TextControl,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  BtnGroup,
  Label,
  Notice,
} from "../../../../../../bpl-tools/Components";
import {
  AdvertiseCard,
  
  PremiumBadge,
  
  PremiumPanel,
  SelectControlPro,
} from "../../../../../../bpl-tools/ProControls";
import { gearIcon } from "../../../../../../bpl-tools/utils/icons";
import { perUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
import { options, themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
const { types, topBottom, leftRight } = options;

const General = ({
  attributes,
  setAttributes,
  removeTimeline,
  activeIndex,
  addTimeline,
  duplicateTimeline,
  updateTimeline,
  updateObj,
}) => {
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

  const {
    label = "",
    description = "",
  } = timelines[activeIndex] || {};

  const pricingUrl= 'edit.php?post_type=timeline_block&page=tlgb-dashboard#/pricing';

  return (
    <>
      <PanelBody
        className="bPlPanelBody addRemoveItems"
        title={__("Add or Remove timelines", "timeline-block")}
      >
        <SelectControlPro
          label={__("Theme:", "timeline-block")}
          labelPosition="left"
          value={theme}
          options={themeOptions}
          onChange={(val) => setAttributes(themeSwitch(val, attributes))}
        />

        {null !== activeIndex && (
          <>
            <h3 className="bplItemTitle">
              {__(`Timeline No ${activeIndex + 1}:`, "timeline-block")}
            </h3>

            <PanelRow>
              <Label className="">{__("Label:", "timeline-block")}</Label>
              <TextControl
                value={label}
                onChange={(val) => {
                  //  updateTimeline(activeIndex, 'label', val)
                  updateObj("timelines", val, activeIndex, "label");
                }}
              />
            </PanelRow>

            <Label>{__("Description:", "timeline-block")}</Label>
            <TextareaControl
              value={description}
              onChange={(val) =>
                updateTimeline(activeIndex, "description", val)
              }
              rows={6}

            />

            <PanelRow className="itemAction mt20 mb15">
              {1 < timelines?.length && (
                <Button
                  className="removeItem"
                  label={__("Remove", "timeline-block")}
                  onClick={removeTimeline}
                >
                  <Dashicon icon="no" />
                  {__("Remove", "timeline-block")}
                </Button>
              )}

              <Button
                className="duplicateItem"
                label={__("Duplicate", "timeline-block")}
                onClick={duplicateTimeline}
              >
                {gearIcon}
                {__("Duplicate", "timeline-block")}
              </Button>
            </PanelRow>
          </>
        )}

        <div className="addItem">
          <Button
            label={__("Add New Timeline", "timeline-block")}
            onClick={addTimeline}
          >
            <Dashicon icon="plus" />
            {__("Add New Timeline", "timeline-block")}
          </Button>
        </div>
        <Notice status='premium' isIcon={true}>{__('Classic Editor For Description setting is available in the Premium version.', 'timeline-block')}</Notice>
      </PanelBody>

      {theme === "default" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Timeline Settings", "timeline-block")}
        >

          <PanelRow>
            <Label className="">{__("Type:", "timeline-block")}</Label>
            <BtnGroup
              value={type}
              onChange={(val) =>
                setAttributes({
                  type: val,
                  labelLocation: "vertical" === val ? "right" : "top",
                })
              }
              options={types}
            />
          </PanelRow>

          <>
            <PanelRow className="mt20">
              <Label className="">
                {__("Label Location:", "timeline-block")}
              </Label>
              <BtnGroup
                value={labelLocation}
                onChange={(val) => setAttributes({ labelLocation: val })}
                options={"vertical" === type ? leftRight : topBottom}
              />
            </PanelRow>
            <small>
              {__(
                "Label Location will be changed! When type will be changed",
                "timeline-block"
              )}
            </small>
          </>


          {"vertical" === type && theme === "default" && (
            <UnitControl
              className="mt20"
              label={__("Space in Bottom:", "timeline-block")}
              labelPosition="left"
              value={verticalTrigger}
              onChange={(val) => setAttributes({ verticalTrigger: val })}
              units={[pxUnit(), perUnit()]}
            />
          )}

          {"horizontal" === type && theme === "default" && (
            <>
              <Label>{__("Start Index:", "timeline-block")}</Label>
              <RangeControl
                value={startIndex}
                onChange={(val) => setAttributes({ startIndex: val })}
                min={1}
                max={80}
                step={1}
              />

              <Label>{__("Visible Items:", "timeline-block")}</Label>
              <RangeControl
                value={vigibleItems}
                onChange={(val) => setAttributes({ vigibleItems: val })}
              />

              <Label>{__("Move Item:", "timeline-block")}</Label>
              <RangeControl
                value={moveItem}
                onChange={(val) => setAttributes({ moveItem: val })}
              />

              <ToggleControl
                label="RTL Mode"
                checked={rtlMode}
                onChange={(val) => setAttributes({ rtlMode: val })}
              />
            </>
          )}
        </PanelBody>
      )}
      {/* <PremiumPanel title={__('Premium Timeline Themes', 'timeline-block')}
        description={__('Premium Timeline Pro has 8+ beautiful themes, with lot of customization are available in the Premium version.', 'timeline-block')}
        pricingUrl={'https://bplugins.com/products/timeline-block/pricing/'}
        demoUrl='https://bplugins.com/products/b-timeline/#demos' /> */}
      <PanelBody className='bPlPanelBody apbNewsTickerOptions' title={<>
        {__('Timeline Block Pro Version', 'timeline-block')}
        <PremiumBadge />
      </>} initialOpen={false}>
        <PremiumPanel title={__('Timeline Block Pro Version', 'timeline-block')}
          description={__('Premium Timeline Pro has 8+ beautiful themes, with lot of customization are available in the Premium version.', 'timeline-block')}
          pricingUrl={'https://bplugins.com/products/timeline-block/pricing/'} 
          demoUrl='https://bplugins.com/products/b-timeline/#demos'
          />
      </PanelBody>
      {/* advertiseCard */}
      <AdvertiseCard planLink={pricingUrl} />
    </>
  );
};

export default General;
