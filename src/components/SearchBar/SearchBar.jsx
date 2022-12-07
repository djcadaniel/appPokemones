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
      <div className="flex justify-center w-full bg-red-600">
        <form onSubmit={onFormSubmit} className="flex w-2/5 p-5">
          <input
            type="text"
            className="w-4/5 px-3 py-3 text-xl outline-none text-gray-600 rounded-md"
            placeholder="Buscar Pokemon..."
            value={input}
            onChange={onInputChange}
          />
          <button 
            onClick={onSearchPokemones}
            className= 'bg-blue-600 px-5 text-lg rounded-md ml-5'
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};
