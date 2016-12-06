'use strict'
// 首页

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, 
TextInput, ScrollView, Picker} from 'react-native';

import ViewPager from 'react-native-viewpager';

import styles from '../styles/home';

var IMGS = [
  require('../images/line/1.jpg'),
  require('../images/line/2.jpg'),
  require('../images/line/3.jpg'),
  require('../images/line/4.jpg'),
  require('../images/line/5.jpg')
];

export default class Home extends Component {

    constructor(props) {
        super(props);
        const ds = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        this.state = {
            dataSource: ds.cloneWithPages(IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
        <Image
            source={ data }
            style={styles.viewpage} />
        );
    }

    render () {
        
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
                        <View style={styles.homeFormRowRight}></View>
                    </View>

                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>我是否熟路：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Picker
                                selectedValue={this.state.familiar}
                                onValueChange={(value) => this.setState({familiar: value})}>
                                <Picker.Item label="不限" value="0" />
                                <Picker.Item label="是" value="1" />
                                <Picker.Item label="否" value="2" />
                            </Picker>
                        </View>
                        <View style={styles.homeFormRowRight}>
                            
                        </View>
                    </View>

                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>参与人数：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Picker
                                selectedValue={this.state.amount}
                                onValueChange={(value) => this.setState({amount: value})}>
                                <Picker.Item label="不限" value="0" />
                                <Picker.Item label="1~3人" value="1" />
                                <Picker.Item label="3~5人" value="2" />
                                <Picker.Item label="大于5人" value="3" />
                            </Picker>
                        </View>
                        <View style={styles.homeFormRowRight}>
                            
                        </View>
                    </View>

                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>是否需要包车：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Picker
                                selectedValue={this.state.need_car}
                                onValueChange={(value) => this.setState({need_car: value})}>
                                <Picker.Item label="不限" value="0" />
                                <Picker.Item label="是" value="1" />
                                <Picker.Item label="否" value="2" />
                            </Picker>
                        </View>
                        <View style={styles.homeFormRowRight}>
                            
                        </View>
                    </View>
                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>集合地点：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}></View>
                        <View style={styles.homeFormRowRight}></View>
                    </View>
                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>费用：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Picker
                                selectedValue={this.state.fee_type}
                                onValueChange={(value) => this.setState({fee_type: value})}>
                                <Picker.Item label="AA" value="0" />
                                <Picker.Item label="公司负责" value="1" />
                                <Picker.Item label="领队负责" value="2" />
                            </Picker>
                        </View>
                        <View style={styles.homeFormRowRight}>
                            
                        </View>
                    </View>
                    <View style={styles.homeFormRow}>
                        <View style={styles.homeFormRowLeft}>
                            <Text style={styles.homeFormRowLeftTxt}>活动类型：</Text>
                        </View>
                        <View style={styles.homeFormRowMid}>
                            <Picker
                                selectedValue={this.state.activity_type}
                                onValueChange={(value) => this.setState({activity_type: value})}>
                                <Picker.Item label="徒步" value="0" />
                                <Picker.Item label="自驾" value="1" />
                                <Picker.Item label="露营" value="2" />
                            </Picker>
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

