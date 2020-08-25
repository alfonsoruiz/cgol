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
        arr[x][y] = 0;
      }
    }

    setGrid(arr);
  }

  function toggleBox(row, col) {
    console.log(grid[row][col]);
    setGrid((grid[row][col] = 1));
    console.log(grid[row][col]);
    console.log(grid);
  }

  return (
    <div className='grid'>
      {grid.map((row, x) =>
        row.map((col, y) => (
          <Box
            key={`${x}${y}`}
            id={`${x}${y}`}
            toggleBox={toggleBox}
            boxState={grid[x][y] === 0 ? 'off' : 'on'}
          />
        )),
      )}
    </div>
  );
}

export default Grid;
