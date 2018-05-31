import {KEY, screenProperties, ACTION_NAME, randomBetween, STEP} from "../Actions";

const initialState = {
    sX : 150,
    sY : 150,
    height: 10,
    size: 10,
    body: [],
    hurted: false,
    uniqueId:0
}
function createBody(state, taille){
    let sX = screenProperties.maxX / 2 - taille
    let sY = screenProperties.maxY / 2 + screenProperties.spaceY
    let body = []
    let bX
    for (let i = 0; i < taille; i++) {
        bX = 10 * i + sX
        body.push(
            {
                id: nextId(),
                bX:bX,
                bY: sY
            }
        )
    }
    sX = bX
    return Object.assign({}, state, {
        body: body,
        hurted: false,
        sX: sX,
        sY: sY
    })
}
const snakeReducer = (state = initialState, action) => {

    switch(action.type){
        case ACTION_NAME.createSnake:
            return createBody(state,action.taille)
        case ACTION_NAME.moveSnake:
            let sY = state.sY
            let sX = state.sX
            let body = state.body
            switch (action.direction){
                case KEY.UP:
                    sY += 10
                    break
                case KEY.DOWN:
                    sY -= 10
                    break
                case KEY.LEFT:
                    sX -= 10
                    break
                case KEY.RIGHT:
                    sX += 10
                    break
            }
            // Is Snake is Off Dashboard Windows
            let position = isSnakeOffLimits(sY, sX, screenProperties.spaceX, screenProperties.maxX, screenProperties.spaceY, screenProperties.maxY)
            // Is Snake is On Direction Windows
            //position = isSnakeOffLimits(state.sY, state.sX, screenProperties.dashboardX, screenProperties.maxX, screenProperties.dashboardY, screenProperties.maxY)
            body.push(
                {
                    id: nextId(),
                    bX:position.sX,
                    bY: position.sY
                }
            )
            body = remove(body, body[0].id)
            return Object.assign({}, state, {
                body: body,
                sY: position.sY,
                sX: position.sX
            })
        case ACTION_NAME.growSnake:
            break
    }
    return state
}
function remove(body, id){
    body = body.filter(body => body.id !== id)
    return body
}
function nextId(){
    initialState.uniqueId = initialState.uniqueId || 0
    return initialState.uniqueId++
}

function isSnakeOffLimits(snakeY, snakeX, sMinX, sMaxX, sMinY, sMaxY){
    // Le serpent depasse les largeurs
    if(snakeX > sMaxX){
        snakeX = sMinX
    }
    else if(snakeX < sMinX){
        snakeX = sMaxX
    }
    // Le serpent depasse les hauteurs
    if(snakeY >= sMaxY){
        snakeY = sMinY
    }
    else if(snakeY <= sMinY){
        snakeY = sMaxY
    }

    // Is snake touch the direction window
    return {
        sX: snakeX,
        sY: snakeY
    }
}

export default snakeReducer