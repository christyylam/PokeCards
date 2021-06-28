import React from 'react';
import pokemonLogo from './images/pokemon_logo.png';
import '../styles.css';

const Header = () => {
    return (
        <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"><img src= {pokemonLogo} alt="Pokemon" width="400"/></a>
    )
}

export default Header;