import React, {useState, useEffect} from "react";
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Tile from "./Tile";
import Reset from "./Reset";
import PlayerMenu from "./PlayerMenu";
const Player_X = "X";
const Player_O = "O";
const winningCombinations = [
//row
{combo:[0,1,2]},
{combo:[3,4,5]},
{combo:[6,7,8]},

// columns
{combo:[0,3,6]},
{combo:[1,4,7]},
{combo:[2,5,8]},

//diagonal
{combo:[0,4,8]},
{combo:[2,4,6]},
];

  const checkWinner = (tiles,setGameState)=>{
      for(const{combo} of winningCombinations){
        const tileValue1 = tiles[combo[0]]
        const tileValue2 = tiles[combo[1]]
        const tileValue3 = tiles[combo[2]]

        if(tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3){
            if(tileValue1 === Player_X){
                setGameState(GameState.playerXWins);
            }
            else{
                setGameState(GameState.playerOWins);
            }
            return;
        }
      }
      const areAllTilesFilledIn = tiles.every((tile)=> tile !== null);
      if(areAllTilesFilledIn){
        setGameState(GameState.draw)
      }
  }

const TicaTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(Player_X);
    const [gameState, setGameState] = useState(GameState.inProgress)
    const [playerX, setPlayerX] = useState(null);
    const [playerO, setPlayerO] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    useEffect(() =>{
        checkWinner(tiles, setGameState);
      },[tiles]);

    const handleStartGame = (playerXName, playerOName, selectedSymbol) => {
        setPlayerX({ name: playerXName, symbol: selectedSymbol });
        setPlayerO({ name: playerOName, symbol: selectedSymbol === "X" ? "O" : "X" });
        setCurrentPlayer(selectedSymbol === "X" ? playerXName : playerOName);
      };

    const handleReset = () =>{
        setGameState(GameState.inProgress)
        setTiles(Array(9).fill(null))
        setPlayerTurn(Player_X) 
    }

    const handleTileClick = (index) =>{
        if(gameState !== GameState.inProgress){
            return;
        }
        if(tiles[index] !== null){
            return;
        } 

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if(playerTurn === Player_X){
            setPlayerTurn(Player_O);
        }
        else{
            setPlayerTurn(Player_X);
        }
    };
    return (
        <div>
      {!playerX || !playerO ? (
        <PlayerMenu onStartGame={handleStartGame} />
      ) : (
        <>
          <h1>Tic Tac Toe</h1>
          <Board
            playerTurn={currentPlayer}
            tiles={tiles}
            onTileClick={handleTileClick}
          />
          <GameOver gameState={gameState} />
          <Reset gameState={gameState} onReset={handleReset} />
        </>
      )}
    </div>
    );
}

export default TicaTacToe ;