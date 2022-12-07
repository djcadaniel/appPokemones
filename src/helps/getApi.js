export const getApi = async(pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(err){}
}

export const getPokemones = async(limit=50, offset=0) =>{
  try{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}.`
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(err){}
}

export const getPokemonData = async(url) =>{
  try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(err){}
}