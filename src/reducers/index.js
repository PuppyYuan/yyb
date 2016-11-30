'use strict'

import { combineReducers } from 'redux';
import user from './user';
import line from './line';

export default combineReducers({
    user,
    line
});