import React from "react";
import {Board} from "../minesweeper";
import BoardX from './board'


class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Board(5, 7)
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(){
    
  }

  render(){
    return ( 
      <BoardX board={this.state.board} updateGame={this.updateGame} />
    )
  }

}

export default Game