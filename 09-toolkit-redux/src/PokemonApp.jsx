import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <span>Loading:{isLoading ? "True" : "false"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
