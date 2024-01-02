import React from "react";

import './options.styles.css';

const Options = () => {
    return(
        <div className="optionCard">
            <button className="option">React</button>
            <button className="option">React.js</button>
            <button className="option">ReactJs</button>
            <button className="option">All of the above</button>
        </div>
    );
}

export default Options;