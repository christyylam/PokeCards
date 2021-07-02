import { useEffect, useState } from "react";
import "../styles.css";

const PokemonCard = (props) => {
  //have to put props.pokemon && as a check for undefined props.pokemon
  //name = props.pokemon && props.pokemon.name (the ? replaces the &&)
  const name =
    props.pokemon?.name?.charAt(0).toUpperCase() +
    props.pokemon?.name?.slice(1);
  const id = props.pokemon?.id;
  //height is given in decimeters so have to convert to m (1 decimeter=0.1m)
  const height = Math.round(props.pokemon?.height * 0.1 * 10) / 10;
  //weight is given in hectograms so have to convert to kg (1 hectogram=0.1kg)
  const weight = Math.round(props.pokemon?.weight * 0.1 * 10) / 10;
  const abilities = props.pokemon?.abilities?.map((ability, index) => {
    return <li key={index}>{ability.ability.name}</li>;
  });
  const types = props.pokemon?.types?.map((type, index) => {
    return <span key={index}>{type.type.name}</span>;
  });
  const statVals = props.pokemon?.stats?.map((stat, index) => {
    return <span key={index}>{stat.base_stat}</span>;
  });

  //handling the different sprite images
  //default image
  const defaultImage = props.pokemon?.sprites?.front_default;
  //putting all the possible image links into an array
  const images = props.pokemon?.sprites;
  const allImages = [];
  props.pokemon &&
    Object.entries(images).forEach((image) => {
      if (image[1] !== null && typeof image[1] === "string") {
        allImages.push(image[1]);
      }
    });
  //finding the index of the default image
  let defaultImageIndex = allImages.findIndex(
    (image) => image === defaultImage
  );

  //useEffect to make sure the pokemon image is the forward facing one each time a new card loads
  useEffect(() => {
    setCurrentImageIndex(defaultImageIndex);
  }, [props.pokemon, defaultImageIndex]);

  //hook to set currentImageIndex
  const [currentImageIndex, setCurrentImageIndex] = useState(defaultImageIndex);

  //handle button button clicks
  const handlePrev = (e) => {
    e.preventDefault();
    if (currentImageIndex - 1 >= 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  const handleNext = (e) => {
    e.preventDefault();
    if (currentImageIndex + 1 < allImages.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  //setting up values for stat progress bars
  //from bulbapedia: base stats range from 1-255 (so 100% progress bar would be stat value of 255 since max is 255)
  //then multiplying by 3.5 because maxwidth of bar is 350px instead of 100px (scaled up by 3.5)
  const hpVal = statVals[0].props.children;
  const atkVal = statVals[1].props.children;
  const atkBar = Math.round((atkVal / 255) * 100) * 3.5;
  const defVal = statVals[2].props.children;
  const defBar = Math.round((defVal / 255) * 100) * 3.5;
  const specialAtkVal = statVals[3].props.children;
  const specialAtkBar = Math.round((specialAtkVal / 255) * 100) * 3.5;
  const specialDefVal = statVals[4].props.children;
  const specialDefBar = Math.round((specialDefVal / 255) * 100) * 3.5;
  const speedVal = statVals[5].props.children;
  const speedBar = Math.round((speedVal / 255) * 100) * 3.5;

  //handling card background colour change
  const allColours = {
    normal: "#FEF5E7",
    fire: "#F73718",
    fighting: "#D98880",
    water: "#AED6F1",
    flying: "#E8DAEF",
    grass: "#7AC74C",
    poison: "#b284be",
    electric: "#f8de7e",
    ground: "#E2BF65",
    psychic: "#FDB9DC",
    rock: "#EDBB99",
    ice: "#e7feff",
    bug: "#A6B91A",
    dragon: "#B3D4FF",
    ghost: "#AC80FF",
    dark: "#979797",
    steel: "#E4E4E4 ",
    fairy: "#FFDFF3",
  };

  //function to render the pokemon card
  const renderCard = () => {
    if (props.pokemon) {
      return (
        <div
          className="card"
          style={{ backgroundColor: allColours[types[0].props.children] }}
        >
          <div>
            <span className="name">{name} </span>
            <span className="id">ID #{id}</span>
            <span className="hp">
              HP <b>{hpVal}</b>
            </span>
          </div>
          <div className="viewImages">
            <a
              id="scrollButton"
              href="/#"
              class="previous round"
              onClick={handlePrev}
            >
              &#8249;
            </a>
            <img src={allImages[currentImageIndex]} alt=""></img>
            <a
              id="scrollButton"
              href="/#"
              class="next round"
              onClick={handleNext}
            >
              &#8250;
            </a>
          </div>
          <div className="viewTypes">
            <span className="type">{types[0]}</span>
            {types[1] ? <span className="type">{types[1]}</span> : <p></p>}
          </div>
          <div className="measurements">
            <h2>
              Height: {height} m &nbsp;|&nbsp; Weight: {weight} kg
            </h2>
          </div>
          {/* base stats */}
          <p>Attack</p>
          <div className="progressBarBorder">
            <div className="progressBar" style={{ width: atkBar }}>
              {atkVal}
            </div>
          </div>
          <p>Defense</p>
          <div className="progressBarBorder">
            <div className="progressBar" style={{ width: defBar }}>
              {defVal}
            </div>
          </div>
          <p>Special Attack</p>
          <div className="progressBarBorder">
            <div className="progressBar" style={{ width: specialAtkBar }}>
              {specialAtkVal}
            </div>
          </div>
          <p>Special Defense</p>
          <div className="progressBarBorder">
            <div className="progressBar" style={{ width: specialDefBar }}>
              {specialDefVal}
            </div>
          </div>
          <p>Speed</p>
          <div className="progressBarBorder">
            <div className="progressBar" style={{ width: speedBar }}>
              {speedVal}
            </div>
          </div>
          <h2>Abilities: {abilities}</h2>
        </div>
      );
    }
  };

  return <div>{renderCard()}</div>;
};

export default PokemonCard;
