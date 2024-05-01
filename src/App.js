import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import './App.css'; // Import your CSS file for styling
import Confetti from 'react-confetti';

let questions = [
  {
      "type": "MCQ",
      "img_path": "question_images/1.jpg",
      "options": ["The process of buying products", 
          "The process of selling and promoting products and services",
          "Learning about market trends"],
      "answer": 1,
      "explanation": ""
  },
  {
      "type": "MCQ",
      "img_path": "question_images/2.jpg",
      "options": ["Best friends", 
          "Target audience",
          "Neighbours"],
      "answer": 1,
      "explanation": "\"Target audience\" refers to the specific group of people or demographic that a product, service, or message is intended to reach and resonate with."
  },
  {
      "type": "MCQ",
      "img_path": "question_images/3.jpg",
      "options": ["Market Research", 
          "Creating a Marketing plan",
          "Product Launch"],
      "answer": 0,
      "explanation": ""
  },
  {
      "type": "MCQ",
      "img_path": "question_images/4.jpg",
      "options": ["Anyone who buys products", 
          "All people in the market",
          "A specific group of potential customers"],
      "answer": 2,
      "explanation": ""
  },
  {
      "type": "MCQ",
      "img_path": "question_images/5.jpg",
      "options": ["Interviewing people to help sell the lemonade", 
          "Keeping track of how many cups of lemonade you've sold",
          "Shouting \"Fresh lemonade here!\" to attract customers"],
      "answer": 2,
      "explanation": ""
  },
  {
      "type": "MCQ",
      "img_path": "question_images/7.jpg",
      "options": ["All parents", 
          "All children",
          "Parents with young children"],
      "answer": 2,
      "explanation": "The primary target audience is the main group of people the company wants to reach and sell their products to. In this scenario, the toy company's primary target audience is parents with young children because they are the ones who will likely purchase the educational toys for their kids. "
  },
  {
      "type": "MCQ",
      "img_path": "question_images/8.jpg",
      "options": ["Target marketing", 
          "Market Research",
          "Branding"],
      "answer": 1,
      "explanation": ""
  },
  {
      "type": "MCQ",
      "img_path": "question_images/9.jpg",
      "options": ["Target audience", 
          "Favorite sport",
          "Best drink flavour"],
      "answer": 0,
      "explanation": ""
  }
];

function App() {
  const [buttonColours, setButtonColours] = useState([['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2']]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionNo, setQuestionNo] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOptionClick = (index) => {
    console.log(index);
    setSelectedOption(index);
    const updatedButtonColours = [['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2']];
    updatedButtonColours[index] = ['#FEFFC1', '#FFC369'];
    setButtonColours(updatedButtonColours);
  };

  const handleSubmitClick = () => {
    if (selectedOption==null)
      return;
    if (selectedOption==questions[questionNo]["answer"]) {
      const updatedButtonColours = [['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2']];
      updatedButtonColours[selectedOption] = ['#E9FFEC', '#3FB14E']; // turn correct/selected button green
      setButtonColours(updatedButtonColours);
      setAnswerStatus("correct");
    }
    else {
      // turn selected button red
      // turn the correct button green
      const updatedButtonColours = [['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2']];
      updatedButtonColours[selectedOption] = ['#FFE5E4', '#FF3130']; // turn selected button red
      updatedButtonColours[questions[questionNo]["answer"]] = ['#E9FFEC', '#3FB14E']; // turn correct button green
      setButtonColours(updatedButtonColours);
      setAnswerStatus("wrong");
    }
  };

  const GotoNextQuestion = () => {
    setProgress(12.5*(questionNo+1));
    setQuestionNo(questionNo+1);
    setButtonColours([['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2'], ['#F9F4F2', '#E3E2E2']]);
    setSelectedOption(null);
    setAnswerStatus(null);
    setShowConfetti(false);
  }

  const LoadingBar = () => {  
    return (
      <div className="loading-bar-container">
        <div className="loading-bar" style={{ width: `${progress}%` }}></div>
      </div>
    );
  };

  const SubmitButton= () => {
    if (answerStatus=="correct")
    {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      return (
      <div className="bottomBar"
        style={{border: '1px solid black', backgroundColor: '#E9FFEC', color:'#3FB14E', borderColor:'#3FB14E', borderRadius: '10px'}} >
        <p style={{fontWeight: '700', fontSize:'large'}}>Amazing! That's correct</p>
        <p>{questions[questionNo]["explanation"]}</p>
        <Button variant="outlined" 
          style={{backgroundColor: '#3FB14E', border: '0px', borderRadius: '5px'}}
          onClick={() => GotoNextQuestion()}>Next Question</Button>
      </div>);
    } else if (answerStatus=="wrong")
    {
      return (
      <div className="bottomBar"
        style={{border: '1px solid black', backgroundColor: '#FFE5E4', color:'#FF3130', borderColor:'#FF3130', borderRadius: '10px'}} >
        <p style={{fontWeight: '700', fontSize:'large'}}>Uh-oh! That's incorrect</p>
        <p>{questions[questionNo]["explanation"]}</p>
        <Button variant="outlined" 
          style={{backgroundColor: '#FF3130', border: '0px', borderRadius: '5px'}}
          onClick={() => GotoNextQuestion()}>Next Question</Button>
      </div>);
    }

    return (<div className="bottomBar">
      <Button variant="outlined"
        style={{backgroundColor:'#F9F4F2', color:'black', borderColor:'#E3E2E2', border: '1px solid', borderRadius: '5px'}}
        onClick={() => handleSubmitClick()}>Submit</Button>
    </div>);
  }

  return (
    <div className="App">
      <LoadingBar/>
      <div className="container">
        <div className="leftHalf">
          <img src={questions[questionNo]["img_path"]} className="image"/>
        </div>
        <div className="rightHalf">
          {questions[questionNo]["options"].map((text, index) => (
            <Button 
              key={index} 
              variant="outlined" 
              style={{ backgroundColor: buttonColours[index][0], 
                        borderColor: buttonColours[index][1], 
                        }}
              onClick={() => handleOptionClick(index)}>
                {text}
            </Button>
          ))}
        </div>
        {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      </div>
      <SubmitButton/>
    </div>
  );
}

export default App;
