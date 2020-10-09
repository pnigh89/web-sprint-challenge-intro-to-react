import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
// import Details from './components/Details'

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, getCharacter] = useState([]);
 

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res=>{
      getCharacter(res.data.results)
      console.log(res)
    })
    .catch(err=>{

    })

  } , [])


  if (!character) return <div><h1>Loading ...</h1></div>
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      {
        character.map(fr => {
          return <Character  info={fr}  />
        })
      }
      
    </div>
  );
}

// export default App;
