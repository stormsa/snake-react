import {connect} from 'react-redux'
import Gum from '../Components/Gum'

const mapStateToProps = state =>({
    x: state.gum.gX,
    y: state.gum.gY,
    step: state.game.step

})

export default connect(
    mapStateToProps
)(Gum)
