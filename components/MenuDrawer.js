import React from 'react';
import {
    View,
    Text,
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {

    navLink(nav, text) {
        return (
            <TouchableOpacity style={styles.pageLinks} onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    close = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <TouchableOpacity
                        onPress = {this.close.bind(this)}>
                        <Icon
                            name="md-close"
                            color="#fff"
                            size={32}
                            style={styles.closeIcon}
                        >
                        </Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomLinks}>
                    <Text style={styles.linkTitle}> Pages </Text>
                    {this.navLink('HomeScreen', 'Home')}
                    {this.navLink('LinksScreen', 'Links')}
                    {this.navLink('SettingsScreen', 'Settings')}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008c99'
    },
    topLinks: {
        flex: 1,
        backgroundColor: '#008c99'
    },
    bottomLinks: {
        flex: 5,
        backgroundColor: '#008c99',
        paddingTop: 10,
        paddingBottom: 450
    },
    linkTitle: {
        fontSize: 24,
        color: 'white',
        padding: 6,
    },
    link: {
        flex: 1,
        fontSize: 20,
        padding: 6,
        paddingLeft: 20,
        margin: 5,
        textAlign: 'left',
        color: 'white'
    },
    pageLinks: { 
        flex: .2,
        // textColor: 'white' 
    },
    closeIcon: { 
        paddingLeft: 20, 
        paddingTop: 20 
    },
})