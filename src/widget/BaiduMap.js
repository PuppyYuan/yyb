import {
  requireNativeComponent,
  View,
  NativeModules,
  Platform,
  DeviceEventEmitter
} from 'react-native';

import React, {
  Component,
  PropTypes
} from 'react';

import _MapTypes from './baidumap/MapTypes';
import _MapView from './baidumap/MapView';
import _MapModule from './baidumap/MapModule';
import _Geolocation from './baidumap/Geolocation';

export const MapTypes = _MapTypes;
export const MapView = _MapView;
export const MapModule = _MapModule;
export const Geolocation = _Geolocation;
