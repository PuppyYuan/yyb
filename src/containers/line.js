'use strict';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as LineActions  from '../actions/line';

import LinePage from '../components/line';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(LineActions, dispatch);
};

const mapStateToProps = (state) => {
    return {
        line: state.line
    };
};

const Line = connect(mapStateToProps, mapDispatchToProps)(LinePage);

export default Line;