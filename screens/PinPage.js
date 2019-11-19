import React, { Component } from 'react';
import { View, Vibration } from 'react-native';
import PinView from 'react-native-pin-view';
// import { loadOptions } from '@babel/core';

type Props = {};
let pin = "";
export default class PinPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.state = {
        pin: "8967"
        // should get it either from phone pin or let user set pin when sign up the app
    };
  }
  onComplete(inputtedPin, clear) {
    if (pin !== this.state.pin) {
      // Vibration.vibrate(1000);
      alert("Wrong password!");
      pin = "";
      clear();
    } else {
      // alert("Success");
      // loadLanding();  // to the app landing page
      this.props.navigation.navigate('HomeScreen');
    }
  }
  onPress(inputtedPin, clear, pressed) {
    if (pressed !== 'DEL') pin += pressed;
    else pin = pin.slice(0,-1);
    console.log(pin);
    // clear();
  }
  render() {
    return (
      <View style={{
        flex           : 1,
        backgroundColor: '#f1f1f1',
        justifyContent : 'center'
      }}>
        <PinView
        onPress={this.onPress}
        onComplete={this.onComplete}
        pinLength={this.state.pin.length}
        />
      </View>
    );
  }
}