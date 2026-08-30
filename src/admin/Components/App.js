import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Blocks from '../../../../bpl-tools/Admin/Blocks';
import Welcome from '../../../../bpl-tools/Admin/Welcome';
import Demos from '../../../../bpl-tools/Admin/Demos';
import Pricing from '../../../../bpl-tools/Admin/Pricing';
import FeatureCompare from '../../../../bpl-tools/Admin/FeatureCompare';
import Activation from '../../../../bpl-tools/Admin/Activation';
import OurPlugins from '../../../../bpl-tools/Admin/OurPlugins';

import Layout from './Layout';
import { demoInfo, pricingInfo, welcomeInfo } from '../utils/data';
import blocks from '../utils/blocks';
import useBlocksSettings from '../utils/useBlocksSettings';
import Settings from './Settings';

const App = (props) => {
  const { isPremium, hasPro, adminUrl, action, nonce } = props;

  const { data, internalStatus, saveToBackend } = useBlocksSettings(action, nonce);

  return <Router>
    <Routes>
      <Route path='/' element={<Layout {...props} />}>
        <Route index element={<Welcome {...props} {...welcomeInfo(adminUrl)} />} />

        <Route path='welcome' element={<Welcome {...props} {...welcomeInfo(adminUrl)} />} />

        <Route path='blocks' element={<Blocks
          isPremium={isPremium}
          disabledBlocks={data}
          onChange={saveToBackend}
          allBlocks={blocks}
          status={internalStatus}
        />} />

        <Route path='demos' element={<Demos {...props} demoInfo={demoInfo} />} />

        {!isPremium && <Route path='pricing' element={<Pricing pricingInfo={pricingInfo} options={{}} {...props} />} />}

        {!isPremium && <Route path='feature-comparison' element={<FeatureCompare plans={['free', 'pro']} {...props} />} />}

        {hasPro && <Route path='activation' element={<Activation {...props} />} />}

        <Route path='settings' element={<Settings {...props} />} />

        <Route path='our-plugins' element={<OurPlugins {...props} />} />

        <Route path='*' element={<Navigate to='/welcome' replace />} />
      </Route>
    </Routes>
  </Router>
}
export default App;