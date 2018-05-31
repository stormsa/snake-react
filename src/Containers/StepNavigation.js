import {connect} from 'react-redux'
import Navigation from "../Components/Navigation";

const mapStateToProps = state => ({
    step: state.game.step,
    score: state.game.score,
    life: state.game.life
})
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation)