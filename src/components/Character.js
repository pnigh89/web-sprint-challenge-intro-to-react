// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CharStyled = styled.div`
display: flex;
flex-direction:column;
/* justify-content: center; */
border: solid black 2px;
background-color: 	#00FF0080;
margin-left:30%;
margin-right:30%;

img {
    width: 40%;
    margin-left:30%;
    border-radius:44%;
}
`

export default function Character (props) {
    const {info} = props
     return (
        <CharStyled>
           <h2>{info.name}</h2> 
           <img alt = 'char pic' src={info.image} />
            <ul>
                
              <p>Species: {info.species}</p>
              <p>Status: {info.status}</p>
                
                </ul>
            
    
    
       </CharStyled>
    
    )
    
}


// export default Character