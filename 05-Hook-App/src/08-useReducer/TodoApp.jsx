import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
const inicialState = [
  {
    id: new Date().getTime(),
    description: "recolectar la piedra del alma ",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "recolectar la piedra del tiempo ",
    done: false,
  },
];
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, inicialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[Todo] add todo",
      payload: todo,
    };
    dispatch(action);
  };
  // TAREA : crear componentes y desarrollar bien sus elementos
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
