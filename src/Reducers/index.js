import {combineReducers} from 'redux'
import snake from './snake'
import walls from './walls'
import gum from './gum'
import game from './game'


export default combineReducers({
    snake,
    walls,
    game,
    gum
})