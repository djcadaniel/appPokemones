import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoritesContext';
import './Navbar.css';

export const Navbar = () => {
  
  const {favoritePokemones} = useContext(FavoriteContext);
  console.log(favoritePokemones.length)
  let logoPoke = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <>
      <nav>
        <div>
          <img 
            src={logoPoke}
            alt="logo de Pokemon" 
            className="navbar__image"
          />
        </div>
        <div>💙 {favoritePokemones.length}</div>
      </nav>
    </>
  )
}