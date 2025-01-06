const initialGameboard = Array(3)
  .fill(null)
  .map(() => Array(3).fill(null));

function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameboard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
