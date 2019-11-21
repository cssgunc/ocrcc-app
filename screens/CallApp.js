import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Linking, Platform } from 'react-native';

export default class mainapp extends Component {

    dialCall = () => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = 'tel:${1234567890}';
        }
        else {
            phoneNumber = 'telprompt:${1234567890}';
        }

        Linking.openURL(phoneNumber);
    };

    render() {
        return (
            <View style={styles.MainContainer}>

                <Text style={styles.text}>CALL THE 24 HOUR CRISIS HOT LINE</Text>

                <TouchableOpacity onPress={this.dialCall} activeOpacity={0.7} style={styles.button} >

                    <Text style={styles.TextButton}>PHONE NUMBER SHOULD APPEAR HERE</Text>

                </TouchableOpacity>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    button: {
        width: '80%',
        padding: 6,
        backgroundColor: '#008c99',
        borderRadius: 7,
    },

    TextButton: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
        fontSize: 30,
        color: '#008c99',
        //bottom: auto,
        //boxSizing: border - box,     
    }

});