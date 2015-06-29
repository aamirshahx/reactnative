/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Text,
    View
} = React;

var reactNative = require('./src/components/calendar/calendar');
AppRegistry.registerComponent('reactNative', () => reactNative);
