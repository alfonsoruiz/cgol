import React, { useState } from 'react';
import Game from './Game';
import './App.css';

function App() {
  const [columns, setColumns] = useState(25);
  const [rows, setRows] = useState(25);

  return (
    <div className='app'>
      <h1>CGOL</h1>
      <Game rows={rows} columns={columns} />
    </div>
  );
}

export default App;
