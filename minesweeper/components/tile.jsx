import React from 'react';
import Board from './board';
//import TileIcon from "../minesweeper"

class TileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: ""
        };

        this.overallStatus = this.overallStatus.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.displayIcon()
    }

       

    overallStatus() {
        if (this.props.tile.bombed && this.props.tile.explored ) {
            return 'bombed'
        } else if (this.props.tile.flagged && !this.props.tile.explored ) {
            return 'flagged'
        } else if (this.props.tile.explored) {
            return 'revealed'
        } else {
            return 'unrevealed'
        }
    }

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
           this.setState({icon: '▢'})
       }        
    }
    
    handleClick(e){
        let isRevealing = !e.altKey
        this.props.updateGame(this.props.tile, isRevealing)

        this.displayIcon();
    }

    

    render() {
        
        return (
            <span className={`tile ${this.overallStatus()}`} onClick={this.handleClick} >
                {this.state.icon}
            </span>
        )
    }
}

export default TileIcon;