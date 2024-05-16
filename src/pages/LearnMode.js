import React from 'react';
import '../Main.css';
import '../LearnMode.css';

import MainHeader from "../components/MainHeader";

import {Link} from "react-router-dom";

import PopupNote from '../components/PopupNote';
import '../PopupNote.css'

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

const LearnMode = () => {
  return (
    <>
      <MainHeader mode={"learn"}/>

      <div className="learn-container">
        <h1>EXPLORE NEW PATHS</h1>
        <div className="grid-container">
          {learningPathCards.map((card, index) => (
            <Link to="/quiz">
              <div className="lesson-card" key={index}>
                <img src={card.img_path} alt={card.caption} />
                <p>{card.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <PopupNote/>
    </>
  )
}

export default LearnMode;
