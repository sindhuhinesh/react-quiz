import React from "react";
import { Link } from "react-router-dom";

import './end.styles.css';

const End = () => {
    return(
        <div className="endContainer">
            <h2>Awesome</h2>
            <h4>Your Score is 50 out of 50</h4>
            <Link to='/'>
                <button className="startOver">Start Over</button>
            </Link>
            
        </div>
    );
}

export default End;