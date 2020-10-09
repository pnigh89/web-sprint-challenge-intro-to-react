// Write your Character component here
import React from 'react'

export default function Character (props) {
    const {bold, info, action} = props
     return (
        <div>
            {info.name}
            <button onClick={() => action(info.id)}>
            ▼
            </button>
            
    
    
       </div>
    
    )
    
}


// export default Character