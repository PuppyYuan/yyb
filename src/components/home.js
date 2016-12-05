'use strict'
// 首页

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, TextInput} from 'react-native';

import ViewPager from 'react-native-viewpager';

import styles from '../styles/home';

var IMGS = [
  'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
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
            source={{uri: data}}
            style={styles.page} />
        );
    }

    render () {
        
        return (
            <View style={styles.container}>
                <ViewPager
                    style={styles.viewpager}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
            </View>
        );
    }

}

