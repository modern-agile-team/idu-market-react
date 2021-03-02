import { combineReducers } from 'redux';
import auth from './authReducer';
import loading from './loadingReducer';

const rootReducer = combineReducers({
    auth,
    loading,
})

export default rootReducer;