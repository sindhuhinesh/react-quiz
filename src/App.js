import { Routes, Route } from 'react-router-dom';

import Start from './components/start/start.component';
import Question from './components/question/question.component';
import End from './components/end/end.component';

import './App.css';


function App() {
  

  return (
      <div className="App">
          {/* {quizQuestions.map((data, index) => (
                <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>{data.question}</h2>
            ))} */}
         <Routes>
           <Route path='/' element={ <Start /> }/>
           <Route path='questions' element={ <Question /> }/>
           <Route path='end' element={ <End /> }/>
         </Routes>
      </div>    
  );
}

export default App;
