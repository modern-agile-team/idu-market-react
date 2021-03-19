import {
    PROFILE_GET_REQUEST,
    PROFILE_GET_SUCCESS,
    PROFILE_GET_FAILURE,
  } from "../types";
  
  const initialState = {
    profile: [],
    title: [],
    comments: [],
    isLoading: false,
    msg: "",
    id: "",
    name: "",
    email: "",
    path: "",
  };

  const profile = (state = initialState, action) => {
    switch (action.type) {

      case PROFILE_GET_REQUEST:
        return {
          ...state,
          loading: true,
          msg: "",
          profile:[],
        };
  
      case PROFILE_GET_SUCCESS:
        return {
          ...state,
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          loading: false,
          msg: action.payload.msg,
        };
  
      case PROFILE_GET_FAILURE:
        return {
          ...state,
          loading: false,
          msg: "",
          id: "",
          name: "",
          email: "",
          profile:[],
        };
  
      default:
        return state;
    }
  };
  
  export default profile;