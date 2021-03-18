import {
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILURE,
} from "../types";

const initialState = {
  profile: [],
  title: [],
  comments: [],
  loading: false,
  responseMsg: "",
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_GET_REQUEST:
      return {
        ...state,
        loading: true,
        responseMsg: "",
      };

    case PROFILE_GET_SUCCESS:
      return {
        ...state,
        profile: [...action.payload.profile],
        loading: false,
        responseMsg: action.payload.msg,
      };

    case PROFILE_GET_FAILURE:
      return {
        ...state,
        loading: false,
        responseMsg: "",
      };

    default:
      return state;
  }
};

export default profile;
