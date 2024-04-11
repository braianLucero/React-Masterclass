import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmtyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const inicioDeNuevoNota = () => {
  return async (dispatch, getState) => {
    // uid , para saber yo como quiero almacenar mi informacion en mi base de datos
    dispatch(savingNewNote());
    const { uid } = getState().auth;

    const nuevaNota = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    // ============================================== // es el uid del usuario autenticado
    const nuevoDocumento = doc(collection(FirebaseDB, `${uid}/journal/notas`));
    await setDoc(nuevoDocumento, nuevaNota);

    nuevaNota.id = nuevoDocumento.id;

    dispatch(addNewEmtyNote(nuevaNota));
    dispatch(setActiveNote(nuevaNota));
  };
};
