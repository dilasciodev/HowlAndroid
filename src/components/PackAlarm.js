import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {  BlueButtonFull, Input, LightBlue, DarkBlue, CreateButton } from './common';
import { Scene, Router, Actions } from 'react-native-router-flux';



class PackAlarm extends Component {

  componentWillMount() {

  }

  async returnFirstName(){
      return this.returnAsync('a_cancelcode');
  }

  

  makeNineCall(){

  }

  render () {

    return (

                <View style={styles.outerContainer}>

                <View style={styles.cameraBlock}>
                </View>


                <Text style={styles.redText}>
                Your Emergency Contacts Have Been Notified</Text>

                <View style={styles.container}>



                <TouchableOpacity onPress={() => Actions.enterCancel()} style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>CANCEL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.makeNineCall.bind(this)} style={styles.buttonStyle2}>
                  <Text style={styles.textStyle}>CALL 911</Text>
                </TouchableOpacity>

                </View>

                </View>

            );
          }
        }

const styles = {

  cameraBlock:{
    height:300,
    backgroundColor:'#000',
    marginBottom:30
  },


  textStyle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 16,
    paddingBottom: 10,
    textAlign: 'center'
  },
  redText:{
    fontSize:20,
    color:'#e4322b',
    textAlign:'center',
    marginBottom:20,
    paddingLeft:40,
    paddingRight:40
  },
  buttonStyle: {
    alignSelf:'stretch',
    backgroundColor: '#00a3d8',
    borderColor: '#00a3d8',
    borderRadius: 30,
    borderWidth: 1,
    height:60,
    overflow:'hidden',
    marginTop:20,
    marginLeft:0,
    flex:1,
    marginRight:5
  },
  buttonStyle2: {
    alignSelf:'stretch',
    backgroundColor: '#063e5b',
    borderColor: '#063e5b',
    borderRadius: 30,
    borderWidth: 1,
    height:60,
    overflow:'hidden',
    marginTop:20,
    marginLeft:0,
    flex:1
  },
  outerContainer:{
    flex: 1,
    paddingLeft:0,
    paddingRight:0,
    paddingTop:65
  },
  container:{
    flex: 1,
    paddingLeft:40,
    paddingRight:40,
    flexDirection:'row'

  },
  iconStyle:{
    position:'absolute',
    right:0,
    top:30
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
  }
}

export default PackAlarm;
