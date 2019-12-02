/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styling from '../components/functions'
import { NavigationActions } from 'react-navigation';
import LinksScreen from './LinksScreen';
var Consts = require('../components/consts.js');

var unlocked = false;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight View style={[styles.fullWidthButton, 
          { backgroundColor: styling.white()}]} 
          onPress={() => this.props.navigation.navigate('ResourcesScreen')}>
          <Text style={styles.fullWidthButtonText}>RESOURCES</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.fullWidthButton, 
          { backgroundColor: styling.grey()}]} 
          onPress={() => this.props.navigation.navigate('GetHelpScreen')}>
          <Text style={styles.fullWidthButtonText}>SERVICES</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.fullWidthButton, 
          { backgroundColor: styling.white()}]} 
          onPress={() => this.props.navigation.navigate('MapScreen')}>
          <Text style={styles.fullWidthButtonText}>FIND US</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.fullWidthButton, 
          { backgroundColor: styling.grey()}]} 
          onPress={() => this.props.navigation.navigate('SettingsScreen')}>
          <Text style={styles.fullWidthButtonText}>SETTINGS</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: Consts.num,
  },
  headerStyle: {
    alignContent: "flex-start"
  },
  fullWidthButton: {
    height:80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  fullWidthButtonText: {
    fontSize:24,
    color: 'black',
  },
});