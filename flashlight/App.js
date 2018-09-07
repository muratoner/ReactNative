/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import RNFlash from 'react-native-flash';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)

    this.state = {
      openedFlashlight: false
    }
  }

  componentDidMount(){
    
  }

  toggleFlashlight(){
    if (!this.state.openedFlashlight) {
      RNFlash.turnOnFlash(); // turn on flash
    } else {
		  RNFlash.turnOffFlash(); // turn off flash
    }
    this.setState({ openedFlashlight: !this.state.openedFlashlight })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.toggleFlashlight()} title='Aç/Kapa'></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
