'use strict'

import { connect } from 'react-redux';

import { chat_list } from '../actions/chat';

import ChatPage from '../components/chat';

const mapDispatchToProps = (dispatch) => {
    return {
        chatList: () => {
            dispatch(chat_list())
        }
    }
};

const mapStateToProps = (state) => {
    return {
        chat: state.chat,
    }
};

const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatPage);

export default Chat;