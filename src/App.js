import { Routes, Route } from 'react-router-dom';

import Start from './components/start/start';
import Question from './components/question/question';
import End from './components/end/end';

import './App.css';


function App() {
  

  return (
      <div className="App">
     
         <Routes>
           <Route path='/' element={ <Start /> }/>
           <Route path='questions' element={ <Question /> }/>
           <Route path='end' element={ <End /> }/>
         </Routes>
      </div>    
  );
}

export default App;
