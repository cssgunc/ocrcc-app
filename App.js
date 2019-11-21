import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
// import all basic components

import Icon from 'react-native-vector-icons/Ionicons'

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import MenuDrawer from './components/MenuDrawer'

import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import SettingsScreen from './screens/SettingsSC';
import CallApp from './screens/CallApp'
class NavigationDrawerStructure extends Component {

  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
            name="md-menu"
            color="#fff"
            size={32}
            style={{ paddingLeft: 20 }}
          ></Icon>
        </TouchableOpacity>
      </View>
    );
  }
}

let appTitle = ""

const HomeScreen_StackNavigator = createStackNavigator({
  //All the screen from the HomeScreen will be indexed here
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: appTitle,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#008c99',

      },
      headerTintColor: '#fff',
    }),
  },
});

const LinksScreen_StackNavigator = createStackNavigator({
  //All the screen from the LinksScreen will be indexed here
  Second: {
    screen: LinksScreen,
    navigationOptions: ({ navigation }) => ({
      title: appTitle,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#008c99',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SettingsScreen_StackNavigator = createStackNavigator({
  //All the screen from the SettingsScreen will be indexed here
  Third: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: appTitle,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#008c99',
      },
      headerTintColor: '#fff',
    }),
  },
});

const CallApp_StackNavigator = createStackNavigator({
  //All the screen from the SettingsScreen will be indexed here
  Fourth: {
    screen: CallApp,
    navigationOptions: ({ navigation }) => ({
      title: appTitle,
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#008c99',
      },
      headerTintColor: '#fff',
    }),
  },
});

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation} />)
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    HomeScreen: {
      //Title
      screen: HomeScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    LinksScreen: {
      //Title
      screen: LinksScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Links',
      },
    },
    SettingsScreen: {
      //Title
      screen: SettingsScreen_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Settings',
      },
    },
    CallApp: {
      //Title
      screen: CallApp_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Call',
      },
    },
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);