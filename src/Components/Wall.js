import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css';

const Wall = (width, height, right, top, color, bgcolor) => {
    return(
        <div className="wall" style={{
            width: width,
            height: height,
            color:color,
            backgroundColor: bgcolor,
            position: "absolute",
            right: right+"px",
            top: top+"px"}}>
        </div>
    )

}

Wall.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    right: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    bgcolor: PropTypes.string.isRequired
}
export default Wall;
