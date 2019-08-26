// @flow
import { NotificationManager } from 'react-notifications';
import ACTIONS from 'constants/actions';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.SUBMIT_CODE: {
      const data = action.payload.data;
      if (action.error || !data) {
        if (action.payload.status === 429)
          NotificationManager.error('Please retry after an hour', 'Submission Limit Reached');
        else if (action.payload.status === 404)
          NotificationManager.error('Please check your connectivity', 'Service Unreachable');
        return { status: 'Submission Failed' };
      }
      return data;
    }
    default:
      return state;
  }
};
