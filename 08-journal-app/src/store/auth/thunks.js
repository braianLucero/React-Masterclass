import {
  registerUserWithEmailPassword,
  singInWithGoogle,
} from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle(); // Necesitas esperar la promesa de signInWithGoogle
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startCreatingWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({
        email,
        password,
        displayName,
      });

    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};
