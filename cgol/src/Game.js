import React, { useState, useEffect } from 'react';
import Box from './Box';
import Controls from './Controls';
import GenerationCounter from './GenerationCounter';
import Presets from './Presets';

function Grid(props) {
  const rows = props.rows;
  const columns = props.columns;
  let [speed, setSpeed] = useState(500);
  let [intervalId, setIntervalId] = useState(null);
  let [generation, setGeneration] = useState(0);
  const [grid, setGrid] = useState([]);
  const [running, setRunning] = useState(false);

  // Run once when component mounts
  useEffect(() => {
    createGrid();
  }, []);

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
    let gridCopy = arrayClone(grid);
    gridCopy[row][col] = !gridCopy[row][col];
    setGrid([...gridCopy]);
  }

  function play() {
    setRunning(true);
    clearInterval(intervalId);
    intervalId = setIntervalId(setInterval(simulate(), speed));
  }

  function stop() {
    setRunning(false);
    clearInterval(intervalId);
  }

  function clear() {
    setGeneration(0);
    setRunning(false);
    createGrid();
  }

  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function pyrimidPreset() {
    let gridOne = grid;
    let gridTwo = arrayClone(gridOne);

    gridTwo[5][5] = true;
    gridTwo[5][6] = true;
    gridTwo[5][7] = true;
    gridTwo[5][8] = true;
    gridTwo[5][9] = true;
    gridTwo[4][5] = true;
    gridTwo[4][9] = true;
    gridTwo[3][6] = true;
    gridTwo[3][8] = true;
    gridTwo[2][7] = true;
    setGrid(gridTwo);
  }

  function boxPreset() {
    let gridOne = grid;
    let gridTwo = arrayClone(gridOne);

    gridTwo[5][5] = true;
    gridTwo[5][6] = true;
    gridTwo[5][7] = true;
    gridTwo[6][5] = true;
    gridTwo[7][5] = true;
    gridTwo[7][6] = true;
    gridTwo[7][7] = true;
    gridTwo[6][7] = true;
    setGrid(gridTwo);
  }

  function arrowPreset() {
    let gridOne = grid;
    let gridTwo = arrayClone(gridOne);

    gridTwo[10][10] = true;
    gridTwo[9][11] = true;
    gridTwo[8][12] = true;
    gridTwo[7][13] = true;
    gridTwo[6][12] = true;
    gridTwo[8][14] = true;
    gridTwo[6][14] = true;

    setGrid(gridTwo);
  }

  function randomPreset() {
    let gridOne = grid;
    let gridTwo = arrayClone(gridOne);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridTwo[i][j] = true;
        }
      }
    }

    setGrid(gridTwo);
  }

  // Run simulation
  function simulate() {
    console.log('simulate');
    let gridOne = grid;
    let gridTwo = arrayClone(grid);

    // If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
    // If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let count = 0;

        if (i > 0) if (gridOne[i - 1][j]) count++;
        if (i > 0 && j > 0) if (gridOne[i - 1][j - 1]) count++;
        if (i > 0 && j < columns - 1) if (gridOne[i - 1][j + 1]) count++;
        if (j < columns - 1) if (gridOne[i][j + 1]) count++;
        if (j > 0) if (gridOne[i][j - 1]) count++;
        if (i < rows - 1) if (gridOne[i + 1][j]) count++;
        if (i < rows - 1 && j > 0) if (gridOne[i + 1][j - 1]) count++;
        if (i < rows - 1 && j < columns - 1) if (gridOne[i + 1][j + 1]) count++;
        // If less than 2 and more than 3 neighbors cell dies
        if (gridOne[i][j] && (count < 2 || count > 3)) gridTwo[i][j] = false;
        // If dead and has 3 neighbors cell lives
        if (!gridOne[i][j] && count === 3) gridTwo[i][j] = true;
      }
    }

    setGrid(gridTwo);
    setGeneration(generation + 1);
  }

  return (
    <div>
      <Controls play={play} stop={stop} clear={clear} />
      <div className='grid'>
        {grid.map((row, x) =>
          row.map((col, y) => (
            <Box
              key={`${x}${y}`}
              row={x}
              col={y}
              toggleBox={toggleBox}
              boxState={grid[x][y] === true ? true : false}
              running={running}
            />
          )),
        )}
      </div>
      <Presets
        pyrimidPreset={pyrimidPreset}
        boxPreset={boxPreset}
        arrowPreset={arrowPreset}
        randomPreset={randomPreset}
      />
      <GenerationCounter generation={generation} />
    </div>
  );
}

export default Grid;
