// import React, { Component } from 'react';
// //import react in our code.
// import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';
// // import all basic components

// import Icon from 'react-native-vector-icons/Ionicons'

// //For React Navigation 4+
// import { createAppContainer } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createStackNavigator } from 'react-navigation-stack';

// import MenuDrawer from './components/MenuDrawer'

// import HomeScreen from './screens/HomeScreen';
// import LinksScreen from './screens/LinksScreen';
// import SettingsScreen from './screens/SettingsSC';
// class NavigationDrawerStructure extends Component {

//   //Structure for the navigatin Drawer
//   toggleDrawer = () => {
//     //Props to open/close the drawer
//     this.props.navigationProps.toggleDrawer();
//   };
//   render() {
//     return (
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           <Icon
//             name="md-menu"
//             color="#fff"
//             size={32}
//             style={{ paddingLeft: 20 }}
//           ></Icon>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// let appTitle = ""

// const HomeScreen_StackNavigator = createStackNavigator({
//   //All the screen from the HomeScreen will be indexed here
//   First: {
//     screen: HomeScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: appTitle,
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#008c99',

//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const LinksScreen_StackNavigator = createStackNavigator({
//   //All the screen from the LinksScreen will be indexed here
//   Second: {
//     screen: LinksScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: appTitle,
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#008c99',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const SettingsScreen_StackNavigator = createStackNavigator({
//   //All the screen from the SettingsScreen will be indexed here
//   Third: {
//     screen: SettingsScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: appTitle,
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#008c99',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });

// const WIDTH = Dimensions.get('window').width;

// const DrawerConfig = {
//   drawerWidth: WIDTH * 0.83,
//   contentComponent: ({ navigation }) => {
//     return (<MenuDrawer navigation={navigation}/>)
//   }
// }

// const DrawerNavigator = createDrawerNavigator(
//   {
//     //Drawer Optons and indexing
//     HomeScreen: {
//       //Title
//       screen: HomeScreen_StackNavigator,
//       navigationOptions: {
//         drawerLabel: 'Home',
//       },
//     },
//     LinksScreen: {
//       //Title
//       screen: LinksScreen_StackNavigator,
//       navigationOptions: {
//         drawerLabel: 'Links',
//       },
//     },
//     SettingsScreen: {
//       //Title
//       screen: SettingsScreen_StackNavigator,
//       navigationOptions: {
//         drawerLabel: 'Settings',
//       },
//     },
//   },
//   DrawerConfig
// );

// export default createAppContainer(DrawerNavigator);



import React, { Component } from 'react';
import { View } from 'react-native';
import PinView from 'react-native-pin-view';

type Props = {};
export default class Master extends Component<Props> {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
    this.state = {
        pin: "896745"
    };
  }
  onComplete(inputtedPin, clear) {
    if (val !== this.state.pin) {
      clear();
    } else {
      console.log("Pin is correct");
    }
  }
  onPress(inputtedPin, clear, pressed) {
    console.log("Pressed: "+ pressed);
    console.log("inputtedPin: "+ inputtedPin);
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
        // pinLength={6} // You can also use like that.
        />
      </View>
    );
  }
}