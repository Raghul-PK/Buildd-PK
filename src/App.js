import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';

function App() {
 return (
   <div>
     <Routes>
       <Route path="/Buildd-PK" element={<Main />} />
       <Route path="/Buildd-PK/quiz" element={<Quiz />} />
     </Routes>
   </div>
 );
}

export default App; 