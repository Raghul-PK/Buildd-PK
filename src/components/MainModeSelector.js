import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const MainModeSelector = () => {
  return (
    <div className="footer">
    <button className="menu-option" id="home-menu">
        <HomeIcon className='menu-icon'/>
        <div className='menu-text'>Home</div>
    </button>
    <button className="menu-option" id="learn-menu">
        <TipsAndUpdatesIcon className='menu-icon'/>
        <div className='menu-text'>Learn</div>
    </button>
    <button className="menu-option" id="social-menu">
        <Diversity3Icon className='menu-icon'/>
        <div className='menu-text'>Social</div>
    </button>
    </div>
  );
};

export default MainModeSelector;
