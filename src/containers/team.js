'use strict';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as TeamActions from '../actions/team';

import TeamPage from '../components/team';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(TeamActions, dispatch);

};

const mapStateToProps = (state) => {
    return {
        team: state.team,
    }
};

const Team = connect(mapStateToProps, mapDispatchToProps)(TeamPage);

export default Team;