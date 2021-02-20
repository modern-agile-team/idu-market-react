import { LOGIN_USER, REGISTER_USER } from './types';
import axios from 'axios';

//액션 생성 함수
export function loginUser(dataToSubmit) {

    const request = axios.post('/api/jwt', dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios.post('/api/user', dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}