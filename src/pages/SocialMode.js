import React from 'react';
import '../Main.css';
import '../SocialMode.css';

import MainHeader from "../components/MainHeader";
import MainModeSelector from "../components/MainModeSelector";
import FounderStoriesCard from '../components/Cards/FounderStoriesCard';
import CaseStudiesCard from '../components/Cards/CaseStudiesCard';
import BusinessShortsCard from '../components/Cards/BusinessShorts';
import LessonsCard from '../components/Cards/LessonsCard';

import {Link} from "react-router-dom";

const SocialMode = () => {
  return (
    <>
      <MainHeader/>

      <div className='social-container'>
        <div className="side-bar">
          <h1>Topics</h1>
          <p>Feed</p>
          <p>Business Shorts</p>
          <p>Videos</p>
          <p>Case Studies</p>
          <p>Lessons</p>
          <p>Failed Startups</p>
          <p>Founder stories</p>
          <p>Carousels</p>
        </div>

        <div className="posts">
            <FounderStoriesCard/>
            <BusinessShortsCard/>
            <CaseStudiesCard/>
            <LessonsCard/>
            <FounderStoriesCard/>

        </div>
      </div>

      <MainModeSelector/>
    </>
  );
};

export default SocialMode;
