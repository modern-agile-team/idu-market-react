import axios from "axios";
import { all, fork, put, takeEvery, call, delay } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILURE,
  PROFILE_IMAGE_UPDATE_REQUEST,
  PROFILE_IMAGE_UPDATE_SUCCESS,
  PROFILE_IMAGE_UPDATE_FAILURE,
  PROFILE_UPDATE_REQUEST,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
  LOADING_REQUEST,
} from "../types";

//Profile Get
function profileGetAPI(action) {
  const studentId = action;

  return axios.get(`/api/students/${studentId}`);
}

function* profileGet(action) {
  try {
    const result = yield call(profileGetAPI, action.payload);
    console.log(result);

    yield put({
      type: PROFILE_GET_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PROFILE_GET_FAILURE,
      payload: e.response,
    });
  }
}

//Profile Update
function profileUpdateAPI(action) {
  const studentId = action.studentId;
  const body = {
    email: action.email,
    nickname: action.nickname,
    major: action.major,
  }
  console.log(body);
  
  return axios.put(`/api/students/${studentId}`, body);
}

function* profileUpdate(action) {
  try {
    const result = yield call(profileUpdateAPI, action.payload);
    console.log(result);

    yield put({
      type: PROFILE_UPDATE_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: PROFILE_UPDATE_FAILURE,
      payload: e.response,
    });

    yield put(push(`/students/${action.payload.studentId}`));
  }
}

function profileImageUpdateAPI(action) {
  const studentId = action.studentId;
  const body = {
    profilePath: action.profilePath
  }
  
  return axios.patch(`/api/students/${studentId}`, body);
}

function* profileImageUpdate(action) {
  try {
    const result = yield call(profileImageUpdateAPI, action.payload);

    console.log(result);

    yield put({
      type: PROFILE_IMAGE_UPDATE_SUCCESS,
      payload: result.data,
    });

    yield delay(100);

    yield put({
      type: LOADING_REQUEST,
      payload: localStorage.getItem("jwt")
    });

  } catch (e) {
    yield put({
      type: PROFILE_IMAGE_UPDATE_FAILURE,
      payload: e.response,
    });
  }
}

function* watchProfileGet() {
  yield takeEvery(PROFILE_GET_REQUEST, profileGet);
}

function* watchProfileUpdate() {
  yield takeEvery(PROFILE_UPDATE_REQUEST, profileUpdate);
}

function* watchProfileImageUpdate() {
  yield takeEvery(PROFILE_IMAGE_UPDATE_REQUEST, profileImageUpdate);
}

export default function* profileSaga() {
  yield all([
    fork(watchProfileGet),
    fork(watchProfileImageUpdate),
    fork(watchProfileUpdate),
  ]);
}
