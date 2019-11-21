import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity, Text, Dimensions, Button } from 'react-native';
// import all basic components

import Icon from 'react-native-vector-icons/Ionicons'

//For React Navigation 4+
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import MenuDrawer from './components/MenuDrawer'

import PinScreen from './screens/PinScreen';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import SettingsScreen from './screens/SettingsScreen';
import styling from './components/functions';
import GetHelpScreen from './screens/GetHelpScreen';
import MapScreen from './screens/MapScreen'

class NavigationDrawerStructure extends Component {

  toggleDrawer = () => {
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

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation} />)
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    LinksScreen: {
      screen: LinksScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Resources",
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: styling.primary(),
        },
        headerTintColor: '#fff',
        drawerLabel: 'Links'
      }),
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Settings",
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: styling.primary(),
        },
        headerTintColor: '#fff',
        drawerLabel: 'Settings'
      }),
    },
    MapScreen: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Find Us",
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: styling.primary(),
        },
        headerTintColor: '#fff',
        drawerLabel: 'Map'
      }),
    },
    GetHelpScreen: {
      screen: GetHelpScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Get Help",
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: styling.primary(),
        },
        headerTintColor: '#fff',
        drawerLabel: 'Get Help Now'
      }),
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

const RootNavigator = createStackNavigator(
  {
    PinScreen: {
      screen: PinScreen,
      navigationOptions: ({ navigation }) => ({
        title: appTitle,
        headerStyle: {
          backgroundColor: styling.primary(),
        },
        headerTintColor: '#fff',
      }),
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Home",
        headerStyle: {
          backgroundColor: styling.primary(),
        },
        headerTintColor: '#fff',
      }),
    },
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: ({ navigation }) => ({
        title: appTitle,
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: styling.primary(),
        },
        headerTintColor: '#fff',
      }),
    }

  }
)

export default createAppContainer(RootNavigator);