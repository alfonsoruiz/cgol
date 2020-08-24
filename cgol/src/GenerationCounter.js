import React, { useState } from 'react';

function GenerationCounter(props) {
  return (
    <div>
      <h3>Generations: {props.generations}</h3>
    </div>
  );
}

export default GenerationCounter;
