import { combineReducers } from 'redux';
import emptySearch from './emptySearch';
import localData from './localData';
import data from './data';

const mainReducers = combineReducers({
    emptySearch,
    localData,
    data
});

export default mainReducers;