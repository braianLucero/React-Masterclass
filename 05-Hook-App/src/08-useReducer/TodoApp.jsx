import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo } =
    useTodos();

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes:2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* todolist */}
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={handleToggleTodo}
          />
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
