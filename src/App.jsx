import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import Search from "./components/Search/Search";
import { traerPokemon } from "./services/getPokemon";

function App() {

  
  const [pokemon, setPokemon] = useState();
  const [cargando, setCargando] = useState(false);

  const getPokemons = async (query) => {
    setCargando(true);
    console.log(query);
    const response = await traerPokemon(query);
    const result = await response.json();
    console.log(result);
    setPokemon(result);
    setCargando(false);
  };

  return (
    <div className="App">
      <Search {...{ getPokemons }} />

      {!cargando && pokemon ? <PokeCard nombre={pokemon.name} 
      sprites={pokemon.sprites.front_default} 
      abilities={pokemon.abilities}
      stats={pokemon.stats}
      moves={pokemon.moves}
      type={pokemon.types}
      /> : null}
    </div>
  );
}

export default App;
