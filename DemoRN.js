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

const API_KEY = 'ba8ef5ff2050ddec43f2f7a53d944c9b';

class demorn extends Component {
  constructor(props){
    super(props);
    this.state = {
      zip: '',
      forecast: {}
    };
  }

  _handleTextChange(event) {
    var zip = event.nativeEvent.text;
    this.setState({zip: zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=imperial&APPID=' + API_KEY)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

 render() {
   return (
       <View style={styles.container}>
         <Image source={require('./globe.jpg')}
           resizeMode='cover'
           style={styles.backdrop} >
          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                Current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput
                  style={[styles.zipCode, styles.mainText]}
                  returnKeyType="go"
                  onSubmitEditing={this._handleTextChange.bind(this)}
                 />
              </View>
            </View>
            <Forecast
              main={this.state.forecast.main}
              description={this.state.forecast.description}
              temp={this.state.forecast.temp}
            />
          </View>
        </Image>
       </View>
   );
 }
}
const baseFontSize = 16;
const styles = StyleSheet.create({
  container: {
flex: 1,
alignItems: 'center',
paddingTop: 30
},
backdrop: {
flex: 1,
flexDirection: 'column'
},
overlay: {
paddingTop: 5,
backgroundColor: '#000000',
opacity: 0.5,
flexDirection: 'column',
alignItems: 'center'
},
row: {
flex: 1,
flexDirection: 'row',
flexWrap: 'wrap',
alignItems: 'flex-start',
paddingTop: 100
},
zipContainer: {
flex: 1,
borderBottomColor: '#DDDDDD',
borderBottomWidth: 1,
marginLeft: 5,
marginTop: 3
},
zipCode: {
  width: 0,
height: baseFontSize,
},
mainText: {
flex: 1,
fontSize: baseFontSize,
color: '#FFFFFF',
width: 50
}
});

export default demorn;
