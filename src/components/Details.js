import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(props) {
    const { chId, close, info } = props
    const [details, setDetails] = useState()
  
    useEffect(()=>{
        axios.get('https://rickandmortyapi.com/api/character/[1,2,3,4,5]')
        .then(res=>{
          setDetails(res.data)
          console.log(res)
        })
        .catch(err=>{
    
        })
    
      } , [chId])
    
  
    return (
      <div className='container'>
        <h2>Details:</h2>
        
        {
          details &&
          <>
            <p>{details.name} is a {details.species} and {details.status}</p>
            
           
            {/* <ul>
              {
                details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
              }
            </ul> */}
          </>
        }
        <button onClick={close}>Close</button>
      </div>
    )
  }