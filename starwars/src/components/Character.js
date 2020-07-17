// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'

const Character = props => {

    return (
        <div>{props.name}</div>
    )
}

export default Character;