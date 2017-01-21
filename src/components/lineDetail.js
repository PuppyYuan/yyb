import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';

import styles from '../styles/line';

import {lineDetailTeamList} from '../assets/team';

export default class LineDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    goBack() {
        const { router } = this.props;
        router.pop();
    }

    renderTeam(team, index) {
        return (
            <View key={index} style={styles.line_detail_team}>
                <View style={styles.line_detail_team_left}>
                    <Image source={team.url} style={styles.line_detail_team_left_img}/>
                </View>
                <View style={styles.line_detail_team_mid}>
                    <View style={styles.line_detail_team_mid_t}>
                        <Text style={styles.line_detail_team_mid_t_txt}>{team.title}</Text>
                    </View>
                    <View style={styles.line_detail_team_mid_b}>
                        <Image source={require('../images/calendar.png')} style={styles.line_detail_team_mid_b_img}/>
                        <Text style={styles.line_detail_team_mid_b_txt}>{team.date}</Text>
                    </View>
                </View>
                <View style={styles.line_detail_team_right}>
                    <View style={styles.line_detail_team_right_t}>
                        <Text style={styles.line_detail_team_right_t_txt}>召集中</Text>
                    </View>
                    <View style={styles.line_detail_team_right_b}>
                        <Image source={require('../images/portrait.jpg')} style={styles.line_detail_team_right_b_img}/>
                    </View>
                </View>
            </View>
        )
    }

    render() {

        return (
            <View style={styles.container}>

                <ScrollView style={styles.detail_content}>
                    <Image source={require('../images/line/1.jpg')} style={styles.detail_img}/>
                    <Text style={styles.detail_ttl}>深圳杨梅坑-东冲海岸线穿越</Text>
                    <View style={styles.detail_block}>
                        <Text style={styles.detail_sttl}>简介</Text>
                        <Text style={styles.detail_desc}>杨梅坑位于大亚湾，是一个婚纱摄影的美丽天堂，这里汇聚国内知名婚纱摄影拍摄基地。据称是深圳最美的溪谷。在南澳镇的东北面，位于七娘山脉与老虎坐山之前，有一片长满了杨梅的山丘，山丘下面的村庄就叫做“杨梅坑村”。</Text>
                    </View>
                    <View style={[styles.detail_block, {borderBottomWidth: 0}]}>
                        <Text style={styles.detail_sttl}>重要提示</Text>
                        <Text style={styles.detail_desc}>杨梅坑位于大亚湾，是一个婚纱摄影的美丽天堂，这里汇聚国内知名婚纱摄影拍摄基地。据称是深圳最美的溪谷。在南澳镇的东北面，位于七娘山脉与老虎坐山之前，有一片长满了杨梅的山丘，山丘下面的村庄就叫做“杨梅坑村”。</Text>
                    </View>

                    <View style={styles.line_detail_team_wrap}>
                        {lineDetailTeamList.map((team, index) => this.renderTeam(team, index))}
                    </View>
                </ScrollView>
                <View style={styles.detail_btn_group}>

                    <TouchableOpacity style={styles.btn_supp}>
                        <Text style={styles.btn_supp_txt}>点赞</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_supp}>
                        <Text style={styles.btn_supp_txt}>评论</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn_create}>
                        <Text style={styles.btn_create_txt}>创建队伍</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line_detail_nav}>
                    <TouchableOpacity style={styles.line_detail_nav_left} onPress={this.goBack.bind(this)}>
                        <Text style={styles.line_detail_nav_left_txt}>返回</Text>
                    </TouchableOpacity>
                    <View style={styles.line_detail_nav_right}></View>
                </View>
            </View>
        );
    }
}