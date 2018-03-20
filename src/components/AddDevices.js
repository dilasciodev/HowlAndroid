import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Button, BlueButton } from './common';
import { Scene, Router, Actions } from 'react-native-router-flux';



class AddDevices extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>

        <View style={ styles.deviceStyle}>
          <View><Image style={styles.homeStyle} source={require('../assets/images/echo.png')} /></View>
          <View style={{}}><Text style={{textAlign:'left',fontSize:18, marginTop:15}}>Amazon Echo</Text></View>
          <View style={{marginRight:20, marginTop:7}}><BlueButton onPress={() => Actions.addEcho()} style={styles.blueButton}>ACTIVATE</BlueButton></View>
        </View>

        <View style={ styles.deviceStyle}>
          <View><Image style={styles.homeStyle} source={require('../assets/images/home.png')} /></View>
          <View style={{}}><Text style={{textAlign:'left',fontSize:18, marginTop:15}}>Google Home</Text></View>
          <View style={{marginRight:20, marginTop:7}}><BlueButton onPress={() => Actions.addHome()}>ACTIVATE</BlueButton></View>
        </View>

      </View>

    );
  }
}

const styles = {
  mainContainer:{
    paddingTop:65
  },
  homeStyle:{
    width:60,
    height:60,
    marginLeft:20,
    marginRight:20,
  },
  deviceStyle:{
    flex: 1,
    flexDirection: 'row',
    paddingTop:30,
    justifyContent: 'space-between',
    marginBottom:50
  }
}

export default AddDevices;
