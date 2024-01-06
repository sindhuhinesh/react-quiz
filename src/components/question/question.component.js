import React, { useEffect, useState } from "react";
import Options from "../options/options.components";

import { useNavigate } from 'react-router-dom';
import { calculateMark, fetchQuestions, setSelectedAnswer } from '../../redux/questionsSlice';
import { useDispatch, useSelector } from "react-redux";

import './question.styles.css';

const Question = () => {
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const optionsArray = [];

    const selectedAnswer = useSelector((state) => state.quizQuestions.selectedAnswer);

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
            navigate('/end');
          }
      };

    if (!quizQuestions || currentQuestion >= quizQuestions.length) {
        return <p>Loading...</p>; 
    }

    
    const newData = quizQuestions[currentQuestion].correct_answer;  
    optionsArray.push({ data: newData, isCorrect: true });

    quizQuestions[currentQuestion].incorrect_answers.map((data, index) => {
        optionsArray.push({ data: data, isCorrect: false });
        return null;
    });   
    

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      };
    
    shuffleArray(optionsArray);

    const handleCalculateMark = () => {
        dispatch(calculateMark({optionsArray}));
    }

    const handleCombinedClick = () => {
        handleCalculateMark();
        handleNextQuestion();
      };
    
    const handleOptionClick = (data) => {
        dispatch(setSelectedAnswer(data))
    }   
    

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
                optionsArray.map((option, index) => (
                    <Options option={option} id={index} key={index} onClick={() => handleOptionClick(option.data)} selectedOption={selectedAnswer}/>
                ))
            }
            

            <div className="nextQuextionCard">
                <button className="nextButton" onClick={handleCombinedClick}>Next Question</button>
            </div>
        </div>
             
        
    );
}

export default Question;