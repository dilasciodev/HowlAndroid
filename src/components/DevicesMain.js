import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton, BlueButton } from './common';


class DevicesMain extends Component {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
  }
  
  render () {
    return (
      <View>
       <Text
        style={{
          marginTop:100,
          textAlign:'center',
          paddingLeft:40,
          paddingRight:40
        }}

       >You currently have no devices connected. Connect one now</Text>
       <View style={{ marginTop:50, alignSelf:'center'}}>
        <BlueButton
          onPress={() => Actions.addDevices()}
        >ACTIVATE</BlueButton>
       </View>
      </View>
    );
  }
}

export default DevicesMain;
