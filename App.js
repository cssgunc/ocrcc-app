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

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Form = t.form.Form;

import t from 'tcomb-form-native';

var contactOption = t.enums({
  Pt: 'Phone (Text)',
  Pc: 'Phone (Call)',
  E: 'Email'
});


const User = t.struct({
  fullName: t.String,
  email: t.String,
  phoneNumber: t.String,
  preferredContactMethod: contactOption,
  safety: t.Boolean,
  safety2: t.Boolean,
  test: t.String
});

var options = {
  auto: 'placeholders',
  fields: {
    safety: {
      label: "Is it safe for us to identify ourselves as OCRCC on the phone?",
    },
    safety2: {
      label: "Is it safe for us to leave a message?",
    },
    preferredContactMethod: {
      isCollapsed: false,
    },
    fullName: {
      placeholder: 'Full Name',
    },
    email: {
      placeholder: 'Email',
    },
    phoneNumber: {
      placeholder: 'Phone Number',
    },
    test: {
      multiline: true,
      placeholder: 'What would you like to discuss?',
      type: "textArea",
      attrs: {
        rows: 20
      }
    }
  }
}

const App = () => {
  return (

    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View style={styles.container}>
                      <Form type={User} options={options}/>
               </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
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
});

export default App;
