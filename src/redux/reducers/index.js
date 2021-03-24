import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./authReducer";
import boards from "./boardsReducer";
import profile from "./profileReducer";
import comment from "./commentReducer";
import trade from "./tradeReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    boards,
    profile,
    comment,
    trade,
  });

export default createRootReducer;
