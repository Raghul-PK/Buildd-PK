import React from 'react';
import './Main.css';

import MenuIcon from "@mui/icons-material/Menu";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import Diversity3Icon from '@mui/icons-material/Diversity3';

let learningPathCards = [
  {
    "img_path": "images/learningPaths/1.jpeg",
    "caption": "Business models 101"
  },
  {
    "img_path": "images/learningPaths/2.jpeg",
    "caption": "Top razors for decision making"
  },
  {
    "img_path": "images/learningPaths/3.jpeg",
    "caption": "Business vocabulary 101"
  },
  {
    "img_path": "images/learningPaths/4.jpeg",
    "caption": "Business myths busted"
  },
  {
    "img_path": "images/learningPaths/5.jpeg",
    "caption": "Product myths busted"
  },
  {
    "img_path": "images/learningPaths/6.jpeg",
    "caption": "Psychological biases"
  },
  {
    "img_path": "images/learningPaths/7.jpeg",
    "caption": "11 business frameworks"
  },
  {
    "img_path": "images/learningPaths/8.jpeg",
    "caption": "Basics of digital marketing"
  },
  {
    "img_path": "images/learningPaths/9.jpeg",
    "caption": "The art of copywriting"
  },
  {
    "img_path": "images/learningPaths/10.jpeg",
    "caption": "SEO: Basics and Beyond"
  }
];

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
          {learningPathCards.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.img_path} alt={card.caption} />
              <p>{card.caption}</p>
            </div>
          ))}
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

export default Main;
