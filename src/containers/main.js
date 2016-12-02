'use strict'

import { connect } from 'react-redux';

import { login, logout } from '../actions/user';
import { line_list } from '../actions/line';

import MainPage from '../components/main';


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

const Main = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default Main;