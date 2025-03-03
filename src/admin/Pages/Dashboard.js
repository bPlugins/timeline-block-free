import React, { useState } from 'react';
import { FaList, FiCornerLeftDown } from '../../utils/icons';
import Layout from '../Layout/Layout';
import UpgradeBtn from './UpgradeBtn';
import { proFeatures } from '../../utils/options';
import defaultVer from '../../../assets/images/demo/defaultVertical-min.png';
import defaultVerUsingEditor from '../../../assets/images/demo/defaultVerWithEditor-min.png';
import accordionUsingEditor from '../../../assets/images/demo/accordionUsingClassicEditor-min.png';
import withIconVerticalBothSideUsingEditor from '../../../assets/images/demo/timelineWithIconBothSideUsingClassicEditor-min.png';
import withIconHorizontalUsingEditor from '../../../assets/images/demo/horizontalUsingClassicEditor-min.png';
import theme3Preview from '../../../assets/images/demo/Theme3Preview-min.png';
import theme3UsingEditor from '../../../assets/images/demo/3usingEditor-min.png';
import theme4Preview from '../../../assets/images/demo/4UsingEditor-min.png';
import theme5Preview from '../../../assets/images/demo/5Preview-min.png';
import theme6Preview from '../../../assets/images/demo/6Preview-min.png';
import findBlock from '../../../assets/images/demo/findBlock-min.png';

const Dashboard = ({ version, isPremium }) => {
  const [theme, setTheme] = useState('default');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const openModal = (imageSrc) => {
    setClickedImage(imageSrc); // Store the clicked image's URL
    setIsModalOpen(true);      // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);    // Close the modal
    setClickedImage(null);    // Clear the clicked image
  };

  const tabs = [
    { id: 'default', label: 'Default', icon: <FaList />, isPro: false },
    { id: 'theme-1', label: 'Theme 1', icon: <FaList />, isPro: true },
    { id: 'theme-2', label: 'Theme 2', icon: <FaList />, isPro: true },
    { id: 'theme-3', label: 'Theme 3', icon: <FaList />, isPro: true },
    { id: 'theme-4', label: 'Theme 4', icon: <FaList />, isPro: true },
    { id: 'theme-5', label: 'Theme 5', icon: <FaList />, isPro: true },
    { id: 'theme-6', label: 'Theme 6', icon: <FaList />, isPro: true },
  ];

  const tabContents = [
    {
      name: "default",
      images: [
        { header: "Default Vertical Timeline", image: defaultVer },
        { header: "Default Vertical Timeline Using Classic Editor", image: defaultVerUsingEditor }
      ]
    },
    {
      name: "theme-1",
      images: [{ header: "Accordion Timeline Using Classic Editor", image: accordionUsingEditor }]
    },
    {
      name: "theme-2",
      images: [
        { header: "Vertical Timeline Both Side Using Classic Editor", image: withIconVerticalBothSideUsingEditor },
        { header: "Horizontal Timeline Using Classic Editor", image: withIconHorizontalUsingEditor }
      ]
    },
    {
      name: "theme-3",
      images: [
        { header: "Theme 3 Preview", image: theme3Preview },
        { header: "Using Classic Editor", image: theme3UsingEditor }
      ]
    },
    {
      name: "theme-4",
      images: [
        { header: "Theme 4 Preview Using Classic Editor", image: theme4Preview }
      ]
    },
    {
      name: "theme-5",
      images: [
        { header: "Theme 5 Preview Using Classic Editor", image: theme5Preview }
      ]
    },
    {
      name: "theme-6",
      images: [
        { header: "Theme 6 Preview Using Classic Editor", image: theme6Preview }
      ]
    },
  ]

  return (
    <Layout version={version}>
      <div className="feature-section">
        {
          isPremium ? (
            <>
              <div className='premium-section'>
                <div className='premium-header'>
                  <h1>🎉 Thank you for installing the Premium Version Timeline Block Plugin!</h1>
                </div>
                <div className='premium-image'>
                  <img src={findBlock} alt="find-block" />
                </div>

              </div>
            </>
          ) : (
            <>
              {/* Demo Section */}
              <div className='tab-section'>
                <div className='dashboard-header-main-section'>
                  <div className="dashboard-header-section">
                    <h1>Thank you for installing the <span className='blockName'>Timeline Block Plugin!</span></h1>
                    <div className='premium-head'>
                      <FiCornerLeftDown className="leftDownIcon" />
                      <h3>Check out some of our amazing premium themes below.</h3>
                    </div>
                  </div>
                  <div>
                    <UpgradeBtn />
                  </div>
                </div>
                <div className="tab-container">
                  <nav className="tabs">
                    <h2 className='ul-head'>Amazing themes:</h2>
                    <ul className="tab-list">
                      {tabs.map(tab => (
                        <li
                          key={tab.id}
                          className={`tab-item ${theme === tab.id ? 'active' : ''}`}
                          onClick={() => setTheme(tab.id)}
                        >
                          <div className="tab-content">
                            {tab.icon}
                            <span className="tab-label">{tab.label}</span>
                            {tab.isPro && <span className="pro-badge">Pro</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <main className="content">
                    {/* Render the dynamic theme content */}
                    {
                      tabContents.map((tabContent, index) => (
                        theme === tabContent.name && (
                          <div key={index} className="theme-content">
                            {tabContent.images.map((image, imgIndex) => (
                              <div key={imgIndex}>
                                <h2>{image.header}</h2>
                                {/* Pass the image URL to openModal */}
                                <img onClick={() => openModal(image.image)} src={image.image} alt={image.header} />
                              </div>
                            ))}
                          </div>
                        )
                      ))
                    }

                    {isModalOpen && (
                      <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" style={{ backgroundImage: `url(${clickedImage})` }} onClick={(e) => e.stopPropagation()}>
                          <button className="close-button" onClick={closeModal}>×</button>
                        </div>
                      </div>
                    )}
                  </main>
                </div>
              </div>

              {/* Pro features */}
              <div className="feature-container">
                <div className="feature-grid">
                  <div className="feature-content">
                    <p className="section-heading">Awesome Premium Features</p>
                    <p className="section-description">
                      Expand your plugin with some awesome some premium features that will give you a better experience.
                    </p>

                    {/* Premium Feature List */}
                    <div className="feature-list">
                      {proFeatures.map((feature) => (
                        <div key={feature.name} className="feature-item">
                          <div className="feature-name">
                            {feature.name}
                          </div>
                          <div className="feature-description">{feature.description}</div>
                        </div>
                      ))}
                    </div>

                    <div className="upgrade-btn">
                      <UpgradeBtn />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </Layout>
  );
};

export default Dashboard;