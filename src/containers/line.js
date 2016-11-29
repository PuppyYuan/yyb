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

const mapStateToProps = (store) => {
  return {
    is_logged_in: store.user.is_logged_in,
    user: store.user.user,
    status: store.user.status
  }
}

const Line = connect(mapStateToProps, mapDispatchToProps)(LinePage)

export default Line;