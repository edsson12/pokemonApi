import React from 'react'

const PokeCard = ({nombre,sprites,abilities,stats,moves}) => {
  return (
    <div className='o-card'>  
        <img src={sprites} alt={nombre} />  
        <h1>nombre:</h1>    
        <h2>{nombre}</h2>
        <h3>habilidades:</h3>
        {abilities.map((a,key)=>(
            <div key={key}>
                <p>{a.ability.name}</p>
            </div>
        ))}

<h3>moves:</h3>
{moves.map((m,key)=>(
    <div key={key}>
        <p>{m.move.name}</p>
    </div>
))}
    </div>
  )
}

export default PokeCard