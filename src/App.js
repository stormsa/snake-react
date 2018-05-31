import React, {Component} from 'react';
import logo from './logo.svg';
import Navigation from './Containers/StepNavigation'
import Snake from './Containers/SnakeBody'
import Walls from './Containers/VisibleWalls'
import Gum from './Containers/VisibleGum'
import './App.css';
import {screenProperties} from "./Actions";

class App extends Component {
    constructor(props){
        super(props)

    }
    componentDidMount(){
        // Le dashboard est à taille fixe pour le moment
        screenProperties.maxY = screenProperties.dashboardY + screenProperties.spaceY
        screenProperties.maxX = screenProperties.dashboardX + screenProperties.spaceX
    }
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Snake React</h1>
                </header>

                <div className="container">
                    <Navigation/>
                    <div id="snakeWindow">
                        <Snake/>
                        <Gum/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
