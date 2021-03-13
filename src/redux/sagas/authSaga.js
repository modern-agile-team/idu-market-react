import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { push } from 'connected-react-router';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  LOADING_SUCCESS,
  LOADING_FAILURE,
  LOADING_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} from "../types";

// LOGIN
function loginUserAPI(loginData) {
  return axios.post("/api/jwt", loginData);
}

function* loginUser(action) {
  try {
    const result = yield call(loginUserAPI, action.payload);

    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });

    yield put({
      type: LOADING_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e.response,
    });
  }
}

// REGISTER
function registerAPI(registerData) {
  return axios.post("/api/user", registerData);
}

function* registerUser(action) {
  try {
    const result = yield call(registerAPI, action.payload);

    console.log(result);

    yield put({
      type: REGISTER_SUCCESS,
      payload: result.data,
    });

    yield put(push('/login'));
  } catch (e) {
    yield put({
      type: REGISTER_FAILURE,
      payload: e.response,
    });
  }
}

// LOGOUT
function* logout() {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
    });

    yield put({
      type: LOADING_FAILURE,
    });
  } catch (e) {
    yield put({
      type: LOGOUT_FAILURE,
    });
  }
}

//LOADING
function* loading(action) {
  try {
    yield put({
      type: LOADING_SUCCESS,
      payload: action.payload,
    });
  } catch (e) {
    yield put({
      type: LOADING_FAILURE,
    });
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser);
}

function* watchRegisterUser() {
  yield takeEvery(REGISTER_REQUEST, registerUser);
}

function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

function* watchLoading() {
  yield takeEvery(LOADING_REQUEST, loading);
}

//authSaga() 여러 Saga 통합
export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogout),
    fork(watchLoading),
    fork(watchRegisterUser),
  ]);
}
