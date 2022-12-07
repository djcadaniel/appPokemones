import { createContext } from "react";

export const FavoriteContext = createContext({
  favoritePokemons : [],
  updateFavoritePokemon: (id) => null,
})

export const FavoriteProvider = FavoriteContext.Provider;