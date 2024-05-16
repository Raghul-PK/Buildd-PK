import React, {useState, useEffect} from 'react';
import '../Main.css';
import '../SocialMode.css';

import MainHeader from "../components/MainHeader";
import FounderStoriesCard from '../components/Cards/FounderStoriesCard';
import CaseStudiesCard from '../components/Cards/CaseStudiesCard';
import VideosCard from '../components/Cards/VideosCard';
import LessonsCard from '../components/Cards/LessonsCard';

import posts from "../content/posts_content.js";

import PopupNote from '../components/PopupNote';
import '../PopupNote.css'

const SocialMode = () => {
  const [filter, setFilter] = useState("Feed");
  const [content, setContent] = useState(posts);

  useEffect(() => {
    if (filter=="Feed")
        setContent(posts);
    else
      setContent(posts ? posts.filter(post => post.type === filter):[]);
  }, [filter]);

  const handleClick = (filter) => {
    setFilter(filter);
  };

  return (
    <>
      <MainHeader mode={"social"}/>

      <div className='social-container'>
        <div className="side-bar">
          <h1>Topics</h1>
          <p className={filter=="Feed"?"on":""} onClick={() => handleClick("Feed")}>Feed</p>
          <p className={filter=="BusinessShorts"?"on":""} onClick={() => handleClick("BusinessShorts")}>Business Shorts</p>
          <p className={filter=="Videos"?"on":""} onClick={() => handleClick("Videos")}>Videos</p>
          <p className={filter=="CaseStudies"?"on":""} onClick={() => handleClick("CaseStudies")}>Case Studies</p>
          <p className={filter=="Lessons"?"on":""} onClick={() => handleClick("Lessons")}>Lessons</p>
          <p className={filter=="FailedStartups"?"on":""} onClick={() => handleClick("FailedStartups")}>Failed Startups</p>
          <p className={filter=="FounderStories"?"on":""} onClick={() => handleClick("FounderStories")}>Founder stories</p>
          <p className={filter=="Carousels"?"on":""} onClick={() => handleClick("Carousels")}>Carousels</p>
        </div>

        <div className="posts">
          {content && content.map((post, index) => {
            if (post.type === "FounderStories") {
              return <FounderStoriesCard key={index} post_data={post} />;
            } else if (post.type === "Videos") {
              return <VideosCard key={index} post_data={post} />;
            } else if (post.type === "CaseStudies" || post.type === "BusinessShorts") {
              return <CaseStudiesCard key={index} post_data={post} />;
            } else if (post.type === "Lessons") {
              return <LessonsCard key={index} post_data={post} />;
            } else {
              return null;
            }
          })}
        </div>
        
      </div>

      <PopupNote/>
    </>
  );
};

export default SocialMode;
