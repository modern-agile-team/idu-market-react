import { 
    COMMENT_GET_REQUEST,
    COMMENT_GET_SUCCESS,
    COMMENT_GET_FAILURE,
    COMMENT_UPLOAD_FAILURE,
    COMMENT_UPLOAD_SUCCESS,
    COMMENT_UPLOAD_REQUEST,
    REPLY_UPLOAD_REQUEST,
    REPLY_UPLOAD_SUCCESS,
    REPLY_UPLOAD_FAILURE,
} 
  from "../types";
  
  const initialState = {
      isLoading: false,
      msg: "",
      comments: [],
      replyFlag: {},
  };
  
  const comment = (state = initialState, action) => {
    switch (action.type) {
      case COMMENT_GET_REQUEST:
        return {
          ...state,
          isLoading: true,
          msg: "",
          comments: [],
        };
  
      case COMMENT_GET_SUCCESS:
        return {
          ...state,
          isLoading: false,
          comments: action.payload.comments,
          msg: action.payload.msg,
        };
  
      case COMMENT_GET_FAILURE:
        return {
          ...state,
          isLoading: false,
          msg: action.payload.msg,
          comments: [],
        };

      case COMMENT_UPLOAD_REQUEST:
        return {
          ...state,
          isLoading: true,
          studentId: "",
          content: "",
          msg: "",
        };

      case COMMENT_UPLOAD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          msg: action.payload.msg,
          comments:[...state.comments, action.payload.comment]
        };

      case COMMENT_UPLOAD_FAILURE:
        return {
          ...state,
          isLoading: false,
          msg: action.payload.msg,
        }
      case REPLY_UPLOAD_REQUEST:
        return {
          ...state,
          isLoading: true,
          successMsg: "",
          errorMsg: "",
          replyFlag: {},
        };
      case REPLY_UPLOAD_SUCCESS:
        return {
          ...state,
          isLoading: false,
          studentId: action.payload.studentId,
          content: action.payload.content,
          replyFlag: action.payload.replyFlag,
          msg: action.payload.msg,
          comments:[...state.comments, action.payload.reply]
        };
      case REPLY_UPLOAD_FAILURE:
        return {
          ...state,
          isLoading: false,
          replyFlag: {},
          msg: action.payload.msg,
        }
      default:
        return state;
    }
  };
  
  export default comment;