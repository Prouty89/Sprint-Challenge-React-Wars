import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfoCard from './components/InfoCard';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 const[people, setPeople] = useState([])

  useEffect(() => {
  axios
    .get(`https://swapi.co/api/people/`)
    .then(response => {
    const starWarsChar = response.data.results
    setPeople(starWarsChar);
  })
  .catch(error => {
    console.log(error)
  })
}, [])


if (!people) {
  return <div className="loading">Loading...</div>;
}
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <InfoCard starWarsChar limit ={5} />
    </div>
  );
}

export default App;
