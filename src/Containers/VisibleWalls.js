import {connect} from 'react-redux'
import Walls from '../Components/Walls'

const mapStateToProps = state => ({
    walls: state.walls,
    step: state.game.step
})

export default connect(
    mapStateToProps
)(Walls)