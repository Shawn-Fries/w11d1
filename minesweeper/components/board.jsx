import React from "react";

class Board extends React.Component{
  constructor(props){
    super(props);
    this.updateGame = props.updateGame.bind(this);
  };

  render(){
    
    return(
      <div>
        {this.props.board.grid.map((row)=>{
          row.map(tile=>{
            return this.updateGame();
          })
        })}
      </div>
    )
  };

};



export default Board