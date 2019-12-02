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
import {hasUserSetPinCode} from '@haskkor/react-native-pincode'; 
import PINCode from '@haskkor/react-native-pincode'
import styling from '../components/functions'
import { NavigationActions } from 'react-navigation';
var Consts = require('../components/consts.js');
// import Consts from '../components/consts'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinEntered: false,
    };
    this.methods = {
      success: function() {
        // props.navigation.replace("HomeScreen");
        props.navigation.replace("HomeScreen");
      }
    }
  }
  render() {
    if(hasUserSetPinCode()) {
      return (
        <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <PINCode 
            status={'enter'}
            finishProcess={this.methods.success}/>
        </View>
        </View>
      )
    };
    this.props.navigation.navigate("HomeScreen");
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