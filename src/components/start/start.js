import React from "react";
import GenerateApiUrl from "../genrateApiUrl/generateApi";


import './start.css';

const Start = () => {
    return(
        <div className="startCard">
            {/* <h1 className="title">Basic General Knowledge Quiz</h1> */}
            <GenerateApiUrl />
            {/* <Link to='/questions'>
                <button className="startButton">Start Quiz</button>
            </Link> */}
            
        </div>
    );
}

export default Start;