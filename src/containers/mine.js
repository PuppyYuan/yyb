'use strict';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as UserActions from '../actions/user';

import MinePage from '../components/mine';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(UserActions, dispatch);

};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

const Mine = connect(mapStateToProps, mapDispatchToProps)(MinePage);
export default Mine;