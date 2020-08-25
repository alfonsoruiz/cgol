import React, { useState } from 'react';

function Box(props) {
  const id = props.id;
  const state = props.boxState;

  function selectBox(id) {
    const row = id[0];
    const col = id[1];

    props.toggleBox(row, col);
  }

  return (
    <div className='box' onClick={() => selectBox(id)}>
      {state}
    </div>
  );
}

export default Box;
