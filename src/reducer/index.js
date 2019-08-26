import { combineReducers } from 'redux';
import submitReducer from 'reducer/submitReducer';
import serviceReducer from 'reducer/serviceReducer';

export default combineReducers({
    form:    submitReducer,
    service: serviceReducer
});
