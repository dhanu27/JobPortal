import {filterReducer} from './filterReducer';
import { jobListingReducer } from './jobListingReducer';
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    filterReducer,
    jobListingReducer
});

export default rootReducer;