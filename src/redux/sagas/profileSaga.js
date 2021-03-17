import axios from "axios";
import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import {
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_GET_FAILURE,
} from "../types";


//profile
function profileGetAPI(action) {
    const studentId = action;
    return axios.get(`/api/students/${studentId}`, action);
  }
  
  function* profileGet(action) {
    try {
      const result = yield call(profileGetAPI, action.payload);
      console.log(result);
      
      yield put({
        type: PROFILE_GET_SUCCESS,
        payload: result.profile.studentId,
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

  export default function* profileSaga() {
    yield all([
        fork(watchProfileGet),
    ]);
  }
  

// import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// import { REQUEST_API_DATA, receiveApiData } from "./actions";
// import { fetchData } from "./api";

// function* getApiData(action) {
//   try {
//     // do api call
//     const data = yield call(fetchData);
//     yield put(receiveApiData(data));
//   } catch (e) {
//     console.log(e);
//   }
// }

// export default function* mySaga() {
//   yield takeLatest(REQUEST_API_DATA, getApiData);
// }

