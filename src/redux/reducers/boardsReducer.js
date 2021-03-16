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
  FREEBOARD_GET_REQUEST,
  FREEBOARD_GET_SUCCESS,
  FREEBOARD_GET_FAILURE,
  NOTICEBOARD_GET_REQUEST,
  NOTICEBOARD_GET_SUCCESS,
  NOTICEBOARD_GET_FAILURE,
  BOARD_NEW_REQUEST,
  BOARD_NEW_SUCCESS,
  BOARD_NEW_FAILURE,
  BOARD_DETAIL_REQUEST,
  BOARD_DETAIL_SUCCESS,
  BOARD_DETAIL_FAILURE,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  num: "",
  studentName: "",
  title: "",
  content: "",
  hit: "",
  price: "",
  inDate: "",
  updateDate: "",
  isLoading: false,
  errorMsg: "",
  successMsg: "",
};

const boards = (state = initialState, action) => {
  switch (action.type) {
    case DEVICE_GET_REQUEST:
    case CLOTHES_GET_REQUEST:
    case BOOK_GET_REQUEST:
    case FREEBOARD_GET_REQUEST:
    case NOTICEBOARD_GET_REQUEST:
      return {
        ...state,
        loading: true,
        responseMsg: "",
      };

    case DEVICE_GET_SUCCESS:
    case CLOTHES_GET_SUCCESS:
    case BOOK_GET_SUCCESS:
    case FREEBOARD_GET_SUCCESS:
    case NOTICEBOARD_GET_SUCCESS:
      return {
        ...state,
        data: [...action.payload.boards],
        loading: false,
        responseMsg: action.payload.msg,
      };

    case DEVICE_GET_FAILURE:
    case CLOTHES_GET_FAILURE:
    case BOOK_GET_FAILURE:
    case FREEBOARD_GET_FAILURE:
    case NOTICEBOARD_GET_FAILURE:
      return {
        ...state,
        loading: false,
        responseMsg: "",
      };

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
        data: [],
      };

    case BOARD_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorMsg: "",
        successMsg: "",
        num: "",
      };

    case BOARD_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        num: action.payload.board.num,
        studentName: action.payload.board.studentName,
        title: action.payload.board.title,
        content: action.payload.board.content,
        hit: action.payload.board.hit,
        price: action.payload.board.price,
        inDate: action.payload.board.inDate,
        updateDate: action.payload.board.updateDate,
        successMsg: action.payload.msg,
      };

    case BOARD_DETAIL_FAILURE:
      return {
        ...state,
        num: "",
        studentName: "",
        title: "",
        content: "",
        hit: "",
        price: "",
        inDate: "",
        updateDate: "",
        isLoading: false,
        errorMsg: action.payload.msg,
      };

    default:
      return state;
  }
};

export default boards;
