import {
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  TabPanel,
  ToggleControl,
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
    theme8CardBorder,
    theme8CardShadow,
    theme8Animation,
    theme3Animation,
    theme5Animation,
    theme4Animation,
  } = attributes;

  const colors = [
    { name: "Blue", color: "#72aee6" },
    { name: "White", color: "#ffffff" },
    { name: "Black", color: "#000" },
  ];

  return (
    <>
      {theme !== "theme-8" && (
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
      )}

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

        {theme !== "theme-8" && (
          <ColorControl
            label={__("Background:", "timeline-block")}
            value={itemBg}
            onChange={(val) => setAttributes({ itemBg: val })}
            defaultColor="#ffffff"
          />
        )}

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
          theme !== "theme-7" &&
          theme !== "theme-8" && (
            <BorderBoxControl
              colors={colors}
              label={__("Border")}
              onChange={(val) => setAttributes({ contentBorder: val })}
              value={contentBorder}
            />
          )}
      </PanelBody>

      {/* ── Theme 8 Card Style ── */}
      {theme === "theme-8" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Card Style", "timeline-block")}
          initialOpen={true}
        >
          <BorderBoxControl
            colors={colors}
            label={__("Card Border")}
            onChange={(val) => setAttributes({ theme8CardBorder: val })}
            value={theme8CardBorder}
          />

          <Label className="mt20 mb5">{__("Shadow Offset X (px):", "timeline-block")}</Label>
          <RangeControl
            value={theme8CardShadow?.offsetX ?? 5}
            onChange={(val) =>
              setAttributes({ theme8CardShadow: { ...theme8CardShadow, offsetX: val } })
            }
            min={0}
            max={30}
          />

          <Label className="mb5">{__("Shadow Offset Y (px):", "timeline-block")}</Label>
          <RangeControl
            value={theme8CardShadow?.offsetY ?? 5}
            onChange={(val) =>
              setAttributes({ theme8CardShadow: { ...theme8CardShadow, offsetY: val } })
            }
            min={0}
            max={30}
          />

          <ColorControl
            label={__("Shadow Color:", "timeline-block")}
            value={theme8CardShadow?.color ?? "#111111"}
            onChange={(val) =>
              setAttributes({ theme8CardShadow: { ...theme8CardShadow, color: val } })
            }
            defaultColor="#111111"
          />
        </PanelBody>
      )}

      {/* ── Theme 8 Card Animation ── */}
      {theme === "theme-8" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Card Animation", "timeline-block")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Enable Animation", "timeline-block")}
            checked={theme8Animation?.enabled !== false}
            onChange={(val) =>
              setAttributes({ theme8Animation: { ...theme8Animation, enabled: val } })
            }
          />

          {theme8Animation?.enabled !== false && (
            <>
              <SelectControl
                label={__("Animation Type", "timeline-block")}
                value={theme8Animation?.type || "slide-up"}
                options={[
                  { label: "Slide Up ↑",    value: "slide-up" },
                  { label: "Fade In",        value: "fade-in" },
                  { label: "Zoom In",        value: "zoom-in" },
                  { label: "Slide Left ←",   value: "slide-left" },
                  { label: "Slide Right →",  value: "slide-right" },
                ]}
                onChange={(val) =>
                  setAttributes({ theme8Animation: { ...theme8Animation, type: val } })
                }
              />

              <Label className="mt20 mb5">{__("Duration (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme8Animation?.duration ?? 600}
                onChange={(val) =>
                  setAttributes({ theme8Animation: { ...theme8Animation, duration: val } })
                }
                min={100}
                max={2000}
                step={50}
              />

              <Label className="mb5">{__("Stagger Delay per Card (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme8Animation?.delay ?? 120}
                onChange={(val) =>
                  setAttributes({ theme8Animation: { ...theme8Animation, delay: val } })
                }
                min={0}
                max={500}
                step={10}
              />
            </>
          )}
        </PanelBody>
      )}

      {/* ── Theme 3 Card Animation ── */}
      {theme === "theme-3" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Card Animation", "timeline-block")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Enable Animation", "timeline-block")}
            checked={theme3Animation?.enabled !== false}
            onChange={(val) =>
              setAttributes({ theme3Animation: { ...theme3Animation, enabled: val } })
            }
          />

          {theme3Animation?.enabled !== false && (
            <>
              <SelectControl
                label={__("Animation Type", "timeline-block")}
                value={theme3Animation?.type || "slide-up"}
                options={[
                  { label: "Slide Up ↑",    value: "slide-up" },
                  { label: "Fade In",        value: "fade-in" },
                  { label: "Zoom In",        value: "zoom-in" },
                  { label: "Slide Left ←",   value: "slide-left" },
                  { label: "Slide Right →",  value: "slide-right" },
                ]}
                onChange={(val) =>
                  setAttributes({ theme3Animation: { ...theme3Animation, type: val } })
                }
              />

              <Label className="mt20 mb5">{__("Duration (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme3Animation?.duration ?? 600}
                onChange={(val) =>
                  setAttributes({ theme3Animation: { ...theme3Animation, duration: val } })
                }
                min={100}
                max={2000}
                step={50}
              />

              <Label className="mb5">{__("Stagger Delay per Card (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme3Animation?.delay ?? 120}
                onChange={(val) =>
                  setAttributes({ theme3Animation: { ...theme3Animation, delay: val } })
                }
                min={0}
                max={500}
                step={10}
              />
            </>
          )}
        </PanelBody>
      )}

      {/* ── Theme 5 Card Animation ── */}
      {theme === "theme-5" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Card Animation", "timeline-block")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Enable Animation", "timeline-block")}
            checked={theme5Animation?.enabled !== false}
            onChange={(val) =>
              setAttributes({ theme5Animation: { ...theme5Animation, enabled: val } })
            }
          />

          {theme5Animation?.enabled !== false && (
            <>
              <SelectControl
                label={__("Animation Type", "timeline-block")}
                value={theme5Animation?.type || "slide-up"}
                options={[
                  { label: "Slide Up ↑",    value: "slide-up" },
                  { label: "Fade In",        value: "fade-in" },
                  { label: "Zoom In",        value: "zoom-in" },
                  { label: "Slide Left ←",   value: "slide-left" },
                  { label: "Slide Right →",  value: "slide-right" },
                ]}
                onChange={(val) =>
                  setAttributes({ theme5Animation: { ...theme5Animation, type: val } })
                }
              />

              <Label className="mt20 mb5">{__("Duration (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme5Animation?.duration ?? 600}
                onChange={(val) =>
                  setAttributes({ theme5Animation: { ...theme5Animation, duration: val } })
                }
                min={100}
                max={2000}
                step={50}
              />

              <Label className="mb5">{__("Stagger Delay per Card (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme5Animation?.delay ?? 120}
                onChange={(val) =>
                  setAttributes({ theme5Animation: { ...theme5Animation, delay: val } })
                }
                min={0}
                max={500}
                step={10}
              />
            </>
          )}
        </PanelBody>
      )}

      {/* ── Theme 4 Card Animation ── */}
      {theme === "theme-4" && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Card Animation", "timeline-block")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Enable Animation", "timeline-block")}
            checked={theme4Animation?.enabled !== false}
            onChange={(val) =>
              setAttributes({ theme4Animation: { ...theme4Animation, enabled: val } })
            }
          />

          {theme4Animation?.enabled !== false && (
            <>
              <SelectControl
                label={__("Animation Type", "timeline-block")}
                value={theme4Animation?.type || "slide-up"}
                options={[
                  { label: "Slide Up ↑",    value: "slide-up" },
                  { label: "Fade In",        value: "fade-in" },
                  { label: "Zoom In",        value: "zoom-in" },
                  { label: "Slide Left ←",   value: "slide-left" },
                  { label: "Slide Right →",  value: "slide-right" },
                ]}
                onChange={(val) =>
                  setAttributes({ theme4Animation: { ...theme4Animation, type: val } })
                }
              />

              <Label className="mt20 mb5">{__("Duration (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme4Animation?.duration ?? 600}
                onChange={(val) =>
                  setAttributes({ theme4Animation: { ...theme4Animation, duration: val } })
                }
                min={100}
                max={2000}
                step={50}
              />

              <Label className="mb5">{__("Stagger Delay per Card (ms):", "timeline-block")}</Label>
              <RangeControl
                value={theme4Animation?.delay ?? 120}
                onChange={(val) =>
                  setAttributes({ theme4Animation: { ...theme4Animation, delay: val } })
                }
                min={0}
                max={500}
                step={10}
              />
            </>
          )}
        </PanelBody>
      )}
    </>
  );
};

export default Styles;
