import React from 'react'
import { StyleSheet, View } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons'

// console.log(this.props.navigation)

export default class MenuButton extends React.Component {
    
    render() {
        return (
            
            <View>
                {/* <Icon name="rocket" size={30} color="#900" /> */}
                <Icon
                    name="md-menu"
                    color="#000"
                    size={32}
                    // style={styles.menuIcon}
                    onPress={() => this.props.navigation.toggleDrawer()}
                ></Icon>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20
    }
});