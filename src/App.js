import {useState} from 'react';
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
// import PokemonCard from "./components/PokemonCard"
import './styles.css';

//npm start to run it 
const App = () => {
  
  return (
    <div className="App">
    <div className="TitleSection">
    <Header />
    <SearchBar />
    {/* <PokemonCard /> */}
    </div>
    </div>
  );
    
  }

  export default App;


