import { 
    COMMENT_GET_REQUEST,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAILURE,
    COMMENT_UPLOAD_FAILURE,
    COMMENT_UPLOAD_SUCCESS,
    COMMENT_UPLOAD_REQUEST,
} 
  from "../types";
  
  const initialState = {
      isLoading: false,
      successMsg: "",
      errorMsg: "",
      studentId: "",
      content: "",
      comments: [],
  };
  
  const comment = (state = initialState, action) => {
    switch (action.type) {
      case COMMENT_GET_REQUEST:
        return {
          ...state,
          isLoading: true,
          comments: [],
          errorMsg: "",
          successMsg: "",
        };
  
      case COMMENT_GET_SUCCESS:
        return {
          ...state,
          isLoading: false,
          comments: [action.payload.comments],
        };
  
      case COMMENT_GET_FAILURE:
        return {
          ...state,
          isLoading: false,
          errorMsg: action.payload.msg,
          comments: [],
        };
  
      default:
        return state;
    }
  };
  
  export default comment;