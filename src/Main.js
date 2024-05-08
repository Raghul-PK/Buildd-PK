import React from 'react';
import './Main.css';

import MenuIcon from "@mui/icons-material/Menu";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Diversity3Icon from '@mui/icons-material/Diversity3';

let learningPaths = [
  "images/learningPaths/1.jpeg",
  "images/learningPaths/2.jpeg",
  "images/learningPaths/3.jpeg",
  "images/learningPaths/4.jpeg",
  "images/learningPaths/5.jpeg",
  "images/learningPaths/6.jpeg",
  "images/learningPaths/7.jpeg",
  "images/learningPaths/8.jpeg",
  "images/learningPaths/9.jpeg",
  "images/learningPaths/10.jpeg"
]

const Main = () => {
  return (
    <>
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

      <div className="screen">
        <h1>EXPLORE NEW PATHS</h1>
        <div className="grid-container">
          <div className="card"><img src={learningPaths[0]}/></div>
          <div className="card"><img src={learningPaths[1]}/></div>
          <div className="card"><img src={learningPaths[2]}/></div>
          <div className="card"><img src={learningPaths[3]}/></div>
          <div className="card"><img src={learningPaths[4]}/></div>
          <div className="card"><img src={learningPaths[5]}/></div>
          <div className="card"><img src={learningPaths[6]}/></div>
          <div className="card"><img src={learningPaths[7]}/></div>
          <div className="card"><img src={learningPaths[8]}/></div>
          <div className="card"><img src={learningPaths[9]}/></div>
        </div>
      </div>

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
    </>
  )
}

export default Main
