import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());
    // Todo : realizar peticion http

    // URL de la API
    const { data } = await pokemonApi.get(
      `pokemon?limit=10&offset=${page * 10}`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
