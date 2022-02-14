import React from "react";
import Tile from './tile';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.updateGame = props.updateGame.bind(this);
  };

  render(){
    
    return(
      <ul>
        {this.props.board.grid.map((row, outerIdx)=>{
            return <li className='boardRow'>
                {row.map((tile, innerIdx) => {
              
                return <Tile row={`${outerIdx}${innerIdx}`} updateGame={this.updateGame}/>
                
                })}
            </li>
        })}
      </ul>
    )
  };

};



export default Board