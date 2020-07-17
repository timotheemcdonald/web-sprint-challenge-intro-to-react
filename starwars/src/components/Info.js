import React from 'react'

const Info = props => {

    return (
        <div>
            <div>
               Born: {props.birth}
            </div>
            <div>
               Weight: {props.mass}
            </div>
            <div>
               Gender: {props.gender}
            </div>
            <div>
                Height: {props.height}
            </div>
        </div>
    )
}

export default Info;