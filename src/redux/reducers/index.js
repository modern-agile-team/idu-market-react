import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./authReducer";
import loading from "./loadingReducer";
import boards from "./BoardsReducer";
import boardNew from "./boardNewReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    loading,
    boards,
    boardNew,
  });

export default createRootReducer;
