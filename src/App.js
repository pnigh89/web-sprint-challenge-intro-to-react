import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'
import Details from './components/Details'

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, getCharacter] = useState([]);
  const [characterId, setCharacterId] = useState('1')

  const openDetails = id => {
    setCharacterId(id)
  }

  const closeDetails = () => {
    setCharacterId(null)
  }

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
      {/* {
        character.map(ch => {
          // return <div name = {ch.name} key={ch.id} species={ch.species} />
        })

      }
      <Character character={character} key={character.id} /> */}
      {
        character.map(fr => {
          return <Character key={fr.id} info={fr} action={openDetails} />
        })
      }
      {
        characterId && <Details chId={characterId} close={closeDetails} />
      }
    </div>
  );
}

// export default App;
