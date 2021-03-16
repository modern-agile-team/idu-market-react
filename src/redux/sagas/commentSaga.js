import axios from "axios";
import { all, fork, put, takeEvery, call, delay } from "redux-saga/effects";
// import { push } from "connected-react-router";
import {
    COMMENT_GET_REQUEST,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAILURE,
} from "../types";

//Comment GET
function CommentGetAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;

  console.log(categoryName, num);

  return axios.get(`/api/boards/${categoryName}/${num}`);
}
  
function* commentGet(action) {
  try {
    const result = yield call(CommentGetAPI, action.payload);
    console.log(result);

    yield put({
      type: COMMENT_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: COMMENT_GET_FAILURE,
      payload: e.response,
    });
  }
}

function* watchCommentGet() {
  yield takeEvery(COMMENT_GET_REQUEST, commentGet);
}

  
//authSaga() 여러 Saga 통합
export default function* commentSaga() {
  yield all([
    fork(watchCommentGet),
  ]);
}
