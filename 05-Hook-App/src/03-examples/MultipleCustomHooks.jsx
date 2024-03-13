import React from "react";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/7"
  );

  return (
    <>
      <h1>informacion de Pokemon</h1>
      <hr />
      {isLoading === true ? <p>Cargando...</p> : "Api"}
      <h2>{data?.name}</h2>
    </>
  );
};
