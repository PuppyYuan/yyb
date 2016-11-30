'use strict'

import { connect } from 'react-redux';

import { login, logout } from '../actions/user';
import { line_list } from '../actions/line';

import LinePage from '../components/line';


const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => {
      dispatch(logout())
    },
    lineList: () => {
      dispatch(line_list())
    }
  }
}

const mapStateToProps = (state) => {
  return { 
    user: state.user,
    line: state.line  
  };
}

const Line = connect(mapStateToProps, mapDispatchToProps)(LinePage)

export default Line;