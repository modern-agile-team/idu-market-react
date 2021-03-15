import axios from "axios";
import { all, fork, put, takeEvery, call, delay } from "redux-saga/effects";
import { push } from "connected-react-router";
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
  BOARD_NEW_REQUEST,
  BOARD_NEW_SUCCESS,
  BOARD_NEW_FAILURE,
  BOARD_DETAIL_REQUEST,
  BOARD_DETAIL_SUCCESS,
  BOARD_DETAIL_FAILURE,
} from "../types";

//Book GET
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

//Device GET
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

//Clothes GET
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

//Freeboard GET
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

//Notcieboard GET
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

//BoardNew
function boardNewAPI(action) {
  const categoryName = action.categoryName;
  console.log(categoryName);
  return axios.post(`/api/boards/${categoryName}`, action);
}

function* boardNew(action) {
  try {
    const result = yield call(boardNewAPI, action.payload);

    yield put({
      type: BOARD_NEW_SUCCESS,
      payload: result.data,
    });

    yield delay(1500);

    yield put(
      push(`/boards/${action.payload.categoryName}/${result.data.num}`)
    );
  } catch (e) {
    yield put({
      type: BOARD_NEW_FAILURE,
      payload: e.response,
    });
  }
}

//Board Detial
function boardDetailAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;

  console.log(categoryName, num);
  return axios.get(`/api/boards/${categoryName}/${num}`);
}

function* boardDetail(action) {
  try {
    const result = yield call(boardDetailAPI, action.payload);
    console.log(result);
    yield put({
      type: BOARD_DETAIL_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: BOARD_DETAIL_FAILURE,
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

function* watchBoardNew() {
  yield takeEvery(BOARD_NEW_REQUEST, boardNew);
}

function* watchBoardDetailGet() {
  yield takeEvery(BOARD_DETAIL_REQUEST, boardDetail);
}
//authSaga() 여러 Saga 통합
export default function* boardsSaga() {
  yield all([
    fork(watchBookGet),
    fork(watchDeviceGet),
    fork(watchClothesGet),
    fork(watchFreeboardGet),
    fork(watchNoticeboardGet),
    fork(watchBoardNew),
    fork(watchBoardDetailGet),
  ]);
}
