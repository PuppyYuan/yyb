import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';

import { Avatar } from 'react-native-gifted-chat';
import CustomGiftedAvatar from '../widget/CustomGiftedAvatar';

export default class CustomAvatar extends Avatar {

    renderAvatar() {
        if (this.props.renderAvatar) {
            const {renderAvatar, ...avatarProps} = this.props;
            return this.props.renderAvatar(avatarProps);
        }
        return (
            <CustomGiftedAvatar
                avatarStyle={StyleSheet.flatten([styles[this.props.position].image, this.props.imageStyle[this.props.position]])}
                user={this.props.currentMessage.user}
            />
        );
    }

  render() {
    return (
      <View style={[styles[this.props.position].container, this.props.containerStyle[this.props.position]]}>
        {this.renderAvatar()}
      </View>
    );
  }
}

const styles = {
    left: StyleSheet.create({
        container: {
            marginRight: 8,
        },
        image: {
            height: 28,
            width: 28,
            borderRadius: 14,
        },
    }),
    right: StyleSheet.create({
        container: {
            marginLeft: 8,
        },
        image: {
            height: 28,
            width: 28,
            borderRadius: 14,
        },
    }),
};