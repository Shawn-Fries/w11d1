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
    this.isGameOver = this.isGameOver.bind(this);
  }

  updateGame(tile, isRevealing){
    if (isRevealing){
      tile.explore()
    } else{
      tile.toggleFlag()
    }

    this.setState({ board: this.state.board })
  }

  isGameOver() {
    return this.state.board.won() || this.state.board.lost();
  }

  componentDidUpdate() {
    if (this.isGameOver()) {
      const modal = document.querySelector('.modal');
      modal.classList.add('is-open');
      
    }
  }

  render(){
    return ( 
      <BoardX board={this.state.board} updateGame={this.updateGame} />
    )
  }

}

export default Game