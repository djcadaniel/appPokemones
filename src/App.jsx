import { useEffect, useState } from 'react';
import './App.css'
import { Navbar, Pokedex, SearchBar } from './components';
import { Pokemon } from './components/Pokemon/Pokemon';
import { FavoriteProvider } from './context/favoritesContext';
import {getPokemonData, getPokemones} from './helps/getApi';

function App() {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  console.log(page)
  console.log(total)
  const fetchPokemones= async()=>{
    try{
      setLoading(true)
      const data = await getPokemones(25, 25 * page);
      // setPokemonList(data.results);
      const promises = data.results.map(async(pokemon)=>{
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemonList(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
    }catch(err){}
  }

  useEffect(() => {
    fetchPokemones();
  }, [page])

  const updateFavoritePokemon = (name)=>{
    const newFavorite = [...favorites, name];
    setFavorites(newFavorite);
  }

  return (
    <>
      <FavoriteProvider value={{
        favoritePokemones : favorites,
        updateFavoritePokemon : updateFavoritePokemon
      }}>
        <Navbar />
        <div className="App">
          <SearchBar />
          <Pokedex 
            loading={loading}
            pokemonList={pokemonList} 
            page={page}
            setPage={setPage}
            total={total}
          />
        </div>
      </FavoriteProvider>
    </>
  )
}

export default App;