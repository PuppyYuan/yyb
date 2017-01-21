'use strict';

import * as LocationActions from '../constants/location';

export function load_location() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.dir(position)
            // var initialPosition = JSON.stringify(position);
            // this.setState({initialPosition});
        },
        (error) => alert(error.message),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );

    return {
        'type': LocationActions.LOAD_LOCATION,
        location: {},
    }
}