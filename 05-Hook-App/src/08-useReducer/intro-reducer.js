const inicialState = [
  {
    id: 1,
    todo: "recolectar la piedra del alma ",
    done: false,
  },
];

const todoReducer = (state = inicialState, action = {}) => {
  if (action.type === "[TODO] add Todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "recolectar la piedra del poder ",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add Todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
