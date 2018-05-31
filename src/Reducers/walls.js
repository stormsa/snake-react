import React from 'react'
import Wall from '../Components/Wall'
import {STEP, screenProperties, randomBetween, ACTION_NAME} from "../Actions";

const initialState = {
    walls: []
}
// Generate wall or remove then
const wallReducer = (state = [], action) =>{
    switch (action.type){
        case ACTION_NAME.generateWalls:
            let right, top, width, height
            let tempWall = []
            for(let i = 0; i < 10; i++){
                right = randomBetween(50, screenProperties.windowsWidth)
                top = randomBetween(150, screenProperties.windowsHeight)
                if(i%2){
                    width = randomBetween(50, screenProperties.windowsWidth - screenProperties.windowsWidth + 30)
                    height = 10
                }else{
                    height = randomBetween(50, screenProperties.windowsHeight - screenProperties.windowsHeight + 20)
                    width = 10
                }
                let wall = {
                    index: nextWallId(),
                    right: right,
                    top : top,
                    width: width,
                    height: height
                }
                tempWall.push(wall)
            }
            state.walls = tempWall
            return state
        //return [...state, {walls:tempWall}]
        default:
            return state
    }
}

function updateWall (wallId) {
    this.setState(prevState => ({
        walls : prevState.walls.map((wall) =>
            (wall.index !== wallId) ? wall : this.wrongWall(wall)
        )
    }))

}
function removeWall (wallId){
    this.setState(prevState => ({
        walls: prevState.walls.filter(wall => wall.index !== wallId)
    }))
}

function wrongWall(wall){
    return (
        <Wall
            height={wall.height}
            width={wall.width}
            right={wall.right}
            top={wall.top}
            color="red"
            bgcolor="red"
               >
        </Wall>
    )
}

const nextWallId = ()=>{
    this.wallId = this.wallId || 0
    return this.wallId++
}
export default wallReducer