import React from 'react';
import useRandomPokemonImage from './useRandomPokemonImage';

const App = () => {
  const imageUrl = useRandomPokemonImage();

  return (
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <img src={imageUrl} alt=""/>
    </div>
  );
};

export default App;
