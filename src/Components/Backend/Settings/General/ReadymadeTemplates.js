import { Button, PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { PremiumBadge } from "../../../../../../bpl-tools/ProControls";
import { crownIcon, externalIcon, eyeIcon } from "../../../../../../bpl-tools/utils/icons";
import "./ReadymadeTemplates.scss";

const ReadymadeTemplates = ({ pricingUrl }) => {
  const demoUrl = "https://bblockswp.com/demo/timeline-block-ready-timeline-templete/";
  const buyUrl = pricingUrl || "https://bplugins.com/products/timeline-block/pricing/";

  return (
    <PanelBody
      className="bPlPanelBody tlgbReadymadeTemplatesPanel"
      title={
        <div className="tlgbPanelTitle">
          <span>{__("Readymade 35+ Templates", "timeline-block")}</span>
          <PremiumBadge />
        </div>
      }
      initialOpen={true}
    >
      <div className="tlgbReadymadeActions">
        <Button
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tlgbBtn tlgbDemoBtn"
        >
          {eyeIcon}
          <span>{__("View 35+ Demos", "timeline-block")}</span>
          {externalIcon}
        </Button>

        <Button
          href={buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tlgbBtn tlgbBuyBtn"
        >
          {crownIcon}
          <span>{__("Get 35+ Templates (Pro)", "timeline-block")}</span>
        </Button>
      </div>
    </PanelBody>
  );
};

export default ReadymadeTemplates;
