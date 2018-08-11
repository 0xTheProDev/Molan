import { GET_STATUS } from 'type/actionTypes';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case GET_STATUS: {
            if (action.error)
                return { status: false };
            return { status: true };
        }
        default:
            return state;
    }
};