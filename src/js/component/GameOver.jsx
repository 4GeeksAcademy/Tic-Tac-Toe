import React from "react";
import GameState from "./GameState";

const GameOver = ({gameState})=> {
  switch(gameState){
    case GameState.inProgress:
      return <></>
    case GameState.playerOWins:
      return <div className="gameOver">O Wins</div>
    case GameState.playerXWins:
      return <div className="gameOver">X Wins</div>
    case GameState.draw:
      return <div className="gameOver">Draw</div>
  }
}

export default GameOver;