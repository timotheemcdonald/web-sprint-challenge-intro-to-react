// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'
import Info from './Info.js'

const StyledDiv = styled.div`
/* max-width:80%;
width:800px;
margin:5px auto;
background:grey;
border:2px solid black;
border-radius:10px; */
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

`

const Character = props => {

    return (
        <StyledDiv><h2>{props.name}</h2>
        <Info gender={props.propsPassed.gender} mass={props.propsPassed.mass} birth={props.propsPassed.birth_year} height={props.propsPassed.height} />
        </StyledDiv>
    )
}

export default Character;