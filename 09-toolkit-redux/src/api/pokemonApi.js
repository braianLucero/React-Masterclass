import axios from "axios";
export const pokemoApi = axios.create({
  baseURL: " https://pokeapi.co/api/v2",
});
