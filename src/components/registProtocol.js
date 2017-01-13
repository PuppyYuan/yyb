'use strict'

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import navStyles from '../styles/nav';

export default class RegistProtocol extends Component {

    constructor(props){
        super(props);
    }

    goBack() {
        const { router } = this.props;
        router.pop();
    }

    render(){
        return (
            <View style={styles.container} >

                <View style={navStyles.navi}>
                    <TouchableOpacity  style={navStyles.navi_left} onPress={this.goBack.bind(this)}>
                        <Text style={navStyles.navi_btn_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={navStyles.navi_mid} >
                        <Text style={navStyles.navi_mid_txt}>注册</Text>
                    </View>
                    <View style={navStyles.navi_right} />
                </View>

                <ScrollView style={styles.protocol_content}>
                    <View style={styles.protocol_title_wrap}>
                        <Text style={styles.protocol_title}>约游宝用户注册协议</Text>
                    </View>
                    <View style={styles.protocol_section}>
                        <Text style={styles.protocol_section_title}>一、总则</Text>
                        <Text style={styles.protocol_section_para}>1.1 保宝网的所有权和运营权归深圳市永兴元科技有限公司所有。</Text>
                        <Text style={styles.protocol_section_para}>1.2 用户在注册之前，应当仔细阅读本协议，并同意遵守本协议后方可成为注册用户。一旦注册成功，则用户与保宝网之间自动形成协议关系，用户应当受本协议的约束。用户在使用特殊的服务或产品时，应当同意接受相关协议后方能使用。</Text>
                        <Text style={styles.protocol_section_para}>1.3 本协议则可由保宝网随时更新，用户应当及时关注并同意本站不承担通知义务。本站的通知、公告、声明或其它类似内容是本协议的一部分。</Text>
                    </View>

                    <View style={styles.protocol_section}>
                        <Text style={styles.protocol_section_title}>二、服务内容</Text>
                        <Text style={styles.protocol_section_para}>2.1 保宝网的具体内容由本站根据实际情况提供。</Text>
                        <Text style={styles.protocol_section_para}>2.2 本站仅提供相关的网络服务，除此之外与相关网络服务有关的设备(如个人电脑、手机、及其他与接入互联网或移动网有关的装置)及所需的费用(如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费)均应由用户自行负担。</Text>
                    </View>

                    <View style={styles.protocol_section}>
                        <Text style={styles.protocol_section_title}>三、用户帐号</Text>
                        <Text style={styles.protocol_section_para}>3.1 经本站注册系统完成注册程序并通过身份认证的用户即成为正式用户，可以获得本站规定用户所应享有的一切权限；未经认证仅享有本站规定的部分会员权限。保宝网有权对会员的权限设计进行变更。</Text>
                        <Text style={styles.protocol_section_para}>3.2 用户只能按照注册要求使用真实姓名，及身份证号注册。用户有义务保证密码和帐号的安全，用户利用该密码和帐号所进行的一切活动引起的任何损失或损害，由用户自行承担全部责任，本站不承担任何责任。如用户发现帐号遭到未授权的使用或发生其他任何安全问题，应立即修改帐号密码并妥善保管，如有必要，请通知本站。因黑客行为或用户的保管疏忽导致帐号非法使用，本站不承担任何责任。</Text>
                    </View>

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    protocol_content: {
        flex: 1,
        padding: 15,
    },
    protocol_title_wrap: {
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#45a99e',
    },
    protocol_title: {
        fontSize: 14,
        color: '#45a99e',
    },
    protocol_section: {
        marginBottom: 15,
    },
    protocol_section_title: {
        fontSize: 13,
        color: '#333',
        paddingBottom: 10,
    },
    protocol_section_para: {
        fontSize: 13,
        lineHeight: 20,
        color: '#999',
        paddingBottom: 4,
    }
});