import React from "react";
import { Link } from "react-router-dom";

import './start.styles.css';

const Start = () => {
    return(
        <div className="startCard">
            <h1 className="title">Basic General Knowledge Quiz</h1>
            <Link to='/questions'>
                <button className="startButton">Start Quiz</button>
            </Link>
            
        </div>
    );
}

export default Start;