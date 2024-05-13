import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Diversity3Icon from '@mui/icons-material/Diversity3';

import {Link} from "react-router-dom";

const MainModeSelector = (props) => {
  const {mode} = props;

  return (
    <div className="footer">
      <Link to="/">
        <button className={mode=="home"?"menu-option-on":"menu-option"} id="home-menu">
            <HomeIcon className='menu-icon'/>
            <div className='menu-text'>Home</div>
        </button>
      </Link>
      

      <Link to="/learn">
        <button className={mode=="learn"?"menu-option-on":"menu-option"} id="learn-menu">
            <TipsAndUpdatesIcon className='menu-icon'/>
            <div className='menu-text'>Learn</div>
        </button>
      </Link>
      
      <Link to="/social">
        <button className={mode=="social"?"menu-option-on":"menu-option"} id="social-menu">
            <Diversity3Icon className='menu-icon'/>
            <div className='menu-text'>Social</div>
        </button>
      </Link>
    </div>
  );
};

export default MainModeSelector;
