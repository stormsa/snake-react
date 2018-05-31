import snakeReducer from '../../Reducers/snake'
import {createSnake, moveSnake, KEY, screenProperties} from "../../Actions";

describe('Snake reducer', () =>{
    // Lenghts limites
    screenProperties.spaceX = 100
    screenProperties.maxX = 1000
    // Height limits
    screenProperties.spaceY = 100
    screenProperties.dashboardY = 1000

    it('Should return the snake initial state', () => {
        expect(snakeReducer(undefined, {})).toEqual(
            {
                sX : 150,
                sY : 150,
                height: 10,
                size: 10,
                body: [],
                hurted: false,
                uniqueId:0
            }
        )
    })
    it('Should create snake body with x and y position', () => {
        const snakeSize = 10
        let snake = snakeReducer([], createSnake(snakeSize))
        expect(snake.body.length).toEqual(snakeSize)
        expect(snake.sY).toBeGreaterThan(10)
        expect(snake.sX).toBeGreaterThan(10)
    })
    it('Should increment the snake sY or sX of 10', () => {
        const position = {sY: 300, sX:220, body: [{id:0, sY: 280, sX:200}, {id:1,sY: 290, sX:210}, {id:2,sY: 300, sX:220}] }
        let snake = snakeReducer(position, moveSnake(KEY.LEFT))
        expect(snake.sY).toEqual(position.sY)
        expect(snake.sX).toEqual(position.sX - 10)

        snake = snakeReducer(position, moveSnake(KEY.RIGHT))
        expect(snake.sY).toEqual(position.sY)
        expect(snake.sX).toEqual(position.sX + 10)

        snake = snakeReducer(position, moveSnake(KEY.DOWN))
        expect(snake.sY).toEqual(position.sY - 10)
        expect(snake.sX).toEqual(position.sX)

        snake = snakeReducer(position, moveSnake(KEY.UP))
        expect(snake.sY).toEqual(position.sY + 10)
        expect(snake.sX).toEqual(position.sX)
    })
    it('Should change position when it get to the dashboard limits', ()=>{

        let position = {sY: 300, sX:1000, body: [{id:0, sY: 280, sX:980}, {id:1,sY: 290, sX:990}, {id:2,sY: 300, sX:1000}] }
        let snake = snakeReducer(position, moveSnake(KEY.RIGHT))
        expect(snake.sX).toEqual(screenProperties.spaceX)
        expect(snake.sY).toEqual(position.sY)

        position = {sY: 300, sX:100, body: [{id:0, sY: 280, sX:80}, {id:1,sY: 290, sX:90}, {id:2,sY: 300, sX:100}] }
        snake = snakeReducer(position, moveSnake(KEY.LEFT))
        expect(snake.sX).toEqual(screenProperties.maxX)
        expect(snake.sY).toEqual(position.sY)

        position = {sY: 1000, sX:300, body: [{id:0, sY: 980, sX:280}, {id:1,sY: 990, sX:290}, {id:2,sY: 1000, sX:300}] }
        snake = snakeReducer(position, moveSnake(KEY.UP))
        expect(snake.sX).toEqual(position.sX)
        expect(snake.sY).toEqual(screenProperties.spaceY)

        position = {sY: 100, sX:300, body: [{id:0, sY: 80, sX:280}, {id:1,sY: 90, sX:290}, {id:2,sY: 100, sX:300}] }
        snake = snakeReducer(position, moveSnake(KEY.DOWN))
        expect(snake.sX).toEqual(position.sX)
        expect(snake.sY).toEqual(screenProperties.maxY)

    })
})