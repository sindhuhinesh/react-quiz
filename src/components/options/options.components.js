import React from "react";

import './options.styles.css';
import { useSelector } from "react-redux";

const Options = ({option, onClick }) => {

    const { data } = option;

    
    const selectedOption = useSelector((state) => state.quizQuestions.selectedAnswer);
    
    const handleAnswerSelection = () => {
        onClick(data); // Call the parent component's onClick with the selected data
    }

    const optionStyle = {
        backgroundColor: (selectedOption === data) ? "#344a52" : "black"
    };


    return(
        <div className="optionCard">
            <button className="option" onClick={handleAnswerSelection} style={optionStyle}>{data}</button>
        </div>
    );
}

export default Options;