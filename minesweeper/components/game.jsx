import React from "react";
import {Board} from "../minesweeper";


class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Board(5, 7)
    }
  }

  updateGame(){

  }

  render(){
     //debugger
    return (
        <div>
            <Board board={this.state.board} updateGame={this.updateGame.bind(this)}></Board>
        </div>
    )
  }

}

export default Game