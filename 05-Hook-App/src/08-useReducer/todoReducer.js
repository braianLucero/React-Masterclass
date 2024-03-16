export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "[Todo] add todo":
      return [...inicialState, action.payload];
    case "[Todo] remove todo":
      return inicialState.filter((todo) => todo.id !== action.payload);
    case "[Todo] Toggle Todo":
      return inicialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return inicialState;
  }
};
