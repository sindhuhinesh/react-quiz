import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { setApiData } from "../../redux/questionsSlice";
import { useDispatch } from "react-redux";

import './generate-api-url.css';

const GenerateApiUrl = () => {

    const [noOfQuestions, setNoOfQuestions] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFetchQuestions = () => {

        if (!noOfQuestions.trim()) {
            alert("Please enter the number of questions.");
            return;
        }

        const apiData = { noOfQuestions, category, difficulty };
        dispatch(setApiData(apiData));
        navigate('/questions');
    }

     return(
        <div className="questionContainer ">
            <div className="generateQuestionCard">
                <label className="titleLabel">Number of Question: </label>
                <input
                    type="number" 
                    className="inputNumber" 
                    value={noOfQuestions}
                    onChange={(e) => setNoOfQuestions(e.target.value)} 
                />
            </div>

            <div className="generateQuestionCard">
                <label className="titleLabel">Select Category:</label>
                <select
                    className="dropdownApi"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="21">Sports</option>
                </select>
            </div>

            <div className="generateQuestionCard">
                <label className="titleLabel">Select Difficulty</label>
                <select
                    className="dropdownApi"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <button className="genrateButton" onClick={handleFetchQuestions}>GENERATE API URL</button>

        </div>
     );
}

export default GenerateApiUrl;