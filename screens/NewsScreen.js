/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class NewsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, test: 'test'}
  }
  componentDidMount () {
    fetch("https://ocrcc.org/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((responseJson) => {
      this.setState({
        isLoading: false,
        posts: responseJson,
      }, function(){

      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator/>
          </View>
        </View>
      )
    }

    if(!this.state.posts) {
      return (
        <View style={styles.container}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.text}>Empty</Text>
            <Text style={styles.text}>{this.state.test}</Text>
            <Text style={styles.text}>{this.state.posts}</Text>
            <FlatList
              data={this.state.posts}
              renderItem={({item}) => <Text style={styles.text}>Hello {item.title}, {item.content}</Text>}
              keyExtractor={({id}, index) => id}
            />
          </View>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.text}>Done</Text>
          <FlatList
            data={this.state.posts}
            renderItem={({item}) => <Text>{item.title.rendered}, {item.content.rendered}</Text>}
            keyExtractor={item => item.id.toString()}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={1}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
  headerStyle: {
    // bottom: auto,
    // boxSizing: border-box,
    // justifyContent: "flex-start",
    // alignItems: "flex-start"
    alignContent: "flex-start"
  }
});