import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, getCharacter] = useState();

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character/[1,2,3,4,5]')
    .then(res=>{
      getCharacter(res.data)
      console.log(res)
    })
    .catch(err=>{

    })

  } , [])


  if (!character) return <div><h1>Loading ...</h1></div>
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character={character} />
    </div>
  );
}

export default App;
