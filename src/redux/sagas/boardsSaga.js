import axios from "axios";
import { all, fork, put, takeEvery, call, delay } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  FREEBOARD_GET_REQUEST,
  FREEBOARD_GET_SUCCESS,
  FREEBOARD_GET_FAILURE,
  NOTICEBOARD_GET_REQUEST,
  NOTICEBOARD_GET_SUCCESS,
  NOTICEBOARD_GET_FAILURE,
  BOARD_WRITE_REQUEST,
  BOARD_WRITE_SUCCESS,
  BOARD_WRITE_FAILURE,
  BOARD_DELETE_SUCCESS,
  BOARD_DELETE_REQUEST,
  BOARD_DELETE_FAILURE,
  BOARD_DETAIL_REQUEST,
  BOARD_DETAIL_SUCCESS,
  BOARD_DETAIL_FAILURE,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DELETE_FAILURE,
} from "../types";

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
function boardWriteAPI(action) {
  const categoryName = action.categoryName;
  return axios.post(`/api/boards/${categoryName}`, action);
}

function* boardWrite(action) {
  try {
    const result = yield call(boardWriteAPI, action.payload);
    console.log(result);
    
    yield put({
      type: BOARD_WRITE_SUCCESS,
      payload: result.data,
    });

    yield delay(1500);

    yield put(
      push(`/boards/${action.payload.categoryName}/${result.data.num}`)
    );
    
  } catch (e) {
    yield put({
      type: BOARD_WRITE_FAILURE,
      payload: e.response,
    });
  }
}

//Board Delete
function boardDeleteAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;

  return axios.delete(`/api/boards/${categoryName}/${num}`, action);
}

function* boardDelete(action) {
  try {
    const result = yield call(boardDeleteAPI, action.payload);
    console.log(result);
    
    yield put({
      type: BOARD_DELETE_SUCCESS,
      payload: result.data,
    });

    yield put(push(`/boards/${action.payload.categoryName}`));

  } catch (e) {
    yield put({
      type: BOARD_DELETE_FAILURE,
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

//Image Delete
function imageDeleteAPI(action) {
  return axios.post(`/api/image/delete`, action);
}

function* imageDelete(action) {
  try {
    const result = yield call(imageDeleteAPI, action.payload);
    console.log(result);

    yield put({
      type: IMAGE_DELETE_SUCCESS,
      payload: result.data,
    });
    
  } catch (e) {

    yield put({
      type: IMAGE_DELETE_FAILURE,
      payload: e.response,
    });
  }
}

//watch
function* watchFreeboardGet() {
  yield takeEvery(FREEBOARD_GET_REQUEST, freeboardGet);
}

function* watchNoticeboardGet() {
  yield takeEvery(NOTICEBOARD_GET_REQUEST, noticeboardGet);
}

function* watchBoardWrite() {
  yield takeEvery(BOARD_WRITE_REQUEST, boardWrite);
}

function* watchBoardDelete() {
  yield takeEvery(BOARD_DELETE_REQUEST, boardDelete);
}

function* watchBoardDetailGet() {
  yield takeEvery(BOARD_DETAIL_REQUEST, boardDetail);
}

function* watchImageDelete() {
  yield takeEvery(IMAGE_DELETE_REQUEST, imageDelete);
}


//authSaga() 여러 Saga 통합
export default function* boardsSaga() {
  yield all([
    fork(watchFreeboardGet),
    fork(watchNoticeboardGet),
    fork(watchBoardWrite),
    fork(watchBoardDetailGet),
    fork(watchBoardDelete),
    fork(watchImageDelete),
  ]);
}
