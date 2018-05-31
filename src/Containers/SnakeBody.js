import {connect} from 'react-redux'
import Snake from '../Components/Snake'


const mapStateToProps = state => ({
    walls: state.walls,
        snake:{
            x: state.snake.sX,
            y: state.snake.sY,
            height: state.snake.height,
            size: state.snake.size,
            body: state.snake.body
        },gum : state.gum,
        step: state.game.step,
})


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Snake)