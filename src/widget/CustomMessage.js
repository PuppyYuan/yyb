'use strict'

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Message, Avatar } from 'react-native-gifted-chat';

import CustomAvatar from '../widget/CustomAvatar';

export default class CustomMessage extends Message {

    isSameUser() {
        return false;
    }

    renderAvatar() {
        const {containerStyle, ...other} = this.props;

        return <CustomAvatar {...other}/>;
    }

    renderName(){
        if(this.props.currentMessage.user.name){
            return <Text style={styles[this.props.position].name}>{this.props.currentMessage.user.name}</Text>
        }
        return null;
    }

    render() {
        return (
            <View>
                {this.renderDay()}
                <View style={[styles[this.props.position].container, {
                    marginBottom: this.isSameUser(this.props.currentMessage, this.props.nextMessage) ? 2 : 10,
                }, this.props.containerStyle[this.props.position]]}>
                    {this.props.position === 'left' ? this.renderAvatar() : null}
                    <View>
                        {this.renderName()}
                        {this.renderBubble()}
                    </View>

                    {this.props.position === 'right' ? this.renderAvatar() : null}
                </View>
            </View>
        );
    }
}

const styles = {
    left: StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginLeft: 8,
            marginRight: 0,
        },
        name: {
            textAlign: 'left',
            color: '#666',
            fontSize: 12,
            marginBottom: 6,
        }
    }),
    right: StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            marginLeft: 0,
            marginRight: 8,
        },
        name: {
            textAlign: 'right',
            color: '#666',
            fontSize: 12,
            marginBottom: 6,
        }
    }),
};