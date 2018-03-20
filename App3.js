/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Router from './src/Router';
import store from './src/store';



export default class App extends React.Component {

  state = {
    isReady: false
  }

  componentDidMount(){
    persistStore(
      store,
      {
      storage: AsyncStorage
      },
      () => {
        this.setState({ isReady: true })
      }
    )
  }

  render() {
    if (!this.state.isReady){
     <View><Text>Loading</Text></View>
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
