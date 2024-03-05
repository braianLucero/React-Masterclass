import React from "react";
import { prototype } from "markdown-it/lib/token";
import { Contador } from "./hooks/Contador";

export const CounterApp = ({ value }) => {
  const { contador, incrementar, decremento, reset } = Contador();

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {contador} </h2>

      <button className="boton" onClick={incrementar}>
        +1
      </button>
      <button className="boton" onClick={decremento}>
        -1
      </button>

      <button className="boton" onClick={reset}>
        Reset
      </button>
    </>
  );
};

CounterApp.prototype = {
  value: prototype.number,
};
