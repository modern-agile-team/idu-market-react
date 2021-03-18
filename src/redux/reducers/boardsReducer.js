import {
  FREEBOARD_GET_REQUEST,
  FREEBOARD_GET_SUCCESS,
  FREEBOARD_GET_FAILURE,
  NOTICEBOARD_GET_REQUEST,
  NOTICEBOARD_GET_SUCCESS,
  NOTICEBOARD_GET_FAILURE,
  BOARD_WRITE_REQUEST,
  BOARD_WRITE_SUCCESS,
  BOARD_WRITE_FAILURE,
  BOARD_DELETE_REQUEST,
  BOARD_DELETE_SUCCESS,
  BOARD_DELETE_FAILURE,
  BOARD_UPDATE_REQUEST,
  BOARD_UPDATE_SUCCESS,
  BOARD_UPDATE_FAILURE,
  BOARD_DETAIL_REQUEST,
  BOARD_DETAIL_SUCCESS,
  BOARD_DETAIL_FAILURE,
  IMAGE_DELETE_REQUEST,
  IMAGE_DELETE_SUCCESS,
  IMAGE_DELETE_FAILURE,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  num: "",
  studentName: "",
  studentId: "",
  title: "",
  content: "",
  hit: "",
  price: "",
  inDate: "",
  updateDate: "",
  isLoading: false,
  msg: "",
};

const boards = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_DELETE_REQUEST:
    case BOARD_DELETE_REQUEST:
    case FREEBOARD_GET_REQUEST:
    case NOTICEBOARD_GET_REQUEST:
      return {
        ...state,
        loading: true,
        msg: "",
      };

    case FREEBOARD_GET_SUCCESS:
    case NOTICEBOARD_GET_SUCCESS:
      return {
        ...state,
        data: [...action.payload.boards],
        loading: false,
        msg: action.payload.msg,
      };

    case FREEBOARD_GET_FAILURE:
    case NOTICEBOARD_GET_FAILURE:
      return {
        ...state,
        loading: false,
        msg: "",
      };

    case BOARD_UPDATE_REQUEST:
    case BOARD_WRITE_REQUEST:
      return {
        ...state,
        isLoading: true,
        msg: "",
        num: "",
      };

    case BOARD_UPDATE_SUCCESS:
    case BOARD_WRITE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        msg: action.payload.msg,
        num: action.payload.num,
      };

    case BOARD_UPDATE_FAILURE:
    case BOARD_WRITE_FAILURE:
      return {
        ...state,
        data: [],
        msg: action.payload.data.msg,
      };

    case BOARD_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        msg: "",
        num: "",
      };

    case BOARD_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        num: action.payload.board.num,
        studentName: action.payload.board.studentName,
        studentId: action.payload.board.studentId,
        title: action.payload.board.title,
        content: action.payload.board.content,
        hit: action.payload.board.hit,
        price: action.payload.board.price,
        inDate: action.payload.board.inDate,
        updateDate: action.payload.board.updateDate,
        msg: action.payload.msg,
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
        msg: action.payload.data.msg,
      };

    case IMAGE_DELETE_SUCCESS:
    case BOARD_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.payload.msg,
      };

    case IMAGE_DELETE_FAILURE:
    case BOARD_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        msg: action.payload.data.msg,
      };

    default:
      return state;
  }
};

export default boards;
