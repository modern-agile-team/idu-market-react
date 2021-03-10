import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
  MARKET_GET_REQUEST,
  MARKET_GET_FAILURE,
  MARKET_GET_SUCCESS,
} from "../types";

// market
function marketGetAPI(action) {
  const categoryName = action;
  return axios.get(`/api/boards/${categoryName}`);
}

function* marketGet(action) {
  try {
    const result = yield call(marketGetAPI, action.payload);
    console.log(result);

    yield put({
      type: MARKET_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: MARKET_GET_FAILURE,
      payload: e.response,
    });
  }
}

function* watchMarketGet() {
  yield takeEvery(MARKET_GET_REQUEST, marketGet);
}

//authSaga() 여러 Saga 통합
export default function* marketSaga() {
  yield all([fork(watchMarketGet)]);
}
