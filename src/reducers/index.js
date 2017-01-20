'use strict'

import { combineReducers } from 'redux';
import user from './user';
import line from './line';
import chat from './chat';
import team from './team';

export default combineReducers({
    user,
    line,
    chat,
    team,
});