import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    const { bgColor, txt, completed } = props;
    const fillerStyle = { 
        width: completed + '%',
        backgroundColor: bgColor
    }
    return (
        <div className="c-progressbar ">
            <div className="header">{txt}</div>
            <div className="circle"><span className="lbl">{completed + '%'}</span></div>
            <div className="container">
                <div className="filler" style={fillerStyle}>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;