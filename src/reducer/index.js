import { combineReducers } from "redux";
import serviceReducer from 'reducer/serviceReducer';

export default combineReducers({
    service: serviceReducer
});
