import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton, BlueButtonFull } from './common';


class CameraMain extends Component {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
  }

  render () {
    return (
      <ScrollView>

        <View style={styles.greyBlock}>
          <Image style={styles.greyStyle} source={require('../assets/images/greyPlus.png')} />
          <Text style={styles.fontStyle}>Touch here to add a camera</Text>
        </View>

        <View>
          <Image style={styles.illustStyle} source={require('../assets/images/cameraillustration.png')} />
          <Text style={styles.fontStyle}>Dont have a camera?</Text>
          <View style={{marginRight:20, marginTop:0}}><BlueButtonFull>Buy Camera</BlueButtonFull></View>
        </View>

      </ScrollView>
    );
  }
}


const styles = {
  illustStyle:{
    width:100,
    height:150,
    alignSelf:'center'
  },
  greyBlock:{
    backgroundColor: '#ededed',
    marginBottom:50,
    paddingTop:90,
    paddingBottom:90
  },
  fontStyle:{
    textAlign:'center',
    color:'#00506e',
    marginTop:20
  },
  greyStyle:{
    width:50,
    height:10,
    paddingTop:50,
    alignSelf:'center'
  }
}

export default CameraMain;
