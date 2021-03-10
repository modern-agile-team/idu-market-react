import { LOADING_FAILURE, LOADING_SUCCESS, LOADING_REQUEST } from "../types";

const initialState = {
  jwt: "",
  isLoading: false,
  userId: "",
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOADING_SUCCESS:
      return {
        ...state,
        jwt: localStorage.getItem("jwt"),
        isLoading: false,
        userId: localStorage.getItem("userId"),
      };

    case LOADING_FAILURE:
      return {
        ...state,
        jwt: null,
        isLoading: false,
        userId: "",
      };

    default:
      return state;
  }
};

export default loading;
