import React from 'react';

function GenerationCounter(props) {
  return (
    <div className='gc'>
      <h3>Generation: {props.generation}</h3>
    </div>
  );
}

export default GenerationCounter;
