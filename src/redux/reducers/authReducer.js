import { 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
} from '../types';

const initialState = {
    jwt: "",
    isAuthenticated: null,
    isLoading: false,
    errorMsg: "",
    successMsg: "",
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                errorMsg: "",
                isLoading: true,
            }

        case LOGIN_SUCCESS:
            localStorage.setItem("jwt", action.payload.jwt);
            return {
                ...state,
                jwt: action.payload.jwt,
                isAuthenticated: true,
                isLoading: false,
                errorMsg: "",
                successMsg: action.payload.msg
            }

        case LOGIN_FAILURE:
            localStorage.removeItem("jwt");
            return {
                ...state,
                jwt: null,
                isAuthenticated: false,
                isLoading: false,
                errorMsg: action.payload.data.msg,
            }

        default:
            return state
    }
}

export default auth;
