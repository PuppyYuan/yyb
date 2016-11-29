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

const mapStateToProps = (state) => {  
  return state.user;
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginPage)

export default Login;