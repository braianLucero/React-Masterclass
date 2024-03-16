import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group ">
      {todos.map((todo) => (
        // TodoItem
        <TodoItem key={todo.id} todo={todo} todos={todos} />
      ))}
    </ul>
  );
};