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
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// We can use react-native Linking to send email
import email from 'react-native-email'

const App = () => {
  return (
    <View style={styles.container}>
        <Button title="Send Mail" onPress={this.handleEmail} />
    </View>
  );
};

handleEmail = () => {
    const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'Show how to use',
        body: 'Sample body'
    }).catch(console.error)
}

const styles = StyleSheet.create({
  /*scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  */
});

export default App;
