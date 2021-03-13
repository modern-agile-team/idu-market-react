import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
  BOOK_GET_REQUEST,
  BOOK_GET_FAILURE,
  BOOK_GET_SUCCESS,
  DEVICE_GET_REQUEST,
  DEVICE_GET_FAILURE,
  DEVICE_GET_SUCCESS,
  CLOTHES_GET_REQUEST,
  CLOTHES_GET_SUCCESS,
  CLOTHES_GET_FAILURE,
  FREEBOARD_GET_REQUEST,
  FREEBOARD_GET_SUCCESS,
  FREEBOARD_GET_FAILURE,
  NOTICEBOARD_GET_REQUEST,
  NOTICEBOARD_GET_SUCCESS,
  NOTICEBOARD_GET_FAILURE,
} from "../types";

//Book
function bookGetAPI(action) {
  const categoryName = action;
  return axios.get(`/api/boards/${categoryName}`);
}

function* bookGet(action) {
  try {
    const result = yield call(bookGetAPI, action.payload);
    console.log(result);

    yield put({
      type: BOOK_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: BOOK_GET_FAILURE,
      payload: e.response,
    });
  }
}

//Device
function deviceGetAPI(action) {
  const categoryName = action;
  return axios.get(`/api/boards/${categoryName}`);
}

function* deviceGet(action) {
  try {
    const result = yield call(deviceGetAPI, action.payload);
    console.log(result);

    yield put({
      type: DEVICE_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: DEVICE_GET_FAILURE,
      payload: e.response,
    });
  }
}

//Clothes
function clothesGetAPI(action) {
  const categoryName = action;
  return axios.get(`/api/boards/${categoryName}`);
}

function* clothesGet(action) {
  try {
    const result = yield call(clothesGetAPI, action.payload);
    console.log(result);

    yield put({
      type: CLOTHES_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: CLOTHES_GET_FAILURE,
      payload: e.response,
    });
  }
}

//Freeboard
function freeboardGetAPI(action) {
  const categoryName = action;
  return axios.get(`/api/boards/${categoryName}`);
}

function* freeboardGet(action) {
  try {
    const result = yield call(freeboardGetAPI, action.payload);
    console.log(result);

    yield put({
      type: FREEBOARD_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: FREEBOARD_GET_FAILURE,
      payload: e.response,
    });
  }
}

//Notcieboard
function noticeboardGetAPI(action) {
  const categoryName = action;
  return axios.get(`/api/boards/${categoryName}`);
}

function* noticeboardGet(action) {
  try {
    const result = yield call(noticeboardGetAPI, action.payload);
    console.log(result);

    yield put({
      type: NOTICEBOARD_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: NOTICEBOARD_GET_FAILURE,
      payload: e.response,
    });
  }
}

function* watchBookGet() {
  yield takeEvery(BOOK_GET_REQUEST, bookGet);
}

function* watchDeviceGet() {
  yield takeEvery(DEVICE_GET_REQUEST, deviceGet);
}

function* watchClothesGet() {
  yield takeEvery(CLOTHES_GET_REQUEST, clothesGet);
}

function* watchFreeboardGet() {
  yield takeEvery(FREEBOARD_GET_REQUEST, freeboardGet);
}

function* watchNoticeboardGet() {
  yield takeEvery(NOTICEBOARD_GET_REQUEST, noticeboardGet);
}

//authSaga() 여러 Saga 통합
export default function* boardsSaga() {
  yield all([
    fork(watchBookGet),
    fork(watchDeviceGet),
    fork(watchClothesGet),
    fork(watchFreeboardGet),
    fork(watchNoticeboardGet),
  ]);
}
