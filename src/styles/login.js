'use strict';

import {StyleSheet, Dimensions } from 'react-native';

let window = Dimensions.get('window');
let width = window.width;
let height = window.height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo_img: {
    marginTop: height * 0.15,
    height: width * 0.15,
    width: width * 0.45,
    marginBottom: 40
  },
  login_btn: {
    width: width * 0.8,
    height: width * 0.14,
    backgroundColor: '#edf3f1',
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 30
  },
  login_btn_text: {
    textAlign: 'center',
    color: '#c5c5c5',
    fontSize: 20
  },
  login_input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    width: width * 0.8,
    height: width * 0.14,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#eee'
  },
  login_input_img: {
    marginTop: -3,
    width: 15,
    height: 15,
    marginLeft: width * 0.05,
    marginRight: width * 0.02
  },
  login_input_text: {
    flex: 1,
    color: '#999',
    fontSize: 14
  },
  login_bottom: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: 40,
      width: width,
      flexDirection: 'row',
      alignItems: 'center'
  },
  login_bottom_text: {
      textAlign: 'center',
      color: '#64b9ae',
      fontSize: 12,
      flex: 2
  },
  login_out: {
      flexDirection: 'row',
      justifyContent: 'center',
      flex: 3,
      alignItems: 'center',
  },
  login_out_text: {
      fontSize: 12,
      color: '#64b9ae'
  },
  login_out_img: {
      width: 20,
      height: 20
  }
});

module.exports = styles;