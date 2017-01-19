'use strict'

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

import CustomAlert from '../widget/CustomAlert';

import ModalBox from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';

import commonStyle from '../styles/common';
import styles from '../styles/login';

export default class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    shouldComponentUpdate = (nextProps, nextState) => {

        if(nextProps.is_logged_in != this.props.is_logged_in && nextProps.is_logged_in){
            this.refs.modal.close();
            this.toMain();
            return false;
        }

        if(nextProps.status === 'doing'){
            this.refs.modal.open();
            return false;
        }

        if(nextProps.status === 'error' || nextProps.status === 'done'){
            this.refs.modal.close();
            return false;
        }

        return true;
    }

    toLine() {
        const { router } = this.props;
        router.toLine();
    }

    toMain() {
        const { router } = this.props;
        router.toMain();
    }

    handleLogin() {
        if(!this.state.username || !this.state.password){
            CustomAlert.alert('温馨提示', '用户名或者密码不能为空!');
            return;
        }

        let user = {
            name: this.state.username,
            password: this.state.password
        };
        
        this.props.login(user);
    }

    onChangeName = text => {
        this.setState({username: text });
    }

    onChangePwd = text => {
        this.setState({password: text});
    }

    toRegister() {
        const { router } = this.props;
        router.toRegister();
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={styles.logo_img} />

                <View style={styles.login_input}>
                    
                    <Image source={require('../images/ic_login_user.png')} style={styles.login_input_img} />
                    
                    <TextInput 
                        placeholder="手机/邮箱/用户名" 
                        placeholderTextColor="#bbb"
                        underlineColorAndroid="transparent"
                        multiline={false}
                        maxLength={20}
                        style={styles.login_input_text}
                        onChangeText = { this.onChangeName.bind(this) }
                        />
                </View>

                <View style={styles.login_input}>

                    <Image source={require('../images/ic_login_key.png')} style={styles.login_input_img} />

                    <TextInput 
                        placeholder="登录密码" 
                        placeholderTextColor="#bbb" 
                        underlineColorAndroid="transparent"
                        multiline={false}
                        maxLength={20}
                        secureTextEntry={true}
                        style={styles.login_input_text}
                        onChangeText = { this.onChangePwd.bind(this) }
                        />
                </View>

                <TouchableOpacity style={styles.login_btn} onPress= { this.handleLogin.bind(this) }>
                    <Text style={styles.login_btn_text}>登&nbsp;&nbsp;&nbsp;录</Text>
                </TouchableOpacity>

                <View style={styles.login_bottom}>
                    <Text style={styles.login_bottom_text} onPress={ this.toMain.bind(this) } >随便逛逛</Text>

                    <View style={styles.login_out}>
                        <Image source={require('../images/qq_share.png')} style={styles.login_out_img} />
                        <Text style={styles.login_out_text}>QQ登录</Text>
                    </View>
                    
                    <View style={styles.login_out}>
                        <Image source={require('../images/weibo_share.png')} style={styles.login_out_img} />
                        <Text style={styles.login_out_text}>新浪微博登录</Text>
                    </View>

                    <Text style={styles.login_bottom_text} onPress={this.toRegister.bind(this)} >注册</Text>
                </View>

                <ModalBox style={[commonStyle.modal,commonStyle.justAlign]}
                          ref={"modal"}
                          backdropPressToClose={false}
                          animationDuration={10}
                          backdrop={true}
                          backdropOpacity={0.5}
                     >
                    <Spinner style={commonStyle.spinner} 
                        isVisible={true} 
                        size={50} type="Wave" color="#FFFFFF"/>
                    <Text style={{textAlign: 'center', color: '#fff', marginTop: 10}}>登录中…</Text>
                </ModalBox>
            </View>
        );
    }
}

