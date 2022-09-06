const url ='http://pokeapi.co/api/v2';
const query={
    pokemon:'pokemon'
}

export async function traerPokemon(pokemon){
    console.log(`${url}/${query.pokemon}/${pokemon}`)
    return fetch(`${url}/${query.pokemon}/${pokemon}`)
}