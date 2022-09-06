import React, { useState } from "react";
import "./Search.scss";

const Search = ({ getPokemons }) => {
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    getPokemons(search);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="Pokemon"
          placeholder="Search any Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleClick}>Buscar</button>
      </form>
    </div>
  );
};

export default Search;
