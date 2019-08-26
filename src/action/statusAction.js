// @flow
import axios from 'axios';
import ACTIONS from 'constants/actions';

export function getStatus() {
  const request = axios.get('/status');
  return {
    type: ACTIONS.GET_STATUS,
    payload: request
  };
}
