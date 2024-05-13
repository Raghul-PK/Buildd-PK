import React, {useState, useEffect} from 'react';
import '../Main.css';
import '../SocialMode.css';

import MainHeader from "../components/MainHeader";
import MainModeSelector from "../components/MainModeSelector";
import FounderStoriesCard from '../components/Cards/FounderStoriesCard';
import CaseStudiesCard from '../components/Cards/CaseStudiesCard';
import BusinessShortsCard from '../components/Cards/BusinessShorts';
import LessonsCard from '../components/Cards/LessonsCard';

import posts from "../content/posts_content.js";

const SocialMode = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(posts);
  }, []);

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
          {data && data.map((post, index) => {
            if (post.type === "FounderStories") {
              return <FounderStoriesCard key={index} post_data={post} />;
            } else if (post.type === "BusinessShorts") {
              return <BusinessShortsCard key={index} post_data={post} />;
            } else if (post.type === "CaseStudies") {
              return <CaseStudiesCard key={index} post_data={post} />;
            } else if (post.type === "Lessons") {
              return <LessonsCard key={index} post_data={post} />;
            } else {
              return null;
            }
          })}
        </div>
        
      </div>

      <MainModeSelector/>
    </>
  );
};

export default SocialMode;
