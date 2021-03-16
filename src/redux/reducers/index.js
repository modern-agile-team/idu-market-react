import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./authReducer";
import loading from "./loadingReducer";
import boards from "./boardsReducer";
import profile from "./profileReducer";
import comment from "./commentReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    loading,
    boards,
    profile,
    comment,
  });

export default createRootReducer;
