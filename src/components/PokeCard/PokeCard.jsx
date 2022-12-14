import React, { useState } from "react";
import "./PokeCard.scss";

const PokeCard = ({ nombre, sprites, abilities, type, moves }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="o-card">
      <div className="o-imgcont">
        <img src={sprites} alt={nombre} />
      </div>
      <div className="o-type-container">
        {type.map((c, key) => (
          <div key={key}>
            <p>{c.type.name}</p>
          </div>
        ))}
      </div>
      <div className="o-nombre">
        <h2>{nombre}</h2>
      </div>

      <div className="o-tabs">
        <button
          className={toggleState === 1 ? "o-active" : "o-tab"}
          onClick={() => toggleTab(1)}
        >
          Abilities
        </button>
        <button
          className={toggleState === 2 ? "o-active" : "o-tab"}
          onClick={() => toggleTab(2)}
        >
          Moves
        </button>
      </div>

      <div
        className={toggleState === 1 ? "o-abilities" : "o-abilities-inactive"}
      >
        
        {abilities.map((a, key) => (
          <div key={key}>
            <p>{a.ability.name}</p>
          </div>
        ))}
      </div>
      <div className={toggleState === 2 ? "o-moves" : "o-moves-inactive"}>
        
        {moves.map((m, key) => (
          <div key={key}>
            <p>{m.move.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
