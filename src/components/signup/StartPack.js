import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  ScrollView,
  TextInput,
  AsyncStorage
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonNext, Input, Spinner } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/Ionicons';
import  AuthorizedHowlComponent  from '../AuthorizedHowlComponent';

import { connect } from 'react-redux';
import { createName, createLastName } from '../../actions';



const {height, width} = Dimensions.get('window');



class StartPack extends AuthorizedHowlComponent {



  componentWillMount () {
      Keyboard.dismiss();
    }

    componentWillUnmount () {
      Keyboard.dismiss()
    }


constructor(props) {
  super(props)
    this.state = {


    }
    this.checkText = this.checkText.bind(this);
  }

async checkText () {
  Actions.addFirstPack();
  }



  render () {

    return (
              <ScrollView>
                <View style={styles.container}>

                  <Image style={styles.imageStyle} source={require('../../assets/images/introWolf.png')} />
                    <Text style={styles.text}>CREATE PACK</Text>
                    <Text style={styles.smallText}>Your trusted network of family, friends, neighbors, coworkers, classmates, etc. Who are more likely to get to you quickly in an emergency.</Text>
                  <View>
                  <View>

                  </View>
                    </View>

                  <BlueButtonNext onPress={this.checkText}/>



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
     paddingBottom:30
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
  imageStyle:{
    width:180,
    height:180,
    marginBottom:20,
    alignSelf:'center'
  },
  slide1: {

    flex: 1,
    justifyContent: 'flex-start',

    alignSelf: 'stretch',
    paddingTop:80,
    paddingLeft:40,
    paddingRight:40

  },
  slide2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:40

  },
  slide3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:40
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

  }
}

export default StartPack;
