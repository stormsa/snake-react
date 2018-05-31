import React from 'react';
import PropTypes from 'prop-types'
import '../App.css';
import Wall from "./Wall";
import {STEP} from "../Actions";

const Gum = ({x, y, step}) =>{
    var blink = setInterval(() =>{
        step === STEP.newGame ? blinkGum() : clearInterval(blink)
    }, 250);
    return(
        <div className="gum" id="gum" style={{left:x+"px", top:y+"px",visibility: "hidden"}}/>
    )
}

function blinkGum(){
    let vis = document.getElementById("gum").style.visibility;
    vis = (!vis || vis === "visible") ? "hidden" : "visible";
    document.getElementById("gum").style.visibility = vis
}

Wall.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    step: PropTypes.string.isRequired
}

export default Gum