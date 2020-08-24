import React, { useState } from 'react';
import Controls from './Controls';
import Grid from './Grid';
import GenerationCounter from './GenerationCounter';
import './App.css';

function App() {
  const [columns, setColumns] = useState(25);
  const [rows, setRows] = useState(25);
  const [generation, setGeneration] = useState(0);

  return (
    <div className='app'>
      <h1>CGOL</h1>
      <Controls />
      <Grid rows={rows} columns={columns} />
      <GenerationCounter generations={generation} />
    </div>
  );
}

export default App;
