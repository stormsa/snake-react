import gumReducer from '../../Reducers/gum'
import {generateGum, screenProperties} from "../../Actions";

describe('Gum reducer', () => {
    it('should return the initial state', () =>{
        expect(gumReducer(undefined, {})).toEqual(
            {
                gX : 150,
                gY: 150
            }
        )
    })
    it('should return gum gx and gy with new position between 10 & 100', () =>{
        let minX = 10
        let maxX = 100
        let minY = 10
        let maxY = 100
        let position = gumReducer([], generateGum(minX, maxX, minY, maxY))
        expect(position.gX).toBeGreaterThanOrEqual(10)
        expect(position.gY).toBeGreaterThanOrEqual(10)
        expect(position.gX).toBeLessThanOrEqual(100)
        expect(position.gY).toBeLessThanOrEqual(100)

    })
})