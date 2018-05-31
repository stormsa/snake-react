import React, { Component } from 'react';
import {
    KEY,
    STEP,
    moveSnake,
    setStep,
    createSnake,
    ACTION_NAME,
    generateGum, defineScreen, screenProperties
} from '../Actions'
import { Button } from 'reactstrap';

class Navigation extends Component {
    constructor(props){
        super(props)
        this.nouvellePartie = this.nouvellePartie.bind(this)
        this.endGame= this.endGame.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.changeDirection = this.changeDirection.bind(this)
        // It's equal of the headr height + directionnal window
        this.snakeSize = 10
        this.props.dispatch(setStep(STEP.menu))
    }

    handleKeyPress(evt) {
        if (!evt) {evt = window.event;} // for old IE compatible
        let keycode = evt.keyCode || evt.which; // also for cross-browser compatible
        evt.preventDefault()
        this.changeDirection(keycode)

    }
    nouvellePartie(){
        // Start the game
        this.props.dispatch(setStep(STEP.newGame))

        // Create the snake
        this.props.dispatch(createSnake(this.snakeSize, window.innerHeight, window.innerWidth))

        // Generate Gum
        this.props.dispatch(generateGum(screenProperties.spaceX, screenProperties.maxX, screenProperties.spaceY, screenProperties.maxY))

        // Move Snake
        this.timerID = setInterval(
            () => this.props.step === STEP.newGame ? this.props.dispatch(moveSnake(this.direction)) : this.stopSnake(),
            100
        );
    }

    endGame(){
        this.props.dispatch(setStep(STEP.menu))
    }
    componentDidUpdate(props){
        this.step = props.step
    }
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    changeDirection(keycode){
        this.direction = keycode
    }

    render() {
        return (
            <div className="container">
                <b> Score </b>: {this.props.score}
                <b> Vies </b>: {this.props.life}
            {this.props.step === STEP.menu ?
                    <div id="navigationWindow" className="col-6 offset-3" style={{marginTop: "50px",verticalAlign: "center"}}>
                        <div>
                            <Button color="info" id="newGame" size="lg" style={{width:"200px"}} onClick={this.nouvellePartie}> Nouvelle Partie</Button>
                        </div>
                        <div>
                            <Button color="danger" size="lg" style={{width:"200px", marginTop:"10px"}}>Quitter</Button>
                        </div>
                    </div>
                    :
                    <div id="directionWindow">
                        <button id="up" className="btn btn-primary" onClick={() =>this.changeDirection(KEY.UP)} >UP</button><br/>
                        <button id="left" className="btn btn-success" onClick={() =>this.changeDirection(KEY.LEFT)} >LEFT</button>
                        <button id="right" className="btn btn btn-info" onClick={() =>this.changeDirection(KEY.RIGHT)} >RIGHT</button><br/>
                        <button id="down" className="btn btn-danger" onClick={() =>this.changeDirection(KEY.DOWN)} >DOWN</button>
                    </div>
                }
            </div>
        );
    }
}

export default Navigation;
