import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILURE,
  PROFILE_IMAGE_UPDATE_REQUEST,
  PROFILE_IMAGE_UPDATE_SUCCESS,
  PROFILE_IMAGE_UPDATE_FAILURE,
} from "../types";

//Profile Get
function profileGetAPI(action) {
  const studentId = action;

  console.log(studentId);

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

function profileImageUpdateAPI(action) {
  const studentId = action.studentId;
  const body = {
    profilePath: action.profilePath
  }

  console.log(body);
  return axios.patch(`/api/students/${studentId}/update`, body);
}

function* profileImageUpdate(action) {
  try {
    const result = yield call(profileImageUpdateAPI, action.payload);

    console.log(result);

    yield put({
      type: PROFILE_IMAGE_UPDATE_SUCCESS,
      payload: result.data,
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

function* watchProfileImageUpdate() {
  yield takeEvery(PROFILE_IMAGE_UPDATE_REQUEST, profileImageUpdate);
}

export default function* profileSaga() {
  yield all([fork(watchProfileGet)]);
  yield all([fork(watchProfileImageUpdate)]);
}
