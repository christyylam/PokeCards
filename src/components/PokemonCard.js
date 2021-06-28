// import {useEffect, useState} from 'react';


const PokemonCard = (props) => {
    //have to put props.pokemon && as a check for undefined props.pokemon
    const image = props.pokemon?.sprites?.front_default;
    //name = props.pokemon && props.pokemon.name (the ? replaces the &&)
    const name = props.pokemon?.name;
    const id = props.pokemon?.id; 
    const height = props.pokemon?.height;
    const weight = props.pokemon?.weight;
    const abilities = props.pokemon?.abilities?.map((ability, index) => {
        return <li key={index}>{ability.ability.name}</li>
    })
    const types = props.pokemon?.types?.map((type, index) => {
        return <li key={index}>{type.type.name}</li>
    })
    const statCategories = props.pokemon?.stats?.map((stat, index) => {
        return <li key={index}>{stat.stat.name}</li>
    })
    const statVals = props.pokemon?.stats?.map((stat, index) => {
        return <li key={index}>{stat.base_stat}</li>
    })


    return (
        <div className="name">
            <img src= {image} alt=""></img>
            <h1>{name} {id}</h1>
            <h2>{types}</h2>
            <h2>{height} {weight}</h2>
            <h2>{abilities}</h2>  
            <h2>{statCategories}{statVals}</h2>          
        </div>
    )
}

export default PokemonCard;