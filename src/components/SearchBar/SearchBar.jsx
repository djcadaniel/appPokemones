import { useState } from "react";
import { getApi } from "../../helps/getApi";
import { useInputChange } from "../../Hooks/useInputChange";

export const SearchBar = () => {
  const [pokemon, setPokemon] = useState("");
  let search = "pikachu";
  const { input, onInputChange, onFormSubmit } = useInputChange();

  const onSearchPokemones = async (e) => {
    const data = await getApi(input);
    console.log(data);
    setPokemon(data);
  };

  return (
    <>
      <div className="flex justify-center w-full px-5 min-w-[320px]">
        <form onSubmit={onFormSubmit} className="flex justify-center w-full py-5">
          <input
            type="text"
            className="w-4/5 sm:w-3/5 md:w-2/5 px-3 py-3 text-xl outline-none text-gray-600 rounded-md border-2 border-blue-500 text-2xl"
            placeholder="Buscar Pokemon..."
            value={input}
            onChange={onInputChange}
          />
          <button 
            onClick={onSearchPokemones}
            className= 'bg-blue-800 px-5 text-lg text-white text-2xl rounded-md ml-5 hover:bg-white hover:border-2 hover:border-blue-500 hover:text-gray-600'
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};
