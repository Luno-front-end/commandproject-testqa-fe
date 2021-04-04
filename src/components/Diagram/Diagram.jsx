import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Vector from './Vector'

function Diagram({ correctAnswers = 0, allQuestions = 12 }) {
  const [right, setRight] = useState(0);
  const [notRight, setNotRight] = useState(100);
  
  useEffect(() => {
    setRight(Math.round((correctAnswers * 100) / allQuestions));
    setNotRight(
      100 - Math.round((correctAnswers * 100) / allQuestions)
    );
  }, [allQuestions, correctAnswers]);

  return (
    <div className='div-diagram'>
      <svg className='svg-diagram' width="156" viewBox="0 0 32 32">
        <circle
        className='circle-diagram'
        r="16"
        cx="16"
        cy="16"
        strokeDasharray={`${notRight} 100`}
        />
        {(right === 0 || right === 100) && <circle fill={right === 0 ? '#D7D7D7' : '#FF6B01'} r="16" cx="16" cy="16" />}
      </svg>
      {correctAnswers !== 0 && <Vector type="R" correctAnswers={correctAnswers} />}
      {correctAnswers !== 12 && <Vector type="N" />}
      <ul className='list-diagram'>
        <li>
          <p className='textR-diagram'>
            <span  className='span-diagram'>{`${right}%`}</span> 
            <span className='text-diagram'> Correct</span>
          </p>
        </li>
        <li>
          <p className='textN-diagram'>
            <span  className='span-diagram'>{`${notRight}% `}</span>
            <span  className='text-diagram'>Incorrect</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

Diagram.propTypes = {
  correctAnswers: PropTypes.number,
  allQuestions: PropTypes.number
}

export default Diagram;
