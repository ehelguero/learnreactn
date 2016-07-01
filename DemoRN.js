/* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
 Image,
 StyleSheet,
 Text,
 TextInput,
 View
} from 'react-native';
import Forecast from './Forecast';

class demorn extends Component {
  constructor(props){
    super(props);
    this.state = {
      zip: '',
      forecast: {
        main: 'Clouds',
        description: 'few clouds',
        temp: 45.7
      }
    };
  }

  _handleTextChange(event) {
      console.log(event.nativeEvent.text);
      this.setState({zip: event.nativeEvent.text});
  }

 render() {
   return (
       <View style={styles.container}>
         <Image source={require('./globe.jpg')}
           resizeMode='cover'
           style={styles.backdrop} >
          <View style={styles.overlay}>
            <Text style={styles.welcome}>
              You input {this.state.zip}
            </Text>
            <Forecast
              main={this.state.forecast.main}
              description={this.state.forecast.description}
              temp={this.state.forecast.temp}
            />
            <TextInput
              style={styles.input}
              returnKeyType="go"
              onSubmitEditing={this._handleTextChange.bind(this)}
             />
          </View>
        </Image>
       </View>
   );
 }
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
 container: {
   flex: 1,
   alignItems: 'center',
   paddingTop: 30,
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 input: {
   fontSize: 20,
   borderWidth: 2,
   height: 40,
 },
 overlay: {
   paddingTop: 5,
   backgroundColor: '#000',
   opacity: 0.5,
   flexDirection: 'column',
   alignItems: 'center',
 }
});

export default demorn;
