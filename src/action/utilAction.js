import axios from 'axios';
import { GET_STATUS } from 'type/actionTypes';

export function getStatus() {
    const request = axios.get("/status");
    return {
        type:    GET_STATUS,
        payload: request
    };
}