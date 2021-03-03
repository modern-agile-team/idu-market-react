import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import auth from './authReducer';
import loading from './loadingReducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth,
    loading,
})

export default createRootReducer;