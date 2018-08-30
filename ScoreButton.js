 import React, { Component } from 'react';
import TwoPlayerScoreKeeper from "./TwoPlayerScoreKeeper"

class ScoreButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            playerArray: [],
            player1: "",
            scorebutton: ""
        }

    }
    submitScore = (event) =>
    {
        this.setState(
            {
                [event.target.id]: event.target.value
            }

        )


    };
    scoreFunction = (event) => {
        let anotherCollection = {
            player1: this.state.player1,
            scorebutton:this.state.scorebutton
        }

        this.state.playerArray.push(anotherCollection);

        this.setState({playerArray: this.state.playerArray})
        event.preventDefault();

    }


    render(){

        return(
            <div className="ScoreButton">
                <h1>
                    Score Count
                </h1>
                <form onSubmit={this.submitScore}>
                    <div>
                        <label htmlFor="player1">Score:</label>
                        <input type= "text" id="player1" placeholder={"0"} value={this.state.player1} onChange={this.scoreFunction}/>
                        <button>Add</button>
                    </div>
                </form>
                <TwoPlayerScoreKeeper/>

            </div>
        )
    }


}






























export default ScoreButton;