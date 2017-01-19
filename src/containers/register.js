'use strict';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as UserActions from '../actions/user';

import RegisterPage from '../components/register';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);
};

const mapStateToProps = (state) => {
    return state.user;
};

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

export default Register;