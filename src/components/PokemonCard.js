// import {useEffect, useState} from 'react';
import '../styles.css';


const PokemonCard = (props) => {
    //have to put props.pokemon && as a check for undefined props.pokemon
    const image = props.pokemon?.sprites?.front_default;
    //name = props.pokemon && props.pokemon.name (the ? replaces the &&)
    const name = props.pokemon?.name?.charAt(0).toUpperCase() + props.pokemon?.name?.slice(1);
    const id = props.pokemon?.id; 
    const height = props.pokemon?.height;
    const weight = props.pokemon?.weight;
    const abilities = props.pokemon?.abilities?.map((ability, index) => {
        return <li key={index}>{ability.ability.name}</li>
    })
    const types = props.pokemon?.types?.map((type, index) => {
        return <li key={index}>{type.type.name}</li>
    })
    // const statCategories = props.pokemon?.stats?.map((stat, index) => {
    //     return <li key={index}>{stat.stat.name}</li>
    // })
    const statVals = props.pokemon?.stats?.map((stat, index) => {
        return <li key={index}>{stat.base_stat}</li>
    })

    // let hpVal = statVals[0].props.children;
    // document.getElementById("hp").value= hpVal;

    // switch(types[0].props.children) {
    //     case 'normal':
    //         changeBackground('#FEF5E7');
    //         break;
    //     case 'fire':
    //        changeBackground('#AC1E26');
    //        break;
    //     case 'fighting':
    //         changeBackground('#D98880');
    //         break;
    //     case 'water':
    //         changeBackground('#AED6F1');
    //         break;
    //     case 'flying':
    //         changeBackground('#E8DAEF ');
    //         break;
    //     case 'grass':
    //         changeBackground('#E2FFB5');
    //         break;
    //     case 'poison':
    //         changeBackground('#AF7AC5');
    //         break;
    //     case 'electric':
    //         changeBackground('#FFF1AE');
    //         break;
    //     case 'ground':
    //         changeBackground('#AF601A');
    //         break;
    //     case 'psychic':
    //         changeBackground('#FDB9DC');
    //         break;
    //     case 'rock':
    //         changeBackground('#EDBB99');
    //         break;
    //     case 'ice':
    //         changeBackground('#EBF5FB');
    //         break;
    //     case 'bug':
    //         changeBackground('#E3FDB9 ');
    //         break;
    //     case 'dragon':
    //         changeBackground('#B3D4FF');
    //         break;
    //     case 'ghost':
    //         changeBackground('#AC80FF');
    //         break;
    //     case 'dark':
    //         changeBackground('#979797');
    //         break;
    //     case 'steel':
    //         changeBackground('#E4E4E4 ');
    //         break;
    //     case 'fairy':
    //         changeBackground('#FFDFF3');
    //         break;
    //     default:
    //         break; 
    // }

    function changeBackground(colour) {
        document.querySelector('.card').style.backgroundColor = colour;
    }

    return (
        <div className="card">
            <h1>{name} </h1>
            <img src= {image} alt=""></img>
            <h2>ID: {id}</h2>
            <h2>Types: {types}</h2>
            <h2>Height: {height} Weight: {weight}</h2>
            <h2>Abilities:{abilities}</h2>  
            <h2>Base Stats: {statVals}</h2>
            {/* <progress id="hp" value= "hp" max="200"></progress>  */}

        </div>
    )
}

export default PokemonCard;