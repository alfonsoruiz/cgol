import React, { useState, useEffect } from 'react';
import Box from './Box';

function Grid(props) {
  const rows = props.rows;
  const columns = props.columns;
  const [grid, setGrid] = useState([]);

  // Run once when component mounts
  useEffect(() => {
    createGrid();
  }, []);

  // Update on every grid change
  useEffect(() => {}, [grid]);

  // Creates 2D array with n rows and columns
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

  // Toggle value of box at specified grid location
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
            row={x}
            col={y}
            toggleBox={toggleBox}
            boxState={grid[x][y] === true ? true : false}
          />
        )),
      )}
    </div>
  );
}

export default Grid;
