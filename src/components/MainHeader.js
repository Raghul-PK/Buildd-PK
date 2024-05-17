import React from 'react';

import MenuIcon from "@mui/icons-material/Menu";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

import {Link} from "react-router-dom";

const MainHeader = (props) => {
  const {mode} = props;
  console.log(mode);

  return (
    <div class="header">
        <div className="usermenu-box">
          <MenuIcon className='usermenu-icon'/>
        </div>
        <div className="mode-selector">
          <Link to="/"><p key="1" className={mode=="home"?"menu-option-on":"menu-option-off"}>Home</p></Link>
          <Link to="/learn"><p key="2" className={mode=="learn"?"menu-option-on":"menu-option-off"}>Learn</p></Link>
          <Link to="/social"><p key="3" className={mode=="social"?"menu-option-on":"menu-option-off"}>Social</p></Link>
          <Link to="/buildd"><p key="4" className={mode=="buildd"?"menu-option-on":"menu-option-off"}>Buildd</p></Link>
        </div>
        <div className="rewards-box">
            <div className="reward-container">
            <FlashOnIcon className='reward-icon'/>3
            </div>
            <div className="reward-container">
            <FavoriteIcon className='reward-icon'/>490
            </div>
        </div>
    </div>
  );
};

export default MainHeader;
