import axios from 'axios';
import { GET_STATUS } from 'type/actionTypes';
import { BASE_URL } from './baseUrl';

export function getStatus() {
    const request = axios.get(BASE_URL + '/status');
    return {
        type:    GET_STATUS,
        payload: request
    };
}
