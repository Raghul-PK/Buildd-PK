import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';

function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/quiz" element={<Quiz />} />
     </Routes>
   </div>
 );
}

export default App; 