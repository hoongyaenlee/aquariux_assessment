import {combineReducers} from 'redux';
import profileData from './profile';

const rootReducer = combineReducers({
    profileData:profileData
});

export default rootReducer;
