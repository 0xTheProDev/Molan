// @flow
import axios from 'axios';
import ACTIONS from 'constants/actions';

export default function submitAction(formData) {
  if (formData) {
    const request = axios.post('/submit', formData);
    return {
      type: ACTIONS.SUBMIT_CODE,
      payload: request
    };
  }
}
