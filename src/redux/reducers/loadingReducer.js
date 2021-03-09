import { LOADING_FAILURE, LOADING_SUCCESS, LOADING_REQUEST } from "../types";

const initialState = {
  jwt: "",
  isLoading: false,
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
      };

    case LOADING_FAILURE:
      return {
        ...state,
        jwt: null,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default loading;
