import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import { traerPokemon } from "./services/getPokemon";


function App() {  

  const getPokemons= async(query)=>{
    console.log(query)
    const response = await traerPokemon(query);
    const result= await response.json();
    console.log(result)
  }

  return (
    <div className="App">
      <Search
     {...{getPokemons}}
      />

     
    </div>
  );
}

export default App;
