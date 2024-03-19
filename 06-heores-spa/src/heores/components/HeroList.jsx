import React from "react";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
      {heroes.map((h) => (
        <li key={h.id}>{h.superhero}</li>
      ))}
    </ul>
  );
};
