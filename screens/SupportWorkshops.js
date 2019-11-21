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
  StatusBar,
} from 'react-native';
export default class SupportWorkshops extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Support Groups + Workshops</Text>
        <Text style={styles.para}>Support groups and workshops offer a safe space for survivors with similar experiences of sexual violence to talk, support, and encourage each other.</Text>
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
    flex: 0.1,
    fontSize: 30,
  },
  para: {
    flex: 1,
    fontSize: 15,
    padding: 10,
  },
});

// Check out <FlatList> => https://facebook.github.io/react-native/docs/flatlist
// and <ScrollView> => https://facebook.github.io/react-native/docs/scrollview