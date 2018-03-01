import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Menu extends Component {
    constructor(props){
       super(props)
        this.nouvellePartie = this.nouvellePartie.bind(this)
    }

    nouvellePartie(){
        this.setState = ({
            step: "newGame"
        })
    }

    componentWillMount(){
        this.style = {
            marginTop: "50px",
            verticalAlign: "center"
        }
    }
    render() {
        return (
            <div className="container">
                <div className="col-md-6 offset-3" style={this.style}>
                    <div>
                        <Button color="info" size="lg" style={{width:"200px"}} onClick={this.nouvellePartie()}>Nouvelle Partie</Button>
                    </div>
                    <div>
                        <Button color="danger" size="lg" style={{width:"200px", marginTop:"10px"}}>Quitter</Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Menu;
