import React from 'react'
import PropTypes from 'prop-types'
import Wall from './Wall'

const Walls = ({walls}) => (
    <div>
    {walls.map(wall =>
        <Wall
            width={wall.width}
            height={wall.height}
            right={wall.right}
            top={wall.top}
            color="brown"
            bgcolor="brown">
        </Wall>
    )}
    </div>
)

Walls.propTypes = {
    walls: PropTypes.arrayOf(
        PropTypes.shape({
            width: PropTypes.string.isRequired,
            height: PropTypes.string.isRequired,
            right: PropTypes.number.isRequired,
            top: PropTypes.number.isRequired,
            color: PropTypes.string.isRequired,
            bgcolor: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Walls