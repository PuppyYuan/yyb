'use strict'

import { connect } from 'react-redux';

import { login, logout } from '../actions/user';

import LinePage from '../components/line';


const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => {
      dispatch(logout())
    }
  }
}

const mapStateToProps = (state) => {
  return state.user;
}

const Line = connect(mapStateToProps, mapDispatchToProps)(LinePage)

export default Line;