import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  TRADE_COMMENT_GET_REQUEST,
  TRADE_COMMENT_GET_SUCCESS,
  TRADE_COMMENT_GET_FAILURE,
  TRADE_COMPLETE_REQUEST,
  TRADE_COMPLETE_SUCCESS,
  TRADE_COMPLETE_FAILURE,
} from "../types";

//Trade Comment Get
function tradeCommentGetAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;

  return axios.get(`/api/boards/${categoryName}/${num}/comments`);
}

function* tradeCommentGet(action) {
  try {
    const result = yield call(tradeCommentGetAPI, action.payload);
    console.log(result);

    yield put({
      type: TRADE_COMMENT_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: TRADE_COMMENT_GET_FAILURE,
      payload: e.response,
    });
  }
}

//Trade Complete
function tradeCompleteAPI(action) {
  const boardNum = action.boardNum;
  const nickname = action.nickname;

  const body = {
    boardNum,
    nickname,
  };

  console.log(body);

  return axios.post(`/api/purchase-list`, body);
}

function* tradeComplete(action) {
  try {
    const result = yield call(tradeCompleteAPI, action.payload);

    console.log(result);

    yield put({
      type: TRADE_COMPLETE_SUCCESS,
      payload: result.data,
    });

    yield put(
      push(`/boards/${action.payload.categoryName}/${action.payload.boardNum}`)
    );
  } catch (e) {
    yield put({
      type: TRADE_COMPLETE_FAILURE,
      payload: e.response,
    });
  }
}

function* watchTradeCommentGet() {
  yield takeEvery(TRADE_COMMENT_GET_REQUEST, tradeCommentGet);
}

function* watchTradeComplete() {
  yield takeEvery(TRADE_COMPLETE_REQUEST, tradeComplete);
}

export default function* tradeSaga() {
  yield all([fork(watchTradeCommentGet)]);
  yield all([fork(watchTradeComplete)]);
}
