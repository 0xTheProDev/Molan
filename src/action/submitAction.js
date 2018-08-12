import axios from 'axios';
import { SUBMIT } from 'type/actionTypes';

export default function submitAction(formData) {
    if (typeof formData !== 'undefined' && formData !== null) {
        const request = axios.post('/submit', formData);
        return {
            type:    SUBMIT,
            payload: request
        };
    }
}