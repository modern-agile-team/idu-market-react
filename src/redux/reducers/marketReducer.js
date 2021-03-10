import {
  BOOK_GET_REQUEST,
  BOOK_GET_SUCCESS,
  BOOK_GET_FAILURE,
  DEVICE_GET_REQUEST,
  DEVICE_GET_FAILURE,
  DEVICE_GET_SUCCESS,
  CLOTHES_GET_REQUEST,
  CLOTHES_GET_SUCCESS,
  CLOTHES_GET_FAILURE,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  responseMsg: "",
};

const market = (state = initialState, action) => {
  switch (action.type) {
    case DEVICE_GET_REQUEST:
    case CLOTHES_GET_REQUEST:
    case BOOK_GET_REQUEST:
      return {
        ...state,
        loading: true,
        responseMsg: "",
      };

    case DEVICE_GET_SUCCESS:
    case CLOTHES_GET_SUCCESS:
    case BOOK_GET_SUCCESS:
      return {
        ...state,
        data: [...action.payload.boards],
        loading: false,
        responseMsg: action.payload.msg,
      };

    case DEVICE_GET_FAILURE:
    case CLOTHES_GET_FAILURE:
    case BOOK_GET_FAILURE:
      return {
        ...state,
        loading: false,
        responseMsg: "",
      };

    default:
      return state;
  }
};

export default market;
