'use strict';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as UserActions from '../actions/user';
import * as LineActions  from '../actions/line';

import LinePage from '../components/line';

const mapDispatchToProps = (dispatch) => {
    return Object.assign({}, bindActionCreators(UserActions, dispatch), bindActionCreators(LineActions, dispatch));
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        line: state.line
    };
};

const Line = connect(mapStateToProps, mapDispatchToProps)(LinePage);

export default Line;