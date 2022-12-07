import React from 'react'
import { useContext } from 'react';
import { FavoriteContext } from '../../context/favoritesContext';

export const Pokemon = ({poke}) => {

  const {favoritePokemones, updateFavoritePokemon} = useContext(FavoriteContext);
  const redHeart = '❤️';
  const blackHeart = '🖤'
  const heart = favoritePokemones.includes(poke.name) ? redHeart : blackHeart;
  const clickHeart = (e) =>{
    e.preventDefault();
    updateFavoritePokemon(poke.name);
  }
  
  return (
    <div className='w-full flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-700/70'>
      <div >
        <img className='h-48' src={poke.sprites.front_default} alt={poke.name} />
      </div>
      <div>
        <div>
          <h3 className='text-3xl capitalize  '>{poke.name}</h3>
          <div className='text-3xl'>{poke.id}</div>
        </div>
        <div>
          <div>
            {poke.types.map((type, index)=>(
              <div key={index}>{type.name}</div>
            ))}
          </div>
          <button onClick={clickHeart}>
            <div className='text-3xl text-blue-700'>{heart}</div>
          </button>
        </div>
      </div>
    </div>
  )
}