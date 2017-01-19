'use strict';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ChatActions from '../actions/chat';

import ChatPage from '../components/chat';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ChatActions, dispatch);

};

const mapStateToProps = (state) => {
    return {
        chat: state.chat,
    }
};

const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatPage);

export default Chat;