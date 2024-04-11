import { doc, setDoc } from "firebase/firestore/lite";
import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
  logoutFirebase,
} from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";
import { FirebaseApp, FirebaseDB } from "../../firebase/config";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });
    console.log(result);

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    const noteToFireStore = {
      ...activeNote,
    };
    delete noteToFireStore.id;
    const docRef = doc(FirebaseDB, `${uid}/journal/notas/${activeNote.id}`);
    await setDoc(docRef, noteToFireStore, { merge: true });
  };
};
