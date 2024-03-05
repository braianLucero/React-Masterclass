import React, { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decremento = () => {
    setContador(contador - 1);
  };

  const reset = () => setContador(0);

  return {
    contador,
    incrementar,
    decremento,
    reset,
  };
};
