import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
const inicialState = [
  {
    id: new Date().getTime(),
    description: "recolectar la piedra del alma ",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "recolectar la piedra del alma ",
    done: false,
  },
];
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, inicialState);

  return (
    <>
      <h1>TodoApp</h1>
      <hr />

      <ul>
        <li>Item1</li>
        <li>Item2</li>
        <li>Item3</li>
      </ul>
    </>
  );
};
