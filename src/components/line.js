'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ListView
} from 'react-native';

import CustomPicker from '../widget/CustomPicker';

import CustomListView from '../widget/CustomListView';

import navStyles from '../styles/nav';
import styles from '../styles/line';

import {lineCondition, lineData} from '../assets/line';

export default class Line extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pickerItems: lineCondition,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.user.is_logged_in != this.props.user.is_logged_in && !nextProps.user.is_logged_in) {
            this.resetToLogin();
            return false;
        }

        return true;
    }

    resetToLogin() {
        const {router} = this.props;
        router.resetToLogin();
    }

    toLineDetail(id) {
        const {router} = this.props;
        router.toLineDetail({line_id: id})
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.dir(position)
                // var initialPosition = JSON.stringify(position);
                // this.setState({initialPosition});
            },
            (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={navStyles.navi}>
                    <TouchableOpacity style={navStyles.navi_left} onPress={this.getLocation.bind(this)}>
                        <Image source={require('../images/location_normal.png')} style={navStyles.navi_btn_img}/>
                        <Text style={navStyles.navi_btn_txt}>深圳</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid}>
                        <CustomPicker
                            options={this.state.pickerItems.category}
                            arrowImg={require('../images/triangle_down_white.png')}
                            tintColor="white"
                            style={{backgroundColor: 'transparent', width: 80,}}/>
                    </View>
                    <View style={navStyles.navi_right}/>
                </View>

                <CustomListView
                    rows={this.props.line.lines}
                    renderRow={this._renderRow}
                    firstLoad={true}
                    isRefreshing={this.props.line.is_refreshing}
                    onRefresh={this.props.refresh_line}
                    isLoading={this.props.line.is_loading}
                    onLoad={this.props.load_line}
                />

            </View>
        );
    }

    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <TouchableOpacity onPress={this.toLineDetail.bind(this, rowData.id)}>
                <View style={styles.list_item}>
                    <Image source={rowData.url} style={styles.list_item_img}/>
                    <Text style={styles.list_item_ttl}>{rowData.title}</Text>
                    <Text style={styles.list_item_desc}>{rowData.desc}</Text>
                </View>
            </TouchableOpacity>
        )
    }

}
