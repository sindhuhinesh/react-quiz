import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchQuestions } from './redux/questionsSlice';
import Start from './components/start/start.component';
import Question from './components/question/question.component';
import End from './components/end/end.component';

import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchQuestions());
  }, []);

  const { quizQuestions } = useSelector((state) => state.quizQuestions)

  return (
      <div className="App">
        <h2 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>{quizQuestions}</h2>
        <Routes>
          <Route path='/' element={ <Start /> }/>
          <Route path='questions' element={ <Question /> }/>
          <Route path='end' element={ <End /> }/>
        </Routes>
      </div>    
  );
}

export default App;
