import { useState, useEffect } from 'react';

const TOTAL_POKEMON = 151;

const useRandomPokemonImage = () => {
  const [image, setImage] = useState(null);

  useEffect( () => {
    const fetchPokemon = async () => {
      const randomPokemonIndex = Math.ceil(Math.random() * TOTAL_POKEMON);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonIndex}`);
      const data = await response.json();
      const pokemonImage = data.sprites.front_default;
      setImage(pokemonImage);
    };
    fetchPokemon();
  }, []);

  return image;
};

export default useRandomPokemonImage;
