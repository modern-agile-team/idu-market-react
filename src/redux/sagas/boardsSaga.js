import axios from "axios";
import { all, fork, put, takeEvery, call, delay } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  BASIC_BOARD_GET_REQUEST,
  BASIC_BOARD_GET_SUCCESS,
  BASIC_BOARD_GET_FAILURE,
  BOARD_WRITE_REQUEST,
  BOARD_WRITE_SUCCESS,
  BOARD_WRITE_FAILURE,
  BOARD_UPDATE_REQUEST,
  BOARD_UPDATE_SUCCESS,
  BOARD_UPDATE_FAILURE,
  BOARD_DELETE_SUCCESS,
  BOARD_DELETE_REQUEST,
  BOARD_DELETE_FAILURE,
  BOARD_DETAIL_REQUEST,
  BOARD_DETAIL_SUCCESS,
  BOARD_DETAIL_FAILURE,
  BOARD_STATUS_REQUEST,
  BOARD_STATUS_SUCCESS,
  BOARD_STATUS_FAILURE,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DELETE_FAILURE,
} from "../types";

//Freeboard GET
function basicBoardGetAPI(action) {
  const categoryName = action;
  return axios.get(`/api/boards/${categoryName}`);
}

function* basicBoardGet(action) {
  try {
    const result = yield call(basicBoardGetAPI, action.payload);
    console.log(result);

    yield put({
      type: BASIC_BOARD_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: BASIC_BOARD_GET_FAILURE,
      payload: e.response,
    });
  }
}

//BoardNew
function boardWriteAPI(action) {
  const categoryName = action.categoryName;

  console.log(action);
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

//Board Update
function boardUpdateAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;

  return axios.put(`/api/boards/${categoryName}/${num}`, action);
}

function* boardUpdate(action) {
  try {
    const result = yield call(boardUpdateAPI, action.payload);
    console.log(result);

    yield put({
      type: BOARD_UPDATE_SUCCESS,
      payload: result.data,
    });

    yield delay(1500);

    yield put(
      push(`/boards/${action.payload.categoryName}/${action.payload.num}`)
    );
  } catch (e) {
    yield put({
      type: BOARD_UPDATE_FAILURE,
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

    yield put(push(`/boards/${action.payload.categoryName}`));
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

//Board Status
function boardStatusAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;
  const body = {
    status: action.status,
  }
  return axios.patch(`/api/boards/${categoryName}/${num}/status`, body);
}

function* boardStatus(action) {
  try {
    const result = yield call(boardStatusAPI, action.payload);
    console.log(result);

    yield put({
      type: BOARD_STATUS_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: BOARD_STATUS_FAILURE,
      payload: e.response,
    });
  }
}

//watch
function* watchBasicBoardGet() {
  yield takeEvery(BASIC_BOARD_GET_REQUEST, basicBoardGet);
}

function* watchBoardWrite() {
  yield takeEvery(BOARD_WRITE_REQUEST, boardWrite);
}

function* watchBoardUpdate() {
  yield takeEvery(BOARD_UPDATE_REQUEST, boardUpdate);
}

function* watchBoardDelete() {
  yield takeEvery(BOARD_DELETE_REQUEST, boardDelete);
}

function* watchBoardStatus() {
  yield takeEvery(BOARD_STATUS_REQUEST, boardStatus);
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
    fork(watchBasicBoardGet),
    fork(watchBoardWrite),
    fork(watchBoardUpdate),
    fork(watchBoardDelete),
    fork(watchBoardStatus),
    fork(watchImageDelete),
    fork(watchBoardDetailGet),
  ]);
}
