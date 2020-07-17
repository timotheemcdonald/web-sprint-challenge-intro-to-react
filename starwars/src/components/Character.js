// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'
import Info from './Info.js'

const StyledDiv = styled.div`

background-color: grey;
color:white;
max-width:80%;
width:400px;
padding:10px;
border-radius:5px;
box-shadow:0 0 10px 2px;
margin:2.5% auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h2 {
    color:black;
    transition: all 0.5s ease-in-out;
    &:hover{
        color:yellow;
        transition: all 0.5s ease-in-out;
    }
}

`

const Character = props => {

 
    return (
        <StyledDiv><h2>{props.name}</h2>
        <Info gender={props.propsPassed.gender} mass={props.propsPassed.mass} birth={props.propsPassed.birth_year} height={props.propsPassed.height} />
        </StyledDiv>
    )
}

export default Character;