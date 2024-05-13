import { Routes, Route } from 'react-router-dom';

import HomeMode from './pages/HomeMode';
import LearnMode from './pages/LearnMode';
import SocialMode from './pages/SocialMode';
import Quiz from './pages/Quiz';

function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<HomeMode />} />
       <Route path="/learn" element={<LearnMode />} />
       <Route path="/social" element={<SocialMode />} />
       <Route path="/quiz" element={<Quiz />} />
     </Routes>
   </div>
 );
}

export default App; 