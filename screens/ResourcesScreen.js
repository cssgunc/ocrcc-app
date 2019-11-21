/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  StatusBar,
  Dimensions,
} from 'react-native';
import styling from '../components/functions'
var Consts = require('../components/consts.js');
export default class LinksScreen extends React.Component {
//    support = () => {
//        ('GetHelpScreen')
//    };
//    therapy = () => {
//        let phoneNumber = '';
//        if (Platform.OS === 'android') {
//            phoneNumber = 'tel:${8669354783}';
//        }
//        else {
//            phoneNumber = 'telprompt:${8669354783}';
//        }
//        Linking.openURL(phoneNumber);
//    };
//    counseling = () => {
//        let phoneNumber = '';
//        if (Platform.OS === 'android') {
//            phoneNumber = 'tel:${8669354783}';
//        }
//        else {
//            phoneNumber = 'telprompt:${8669354783}';
//        }
//        Linking.openURL(phoneNumber);
//    };
//    advocacy = () => {
//        let phoneNumber = '';
//        if (Platform.OS === 'android') {
//            phoneNumber = 'tel:${8669354783}';
//        }
//        else {
//            phoneNumber = 'telprompt:${8669354783}';
//        }
//        Linking.openURL(phoneNumber);
//    };
  render() {
  const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight View style={[styles.fullWidthButton, 
          { backgroundColor: styling.white()}]} 
          onPress={() => this.props.navigation.navigate('SupportWorkshops')}>
          <Text style={styles.fullWidthButtonText}>SUPPORT & WORKSHOPS</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.fullWidthButton, 
          { backgroundColor: styling.grey()}]} 
          onPress={() => this.props.navigation.navigate('Therapy')}>
          <Text style={styles.fullWidthButtonText}>THERAPY</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.fullWidthButton, 
          { backgroundColor: styling.white()}]} 
          onPress={() => this.props.navigation.navigate('Counseling')}>
          <Text style={styles.fullWidthButtonText}>COUNSELING</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.fullWidthButton, 
          { backgroundColor: styling.grey()}]} 
          onPress={() => this.props.navigation.navigate('Advocacy')}>
          <Text style={styles.fullWidthButtonText}>ADVOCACY</Text>
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