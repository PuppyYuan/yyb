'use strict'

import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions, View, Modal, ScrollView, Animated, Easing} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'grey',
        justifyContent: 'space-between',
    },
    basicContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: 'lightgrey',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: SCREEN_WIDTH,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1
    },
    itemView: {
        width: SCREEN_WIDTH - 15,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
    },
    buttonView: {
        width: SCREEN_WIDTH,
        height: 40,
        paddingHorizontal: 15,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey'
    },
    buttonColor: {
        color: '#45a99e',
    },
});

export default class CustomPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedValue: this.props.selectedValue ? this.props.selectedValue : this.props.options[0].key,
            selectedLabel: this.props.options[0].label,
            triangleAnim: new Animated.Value(0),
        }
    }

    renderItem(option, index){

        let selected = {}
        if(option.key === this.state.selectedValue){
            selected.color = 'darkorange';
        }

        return (
            <TouchableOpacity style={styles.itemView} key={index}
                onPress={this.onItemPress.bind(this, option.key)}
                >
                <Text style={[selected]}>{option.label}</Text>
            </TouchableOpacity>
        );
    }

    onItemPress(key){

        for(let option of this.props.options){
            if(option.key === key) {
                this.setState({
                    selectedValue: option.key,
                    selectedLabel: option.label
                });
                break;
            }
        }

        if(this.props.onSubmit){
            this.props.onSubmit(key)
        }

        this.closePanel();
        this.setState({modalVisible: false});
    }

    renderArrow(){
        var icon = this.props.arrowImg ? this.props.arrowImg : require('../images/triangle_down.png');

        return (
            <Animated.Image
                source={icon}
                style={{width: 11, height: 6, marginLeft: 8, transform: [{
                  rotateZ: this.state.triangleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg']
                  })
                }]}} />
        );
    }

    openPanel() {

        this.setState({modalVisible: true});

        Animated.timing(this.state.triangleAnim,
            {
                toValue: 0.5,
                duration: 300,
                easing: Easing.linear
            }
        ).start();
    }

    closePanel() {
        Animated.timing(
            this.state.triangleAnim,
            {
                toValue: 0,
                duration: 300,
                easing: Easing.linear
            }
        ).start();
    }

    onPressCancel(){
        this.setState({modalVisible: false});

        this.closePanel();
    }


    render () {

        let modalHeight = {};
        let optionHeight = (this.props.options.length + 1) * 40.5 + 30;
        let maxHeight = SCREEN_HEIGHT - 120;

        if(optionHeight > maxHeight){
            modalHeight.height = maxHeight;
        }else{
            modalHeight.height = optionHeight;
        }

        return (
            <View>
                <TouchableOpacity onPress={this.openPanel.bind(this)} >
                    <View style={[styles.container, this.props.style]}>
                        <Text style={{color: this.props.tintColor ? this.props.tintColor : '#666'}}>{this.state.selectedLabel}</Text>
                        {this.renderArrow()}
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType={'fade'}
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={()=> this.setState({modalVisible: false})}>

                    <View style={styles.basicContainer}>
                        <View style={[styles.modalContainer, modalHeight]}>
                            <View style={styles.buttonView}>
                                <TouchableOpacity onPress={this.onPressCancel.bind(this)}>
                                    <Text style={styles.buttonColor}>取消</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={styles.scrollView} >
                                {this.props.options.map((option, index)=>
                                    this.renderItem(option, index)
                                )}
                                <View style={{height: 30}}/>
                            </ScrollView>
                        </View>
                    </View>

                </Modal>
            </View>
        );
    }
}