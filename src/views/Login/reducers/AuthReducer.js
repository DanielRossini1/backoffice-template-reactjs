import { defineState } from "redux-localstore";

const initialState = defineState({ auth: false })("authStore");

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return state = { auth: action.data };
    case 'SET_AUTH_FALSE':
      return state = { auth: false };
    default:
      return state;
  }
}

export default AuthReducer;
