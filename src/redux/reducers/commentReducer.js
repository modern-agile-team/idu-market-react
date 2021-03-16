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
  };
  
  const comment = (state = initialState, action) => {
    switch (action.type) {
      case COMMENT_GET_REQUEST:
        return {
          ...state,
          isLoading: true,
          studentId: "",
          content: "",
        };
  
      case COMMENT_GET_SUCCESS:
        return {
          ...state,
          isLoading: false,
          studentId: action.payload.studentId,
          content: action.payload.content,
        };
  
      case COMMENT_GET_FAILURE:
        return {
          ...state,
          isLoading: false,
          studentId: "",
          content: "",
        };
  
      default:
        return state;
    }
  };
  
  export default comment;