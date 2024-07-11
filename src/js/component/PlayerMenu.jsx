import React from "react";
import { useState } from "react";


const PlayerMenu = ({ onStartGame }) => {
  const [playerXName, setPlayerXName] = useState("");
  const [playerOName, setPlayerOName] = useState("");
  const [selectedSymbol, setSelectedSymbol] = useState("");

const handleSelectSymbol = (symbol) => {
setSelectedSymbol(symbol);
};

  const handleStartGame = () => {
    if (playerXName && playerOName && selectedSymbol) {
      onStartGame(playerXName, playerOName, selectedSymbol);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
        <h1>Tic Tac Toe in React.js</h1>
      <h2>Enter Name</h2>
      <div>
        <label>
          Player X Name:
          <input
            type="text"
            value={playerXName}
            onChange={(e) => setPlayerXName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Player O Name:
          <input
            type="text"
            value={playerOName}
            onChange={(e) => setPlayerOName(e.target.value)}
          />
        </label>
      </div>
      <div>
      <h2>Choose Symbol</h2>
        <button
          className={`symbol-button ${selectedSymbol === "X" ? "selected" : ""}`}
          onClick={() => handleSelectSymbol("X")}
        >
          X
        </button>
        <button
          className={`symbol-button ${selectedSymbol === "O" ? "selected" : ""}`}
          onClick={() => handleSelectSymbol("O")}
        >
          O
        </button>
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default PlayerMenu;
