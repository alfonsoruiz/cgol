import React from 'react';

function Controls(props) {
  function handlePlay() {
    props.play();
  }

  function handleStop() {
    props.stop();
  }

  function handleClear() {
    props.clear();
  }
  return (
    <div className='controls'>
      <button onClick={() => handleClear()}>Clear</button>
      <button onClick={() => handlePlay()}>Play</button>
      <button onClick={() => handleStop()}>Stop</button>
    </div>
  );
}

export default Controls;
