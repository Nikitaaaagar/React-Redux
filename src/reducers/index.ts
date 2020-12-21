import { combineReducers } from 'redux';

import counter from './counter';
import notesReducer from './notes'

export default combineReducers({
    counter,
    notesReducer
});