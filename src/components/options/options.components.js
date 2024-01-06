import React, { useMemo } from "react";

import './options.styles.css';

const Options = ({option, onClick, selectedOption }) => {

    const { data } = option;
    
    const handleAnswerSelection = () => {
        onClick(data); // Call the parent component's onClick with the selected data
    }

    const optionStyle = useMemo(() => {
        return {
          backgroundColor: selectedOption === data ? "green" : "black",
        };
    }, [selectedOption, data]);

    return(
        <div className="optionCard">
            <button className="option" onClick={handleAnswerSelection} style={optionStyle}>{data}</button>
        </div>
    );
}

export default Options;