import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Forecast extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View>
        <Text style={styles.bigText}>
          {this.props.main}
        </Text>
        <Text style={styles.mainText}>
          Current conditions: {this.props.description}
        </Text>
        <Text style={styles.bigText}>
          {this.props.temp} ºF
        </Text>
      </View>
    )
  }
}

const color = '#FFF';
const fontSize = 20;
const styles = StyleSheet.create({
  bigText: {
    flex: 1,
    fontSize,
    textAlign: 'center',
    margin: 10,
    color,
  },
  mainText: {
    flex: 1,
    fontSize: fontSize - 4,
    margin: 10,
    textAlign: 'center',
    color,
  }
})

export default Forecast;
