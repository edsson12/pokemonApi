import React, { useState } from 'react'



const Search = ({getPokemons}) => {

const [search,setSearch]= useState('');   

const handleClick=(e)=>{
    e.preventDefault();
   getPokemons(search)
}

  return (
    <div>
        <form>
        <input
          type="text"
          name="pokemoni"
          placeholder="pokemn"
          onChange={(e)=> setSearch(e.target.value)}
        />

    <p>{search}</p>
        <button  onClick={handleClick}>Buscar</button>
      </form>
        
        
    </div>
  )
}

export default Search