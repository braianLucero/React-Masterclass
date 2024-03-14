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

  const handleNewTodo = (todo) => {
    console.log(todo);
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
          <ul className="list-group ">
            {todos.map((todo) => (
              // TodoItem
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="align-self-center"> Item1</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
          {/* Fin de todoList */}
        </div>
        <div className="col-5">
          <h4>Agregando Todo</h4>
          <hr />
          {/* TodoAdd onNewTodo(todo) */}
          {/* id: new Date() , description:'',done:false */}
          <form>
            <input
              type="text"
              placeholder="Que hay que hacer ?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
          {/* finTodoAdd */}
        </div>
      </div>
    </>
  );
};
