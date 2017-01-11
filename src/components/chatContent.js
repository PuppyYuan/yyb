'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat, Send, LoadEarlier, MessageText, Bubble, Avatar } from 'react-native-gifted-chat';

import CustomMessage from '../widget/CustomMessage';

import { styles, messageTextTextStyles, messageTextLinkStyles, bubbleWrapperStyle } from '../styles/chat';

export default class ChatContent extends Component {

    constructor(props){
        super(props);
        this.state = { messages: []};
        this.onSend = this.onSend.bind(this);
    }

    componentWillMount(){
        this.setState({
            messages: [{
                    _id: 1,
                    text: '你好',
                    createdAt: '2017-01-06 15:54:14',
                    user: {
                        _id: 2,
                        name: '开发者1',
                        avatar: 'https://pic1.zhimg.com/1ab029e14_m.jpg',
                    },
                }, {
                    _id: 2,
                    text: '你好，开发者',
                    createdAt: '2017-01-06 15:54:12',
                    user: {
                        _id: 3,
                        name: '开发者2',
                        avatar: 'https://pic2.zhimg.com/c5c3b3c6a783ff2e548c174560b15dc5_m.png',
                    },
                }, {
                    _id: 3,
                    text: '你好，开发者',
                    createdAt: '2017-01-06 15:54:11',
                    user: {
                        _id: 1,
                        name: '本人',
                        avatar: 'https://pic3.zhimg.com/8c683a8ff838d47297b6b28f6998ea06_m.png',
                    },
                },
            ],
        });
    }

    onSend(messages=[]){

        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages)
            }
        });
    }

    onLoadEarlier(){
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages)
            }
        });
    }

    renderSend(props){
        return <Send {...props}
                    label="发送"
                    textStyle={styles.chatContentTextStyle}
                    containerStyle={styles.chatContentContainerStyle} />;
    }

    renderLoadEarlier(props){
        return <LoadEarlier {...props}
                    label="查看历史消息"
                    wrapperStyle={styles.chatContentWrapperStyle} />
    }

    renderTime(){
        return null;
    }

    renderMessageText(props) {
        return <MessageText {...props}
                    textStyle={messageTextTextStyles}
                    linkStyle={messageTextLinkStyles} />
    }

    renderBubble(props){
        return <Bubble {...props}
                wrapperStyle={bubbleWrapperStyle}/>
    }

    renderMessage(props){
        return <CustomMessage {...props} />
    }

    render() {
        return (
            <GiftedChat
                placeholder="说点什么吧……"
                textInputStyle={styles.chatContentTextInputStyle}
                messages={this.state.messages}
                locale="zh-cn"
                loadEarlier={true}
                user={{_id: 1, name: '本人', avatar: 'https://pic3.zhimg.com/8c683a8ff838d47297b6b28f6998ea06_m.png'}}
                renderSend={this.renderSend}
                renderLoadEarlier={this.renderLoadEarlier}
                renderTime={this.renderTime}
                renderBubble={this.renderBubble}
                renderMessageText={this.renderMessageText}
                renderMessage={this.renderMessage}
                onSend={this.onSend}
                onLoadEarlier={this.onLoadEarlier}
            />
        );
    }
}