import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./authReducer";
import loading from "./loadingReducer";
import market from "./marketReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    loading,
    market,
  });

export default createRootReducer;
