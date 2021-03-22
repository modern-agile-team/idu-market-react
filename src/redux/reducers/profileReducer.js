import {
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  PROFILE_GET_FAILURE,
} from "../types";

const initialState = {
  profile: null,
  loading: false,
  msg: "",
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_GET_REQUEST:
      return {
        ...state,
        loading: true,
        msg: "",
      };

    case PROFILE_GET_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        loading: false,
        msg: action.payload.msg,
      };

    case PROFILE_GET_FAILURE:
      return {
        ...state,
        loading: false,
        profile: [],
        msg: action.payload.data.msg,
      };

    default:
      return state;
  }
};

export default profile;
