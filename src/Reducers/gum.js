import {ACTION_NAME, screenProperties, randomBetween, STEP} from "../Actions";

const initialState = {
    gX : 150,
    gY: 150
}

const gumReducer = (state = initialState, action) => {
    switch (action.type){
        case ACTION_NAME.generateGum:
            return generateGum(state, action.minX, action.maxX, action.minY, action.maxY)
    }
    return state
}


function generateGum(state, minX, maxX, minY, maxY){
    return Object.assign({}, state, {
        gX: randomBetween(minX, maxX),
        gY: randomBetween(minY, maxY)
    })
}

export default gumReducer

