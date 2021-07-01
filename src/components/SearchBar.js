import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import "../styles.css";

const SearchBar = () => {
  //hooks
  //setting initial state to null instead of [] because requestPokemon gives back an object not an array
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState("");

  //requesting pokemon data from the api
  const requestPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const json = await res.json();
    setPokemonData(json);
  };

  // useEffect(() => {
  //     requestPokemon();
  // }, []);//eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestPokemon();
    console.log(pokemonData);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          placeholder="Enter Pokemon Name"
          onChange={handleChange}
          value={pokemonName}
        />
        <input type="submit" value="Search Pokemon!" id="searchButton" />
      </form>
      {pokemonData && <PokemonCard pokemon={pokemonData} />}
    </div>
  );
};

export default SearchBar;
