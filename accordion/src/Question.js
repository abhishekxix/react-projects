import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{isExpanded && info}</p>
    </>
  );
};

export default Question;
