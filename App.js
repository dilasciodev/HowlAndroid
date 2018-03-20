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
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // a middleware
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { autoRehydrate } from 'redux-persist';



export default class App extends Component<{}> {
  componentWillMount() {

  }

  render() {
    const store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(logger)),
      composeWithDevTools(applyMiddleware(ReduxThunk)),
      //composeWithDevTools(autoRehydrate()),
    );
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
