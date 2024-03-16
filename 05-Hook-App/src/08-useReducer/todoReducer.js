export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "[Todo] add todo":
      return [...inicialState, action.payload];
    default:
      return inicialState;
  }
};
