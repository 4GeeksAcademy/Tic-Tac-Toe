import React from "react";
import Tile from "./Tile";

const Board = ({tiles, onTileClick}) => {
  return <div className="board">
    <Tile onClick={()=> onTileClick(0)} value={tiles[0]} className="rightBorder bottomBorder" />
    <Tile onClick={()=> onTileClick(1)} value={tiles[1]} className="rightBorder bottomBorder" />
    <Tile onClick={()=> onTileClick(2)} value={tiles[2]} className="bottomBorder" />
    <Tile onClick={()=> onTileClick(3)} value={tiles[3]} className="rightBorder bottomBorder" />
    <Tile onClick={()=> onTileClick(4)} value={tiles[4]} className="rightBorder bottomBorder" />
    <Tile onClick={()=> onTileClick(5)} value={tiles[5]} className="bottomBorder" />
    <Tile onClick={()=> onTileClick(6)} value={tiles[6]} className="rightBorder" />
    <Tile onClick={()=> onTileClick(7)} value={tiles[7]} className="rightBorder" />
    <Tile onClick={()=> onTileClick(8)} value={tiles[8]} />
  </div>
}
export default Board;