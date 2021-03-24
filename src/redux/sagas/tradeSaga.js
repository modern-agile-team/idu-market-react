import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
TRADE_COMMET_GET_REQUEST,
TRADE_COMMET_GET_SUCCESS,
TRADE_COMMET_GET_FAILURE,
} from "../types";

//Trade Comment Get
function tradeCommentGetAPI(action) {
    const categoryName = action.categoryName
    const num = action.num
    
    return axios.get(`/api/boards/${categoryName}/${num}/comments`);
  }
  
  function* tradeCommentGet(action) {
    try {
      const result = yield call(tradeCommentGetAPI, action.payload);
      console.log(result);
  
      yield put({
        type: TRADE_COMMET_GET_SUCCESS,
        payload: result.data,
      });
    } catch (e) {
      yield put({
        type: TRADE_COMMET_GET_FAILURE,
        payload: e.response,
      });
    }
  }
  
  function* watchTradeCommentGet() {
    yield takeEvery(TRADE_COMMET_GET_REQUEST, tradeCommentGet);
  }

  export default function* tradeSaga() {
    yield all([fork(watchTradeCommentGet)]);
  }
  