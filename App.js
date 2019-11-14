<<<<<<< HEAD
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
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
=======
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
import PinPage from './screens/PinPage'
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

const PinPage_StackNavigator = createStackNavigator({
  //All the screen from the HomeScreen will be indexed here
  Pin: {
    screen: PinPage,
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
>>>>>>> mapBranch

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return (<MenuDrawer navigation={navigation}/>)
  }
}

// PinPage_StackNavigator

const DrawerNavigator = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    PinPage: {
      //Title
      screen: PinPage_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Pin',
      },
    },
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
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);