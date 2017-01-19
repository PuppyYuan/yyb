'use strict';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as UserActions from '../actions/user';

import MainPage from '../components/main';

const mapDispatchToProps = (dispatch) => {
    return {}
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const Main = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default Main;