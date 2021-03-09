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
} from "../types";

const initialState = {
  jwt: "",
  isLoading: false,
  checkLogin: false,
  checkRegister: false,
  successMsg: "",
  loginErrorMsg: "",
  registerErrorMsg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGOUT_REQUEST:
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginErrorMsg: "",
        registerErrorMsg: "",
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        jwt: action.payload.jwt,
        isLoading: false,
        checkLogin: true,
        successMsg: action.payload.msg,
        loginErrorMsg: "",
      };

    case LOGIN_FAILURE:
      localStorage.removeItem("jwt");
      return {
        ...state,
        jwt: null,
        isLoading: false,
        checkLogin: false,
        successMsg: "",
        loginErrorMsg: action.payload.data.msg,
      };

    case LOGOUT_SUCCESS:
      localStorage.removeItem("jwt");
      return {
        ...state,
        jwt: null,
        isLoading: false,
        checkLogin: false,
        successMsg: "로그아웃에 성공하셨습니다.",
        loginErrorMsg: "",
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        jwt: null,
        isLoading: false,
        checkLogin: false,
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

    default:
      return state;
  }
};

export default auth;
