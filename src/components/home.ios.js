'use strict'
// 首页

import React, {Component} from 'react';
import {
    StyleSheet, Text, View, Image, TouchableOpacity, ScrollView
} from 'react-native';

import SimplePicker from '../widget/SimplePicker';
import ViewPager from 'react-native-viewpager';

import { homeAd, homeCondition } from '../assets/home';

import styles from '../styles/home';

export default class Home extends Component {

    constructor(props) {
        super(props);
        const ds = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        this.state = {
            dataSource: ds.cloneWithPages(homeAd),
            pickerItems: homeCondition
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image source={ data } style={styles.viewpage}/>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.viewpager}>
                    <ViewPager
                        style={styles.viewpager}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>
                </View>
                <ScrollView style={styles.homeForm}>
                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>时间：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}></View>
                        <View style={styles.homeFormRowRight}></View>
                    </View>

                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>线路：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}></View>
                        <TouchableOpacity style={styles.homeFormRowRight}>
                            <Image
                                source={require('../images/activity_map.png')}
                                style={styles.homeFormRowRightImg}
                            />
                            <Text style={styles.homeFormRowRightTxt}>选择线路</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>我是否熟路：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Text onPress={() => { this.refs.picker.show(); }}>
                                {this.state.familiar ?
                                    this.state.familiar.label :
                                    this.state.pickerItems.familiar[0].label}
                            </Text>
                            <SimplePicker
                                ref={'picker'}
                                options={this.state.pickerItems.familiar}
                                onSubmit={(option) => {
                                    this.state.pickerItems.familiar.forEach(item =>{
                                        if(item.key == option){
                                            this.setState({
                                                familiar: item
                                            });
                                            return;
                                        }
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.homeFormRowRight}></View>
                    </View>

                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>参与人数：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Text onPress={() => { this.refs.picker1.show(); }}>
                                {this.state.amount ?
                                    this.state.amount.label :
                                    this.state.pickerItems.amount[0].label}
                            </Text>
                            <SimplePicker
                                ref={'picker1'}
                                options={this.state.pickerItems.amount}
                                onSubmit={(option) => {
                                    this.state.pickerItems.amount.forEach(item =>{
                                        if(item.key == option){
                                            this.setState({
                                                amount: item
                                            });
                                            return;
                                        }
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.homeFormRowRight}></View>
                    </View>

                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>是否需要包车：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Text onPress={() => { this.refs.picker2.show(); }}>
                                {this.state.need_car ?
                                    this.state.need_car.label :
                                    this.state.pickerItems.need_car[0].label}
                            </Text>
                            <SimplePicker
                                ref={'picker2'}
                                options={this.state.pickerItems.need_car}
                                onSubmit={(option) => {
                                    this.state.pickerItems.need_car.forEach(item =>{
                                        if(item.key == option){
                                            this.setState({
                                                need_car: item
                                            });
                                            return;
                                        }
                                    })
                                }}
                            />
                        </View>
                        <TouchableOpacity style={styles.homeFormRowRight}>
                            <Image
                                source={require('../images/activity_map.png')}
                                style={styles.homeFormRowRightImg}
                            />
                            <Text style={styles.homeFormRowRightTxt}>选择包车</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>集合地点：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}></View>
                        <TouchableOpacity style={styles.homeFormRowRight}>
                            <Image
                                source={require('../images/activity_map.png')}
                                style={styles.homeFormRowRightImg}
                            />
                            <Text style={styles.homeFormRowRightTxt}>选择</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>费用：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Text onPress={() => { this.refs.picker3.show(); }}>
                                {this.state.fee_type ?
                                    this.state.fee_type.label :
                                    this.state.pickerItems.fee_type[0].label}
                            </Text>
                            <SimplePicker
                                ref={'picker3'}
                                options={this.state.pickerItems.fee_type}
                                onSubmit={(option) => {
                                    this.state.pickerItems.fee_type.forEach(item =>{
                                        if(item.key == option){
                                            this.setState({
                                                fee_type: item
                                            });
                                            return;
                                        }
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.homeFormRowRight}>

                        </View>
                    </View>
                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>活动类型：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Text onPress={() => { this.refs.picker4.show(); }}>
                                {this.state.activity_type ?
                                    this.state.activity_type.label :
                                    this.state.pickerItems.activity_type[0].label}
                            </Text>
                            <SimplePicker
                                ref={'picker4'}
                                options={this.state.pickerItems.activity_type}
                                onSubmit={(option) => {
                                    this.state.pickerItems.activity_type.forEach(item =>{
                                        if(item.key == option){
                                            this.setState({
                                                activity_type: item
                                            });
                                            return;
                                        }
                                    })
                                }}
                            />
                        </View>
                        <View style={styles.homeFormRowRight}></View>
                    </View>
                    <View style={styles.homeFormBtn}>
                        <Text style={styles.homeFormBtnTxt}>一键匹配路线和驴友</Text>
                    </View>
                </ScrollView>

            </View>
        );
    }

}

