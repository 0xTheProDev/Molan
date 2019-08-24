import axios from 'axios';
import { SUBMIT } from 'type/actionTypes';
import { BASE_URL } from './baseUrl';

export default function submitAction(formData) {
    if (typeof formData !== 'undefined' && formData !== null) {
        const request = axios.post(BASE_URL + '/submit', formData);
        return {
            type:    SUBMIT,
            payload: request
        };
    }
}
