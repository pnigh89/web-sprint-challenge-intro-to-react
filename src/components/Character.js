// Write your Character component here
import React, {useState} from 'react'

const Character = (props) => {
    const character = props


    return (
        <div>
            {
                character.character.map(character =>{
                    return ( 
                        <div>
                            <div>
                                <h2>Name: {character.name}</h2>
                        
                            </div>
                            {/* <div>
                                <P>Gender: {character.gender != 'n/a' ? character.gender : 'unkown'}</P>
                                <P>Birth year: {character.birth_year}</P>
                            </div> */}
                        </div>
                            
                    );
                })
            }
    
    
        </div>
    
    )
    
}


export default Character