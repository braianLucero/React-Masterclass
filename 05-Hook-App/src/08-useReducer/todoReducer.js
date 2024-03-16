export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "[Todo] add todo":
      return [...inicialState, action.payload];
    case "[Todo] remove todo":
      return inicialState.filter((todo) => todo.id !== action.payload);
    default:
      return inicialState;
  }
};
