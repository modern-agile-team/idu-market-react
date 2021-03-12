import {
  BOARD_NEW_REQUEST,
  BOARD_NEW_SUCCESS,
  BOARD_NEW_FAILURE,
  BOARD_NEW_INIT,
} from "../types";

const initialState = {
  isLoading: false,
  errorMsg: "",
  successMsg: "",
  num: "",
};

const boardNew = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_NEW_INIT:
    case BOARD_NEW_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: "",
        successMsg: "",
        num: "",
      };

    case BOARD_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successMsg: action.payload.msg,
        num: action.payload.num,
      };

    case BOARD_NEW_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload.msg,
        num: "",
      };

    default:
      return state;
  }
};

export default boardNew;
