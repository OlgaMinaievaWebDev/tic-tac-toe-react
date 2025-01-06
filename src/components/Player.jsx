import { useState } from "react";

function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{playerName}</span>
        {isEditing ? (
          <span className="player-symbol">{symbol}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        )}
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}

export default Player;
