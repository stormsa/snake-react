import React, { Component } from 'react';
import '../App.css';

class Wall extends Component {
    constructor(props){
       super(props)
        this.state = ({
            snakeTop: props.snakeTop,
            snakeRight: props.snakeRight,
            game: props.game
        })
        this.color = "#5cb85c"
        this.update = this.update.bind(this)
    }
    update() {
        console.log("index numero")
        console.log(this.index)
        this.props.onUpdate(this.index)
    }

    componentWillMount(){
        this.index = this.props.index
        this.top = this.props.top
        this.right = this.props.right
        this.height = this.props.height+"px"
        this.width = this.props.width+"px"
        this.color = "#5cb85c"

    }
    componentWillUpdate(){

    }
    componentDidMount() {

    }

    componentDidUpdate(props){
        this.color = this.props.color

    }
    render() {
        return (
            <div className="wall" style={{
                width: this.width,
                height: this.height,
                color:this.color,
                backgroundColor: this.color,
                position: "absolute",
                right: this.right+"px",
                top: this.top+"px"}}>
            </div>
        );
    }
}

export default Wall;
