import React, {useState} from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div `

margin-top: 1.5px;
margin-bottom: 7.5px;
padding: 5px;

`

const StyledButton = styled.button `
background-color: darkgrey;
font-size: 1rem;
color:black;
border-radius:5px;
padding: 10px;
margin:5px;
box-shadow:0px;
border:1px black solid;
transition: all .5s ease-in-out;

&:hover{
    color:yellow;
    transition: all .5s ease-in-out;
}
`

const Info = props => {

    const [showInfo, setShow] = useState(false)

    const toggleShow = (event) => {
        setShow(true)
    }

    const toggleOff = (event) => {
        setShow(false)
    }

    if (showInfo) {
        return (
            <StyledDetails>
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
                <div>
                    <StyledButton onClick={toggleOff}>Collapse</StyledButton>
                </div>
            </StyledDetails>
        )
    }

    return (<StyledDetails><div><StyledButton onClick={toggleShow}>Expand</StyledButton></div></StyledDetails>)
    
}

export default Info;