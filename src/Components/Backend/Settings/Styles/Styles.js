import {
  PanelBody,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Background,
  ColorControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { emUnit, pxUnit } from "../../../../../../bpl-tools/utils/options";
import { updateData } from "../../../../utils/functions";

const Styles = ({ attributes, setAttributes }) => {
  const {
    barBackground,
    barDotColor,
    itemBg,
    itemColor,
    itemTypo,
    itemBorder,
    labelTypo,
    labelColor,
    theme,
    timelineBar,
  } = attributes;


  return (
    <>
      { (theme === "default" || theme === "timeline-with-accordion") && (
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
      </PanelBody>
    </>
  );
};

export default Styles;
