import {useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import Search from "./components/Search/Search";
import { traerPokemon } from "./services/getPokemon";
import './App.scss'

function App() {

  
  const [pokemon, setPokemon] = useState();
  const [cargando, setCargando] = useState(false);
  const [error, setError]= useState(false);


  const getPokemons = async (query) => {
    
    if(!query) return setError(true);
    setCargando(true);
    console.log(query);
    const response = await traerPokemon(query);
    if (response.status==="404") {
      console.log("sisa")
      
    }
    const result = await response.json();
    
    console.log(result);
    setPokemon(result);
    setCargando(false);
  };

  return (
    <div className="App">
      
      <Search {...{ getPokemons }} />
      {error? <h2>Please make sure you´re searching for a Pokemon</h2>:null}

      {!cargando && pokemon ? <PokeCard nombre={pokemon.name} 
      sprites={pokemon.sprites.front_default} 
      abilities={pokemon.abilities}
      stats={pokemon.stats}
      moves={pokemon.moves}
      type={pokemon.types}
      /> : <p>Poke Search</p>}
    </div>
  );
}

export default App;
