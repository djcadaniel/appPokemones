import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoritesContext';
import './Navbar.css';

export const Navbar = () => {
  
  const {favoritePokemones} = useContext(FavoriteContext);
  console.log(favoritePokemones.length)
  let logoPoke = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <>
      <nav className='bg-gradient-to-r from-cyan-700 to-blue-900  flex justify-between items-center w-full min-w-[320px] py-2 sm:py-4 px-5 sm:px-10'>
        <div>
          <img 
            src={logoPoke}
            alt="logo de Pokemon" 
            className="h-24"
          />
        </div>
        <div className='text-white text-3xl'>Favoritos: {favoritePokemones.length} 💙</div>
      </nav>
    </>
  )
}