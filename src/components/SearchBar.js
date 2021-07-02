import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Random from "../components/Random";
import "../styles.css";

const SearchBar = () => {
  //hooks
  //setting initial state to null instead of [] because requestPokemon gives back an object not an array
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  //   const [allPokemon, setAllPokemon] = useState([]);

  //requesting pokemon data for user inputted pokemon from the api
  const requestPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const json = await res.json();
    setPokemonData(json);
  };

  //   useEffect(() => {
  //     const requestPokeNames = async () => {
  //         const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  //         const json = await res.json();
  //         setAllPokemon(json);
  //     }
  //     requestPokeNames();
  //   }, []);

  const handleChange = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestPokemon();
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
      {pokemonData ? <p></p> : <Random />}
    </div>
  );
};

export default SearchBar;
