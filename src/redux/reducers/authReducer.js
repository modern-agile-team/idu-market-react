import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOADING_FAILURE,
  LOADING_SUCCESS,
  LOADING_REQUEST,
} from "../types";

const initialState = {
  jwt: null,
  isLoading: false,
  successMsg: "",
  loginErrorMsg: "",
  registerErrorMsg: "",
  checkRegister: false,
  id: "",
  email: "",
  name: "",
  exp: "",
  iss: "",
  profilePath: "",
  isAdmin: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_REQUEST:
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginErrorMsg: "",
        registerErrorMsg: "",
        successMsg: "",
        id: "",
        email: "",
        name: "",
        exp: "",
        iss: "",
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        jwt: action.payload.jwt,
        isLoading: false,
        successMsg: action.payload.msg,
        loginErrorMsg: "",
      };

    case LOGIN_FAILURE:
      localStorage.removeItem("jwt");
      return {
        ...state,
        jwt: null,
        isLoading: false,
        successMsg: "",
        loginErrorMsg: action.payload.data.msg,
      };

    case LOGOUT_SUCCESS:
      localStorage.removeItem("jwt");
      return {
        ...state,
        jwt: null,
        isLoading: false,
        successMsg: "로그아웃에 성공하셨습니다.",
        loginErrorMsg: "",
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        jwt: null,
        isLoading: false,
        successMsg: "",
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checkRegister: true,
        successMsg: action.payload.msg,
        registerErrorMsg: "",
      };

    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        checkRegister: false,
        successMsg: "",
        registerErrorMsg: action.payload.data.msg,
      };

    case LOADING_SUCCESS:
      return {
        ...state,
        jwt: localStorage.getItem("jwt"),
        isLoading: false,
        id: action.payload.auth.id,
        email: action.payload.auth.email,
        name: action.payload.auth.name,
        exp: action.payload.auth.exp,
        iss: action.payload.auth.iss,
        profilePath: action.payload.auth.profilePath,
        isAdmin: action.payload.auth.isAdmin,
      };

    case LOADING_FAILURE:
      return {
        ...state,
        jwt: null,
        isLoading: false,
        id: "",
        email: "",
        name: "",
        exp: "",
        iss: "",
        profilePath: "",
        isAdmin: "",
      };

    default:
      return state;
  }
};

export default auth;
