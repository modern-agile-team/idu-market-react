import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_GET_FAILURE,
} from "../types";


//profile
function profileGetAPI(action) {
    // const categoryName = action;
    return axios.get(`/api/students/`, action);
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
        type:  PROFILE_GET_FAILURE,
        payload: e.response,
      });
    }
  }
  
  
  function* watchProfileGet() {
    yield takeEvery(PROFILE_GET_REQUEST, profileGet);
  }

  export default function* profileSage() {
    yield all([
        fork(watchProfileGet),
    ]);
  }
  