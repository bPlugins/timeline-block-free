import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ListDemos from "../../../bpl-tools/Admin/Demos/ListDemos";
import FSCheckoutButton from "../../../bpl-tools/Admin/FSCheckoutButton/FSCheckoutButton";
import FSCheckoutForm from "../../../bpl-tools/Admin/FSCheckoutForm/FSCheckoutForm";
import Pricing from "../../../bpl-tools/Admin/Pricing/Pricing";
import FeatureCompare from "../../../bpl-tools/Admin/FeatureCompare/FeatureCompare";
// import PopularPlugins from "../../../bpl-tools/Admin/";

import Layout from "./Layout";
import { demoInfo, featureCompareInfo, pricingInfo } from "../utils/data";
import Welcome from "./Welcome";
import PopularPlugins from "./PopularPlugins";

const App = (props) => {
  const { name, isPremium, freemius } = props;

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
                    <FSCheckoutButton
                      {...{
                        freemius,
                        options: { title: name },
                      }}
                    >
                      Buy Now
                    </FSCheckoutButton>
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
