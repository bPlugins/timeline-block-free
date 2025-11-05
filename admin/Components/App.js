import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ListDemos from "../../../bpl-tools/Admin/Demos/ListDemos";
import Pricing from "../../../bpl-tools/Admin/Pricing/Pricing";
import FeatureCompare from "../../../bpl-tools/Admin/FeatureCompare/FeatureCompare";

import Layout from "./Layout";
import { demoInfo, featureCompareInfo, pricingInfo } from "../utils/data";
import Welcome from "./Welcome";
import Button from "../../../bpl-tools/Components/Button/Button";

const App = (props) => {
  const { name, isPremium, adminUrl } = props;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout {...props} />}>
          <Route index element={<Welcome {...props} />} />

          <Route path="welcome" element={<Welcome {...props} />} />

          {!isPremium && (
            <Route
              path="demos"
              element={
                <ListDemos demoInfo={demoInfo} {...props}>
                  {!isPremium && (
                    <Button
                      href={`${adminUrl}edit.php?post_type=timeline_block&page=tlgb-dashboard#/pricing`}
                      // target="_blank"
                      // rel="noreferrer"
                      variant="secondary"
                    >
                      Buy Now
                    </Button>
                  )}
                </ListDemos>
              }
            />
          )}

          {/* {!isPremium && (
            <Route
              path="purchase"
              element={
                <FSCheckoutForm freemius={freemius} options={{ title: name }} />
              }
            />
          )} */}

          {!isPremium && (
            <Route
              path="pricing"
              element={
                <Pricing
                  pricingInfo={pricingInfo}
                  options={{ title: `${name} Pro` }}
                  {...props}
                >
                  <h2 className="achb-pricing-title">
                    One time payment, Lifetime Access
                  </h2>
                </Pricing>
              }
            />
          )}

          {!isPremium && (
            <Route
              path="feature-comparison"
              element={
                <FeatureCompare
                  featureCompareInfo={featureCompareInfo}
                  {...props}
                />
              }
            />
          )}

          <Route path="*" element={<Welcome {...props} />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
