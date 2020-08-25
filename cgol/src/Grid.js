import React, { useState, useEffect } from 'react';
import Box from './Box';

function Grid(props) {
  const rows = props.rows;
  const columns = props.columns;
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    createGrid();
  }, []);

  useEffect(() => {
    console.log('grid Changed');
  }, [grid]);

  function createGrid() {
    const arr = [];
    for (let x = 0; x < rows; x++) {
      arr[x] = [];
      for (let y = 0; y < columns; y++) {
        arr[x][y] = false;
      }
    }

    setGrid(arr);
  }

  function toggleBox(row, col) {
    grid[row][col] = !grid[row][col];
    setGrid([...grid]);
  }

  return (
    <div className='grid'>
      {grid.map((row, x) =>
        row.map((col, y) => (
          <Box
            key={`${x}${y}`}
            id={`${x}${y}`}
            toggleBox={toggleBox}
            boxState={grid[x][y] === false ? 'off' : 'on'}
          />
        )),
      )}
    </div>
  );
}

export default Grid;
