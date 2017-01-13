'use strict';

import React from 'react';
import Modal from 'react-native-modalbox';

var window = require('Dimensions').get('window');

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView, TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({

    wrapper: {
        paddingTop: 50,
        flex: 1
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal2: {
        height: 230,
        backgroundColor: "#3B5998"
    },

    modal3: {
        height: 300,
        width: 300
    },

    modal4: {
        height: 300
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        // color: "white",
        padding: 10
    },

    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },

    text: {
        color: "black",
        fontSize: 22
    }

});

export default class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        };
    }

    openModal1(id) {
        this.refs.modal1.open();
    }

    openModal2(id) {
        this.refs.modal2.open();
    }

    openModal3(id) {
        this.refs.modal3.open();
    }

    openModal4(id) {
        this.refs.modal4.open();
    }

    openModal5(id) {
        this.setState({isOpen: true});
    }

    closeModal5(id) {
        this.setState({isOpen: false});
    }

    openModal6(id) {
        this.refs.modal6.open();
    }

    toggleDisable() {
        this.setState({isDisabled: !this.state.isDisabled});
    }

    toggleSwipeToClose() {
        this.setState({swipeToClose: !this.state.swipeToClose});
    }

    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just openned');
    }

    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    }

    renderList() {
        var list = [];

        for (var i = 0; i < 50; i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }

        return list;
    }

    render() {

        return (
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={this.openModal1.bind(this)}
                                  style={styles.btn}><Text>Basic modal</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.openModal2.bind(this)}
                                  style={styles.btn}><Text>Position top</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.openModal3.bind(this)} style={styles.btn}><Text>Position centered + backdrop + disable</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.openModal4.bind(this)} style={styles.btn}><Text>Position bottom + backdrop + slider</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.openModal5.bind(this)} style={styles.btn}><Text>Backdrop + backdropContent</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.openModal6.bind(this)} style={styles.btn}><Text>Position bottom + ScrollView</Text></TouchableOpacity>

                <Modal style={[styles.modal, styles.modal1]} ref={"modal1"} swipeToClose={this.state.swipeToClose}
                       onClosed={this.onClose} onOpened={this.onOpen} onClosingState={this.onClosingState}>
                    <Text style={styles.text}>Basic modal</Text>
                </Modal>

                <Modal style={[styles.modal, styles.modal2]} backdrop={false} position={"top"} ref={"modal2"}>
                    <Text style={[styles.text, {color: "white"}]}>Modal on top</Text>
                </Modal>

                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"}
                       isDisabled={this.state.isDisabled}>
                    <Text style={styles.text}>Modal centered</Text>
                </Modal>

                <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal4"}>
                    <Text style={styles.text}>Modal on bottom with backdrop</Text>
                </Modal>

                <Modal isOpen={this.state.isOpen} onClosed={this.closeModal5} style={[styles.modal, styles.modal4]}
                       position={"center"}>
                    <Text style={styles.text}>Modal with backdrop content</Text>
                </Modal>

                <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal6"} swipeArea={20}>
                    <ScrollView>
                        <View style={{width: window.width, paddingLeft: 10}}>
                            {this.renderList()}
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        );
    }
}
