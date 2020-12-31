import { useState, useEffect } from 'react';
import Question from './Question';
import './Questions.css';

function Questions(props){
    const [all, setAll] = useState('');
    const [java, setJava] = useState('');
    const [python, setPython] = useState('');

    useEffect(()=>{
        if (all === "no"){
            if (java === ''){
                setJava('no');
            }
            if (python === ''){
                setPython('no');
            }
        }
    }, [all, java, python]);

    return (
        <div className="c-questions">
            <Question txt="Have you Programmed before?" selectedOption={all} qtype="all" onChange={val => setAll(val)}></Question>
            <Question txt="Have you Programmed in Java?" selectedOption={java} qtype="java" onChange={val => setJava(val)}></Question>
            <Question txt="Have you Programmed in Python?" selectedOption={python} qtype={python} onChange={val => setPython(val)}></Question>
        </div>
    );
}

export default Questions;