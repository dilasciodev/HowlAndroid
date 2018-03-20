import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Scene, Router, Actions, ActionConst, Drawer, TouchableHighlight } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton } from './common';
import SettingsPanel from './SettingsPanel';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';



class SettingsMain extends AuthorizedHowlComponent {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
  }

  state = {
    toggle: false
  };


  render() {
	   return (
       <ScrollView>
        <View style={styles.container}>
          <SettingsPanel />
        </View>
      </ScrollView>
 );
}
}

const styles = {

  container:{
    flex            : 1,
    justifyContent  : 'center',
    backgroundColor : '#F5FCFF',
    paddingLeft:30,
    paddingRight:30,
    backgroundColor:'#fff',
    paddingTop:65,
    paddingBottom:65
  }


}

export default SettingsMain;
