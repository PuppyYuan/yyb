'use strict'

import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions, View, Modal, ScrollView, Animated, Easing, TouchableWithoutFeedback, Image} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 22,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    animatedContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    switchBg: {
        width: 50,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: -1,
    },
    switchItem: {
        flex: 1,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchItemTxt: {
        color: '#f5f5f5',
        fontSize: 12,
    }
});

export default class CustomSwitch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            transformSwitch: new Animated.Value(this.props.value ? 0 : 51),
            wordColor1: new Animated.Value(this.props.value ? 0 : 1),
            wordColor2: new Animated.Value(this.props.value ? 0 : 1)
        }
    }

    componentWillReceiveProps(props) {
        if(this.props.value !== props.value){
            this.animateSwitch(props.value);
        }
    }

    handleSwitch() {
        const { value } = this.state;
        const { onValueChange } = this.props;

        this.animateSwitch(!value);
        this.setState({value: !value}, ()=>onValueChange(this.state.value));
    }

    animateSwitch(value){
        Animated.parallel([
            Animated.spring(this.state.transformSwitch, {
                toValue: value ? 0 : 51,
                duration: 200
            }),
            Animated.timing(this.state.wordColor1, {
                toValue: value ? 0 : 1,
                duration: 200
            }),
            Animated.timing(this.state.wordColor2, {
                toValue: value ? 0 : 1,
                duration: 200
            }),
        ]).start();
    }

    render () {

        const { activeText, inActiveText } = this.props;
        const { transformSwitch, wordColor1, wordColor2 } = this.state;

        const wordColorAnim1 = wordColor1.interpolate({
            inputRange: [0, 1],
            outputRange: ['#666666', '#f5f5f5']
        });

        const wordColorAnim2 = wordColor2.interpolate({
            inputRange: [0, 1],
            outputRange: ['#f5f5f5', '#666666']
        });

        return (
            <TouchableWithoutFeedback onPress={this.handleSwitch.bind(this)}>
                <View style={styles.container}>
                    <View style={[styles.animatedContainer]} >
                        <Animated.View style={[styles.switchBg, {transform: [{translateX: transformSwitch}]}]}/>
                        <View style={[styles.switchItem]}>
                            <Animated.Text style={[styles.switchItemTxt, {color: wordColorAnim1}]}>{ activeText }</Animated.Text>
                        </View>
                        <View style={[styles.switchItem]}>
                            <Animated.Text style={[styles.switchItemTxt, {color: wordColorAnim2}]}>{ inActiveText }</Animated.Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}