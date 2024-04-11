export const inicioDeNuevoNota = () => {
  return async (dispatch) => {
    // uid , para saber yo como quiero almacenar mi informacion en mi base de datos
    const nuevaNota = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
  };
};
