import React, { Component } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import AuthorizedHowlComponent from '../AuthorizedHowlComponent';
import Switch from 'react-native-switch-pro'



class Notifications extends AuthorizedHowlComponent {


  state={
   value: false
 }

  render() {
    return (
    <View style={styles.container}>


      <View>
      <View style={styles.topStyle}>
      <Text style={styles.headerStyle}>Push Notifications</Text>
      </View>
      <View style={styles.boxStyle}>
      <View>
      <Text style={styles.headerStyleTwo}>Camera Alerts</Text>
      <Text style={styles.paragraphStyle}>Would you like to receive camera alerts via push notifications?</Text>
      </View>
      <View>
      <Switch
        defaultValue={true}
        style={{marginTop: 20}}
        width={60}
        height={30}
        backgroundActive='#073e5d'
        circleColorActive='#67c3ef'
        />
      </View>
      </View>
      </View>

      <View>
      <View style={styles.topStyle}>
      <Text style={styles.headerStyle}>Text Message Notifications</Text>
      </View>
      <View>
      <View style={styles.boxStyle}>
      <Text style={styles.headerStyleTwo}>Camera Alerts</Text>
      <Text style={styles.paragraphStyle}>Would you like to receive camera alerts via push notifications?</Text>

      <Switch
        defaultValue={true}
        style={{marginTop: 20}}
        width={60}
        height={30}
        backgroundActive='#073e5d'
        circleColorActive='#67c3ef'

        />
      </View>
      </View>
      </View>


    </View>
    );
  }
}

const styles = {
  container:{
     flex            : 1,
     backgroundColor : '#F5FCFF',
     paddingLeft:30,
     paddingRight:30,
     backgroundColor:'#fff',
     paddingTop:65,
     paddingBottom:30
  },
  headerStyle:{
    fontSize:18
  },
  boxStyle:{
    borderRadius: 1,
    borderColor: '#dadada',
    borderWidth:1,
    marginTop:20,
    marginLeft:5,
    marginBottom:5,
    marginRight:5,
    paddingTop:15,
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:15

  },
  topStyle:{
    flex:1,
    marginBottom:15,
    marginTop:15
  },
  wrapper: {
    marginTop:0,
    paddingTop:0
  },

  text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:'center',
    paddingRight:10,
    paddingLeft:10,
    marginBottom:20
  },
  text2:{
    color:'#6d6e70',
    fontSize:14,
    textAlign:'center',
    paddingRight:40,
    paddingLeft:40,
    lineHeight:30
  },
  buttonStyle:{
    paddingVertical: 140
  },
  textStyle:{

  },
  spinnerStyle:{
    marginTop:40
  }
}


export default Notifications;
