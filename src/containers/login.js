'use strict';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as UserActions from '../actions/user';

import LoginPage from '../components/login';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);
};

const mapStateToProps = (state) => {
    return state.user;
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default Login;