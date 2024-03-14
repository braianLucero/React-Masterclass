export const todoReducer = (inicialState = [], action) => {
  switch (action.type) {
    case "abc":
      throw new Error(" Action.type = abc no esta implementada ");

    default:
      return inicialState;
  }
};
