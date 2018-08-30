import React, { Component } from 'react';


class TwoPlayerScoreKeeper extends Component {
    constructor(props) {
        super(props);



}
    render()
    {
        return(

            <div className="TwoPlayerScoreKeeper">
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


































    export default TwoPlayerScoreKeeper;