import { useEffect, useState } from "react";
import { Pagination } from "../Pagination";
import { Pokemon } from "../Pokemon/Pokemon";

export const Pokedex = ({pokemonList, page, setPage, total, loading}) => {

  const lastPage = ()=>{
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  }

  const nextPage = ()=>{
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  }

  return (
    <>
      <div className="w-full p-10 max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl text-gray-600">Pokedex</h1>
          <Pagination 
            page = {page + 1}
            totalPages = {total}
            onLeftClick = {lastPage}
            onRightClick = {nextPage}
          />
        </div>
        {
          loading ? 
          <div>Cargando Pokemones</div> :
          <div className="grid  sm:grid-cols-2 md:grid-cols-4 gap-5">
            {
              pokemonList.map((poke, index)=>(
                <div key={index}>
                  <Pokemon poke={poke}/>
                </div>
              ))
            }
          </div>
        }
      </div>
    </>
  )
}