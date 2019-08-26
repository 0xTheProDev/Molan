// @flow
import ACTIONS from 'constants/actions';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.GET_STATUS: {
      if (action.error)
        return { status: false };
      return { status: true };
    }
    default:
      return state;
  }
};
