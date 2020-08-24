import React from 'react';
import StartButton from './StartButton';
import StopButton from './StopButton';

function Controls(props) {
  return (
    <div className='controls'>
      <StartButton />
      <StartButton />
    </div>
  );
}

export default Controls;
