'use strict';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import MinePage from '../components/mine';

const mapDispatchToProps = (dispatch) => {
    return {};

};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

const Mine = connect(mapStateToProps, mapDispatchToProps)(MinePage);
export default Mine;