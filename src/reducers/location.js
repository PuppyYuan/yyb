'use strict';

import * as LocationActions from '../constants/location';

const initialState = {
    location: {}
};

export default function location(state = initialState, action){
    switch (action.type) {
        case LocationActions.LOAD_LOCATION:
            return {
                ...state,
                location: action.location,
            };
        default:
            return state;
    }
}