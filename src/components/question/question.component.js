import React from "react";
import Options from "../options/options.components";
import { Link } from "react-router-dom";

import './question.styles.css';

const Question = () => {
    return(
        <div className="questionContainer">
            <div className="questionCard">
                <div className="questionDiv">
                    <h3 className="question">Which of the following is the correct name of React.js?</h3>
                </div>
                <div className="questionNumber">
                    <h4>1/10</h4>
                </div>
            </div>

            <Options />

            <div className="nextQuextionCard">
                <Link to='/end'>
                    <button className="nextButton">Next Question</button>
                </Link>
            </div>
        </div>
    );
}

export default Question;