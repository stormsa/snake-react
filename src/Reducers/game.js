import {STEP, ACTION_NAME} from "../Actions";

const initialState = {
    step: STEP.menu,
    score: 0,
    life:2,
}

const gameReducer = (state = initialState, action) =>{
    if(action.type === ACTION_NAME.setStep){
        switch(action.step){
            case STEP.newGame:
                return Object.assign({}, state, {
                    step: STEP.newGame
                })
            case STEP.menu:
                return Object.assign({}, state, {
                    step: STEP.menu
                })
            case STEP.pause:
                return Object.assign({}, state, {
                    step: STEP.pause
                })
            case STEP.play:
                return Object.assign({}, state, {
                    step: STEP.play
                })
            case STEP.finish:
                return Object.assign({}, state, {
                    step: STEP.finish
                })
            default:
                return state
        }
    }
    return state
}

export default gameReducer