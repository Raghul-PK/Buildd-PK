import React, {useState} from 'react';

import CardBottomBar from './CardBottomBar';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const LessonsCard = () => {
  const mistakeLabel = "Your startup isn’t successful if it isn’t worth a billion dollars";
  const lessonLabel = "All startups don’t become unicorns. Buildd something that can give you the lifestyle you desire and the happiness you seek.";
  const lessonColor = "#93D89D";
  const mistakeColor = "#FE8A8A";
  const lessonColorBG = "#E9FFEC";
  const mistakeColorBG = "#FFE5E4";

  // Initialize with following stuff
  const [mistake, setMistake] = useState(true);
  const [title, setTitle] = useState(mistakeLabel);
  const [buttonColor, setButtonColor] = useState(lessonColor);
  const [bgColor, setBgColor] = useState(mistakeColorBG);

  const handleClick = () => {
    if (mistake){
        setMistake(false);
        setTitle(lessonLabel);
        setButtonColor(mistakeColor);
        setBgColor(lessonColorBG);
      } else {
        setMistake(true);
        setTitle(mistakeLabel);
        setButtonColor(lessonColor);
        setBgColor(mistakeColorBG);
    };
  };
  
  return (
    <div className="post-card" style={{backgroundColor:bgColor}}>
        <div className="post-card-top-bar">
            <div id="mistake">
                <p style={{fontSize: '1.5rem'}}>{mistake?"Mistake":"Lesson"}</p>
            </div>
            <div id="coins">
                <p style={{ fontSize: '1.5rem', marginRight:'2px' }}>Claim</p>
                <MonetizationOnOutlinedIcon style={{ fontSize: '2rem' }}/>
                <p style={{ fontSize: '1.5rem' }}>75</p>
            </div>
        </div>

        <div className="lessons-card">
            <p style={{fontSize:'1.2rem', fontWeight:'bold'}}>{title}</p>
            <div className="lessons-text-button">
                <p>12+ have shared their experiences</p>
                <button onClick={handleClick} style={{backgroundColor:buttonColor}}>
                    Show {mistake?"Lesson":"Mistake"}
                </button>
            </div>
        </div>
        
        <CardBottomBar/>
    </div>
  )
}

export default LessonsCard
