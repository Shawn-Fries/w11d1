import React from 'react';
import Board from './board';
import Tile from "../minesweeper"

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: ""
        }
    }

    // componentDidMount()
    displayIcon(){
       if (this.props.tile.flagged) {
           this.setState({icon: "🚩"})
       } else if (this.props.tile.explored){
            if (this.props.tile.bombed){
                this.setState({icon: "💣"})
            } else {
               this.setState({icon: this.props.tile.adjacentBombCount().toString()})
            }    
       } else {
           this.setState({icon: })
       }        
    }
    
    render() {
        debugger
        return (
            <span>
                {this.state.icon}
            </span>
        )
    }
}

export default Tile;