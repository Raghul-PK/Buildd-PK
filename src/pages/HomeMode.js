import React, {useState, useEffect} from 'react';
import '../Main.css';
import '../HomeMode.css';

import MainHeader from "../components/MainHeader";
import MainModeSelector from "../components/MainModeSelector";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {Link} from "react-router-dom";
import journey_cards from "../content/journey_cards.js";

import PopupNote from '../components/PopupNote';
import '../PopupNote.css'

const SocialMode = () => {
  const [journeyCards, setJourneyCards] = useState(journey_cards);
  const [journeyNo, setJourneyNo] = useState(0);
  const [curJourneyCard, setCurJourneyCard] = useState(journey_cards[0]);

  useEffect(() => {
    setCurJourneyCard(journeyCards[journeyNo]);
  }, [journeyNo]);

  const prevClick = () => {
    if (journeyNo==0)
      setJourneyNo(5);
    else
      setJourneyNo(journeyNo-1);
  }

  const nextClick = () => {
    if (journeyNo==5)
      setJourneyNo(0);
    else
      setJourneyNo(journeyNo+1);
  }

  return (
    <>
      <MainHeader/>

      <div className="home-container">
        <div className='streak-card'>
          <img src="images/Journey/image.png" />
        </div>

        <div className='journey-card'>
          <div className='journey-title'>
            <ArrowBackIosIcon onClick={prevClick} className='back-button' />
              {curJourneyCard.title}
            <ArrowForwardIosIcon onClick={nextClick} className='next-button' />
          </div>
          <div className='journey-body'>
            <img src={curJourneyCard.img_path} />
            <div className='path-cards'>
              {curJourneyCard && curJourneyCard.cards.map((card, index) => {
                return (<div className='path-card'>
                  <img src={card}/>
                  <Link to="/quiz"><button>Continue</button></Link>
                </div>)
              })}
            </div>
          </div>
        </div>
      </div>

      <PopupNote/>
      <MainModeSelector mode={"home"}/>
    </>
  )
}

export default SocialMode;
