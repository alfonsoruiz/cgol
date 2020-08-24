import React, { useState } from 'react';
import Box from './Box';

function Grid(props) {
  const [grid, setGrid] = useState(() => {
    const rows = [];

    for (let i = 0; i < props.rows; i++) {
      rows.push(Array.from(Array(props.columns), () => 0));
    }

    // Think of another way to do this.

    return rows;
  });

  function activateCell() {}

  return (
    <div className='grid' onClick={() => activateCell()}>
      {grid.map((rows, i) =>
        rows.map((columns, j) => <Box className={grid[i][j] ? 'on' : 'off'} />),
      )}
    </div>
  );
}

export default Grid;
