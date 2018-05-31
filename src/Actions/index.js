/* ACTIONS REDUCES */

export const setStep = step => ({
    type: 'GAME_STEP',
    step
})
// SNAKE ACTIONS

export const createSnake = taille => ({
    type: 'CREATE_SNAKE',
    taille
})

export const moveSnake = direction =>({
    type: 'MOVE_SNAKE',
    direction
})

export const growSnake = lenght =>({
    type: 'GROW_SNAKE',
    lenght
})

export const generateGum = (minX, maxX, minY, maxY) => ({
    type: 'GENERATE_GUM',
    minX,
    maxX,
    minY,
    maxY
})

export const generateWalls = (maxHeight, maxWidth) => ({
    type: 'GENERATE_WALLS',
    maxHeight,
    maxWidth
})




export const ACTION_NAME = {
    setStep: 'GAME_STEP',
    defineScreen: 'DEFINE_SCREEN',
    createSnake:'CREATE_SNAKE',
    moveSnake: 'MOVE_SNAKE',
    growSnake: 'GROW_SNAKE',
    generateGum: 'GENERATE_GUM',
    generateWalls: 'GENERATE_WALLS'
}
/* APPLICATION PARAMETERS */
export const STEP = {
    newGame: "NewGame",
    menu: "Menu",
    pause: "Pause",
    play: "play",
    finish: "Finish"
}

export const KEY = {
    LEFT:   37,
    UP:     38,
    RIGHT:  39,
    DOWN:   40
}

export const randomBetween = (min,max) =>{
    return Math.floor(Math.random()*(max-min+1)+min);
}
export const screenProperties = {
    spaceX: 400,
    spaceY: 100,
    topLimit : 350,
    widthLimit : 300,
    maxX: 1000,
    maxY: 1000,
    top: 100,
    right: 100,
    directionWindowX: 180,
    directionWindowY: 100,
    dashboardX: 1100,
    dashboardY: 400
}