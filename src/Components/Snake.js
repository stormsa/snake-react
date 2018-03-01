import React, { Component } from 'react';
import '../App.css';

class Snake extends Component {
    constructor(props){
       super(props)
        this.state = ({
            right: window.innerWidth / 2,
            top : window.innerHeight / 2,
            snakeHeight: 10,
            snakeSize: 100,
            body: [],
            gum : this.props.gum,
        })
        this.walls = this.props.walls
        this.direction = "left"
        this.isGumCatched = this.isGumCatched.bind(this)
        this.add = this.add.bind(this)
        this.createBody = this.createBody.bind(this)
        this.remove = this.remove.bind(this)
        this.nextId = this.nextId.bind(this)
        this.move = this.move.bind(this)
        this.isSnakeOffLimits = this.isSnakeOffLimits.bind(this)
        this.isSnakeTouchWall = this.isSnakeTouchWall.bind(this)
        this.stopSnake = this.stopSnake.bind(this)
        this.blinkSnake = this.blinkSnake.bind(this)

    }
    add(right, top){
        this.setState(prevState => ({
            body: [
                ...prevState.body,
                {
                    id: this.nextId(),
                    right:right,
                    top: top
                }
            ]
        }))
    }

    createBody(){
        let right = this.state.right
        for (let i = 0; i < this.state.snakeSize / 10; i++) {
            right = 10 * i + this.state.right
            this.add(right, this.state.top)
        }
        this.setState({
            right: right
        })
        this.hurted = false
    }
    remove(id){
        this.setState(prevState => ({
            body: prevState.body.filter(body => body.id !== id)
        }))
    }
    nextId(){
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }
    componentWillMount(){}

    componentDidMount() {
        this.createBody()
        this.timerID = setInterval(
            () => this.newGame ? this.move() : this.stopSnake(),
            100
        );
    }
    stopSnake(){
        clearInterval(this.timerID)
        clearInterval(this.blinkId)
        this.props.endGame()
    }
    move(){
        if(this.direction === "up"){
            this.setState(prevState => ({
                top: prevState.top - 10,
                right : prevState.right,
            }))
            this.add(this.state.right, this.state.top)
        }
        else if(this.direction === "down"){
            this.setState(prevState => ({
                top: prevState.top + 10,
                right : prevState.right
            }))
            this.add(this.state.right, this.state.top)
        }
        else if(this.direction === "left"){
            this.setState(prevState => ({
                right: prevState.right + 10,
                top: prevState.top
            }))
            this.add(this.state.right, this.state.top)
        }
        else if(this.direction === "right"){
            this.setState(prevState => ({
                right: prevState.right - 10,
                top: prevState.top
            }))
            this.add(this.state.right, this.state.top)
        }
        else{
            return
        }
        this.isSnakeOffLimits();
        this.isGumCatched();

        // Si et seulement si le serpent n'est pas touché
        if(!this.hurted){
            this.isSnakeTouchWall();
        }else{
            this.waitSnakeHeal--
            if(this.waitSnakeHeal === 0){
                this.hurted = false
            }
        }
        this.remove(this.state.body[0].id)

    }
    isGumCatched(){
        let diffTop = this.state.top - this.gum.top
        let diffRight = this.state.right - this.gum.right
        if((diffTop > -10 && diffTop < 10) &&  (diffRight > -10 && diffRight < 10)){
            this.add(this.state.right, this.state.top)
            this.props.generateGum()
        }
    }
    isSnakeOffLimits(){
        if(this.state.right > window.innerWidth - 100){
            this.setState({
                right: 150
            })
        }
        else if(this.state.right < 100){
            this.setState({
                right: window.innerWidth - 100
            })
        }
        if(this.state.top > window.innerHeight - 100){
            this.setState({
                top: 150
            })
        }
        else if(this.state.top < 100){
            this.setState({
                top: window.innerHeight - 100
            })
        }
    }
    isSnakeTouchWall(){
        for(let wall of this.walls){
            let diffTop = this.state.body[this.state.body.length - 1].top > wall.top && this.state.body[this.state.body.length - 1].top < (wall.top+wall.height)
            let diffRight = this.state.body[this.state.body.length - 1].right > wall.right && this.state.body[this.state.body.length - 1].right < (wall.right + wall.width)
            if(diffTop && diffRight){
                this.props.hurtWall(wall.index)
                this.remove(this.state.body[0].id)
                this.waitSnakeHeal = this.state.body.length
                this.countB = 0;
                this.countLimit = this.state.body.length
                this.blinkId = setInterval(
                    () => this.newGame ? this.blinkSnake() : clearInterval(this.blinkId),
                    150
                );
                return

            }
        }
        //clearInterval(this.timerID)
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
    componentDidUpdate(props){
        this.direction = props.direction;
        this.gum = props.gum
        this.newGame = props.newGame
        console.log("Value of new game is"+props.newGame)
    }
    render() {
        const eachSnakeCase = function(body, i) {
            return (
                <Body  key={body.id}
                       index={body.id}
                       right={body.right} top={body.top}>
                </Body>
            )
        }
        const Body = function (props) {
            let right = props.right
            let top = props.top
            return (
                <div className="snake" style={{
                    width: "10px",
                    height: "10px",
                    position: "absolute",
                    right: right+"px",
                    top: top+"px"}}>
                </div>
            )
        }
        return (
            <div id="snake">
                {this.state.body.map(eachSnakeCase)}
            </div>
        );
    }
}

export default Snake;
