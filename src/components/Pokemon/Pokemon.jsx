import React from "react";
import { useContext } from "react";
import { FavoriteContext } from "../../context/favoritesContext";

export const Pokemon = ({ poke }) => {
  const { favoritePokemones, updateFavoritePokemon } =
    useContext(FavoriteContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemones.includes(poke.name) ? redHeart : blackHeart;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemon(poke.name);
  };

  return (
    <div className="w-full flex flex-wrap bg-white rounded-lg">
      <div className="w-2/5 mt-5">
        <h3 className="text-3xl capitalize text-blue-500 text-left ml-5">
          {poke.name}
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center w-3/5">
        <div className="text-3xl text-right w-full mr-10 mt-5 text-gray-500">#{poke.id}</div>
        <img
          className=""
          src={poke.sprites.front_default}
          alt={poke.name}
        />
      </div>
      <div className="w-full">
        <div>
          <div>
            {poke.types.map((type, index) => (
              <div key={index}>{type.name}</div>
            ))}
          </div>
          <button onClick={clickHeart}>
            <div className="text-3xl text-blue-700">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
