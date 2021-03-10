import {
  MARKET_GET_REQUEST,
  MARKET_GET_SUCCESS,
  MARKET_GET_FAILURE,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  responseMsg: "",
};

const market = (state = initialState, action) => {
  switch (action.type) {
    case MARKET_GET_REQUEST:
      return {
        ...state,
        loading: true,
        responseMsg: "",
      };

    case MARKET_GET_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.boards],
        loading: false,
        responseMsg: action.payload.msg,
      };

    case MARKET_GET_FAILURE:
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
