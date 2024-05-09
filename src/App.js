import { Routes, Route } from 'react-router-dom';
import LearnMode from './pages/LearnMode';
import Quiz from './pages/Quiz';

function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<LearnMode />} />
       <Route path="/quiz" element={<Quiz />} />
     </Routes>
   </div>
 );
}

export default App; 