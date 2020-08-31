import React, { useState } from 'react';

function Box(props) {
  const id = props.id;
  const row = props.row;
  const col = props.col;
  const boxState = props.boxState;
  const running = props.running;

  // Handle click on box component if not running
  function handleBoxClick() {
    if (running) {
      return;
    } else {
      props.toggleBox(row, col);
    }
  }

  return (
    <div
      className={`box ${boxState === true ? 'on' : 'off'}`}
      onClick={() => handleBoxClick(id)}
    >
      {boxState}
    </div>
  );
}

export default Box;
