import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types'
import {STEP, setStep, generateGum, growSnake} from "../Actions";

// Generate the snake

class Snake extends Component {
    constructor(props){
        super(props)
        this.hurtWall = this.hurtWall.bind(this)
        this.isSnakeTouchWall = this.isSnakeTouchWall.bind(this)
        this.stopSnake = this.stopSnake.bind(this)
    }
    componentDidUpdate(props){
        if(!props.hurted){
            this.isSnakeTouchWall(props.walls, props.step, props.snake)
        }else{
            this.waitSnakeHeal--
            if(this.waitSnakeHeal === 0){
                this.hurted = false
            }
        }
        this.isGumCatched(props.gum, props.snake);
    }

    componentDidMount(props) {}

    stopSnake(){
        this.props.dispatch(setStep(STEP.finish))
        clearInterval(this.timerID)
        clearInterval(this.blinkId)

    }

    isSnakeTouchWall(walls, step, snake){
        for(let wall of walls){
            let diffTop = snake.body[snake.body.length - 1].top > wall.top && this.state.body[this.state.body.length - 1].top < (wall.top+wall.height)
            let diffRight = snake.body[snake.body.length - 1].right > wall.right && this.state.body[this.state.body.length - 1].right < (wall.right + wall.width)
            if(diffTop && diffRight){
                this.hurtWall(wall.index)
                this.remove(this.state.body[0].id)
                this.waitSnakeHeal = this.state.body.length
                this.countB = 0;
                this.countLimit = this.state.body.length
                this.blinkId = setInterval(
                    () => step !== STEP.finish ? this.blinkSnake() : clearInterval(this.blinkId),
                    150
                );
                return

            }
        }
        //clearInterval(this.timerID)
    }
    hurtWall (wallId){
        //this.updateWall(wallId)
        if(this.state.life > 0){
            this.setState(prevState => ({
                life: prevState.life - 1,
            }))
        }
        else{
            clearInterval(this.gumBlink)
            this.setState({
                newGame: false,
                direction: ""
            })
        }

    }
    isGumCatched(gum, snake){
        let diffX = snake.y - gum.gY
        let diffY = snake.x - gum.gX
        if((diffX > -10 && diffX < 10) &&  (diffY > -10 && diffY < 10)){
            this.props.dispatch(growSnake(10))
            this.props.dispatch(generateGum())
        }
    }
    blinkSnake(){
            this.countB++
            let vis = document.getElementById("snake").style.visibility;
            vis = (!vis || vis === "visible") ? "hidden" : "visible";
            document.getElementById("snake").style.visibility = vis
            if(this.countB >= this.countLimit){
                this.countB = 0
                clearInterval(this.blinkId)
                document.getElementById("snake").style.visibility = "visible"
            }
    }
    render()
    {
        return (
            <div id="snake">
                {this.props.snake.body.map(body =>
                    <div className="snake" style={{
                        width: "10px",
                        height: "10px",
                        position: "absolute",
                        left: body.bX+"px",
                        bottom: body.bY+"px"}}>
                    </div>
                )}
            </div>
        );
    }
}
Snake.propTypes = {
    snake: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        size: PropTypes.number.isRequired,
        body: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                bX: PropTypes.number.isRequired,
                bY: PropTypes.number.isRequired,
            }).isRequired,
        ).isRequired
    }).isRequired
}

export default Snake;


