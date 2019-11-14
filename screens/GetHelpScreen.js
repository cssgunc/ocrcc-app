/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import call from 'react-native-phone-call';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions,
} from 'react-native';
export default class GetHelpScreen extends React.Component {
    dialEmergency = () => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${911}';
        }
        else {
            phoneNumber = 'telprompt:${911}';
        }
        Linking.openURL(phoneNumber);
    };
    dialHelpLine = () => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${8669354783}';
        }
        else {
            phoneNumber = 'telprompt:${8669354783}';
        }
        Linking.openURL(phoneNumber);
    };
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={this.dialEmergency} activeOpacity={0.8} style={styles.button}>
                <View style={styles.NineOneOne}>
                        <Text style={styles.text}>CALL 911</Text>
                 </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.dialHelpLine} activeOpacity={0.8} style={styles.button}>
                <View style={styles.HelpLine}>
                        <Text style={styles.text}>CALL THE 24 HOUR CRISIS HOTLINE:       (866) 935-4783 </Text>
                </View>
            </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 50,
    color: 'white',
  },
  NineOneOne: {
    borderRadius: 5,
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height - 80) / 2,
    backgroundColor: '#FF4C4C'
  },
  HelpLine: {
    borderRadius: 5,
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height - 80) / 2,
    backgroundColor: '#47B8BC'
  }
});