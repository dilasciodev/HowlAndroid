import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const timer = require('react-native-timer');

class PackTimer extends Component {

  state = {
    showMsg: false
  };

  componentWillUnmount() {
    timer.clearTimeout(this);
  }

  showMsg() {
    this.setState({showMsg: true}, () => timer.setTimeout(
      this, 'hideMsg', () => this.setState({showMsg: false}), 3000
    ));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => requestAnimationFrame(() => this.showMsg())}>
          <Text>Press Me</Text>
        </TouchableOpacity>

        {this.state.showMsg ? (
          <Text>Hello!!</Text>
        ) : (
          null
        )}
      </View>
    );
  }
}

export default PackTimer;
