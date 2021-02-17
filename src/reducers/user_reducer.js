import { LOGIN_USER } from '../actions/types';

//리듀서 함수 정의
export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}

        default:
            return state;
    }
} 