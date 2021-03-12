import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./authReducer";
import loading from "./loadingReducer";
import market from "./marketReducer";
import boardNew from "./boardNewReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    loading,
    market,
    boardNew,
  });

export default createRootReducer;
