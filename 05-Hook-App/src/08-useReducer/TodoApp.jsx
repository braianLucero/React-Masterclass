import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
const inicialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "recolectar la piedra del alma ",
  //   done: false,
  // },
];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, inicialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[Todo] add todo",
      payload: todo,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes:2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* todolist */}
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <h4>Agregando Todo</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
