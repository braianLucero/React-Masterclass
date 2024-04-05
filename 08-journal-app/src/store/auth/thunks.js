import { singInWithGoogle } from "../../firebase/provider";
import { chekingCredentials } from "./authSlice";

export const chekingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());

    const result = singInWithGoogle();
  };
};
