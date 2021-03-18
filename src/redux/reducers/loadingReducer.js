import { 
  LOADING_FAILURE, 
  LOADING_SUCCESS, 
  LOADING_REQUEST 
} 
from "../types";

const initialState = {
  jwt: "",
  user: [],
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
        user: action.payload.user,
        isLoading: false,
      };

    case LOADING_FAILURE:
      return {
        ...state,
        jwt: "",
        user: [],
        isLoading: false,
        userData: "",
      };

    default:
      return state;
  }
};

export default loading;
