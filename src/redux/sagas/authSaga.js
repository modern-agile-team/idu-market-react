import axios from 'axios';
import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
} from '../types';

//  Login
function loginUserAPI(loginData) {
    console.log(loginData, "loginData");
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    return axios.post('/api/jwt', loginData, config);
};

function* loginUser(action) {
    try {
        //action.payload: {email: ~, password: ~} 
        const result = yield call(loginUserAPI, action.payload);

        console.log(result);

        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data,
        }); //성공 액션 dispatch
    } catch (e) {
        yield put({
            type: LOGIN_FAILURE,
            payload: e.response,
        }); //실패 액션 dispatch
    }
};

function* watchLoginUser() {
    //LOGIN_REQUEST가 있으면 loginUser를 실행해라 라는 뜻
    yield takeEvery(LOGIN_REQUEST, loginUser);
};

//  Logout
function* logout(action) {
    try {
        yield put({
            type: LOGOUT_SUCCESS,
        }); //성공 액션 dispatch
    } catch (e) {
        yield put({
            type: LOGOUT_FAILURE,
        }); 
    }
}

function* watchLogout() {
    yield takeEvery(LOGOUT_REQUEST, logout);
}


//authSaga() 여러 Saga 통합
export default function* authSaga() {
    yield all([
        fork(watchLoginUser),
        fork(watchLogout),
    ]);
};