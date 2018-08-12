import { combineReducers } from "redux";
import formReducer from 'reducer/formReducer';
import serviceReducer from 'reducer/serviceReducer';

export default combineReducers({
    form:    formReducer,
    service: serviceReducer
});
