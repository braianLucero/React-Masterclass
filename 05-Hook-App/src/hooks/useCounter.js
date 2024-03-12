import { useState } from "react";

export const useCounter = (inicialValue = 10) => {
  const [counter, setCounter] = useState(inicialValue);

  return {
    counter,
  };
};
