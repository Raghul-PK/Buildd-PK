import React from 'react';

import MenuIcon from "@mui/icons-material/Menu";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MainHeader = () => {
  return (
    <div class="header">
        <div className="usermenu-box">
        <MenuIcon className='usermenu-icon'/>
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
