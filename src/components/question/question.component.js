import React, { useEffect, useState } from "react";
import Options from "../options/options.components";

import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../../redux/questionsSlice';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './question.styles.css';

const Question = () => {
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const optionsArray = [];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Effect triggered");
        dispatch(fetchQuestions());
      }, [dispatch]);

    const quizQuestions = useSelector((state) => state.quizQuestions.questionsList);

    const handleNextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            // If it's the last question, navigate to the '/end' route
            navigate('/end');
          }
      };

    if (!quizQuestions || currentQuestion >= quizQuestions.length) {
        return <p>Loading...</p>; 
    }

    
    const newData = quizQuestions[currentQuestion].correct_answer;  
    optionsArray.push(newData);

    quizQuestions[currentQuestion].incorrect_answers.map((data, index) => (
        optionsArray.push(data)
    ));  

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      };
    
    shuffleArray(optionsArray);

    return(
        
        <div className="questionContainer" >
            <div className="questionCard">
                <div className="questionDiv">
                    <h3 className="question">{quizQuestions[currentQuestion].question}</h3>
                </div>
                <div className="questionNumber">
                    <h4>{currentQuestion + 1}/{quizQuestions.length}</h4>
                </div>
            </div>
            {
                optionsArray.map((data, index) => (
                    <Options data={data} key={data} />
                ))
            }
            

            <div className="nextQuextionCard">
                {/* <Link to='/end'> */}
                    <button className="nextButton" onClick={handleNextQuestion}>Next Question</button>
                {/* </Link> */}
            </div>
        </div>
             
        
    );
}

export default Question;