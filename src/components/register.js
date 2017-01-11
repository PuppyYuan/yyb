'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import styles from '../styles/register';
import navStyles from '../styles/nav';

export default class Register extends Component {


    render(){
        return (
            <View style={styles.container} >

                <View style={navStyles.navi}>
                    <TouchableOpacity  style={navStyles.navi_left} >
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid} >
                        <Text style={navStyles.navi_mid_txt}>注册</Text>
                    </View>
                    <View style={navStyles.navi_right} />
                </View>

                <View style={styles.registContent}>
                    <View style={styles.login_input}>

                        <Image source={require('../images/ico_register_phone_num.png')} style={styles.login_input_img} />

                        <TextInput
                            placeholder="手机/邮箱/用户名"
                            placeholderTextColor="#bbb"
                            underlineColorAndroid="transparent"
                            multiline={false}
                            maxLength={20}
                            style={styles.login_input_text}
                        />
                    </View>

                    <View style={styles.login_input}>

                        <Image source={require('../images/iv_register_first_yanzh.png')} style={styles.login_input_img} />

                        <TextInput
                            placeholder="登录密码"
                            placeholderTextColor="#bbb"
                            underlineColorAndroid="transparent"
                            multiline={false}
                            maxLength={20}
                            secureTextEntry={true}
                            style={styles.login_input_text}
                        />
                    </View>

                    <TouchableOpacity style={styles.login_btn} >
                        <Text style={styles.login_btn_text}>注&nbsp;&nbsp;&nbsp;册</Text>
                    </TouchableOpacity>


                </View>
            </View>
        )
    }
}