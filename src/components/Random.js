import { useEffect, useState } from "react";

const Random = () => {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [randomImg, setRandomImg] = useState("");

  useEffect(() => {
    requestPokeCount();
  }, []);

  const requestPokeCount = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/?limit=0"
    );
    const json = await res.json();
    setCount(json.count);
  };

  // return random number from 1 to pokedex max index
  useEffect(() => {
    const findIndex = () => {
      let randomPokeIndex = Math.round(Math.random() * count);
      setIndex(randomPokeIndex);
      console.log(randomPokeIndex);
    };
    findIndex();
  }, [count]);

  useEffect(() => {
    let defaultImage =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
    const requestRandom = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      const json = await res.json();
      if (json.sprites.other.dream_world.front_default !== null) {
        setRandomImg(json.sprites.other.dream_world.front_default);
      } else setRandomImg(defaultImage);
    };
    requestRandom();
  }, [index]);

  return (
    <div>
      <img className="randomPokeImg" src={randomImg} alt=""></img>
    </div>
  );
};

export default Random;
