'use strict'

import React, {Component} from 'react';
import {
    ListView,
    Platform,
    View,
    Text,
    RefreshControl,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';

import CustomSpinner from '../widget/CustomSpinner';

export default class CustomListView extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.rows),
        }
    }

    componentWillMount() {
        if (this.props.firstLoad) {
            this.onRefresh();
        }
    }

    componentWillReceiveProps(nextProps) {

        if (this.props.rows !== nextProps.rows) {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
                dataSource: ds.cloneWithRows(nextProps.rows),
            })
        }
    }

    onRefresh() {
        this.props.onRefresh()
    }

    refreshControl() {
        return (
            <RefreshControl
                onRefresh={this.onRefresh.bind(this)}
                refreshing={this.props.isFetch}
                loading={this.props.isLoading}
                colors={["#999"]}
                progressBackgroundColor="transparent"
                tintColor="#999"
                title="玩命加载中"
            />
        )
    }

    onEndReached() {
        if(!this.props.isLoading){
            this.props.onLoad();
        }
    }

    _renderFooter(){
        return <CustomSpinner/>
    }

    _renderEmptyView() {
        return (
            <View style={styles.empty_view}>
                <Image
                    source={require('../images/icon_search_empty.png')}
                    style={styles.empty_view_img}/>
                <Text style={styles.empty_view_txt}>换个条件试试</Text>
            </View>
        );
    }

    render() {
        return (
            <ListView
                ref="listview"
                dataSource={this.state.dataSource}
                renderRow={this.props.renderRow}
                refreshControl={this.refreshControl()}
                enableEmptySections={true}
                onEndReached={this.onEndReached.bind(this)}
                onEndReachedThreshold={100}
                renderFooter={this._renderFooter.bind(this)}
            />
        );
    }
}

CustomListView.propTypes = {
    rows: React.PropTypes.array,
    renderRow: React.PropTypes.func,
    onRefresh: React.PropTypes.func,
    firstLoad: React.PropTypes.bool,
    isFetch: React.PropTypes.bool,
    isLoading: React.PropTypes.bool,
    onLoad: React.PropTypes.func,
};

CustomListView.defaultProps = {};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    empty_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    empty_view_img: {
        width: width * 0.2,
        height: width * 0.2,
        resizeMode: 'contain'
    },
    empty_view_txt: {
        marginTop: 10,
        fontSize: 12,
        color: '#999'

    }
});