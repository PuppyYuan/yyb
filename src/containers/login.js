'use strict'

import { connect } from 'react-redux';

import { login, logout } from '../actions/user';

import LoginPage from '../components/login';


const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (user) => {
      dispatch(login(user))
    }
  }
}

const mapStateToProps = (store) => {
  return {
    is_logged_in: store.user.is_logged_in,
    user: store.user.user,
    status: store.user.status
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default Login;