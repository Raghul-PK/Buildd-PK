import React, {useState} from 'react';

import CardBottomBar from './CardBottomBar';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const LessonsCard = (props) => {
  const {post_data} = props;

  const mistakeLabel = post_data.card_content.mistake_title;
  const lessonLabel = post_data.card_content.lesson_title;
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
                <p style={{ fontSize: '1.5rem' }}>{post_data.coins}</p>
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
        
        <CardBottomBar likes={post_data.likes_count} bookmarks={post_data.bookmarks_count} comments={post_data.comments_count}/>
    </div>
  )
}

export default LessonsCard
