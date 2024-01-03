import React from "react";

import './options.styles.css';

const Options = ({data}) => {
    return(
        <div className="optionCard">
            <button className="option" key={data}>{data}</button>
        </div>
    );
}

export default Options;