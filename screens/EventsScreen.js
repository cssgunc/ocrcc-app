/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
function Separator() {
  return <View style={styles.separator} />;
}
export default class EventsScreen extends React.Component {
  render() {
    return (
<SafeAreaView style={styles.container}>
<ScrollView style={styles.scrollView}>

<View style={styles.container}>
   <Text style={{fontSize: 40,color:'#47B8BC', fontWeight:'bold'  }}>UPCOMING EVENTS </Text>
      </View>

      <View style={styles.container}>
         <Text style={{fontSize: 30,color:'#000000'  }}>November 2019 </Text>
            </View>
               <Separator/>
<View style={styles.container}>



<View style={styles.container}>
   <Text style={{fontSize: 25,color:'#47B8BC', fontWeight:'bold'}}>Friday</Text>
      </View>
 <View style={styles.container}>
         <View style={styles.CircleShapeView}>
                <Text style={{fontSize: 30,color:'#ffffff', textAlign:'center' }}> 15 </Text>
                 </View>
              </View>


              <Text style={styles.title}>
              </Text>
              <Button
                title="Circle of Sisters"
                color='#47B8BC'
                onPress={() => Alert.alert("Circle of Sisters\n6:00-8:00")}
               />
            </View>
            <Separator/>



<View style={styles.container}>
   <Text style={{fontSize: 25,color:'#47B8BC', fontWeight:'bold'}}>Saturday</Text>
         </View>
          <View style={styles.container}>
         <View style={styles.CircleShapeView}>
                <Text style={{fontSize: 30,color:'#ffffff', textAlign:'center'  }}> 16 </Text>
                 </View>
              </View>
                   <View>
            <Button
             title="How to Talk to Your Child About Sexual Abuse"
             color='#47B8BC'
             onPress={() => Alert.alert('How to Talk to Your Child About Sexual Abuse 11:00am - 12:00pm')}
              />
               </View>
   <Separator/>



<View style={styles.container}>
   <Text style={{fontSize: 25,color:'#47B8BC', fontWeight:'bold'}}>Sunday</Text>
      </View>
 <View style={styles.container}>
         <View style={styles.CircleShapeView}>
                <Text style={{fontSize: 30,color:'#ffffff', textAlign:'center'  }}> 17 </Text>
                 </View>
              </View>

              <Separator/>
              <View>
                         <Button
                             title="The Healing Power of Gong"
                             color='#47B8BC'
                             onPress={() => Alert.alert('The Healing Power of Gong\n2:00pm - 4:00pm')}
                            />
                         </View>

<View style={styles.container}>
   <Text style={{fontSize: 25,color:'#47B8BC', fontWeight:'bold'}}>Monday</Text>
      </View>
 <View style={styles.container}>
         <View style={styles.CircleShapeView}>
                <Text style={{fontSize: 30,color:'#ffffff', textAlign:'center'  }}> 18 </Text>
                 </View>
              </View>

              <Separator/>
              <View>
                  <Text style={styles.title}>
                      </Text>
                         <Button
                             title="Drop in Crisis Counselling"
                             color='#47B8BC'

                             onPress={() => Alert.alert('Drop in Crisis Counselling\n12:30pm - 4:00pm')}
                            />
                         </View>

<Separator/>
   <View>
      <Text style={styles.title}>
        </Text>
             <Button
             title="CSA Support Group"
             color='#47B8BC'
            onPress={() => Alert.alert('CSA Support Group\n6:30pm - 8:00pm')}
          />
    </View>
               </ScrollView>
          </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginHorizontal: 8,
      marginVertical:8,
      color: '#008080'

    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      color: '#000000'
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
    CircleShapeView: {
      width: 50,
      height: 50,
      borderRadius: 50/2,
      backgroundColor: '#47B8BC',
      flexDirection:'row',
  },
    eventButton: {
    width: 100,
    height:100,
    flexDirection:'row',
    justifyContent:'flex-end',
    }


});


