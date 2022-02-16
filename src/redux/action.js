import { VALIDATE_USER } from "./type";

export const addUser = (email, token,isValid) => {
  return {
    type: VALIDATE_USER,
    payload: { email, token,isValid },

  };
};
