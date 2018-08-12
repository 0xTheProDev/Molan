import { SUBMIT } from 'type/actionTypes';

export default (state = {}, action = {}) => {
    switch (action.type) {
        case SUBMIT: {
            const data = action.payload.data;
            if (action.error || typeof data === 'undefined' || data === null)
                return { status: 'Submission Failed' };
            return data;
        }
        default:
            return state;
    }
};