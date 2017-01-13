'use strict'

import { connect } from 'react-redux';

import { regist } from '../actions/user';

import RegisterPage from '../components/register';

const mapDispatchToProps = (dispatch) => {
    return {
        doRegist: (user) => {
            dispatch(regist(user))
        }
    }
}

const mapStateToProps = (state) => {
    return state.user;
}

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

export default Register;