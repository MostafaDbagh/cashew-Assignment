import { VALIDATE_USER } from "./type";

const initialState = {
  currentUser: "",
  token: "",
  isValid:false
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_USER:
      return {
        ...state,
        currentUser: action.payload.email,
        token: action.payload.token,
        isValid:action.payload.isValid
      };
    default:
      return state;
  }
};
export default LoginReducer;
