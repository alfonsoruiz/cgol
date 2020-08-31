import React from 'react';

function Presets(props) {
  function handlePyrimid() {
    props.pyrimidPreset();
  }

  function handleBox() {
    props.boxPreset();
  }

  function handleArrow() {
    props.arrowPreset();
  }

  function handleRandom() {
    props.randomPreset();
  }
  return (
    <div className='presets'>
      <button onClick={() => handlePyrimid()}>Pyrimid</button>
      <button onClick={() => handleBox()}>Box</button>
      <button onClick={() => handleArrow()}>Arrow</button>
      <button onClick={() => handleRandom()}>Random</button>
    </div>
  );
}

export default Presets;
