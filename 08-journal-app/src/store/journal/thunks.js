import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const inicioDeNuevoNota = () => {
  return async (dispatch, getState) => {
    // uid , para saber yo como quiero almacenar mi informacion en mi base de datos

    const { uid } = getState().auth;
    console.log(uid);
    const nuevaNota = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    // ============================================== // es el uid del usuario autenticado
    const nuevoDocumento = doc(collection(FirebaseDB, `${uid}/journal/notas`));
    await setDoc(nuevoDocumento, nuevaNota);

    // dispatch
    // dispatch(nuevaNota)
    // dispatch(activarNota)
  };
};
