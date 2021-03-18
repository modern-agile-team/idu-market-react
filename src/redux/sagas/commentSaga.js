import axios from "axios";
import { all, fork, put, takeEvery, call, delay } from "redux-saga/effects";
import {
    COMMENT_GET_REQUEST,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAILURE,
    COMMENT_UPLOAD_REQUEST,
    COMMENT_UPLOAD_SUCCESS,
    COMMENT_UPLOAD_FAILURE,
    REPLY_UPLOAD_REQUEST,
    REPLY_UPLOAD_SUCCESS,
    REPLY_UPLOAD_FAILURE
} from "../types";

//Comment GET
function CommentGetAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;

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

//Comment UPLOAD
function commentUploadAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;
  const body = {
    studentId: action.studentId,
    content: action.content,
  }
  console.log(action);
  console.log(body);

  return axios.post(`/api/boards/${categoryName}/${num}`, body);
}
  
function* commentUpload(action) {
  try {
    const result = yield call(commentUploadAPI, action.payload);
    
    console.log(result);

    yield put({
      type: COMMENT_UPLOAD_SUCCESS,
      payload: result.data,
    });

  } catch (e) {

    yield put({
      type: COMMENT_UPLOAD_FAILURE,
      payload: e.response,
    });
  }
}

//Reply Upload
function replyUploadAPI(action) {
  const categoryName = action.categoryName;
  const num = action.num;
  const groupNum = action.groupNum;
  const body = {
    studentId: action.studentId,
    content: action.content,
  }

  return axios.post(`/api/boards/${categoryName}/${num}/${groupNum}`, body);
}
  
function* replyUpload(action) {
  try {
    const result = yield call(replyUploadAPI, action.payload);
    console.log(result);

    yield put({
      type: REPLY_UPLOAD_SUCCESS,
      payload: result.data,
    });

  } catch (e) {

    yield put({
      type: REPLY_UPLOAD_FAILURE,
      payload: e.response,
    });
  }
}

function* watchCommentGet() {
  yield takeEvery(COMMENT_GET_REQUEST, commentGet);
}

function* watchCommentUpload() {
  yield takeEvery(COMMENT_UPLOAD_REQUEST, commentUpload);
}

function* watchReplyUpload() {
  yield takeEvery(REPLY_UPLOAD_REQUEST, replyUpload);
}
  
//authSaga() 여러 Saga 통합
export default function* commentSaga() {
  yield all([
    fork(watchCommentGet),
    fork(watchCommentUpload),
    fork(watchReplyUpload),
  ]);
}
