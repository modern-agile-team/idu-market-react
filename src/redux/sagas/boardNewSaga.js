import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
  BOARD_NEW_REQUEST,
  BOARD_NEW_SUCCESS,
  BOARD_NEW_FAILURE,
} from "../types";

//BoardNew
function boardNewAPI(action) {
  const categoryName = action.categoryName;
  console.log(categoryName);
  return axios.post(`/api/boards/${categoryName}`, action);
}

function* boardNew(action) {
  try {
    const result = yield call(boardNewAPI, action.payload);
    console.log(result);

    yield put({
      type: BOARD_NEW_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: BOARD_NEW_FAILURE,
      payload: e.response,
    });
  }
}

function* watchBoardNew() {
  yield takeEvery(BOARD_NEW_REQUEST, boardNew);
}

//authSaga() 여러 Saga 통합
export default function* boardNewSaga() {
  yield all([fork(watchBoardNew)]);
}
