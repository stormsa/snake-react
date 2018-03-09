import React, { Component } from 'react';
import logo from './logo.svg';
import Snake from './Components/Snake'
import Wall from './Components/Wall'
import MenuGame from './Components/Menu'
import { Button } from 'reactstrap';
import './App.css';

class App extends Component {
    constructor(props){
       super(props)
        this.topLimit = 350
        this.widthLimit = 300
        this.windowsHeight =  window.innerHeight - this.topLimit
        this.windowsWidth = window.innerWidth - this.widthLimit

        this.nouvellePartie = this.nouvellePartie.bind(this)
        this.randomBetween = this.randomBetween.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.generateGum = this.generateGum.bind(this)
        this.generateWalls = this.generateWalls.bind(this)
        this.eachWall = this.eachWall.bind(this)
        this.updateWall = this.updateWall.bind(this)
        this.endGame= this.endGame.bind(this)
        this.hurtWall = this.hurtWall.bind(this)
        this.changeDirection = this.changeDirection.bind(this)
        // It's equal of the header height + directionnal window

        this.state = {
            walls: [],
            step: "Menu",
            score: 0,
            life:2,
            gum : {
                right : this.randomBetween(150, this.windowsWidth - 150),
                top: this.randomBetween(150, this.windowsHeight - 70)
            }
        }
        this.style = {
            marginTop: "50px",
            verticalAlign: "center"
        }
        this.key = {
                LEFT:   37,
                UP:     38,
                RIGHT:  39,
                DOWN:   40
        }
        console.log("Taille"+this.randomBetween(70, this.windowsWidth - 150))
    }
    componentWillMount(){
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }
    nouvellePartie(){
        this.setState({
            step: "newGame",
            newGame: true,
            score: 0,
            life: 2
        });
        this.generateWalls()
        this.gumBlink = setInterval(function () {
            let vis = document.getElementById("gum").style.visibility;
            vis = (!vis || vis === "visible") ? "hidden" : "visible";
            document.getElementById("gum").style.visibility = vis
        }, 250);
    }
    endGame(){
        this.setState({
            step: "Menu"
        })
    }

    handleKeyPress(evt) {
        if (!evt) {evt = window.event;} // for old IE compatible
        var keycode = evt.keyCode || evt.which; // also for cross-browser compatible
        evt.preventDefault()
        this.changeDirection(keycode)

    }
    changeDirection(keycode){
        switch (keycode) {
            case this.key.LEFT:
                this.setState({
                    direction:  "left"
                })
                break;
            case this.key.UP:
                this.setState({
                    direction:  "up"
                })
                break;
            case this.key.RIGHT:
                this.setState({
                    direction:  "right"
                })
                break;
            case this.key.DOWN:
                this.setState({
                    direction:  "down"
                })
                break;
            default:
        }
    }
    generateGum(){
        this.setState(prevState => ({
            score: prevState.score + 10,
            gum:{
                right : this.randomBetween(150, this.windowsWidth - 300),
                top: this.randomBetween(150, this.windowsHeight - 300)
            }
        }))
    }
    generateWalls(){
        let right, top, width, height
        let tempWall = []
        for(let i = 0; i < 10; i++){
            right = this.randomBetween(50, this.windowsWidth)
            top = this.randomBetween(150, this.windowsHeight)
            if(i%2){
                width = this.randomBetween(50, this.windowsWidth - this.windowsWidth + 30)
                height = 10
            }else{
                height = this.randomBetween(50, this.windowsHeight - this.windowsHeight + 20)
                width = 10
            }
            let wall = {
                index: this.nextWallId(),
                right: right,
                top : top,
                width: width,
                height: height
            }
            tempWall.push(wall)
        }
        this.setState({
            walls: tempWall
        })
    }
    updateWall(wallId){
        this.setState(prevState => ({
            walls : prevState.walls.map((wall) =>
                (wall.index !== wallId) ? wall : this.wrongWall(wall)
            )
        }))

    }
    removeWall(wallId){
        this.setState(prevState => ({
            walls: prevState.walls.filter(wall => wall.index !== wallId)
        }))
    }
    hurtWall(wallId){
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
    wrongWall(wall){
        return (
            <Wall  index={wall.index}
                   right={wall.right}
                   top={wall.top}
                   height={wall.height}
                   width={wall.width}
                   onUpdate={this.updateGame}>
            </Wall>
        )
    }
    eachWall(wall){
        return (
            <Wall  index={wall.index}
                   right={wall.right}
                   top={wall.top}
                   height={wall.height}
                   width={wall.width}
                   onUpdate={this.updateGame}>
            </Wall>
        )
    }

    nextWallId(){
        this.wallId = this.wallId || 0
        return this.wallId++
    }
    randomBetween(x,y){
        return x+x+ Math.ceil(Math.random() * (y -x))
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Snake React</h1>
                </header>
                <b> Score </b>: {this.state.score}
                <b> Vies </b>: {this.state.life}
                <div className="container">
                    {this.state.step === "Menu" ?
                        <div className="col-md-6 offset-3" style={this.style}>
                            <div>
                                <Button color="info" size="lg" style={{width:"200px"}} onClick={this.nouvellePartie}> Nouvelle Partie</Button>
                            </div>
                            <div>
                                <Button color="danger" size="lg" style={{width:"200px", marginTop:"10px"}}>Quitter</Button>
                            </div>
                        </div>
                    :
                        <div>
                            <div id="directionWindow">
                                <button className="btn btn-primary" onClick={() =>this.changeDirection(this.key.UP)} >UP</button><br/>
                                <button className="btn btn-success" onClick={() =>this.changeDirection(this.key.LEFT)} >LEFT</button>
                                <button className="btn btn btn-info" onClick={() =>this.changeDirection(this.key.RIGHT)} >RIGHT</button><br/>
                                <button className="btn btn-danger" onClick={() =>this.changeDirection(this.key.DOWN)} >DOWN</button>
                            </div>
                            <div id="snakeWindow">
                                <Snake right={this.state.right} direction={this.state.direction}
                                       walls={this.state.walls}
                                       gum={this.state.gum}
                                       newGame={this.state.newGame}
                                       generateGum = {this.generateGum}
                                       endGame = {this.endGame}
                                       hurtWall={this.hurtWall}/>
                                {this.state.walls.map(this.eachWall)}
                                <div className="gum" id="gum" style={{right:this.state.gum.right+"px", top:this.state.gum.top+"px"}}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;
