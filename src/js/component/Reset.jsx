import React from "react";
import GameState from "./GameState";

const Reset = ({gameState,onReset}) => {
    if(gameState === GameState.inProgress){
        return; 
    }
    return <button onClick={onReset} className="resetButton">Start Over</button>;
    
}

export default Reset;