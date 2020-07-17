import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import axios from 'axios'
import Character from './components/Character.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const baseURL = 'https://swapi.dev/api/people/';
  const [character, setCharacter] = useState([])

  console.log(baseURL);

  useEffect(() => {
    axios.get(baseURL)
    .then(value => {
      console.log('value start')
      const newCharacter = value.data.results;
      setCharacter(newCharacter);
      console.log(newCharacter);
      console.log('character success')

    })
    .catch(error => {
      console.log('error')
    })

  }, [])

  console.log(character);
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map(data => 
         <Character name={data.name} id={data.id} propsPassed={data} />
      )}
     
      
    </div>
  );
}

export default App;
