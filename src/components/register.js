'use strict'

import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, Platform} from 'react-native';

import CustomAlert from '../widget/CustomAlert';

import CheckBox from 'react-native-checkbox';
import ImagePicker from 'react-native-image-picker';
import ModalBox from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';

import commonStyle from '../styles/common';
import styles from '../styles/register';
import navStyles from '../styles/nav';

const photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            avatar: null,
        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {

        if (nextProps.is_registed != this.props.is_registed && nextProps.is_registed) {
            this.refs.modal.close();
            this.goBack();
            return false;
        }

        if (nextProps.regstatus === 'doing') {
            this.refs.modal.open();
            return false;
        }

        if (nextProps.regstatus === 'error' || nextProps.regstatus === 'done') {
            this.refs.modal.close();
            return false;
        }

        return true;
    }

    goBack() {
        const {router} = this.props;
        router.pop();
    }

    toRegistProtocol() {
        const {router} = this.props;
        router.toRegistProtocol();
    }

    takeAvatar() {

        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                CustomAlert.alert('温馨提示', '系统错误，请重新选择图片!');
            } else {

                /*let Object = {
                    data: "",
                    fileName: "IMG_0001.JPG",
                    fileSize: 87250,
                    height: 496,
                    isVertical: false,
                    latitude: 38.0374445,
                    longitude: -122.8031783333333,
                    origURL: "assets-library://asset/asset.JPG?id=106E99A1-4F6A-45A2-B320-B0AD4A8E8473&ext=JPG",
                    timestamp: "2011-03-13T00:17:25Z",
                    uri: "file:///Users/yuanpeng/Library/Developer/CoreSimulator/Devices/A2A1B5BC-2E6C-42DD-8B4C-2DB7CF8CEB20/data/Containers/Data/Application/60113736-C7AD-4C00-B4C2-B18E13DF9D78/Documents/images/EBCD017F-B1CA-4B2B-A5C7-C881C1B0D273.jpg",
                    width: 748,
                };*/

                // You can display the image using either data...
                // source = {uri: 'data:image/jpeg;base64,' + response.data};

                // Or a reference to the platform specific asset location
                if (Platform.OS === 'ios') {
                    response.uri = response.uri.replace('file://', '');
                }

                this.setState({
                    avatar: response
                });
            }
        });
    }

    onChangePwd(text) {
        this.setState({password: text})
    }

    onChangeName(text) {
        this.setState({username: text})
    }

    onChangeRepwd(text) {
        this.setState({repassword: text})
    }

    handleRegist() {

        if (!this.state.username || !this.state.password) {
            CustomAlert.alert('温馨提示', '用户名或者密码不能为空!');
            return;
        }

        if (!this.state.password || !this.state.repassword || this.state.password !== this.state.repassword) {
            CustomAlert.alert('温馨提示', '两次输入的密码不一致!');
            return;
        }

        if(!this.state.avatar) {
            CustomAlert.alert('温馨提示', '请选择一张用户头像!');
            return;
        }

        if (!this.state.checked) {
            CustomAlert.alert('温馨提示', '请阅读并同意用户协议!');
            return;
        }

        let user = {
            username: this.state.username,
            password: this.state.password,
            avatar: this.state.avatar
        };

        this.props.regist(user);

    }

    render() {
        return (
            <View style={styles.container}>

                <View style={navStyles.navi}>
                    <TouchableOpacity style={navStyles.navi_left} onPress={this.goBack.bind(this)}>
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid}>
                        <Text style={navStyles.navi_mid_txt}>注册</Text>
                    </View>
                    <View style={navStyles.navi_right}/>
                </View>

                <View style={styles.registContent}>

                    <View style={styles.regist_avatar_wrap}>
                        <TouchableOpacity onPress={this.takeAvatar.bind(this)}>
                            <Image
                                source={this.state.avatar ? this.state.avatar : require('../images/avatar.png')}
                                style={styles.regist_avatar}
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.login_input}>

                        <Image source={require('../images/ico_register_phone_num.png')} style={styles.login_input_img}/>

                        <TextInput
                            placeholder="手机/邮箱/用户名"
                            placeholderTextColor="#bbb"
                            underlineColorAndroid="transparent"
                            multiline={false}
                            maxLength={20}
                            style={styles.login_input_text}
                            onChangeText={this.onChangeName.bind(this)}
                        />
                    </View>

                    <View style={styles.login_input}>

                        <Image source={require('../images/iv_register_first_yanzh.png')}
                               style={styles.login_input_img}/>

                        <TextInput
                            placeholder="登录密码"
                            placeholderTextColor="#bbb"
                            underlineColorAndroid="transparent"
                            multiline={false}
                            maxLength={20}
                            secureTextEntry={true}
                            style={styles.login_input_text}
                            onChangeText={this.onChangePwd.bind(this)}
                        />
                    </View>

                    <View style={styles.login_input}>

                        <Image source={require('../images/iv_register_first_yanzh.png')}
                               style={styles.login_input_img}/>

                        <TextInput
                            placeholder="确认登录密码"
                            placeholderTextColor="#bbb"
                            underlineColorAndroid="transparent"
                            multiline={false}
                            maxLength={20}
                            secureTextEntry={true}
                            style={styles.login_input_text}
                            onChangeText={this.onChangeRepwd.bind(this)}
                        />
                    </View>

                    <View style={styles.regist_check}>
                        <CheckBox
                            label="我已经阅读，并同意"
                            checked={this.state.checked}
                            onChange={(checked)=> this.setState({checked: !checked})}
                            checkedImage={require('../images/checkbox_true.png')}
                            uncheckedImage={require('../images/checkbox_false.png')}
                            labelStyle={{color: '#999', fontSize: 13}}
                            checkboxStyle={{width: 18, height: 18}}
                        />
                        <Text style={styles.regist_protocol} onPress={this.toRegistProtocol.bind(this)}>《用户协议》</Text>
                    </View>

                    <TouchableOpacity style={styles.login_btn} onPress={this.handleRegist.bind(this)}>
                        <Text style={styles.login_btn_text}>注&nbsp;&nbsp;&nbsp;册</Text>
                    </TouchableOpacity>

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
                    <Text style={{textAlign: 'center', color: '#fff', marginTop: 10}}>资料提交中…</Text>
                </ModalBox>
            </View>
        )
    }
}