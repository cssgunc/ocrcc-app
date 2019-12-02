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
  Button
} from 'react-native';
import styling from '../components/functions'
import { NavigationActions } from 'react-navigation';
var Consts = require('../components/consts.js');

var unlocked = false;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Home</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Consts.num,
  },
  headerStyle: {
    // bottom: auto,
    // boxSizing: border-box,
    // justifyContent: "flex-start",
    // alignItems: "flex-start"
    alignContent: "flex-start"
  }
});