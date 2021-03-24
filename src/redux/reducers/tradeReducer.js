import {
    TRADE_COMMET_GET_REQUEST,
    TRADE_COMMET_GET_SUCCESS,
    TRADE_COMMET_GET_FAILURE,
} from "../types";

const initialState = {
  buyers: null,
    loading: false,
    msg: "",
    list: null,
};

const trade = (state = initialState, action) => {
    switch (action.type) {
      case TRADE_COMMET_GET_REQUEST:
        return {
          ...state,
          loading: true,
          msg: "",
        };
  
      case TRADE_COMMET_GET_SUCCESS:
        return {
          ...state,
          buyers: action.payload.buyers,
          loading: false,
          msg: action.payload.msg,
        };
  
      case TRADE_COMMET_GET_FAILURE:
        return {
          ...state,
          loading: false,
          buyers: null,
          msg: action.payload.data.msg,
        };

      default:
        return state;
    }
  };
  
  export default trade;
  