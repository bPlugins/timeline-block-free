import {
  PanelBody,
  PanelRow,
  RangeControl,
  TabPanel,
  __experimentalUnitControl as UnitControl,
  __experimentalBorderBoxControl as BorderBoxControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import React from "react";
import {
  Background,
  ColorControl,
  Label,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { BorderControl } from "../../../../../../bpl-tools/Components/Deprecated";
import { tabController } from "../../../../../../bpl-tools/utils/functions";
import { emUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
import { updateData } from "../../../../utils/functions";

const Styles = ({ attributes, setAttributes }) => {
  const {
    barBackground,
    barDotColor,
    dateStyles,
    itemBg,
    itemColor,
    itemTypo,
    itemBorder,
    labelTypo,
    labelColor,
    iconStyles,
    theme,
    contentBorder,
    timelineBar,
  } = attributes;

  const colors = [
    { name: "Blue", color: "#72aee6" },
    { name: "White", color: "#ffffff" },
    { name: "Black", color: "#000" },
  ];

  return (
    <>
      <PanelBody className="bPlPanelBody" title={__("Bar", "timeline-block")}>
        {theme !== "theme-3" && (
          <ColorControl
            label={__("Background:", "timeline-block")}
            value={barBackground}
            onChange={(val) => setAttributes({ barBackground: val })}
            defaultColor="#dddddd"
          />
        )}

        {theme === "theme-2" || (
          <ColorControl
            label={__("Dot Color:", "timeline-block")}
            value={barDotColor}
            onChange={(val) => setAttributes({ barDotColor: val })}
            defaultColor="#dddddd"
          />
        )}
        {theme === "theme-7" && (
          <Background
            label={__("Progress Bar Color", "timeline-block")}
            value={timelineBar?.progressBarbgColor}
            onChange={(val) =>
              setAttributes({
                timelineBar: updateData(timelineBar, val, "progressBarbgColor"),
              })
            }
            defaults={{ color: "linear-gradient(to bottom, #ff6a00, #ee0979)" }}
            isImage={false}
          />
        )}
      </PanelBody>

      {theme === "theme-2" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Icon", "timeline-block")}
        >
          <PanelRow>
            <Label className="mb5">
              {__("Icon Container Size", "timeline-block")}
            </Label>
            {/* <Device /> */}
          </PanelRow>
          <RangeControl
            value={iconStyles.iconContainerSize}
            onChange={(value) =>
              setAttributes({
                iconStyles: updateData(iconStyles, value, "iconContainerSize"),
              })
            }
            min={5}
            max={200}
          />

          <PanelRow>
            <Label className="mb5">{__("Icon Size", "timeline-block")}</Label>
            {/* <Device /> */}
          </PanelRow>
          <RangeControl
            value={iconStyles.iconSize}
            onChange={(value) =>
              setAttributes({
                iconStyles: updateData(iconStyles, value, "iconSize"),
              })
            }
            min={5}
            max={200}
          />

          <TabPanel
            className="bPlTabPanel small mt10"
            activeClass="activeTab"
            tabs={[
              { name: "normal", title: __("Normal", "timeline-block") },
              { name: "hover", title: __("Hover", "timeline-block") },
            ]}
            onSelect={tabController}
          >
            {(tab) => (
              <>
                {"normal" === tab.name && (
                  <>
                    <ColorControl
                      label={__("Icon Color", "timeline-block")}
                      value={iconStyles.iconColor}
                      onChange={(value) =>
                        setAttributes({
                          iconStyles: updateData(
                            iconStyles,
                            value,
                            "iconColor"
                          ),
                        })
                      }
                      defaultColor="null"
                    />
                    <Background
                      label={__("Background Color", "timeline-block")}
                      value={iconStyles.background.normal}
                      onChange={(val) =>
                        setAttributes({
                          iconStyles: updateData(
                            iconStyles,
                            val,
                            "background",
                            "normal"
                          ),
                        })
                      }
                      defaults={{ color: "#000" }}
                      isImage={false}
                    />
                  </>
                )}

                {"hover" === tab.name && (
                  <>
                    <ColorControl
                      label={__("Icon Color", "timeline-block")}
                      value={iconStyles.iconColorHover}
                      onChange={(value) =>
                        setAttributes({
                          iconStyles: updateData(
                            iconStyles,
                            value,
                            "iconColorHover"
                          ),
                        })
                      }
                      defaultColor="null"
                    />

                    <Background
                      label={__("Background Color", "timeline-block")}
                      value={iconStyles.background.hover}
                      onChange={(val) =>
                        setAttributes({
                          iconStyles: updateData(
                            iconStyles,
                            val,
                            "background",
                            "hover"
                          ),
                        })
                      }
                      defaults={{ color: "#000" }}
                      isImage={false}
                    />
                  </>
                )}
              </>
            )}
          </TabPanel>

          {/* Icon Div Border */}
          <div style={{ margin: "15px 0" }}>
            <BorderControl
              label={__("Border:", "timeline-block")}
              value={iconStyles.borderControl}
              onChange={(val) =>
                setAttributes({
                  iconStyles: updateData(iconStyles, val, "borderControl"),
                })
              }
            />
          </div>

          {/* //   <div style={{ margin: "10px 0" }}>
        //     <BBoxControl */}
          {/* //       label={__("Border Radius", "timeline-block")}
        //       values={iconStyle.borderRadius}
        //       onChange={val => setAttributes({ iconStyle: updateData(iconStyle, val, "borderRadius") })}
        //     />
        {/* // </div> */}
        </PanelBody>
      )}

      {theme === "theme-4" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Date", "timeline-block")}
        >
          <PanelRow>
            <Label className="mb5">
              {__("Date Container Size", "timeline-block")}
            </Label>
            {/* <Device /> */}
          </PanelRow>
          <RangeControl
            value={dateStyles.dateContainerSize}
            onChange={(value) =>
              setAttributes({
                dateStyles: updateData(dateStyles, value, "dateContainerSize"),
              })
            }
            min={5}
            max={100}
          />

          <Background
            label={__("Background Color", "timeline-block")}
            value={dateStyles.dateBg}
            onChange={(val) =>
              setAttributes({
                dateStyles: updateData(dateStyles, val, "dateBg"),
              })
            }
            defaults={{ color: "#000" }}
            isImage={false}
          />
        </PanelBody>
      )}

      <PanelBody
        className="bPlPanelBody"
        title={__("Item", "timeline-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Text Color:", "timeline-block")}
          value={itemColor}
          onChange={(val) => setAttributes({ itemColor: val })}
          defaultColor="#333333"
        />

        <ColorControl
          label={__("Background:", "timeline-block")}
          value={itemBg}
          onChange={(val) => setAttributes({ itemBg: val })}
          defaultColor="#ffffff"
        />

        <Typography
          className="mt20"
          label={__("Label Typography:", "timeline-block")}
          value={labelTypo}
          onChange={(val) => setAttributes({ labelTypo: val })}
          defaults={{ fontSize: { desktop: 16, tablet: 16, mobile: 16 } }}
        />

        <ColorControl
          label={__("Label Color:", "timeline-block")}
          value={labelColor}
          onChange={(val) => setAttributes({ labelColor: val })}
          defaultColor="#222222"
        />

        {theme !== "default" && theme !== "timeline-with-accordion" && (
          <>
            <Typography
              className="mt20"
              label={__("Date Typography:", "timeline-block")}
              value={dateStyles.dateTypo}
              onChange={(val) =>
                setAttributes({
                  dateStyles: updateData(dateStyles, val, "dateTypo"),
                })
              }
              defaults={{ fontSize: { desktop: 16, tablet: 16, mobile: 16 } }}
            />

            <ColorControl
              label={__("Date Color:", "timeline-block")}
              value={dateStyles.dateColor}
              onChange={(val) =>
                setAttributes({
                  dateStyles: updateData(dateStyles, val, "dateColor"),
                })
              }
              defaultColor="#222222"
            />
          </>
        )}

        <Typography
          className="mt20"
          label={__("Description Typography:", "timeline-block")}
          value={itemTypo}
          onChange={(val) => setAttributes({ itemTypo: val })}
          defaults={{ fontSize: { desktop: 14, tablet: 14, mobile: 14 } }}
        />

        {(theme === "default" || theme === "timeline-with-accordion") && (
          <>
            <UnitControl
              className="mt20"
              label={__("Border Width:", "timeline-block")}
              labelPosition="left"
              value={itemBorder.width}
              onChange={(val) =>
                setAttributes({ itemBorder: { ...itemBorder, width: val } })
              }
              units={[pxUnit(), emUnit()]}
            />

            <ColorControl
              label={__("Border Color:", "timeline-block")}
              value={itemBorder.color}
              onChange={(val) =>
                setAttributes({ itemBorder: { ...itemBorder, color: val } })
              }
              defaultColor="#cccccc"
            />
          </>
        )}

        {theme !== "default" &&
          theme !== "timeline-with-accordion" &&
          theme !== "theme-7" && (
            <BorderBoxControl
              colors={colors}
              label={__("Border")}
              onChange={(val) => setAttributes({ contentBorder: val })}
              value={contentBorder}
            />
          )}
      </PanelBody>
    </>
  );
};

export default Styles;
