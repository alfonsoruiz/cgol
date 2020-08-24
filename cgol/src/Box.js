import React, { useState } from 'react';

function Box(props) {
  const [on, setOn] = useState(0);

  return <div className='box'></div>;
}

export default Box;
