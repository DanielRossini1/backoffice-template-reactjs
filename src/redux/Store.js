import { combineReducers, createStore } from "redux";
import AuthReducer from "../views/Login/reducers/AuthReducer";

const storeConfig = () => {
  return createStore(
    combineReducers({
      authStore: AuthReducer,
    }),
  );
}

export default storeConfig;
