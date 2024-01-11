import React from "react";
import { Link } from "react-router-dom";

import './end.css';
import { useSelector } from "react-redux";

const End = () => {

    const quizQuestions = useSelector((state) => state.quizQuestions.questionsList);    
    const totalMark = useSelector((state) => state.quizQuestions.total_mark);

    const maxMark = quizQuestions.length;

    const percentage = (totalMark / maxMark) * 100;

    const bgColorClassName = percentage > 40 ? "greenBackground" : "redBackground";

    return(
        <div className={`endContainer ${bgColorClassName}`}>
            <h2>{percentage > 40 ? 'Awesome' : 'Oops!'}</h2>
            <h4>Your Score is {totalMark} out of {maxMark}</h4>
            <Link to='/'>
                <button className="startOver">Start Over</button>
            </Link>
            
        </div>
    );
}

export default End;