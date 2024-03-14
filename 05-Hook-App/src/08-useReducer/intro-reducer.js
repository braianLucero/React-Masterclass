const initialState = [
  {
    id: 1,
    todo: "braian esta recolectando experiencia ",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newReducer = {
  id: 2,
  todo: "Agregando una experiencia en mi vida ",
  done: false,
};

const miReducerAction = {
  type: "[TODO] add todo",
  payload: newReducer,
};

todos = todoReducer(todos, miReducerAction);

console.log(todos);
