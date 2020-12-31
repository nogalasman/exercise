import React from 'react';

function Question(props) {
    const { txt, selectedOption, qtype, onChange } = props;
    return (
        <>
            <h4>{ txt }</h4>
            <input type="radio" id="answery" name={qtype} value="yes" 
                checked={selectedOption === "yes"} onChange={e => onChange(e.target.value)}/>
            <label htmlFor="answery">Yes</label>
            <input type="radio" id="answern" name={qtype} value="no" 
                checked={selectedOption === "no"} onChange={e => onChange(e.target.value)}/>
            <label htmlFor="answern">No</label>
            <input type="radio" id="answerp" name={qtype} value="partial" 
                checked={selectedOption === "partial"} onChange={e => onChange(e.target.value)}/>
            <label htmlFor="answerp">Partial</label>
        </>
    );
};

export default Question;