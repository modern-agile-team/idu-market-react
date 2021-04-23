import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./redux/reducers/index";
import rootSaga from "./redux/sagas";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(...middleware))
    : composeWithDevTools(applyMiddleware(...middleware));

const initialState = {};

const store = createStore(createRootReducer(history), initialState, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
