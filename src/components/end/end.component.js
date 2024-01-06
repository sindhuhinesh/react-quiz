import React from "react";
import { Link } from "react-router-dom";

import './end.styles.css';
import { useSelector } from "react-redux";

const End = () => {

    const total_mark = useSelector((state) => state.quizQuestions.total_mark);
    const bgColorClassName = total_mark > 4 ? "greenBackground" : "redBackground";

    return(
        <div className={`endContainer ${bgColorClassName}`}>
            <h2>{total_mark > 4 ? 'Awesome' : 'Oops!'}</h2>
            <h4>Your Score is {total_mark} out of 50</h4>
            <Link to='/'>
                <button className="startOver">Start Over</button>
            </Link>
            
        </div>
    );
}

export default End;