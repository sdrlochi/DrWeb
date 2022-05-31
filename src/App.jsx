import React from 'react';
import './App.css';
import Main from './components/main';
import Favorites from './components/favorites';

function App() {
  return (
    <>
      <Favorites /><br></br>
      <h1 class="favcat">Choose Your Favorite Cats</h1><br></br>
      <Main />
    </>
  );
}

export default App;
