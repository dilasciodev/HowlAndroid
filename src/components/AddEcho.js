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
import { Button, BlueButtonNext, Input, Spinner } from './common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/Ionicons';
import  AuthorizedHowlComponent  from './AuthorizedHowlComponent';

import { connect } from 'react-redux';




const {height, width} = Dimensions.get('window');



class AddEcho extends AuthorizedHowlComponent {




  componentWillMount () {
      Keyboard.dismiss();
    }

    componentWillUnmount () {
      Keyboard.dismiss()
    }



onNameChange(text){
  this.props.createName(text);
  }

onLastNameChange(text){
  this.props.createLastName(text);
}

constructor(props) {
  super(props)
    this.state = {
      validated: false,
      firstname: '',
      lastname:''
    }
    this.checkText = this.checkText.bind(this);
  }

async checkText () {


  console.log('alskjlksj');
  //console.log(this.props);
  //const firstN   = this.props.firstname ;
  //const lastN   = this.props.lastname ;

  console.log(this.state);

  this.setState({
    firstname: this.state.firstname,
    lastname: this.state.lastname
  });

  console.log(this.state);


  if(this.state.firstname =='' || this.state.lastname  == '' ){
      Alert.alert("Please Enter A First and Last Name");
    }
    else{
      Actions.createEmail();
      	await AsyncStorage.setItem('HOWL_NEW_FIRST_NAME', this.state.firstname);
        await AsyncStorage.setItem('HOWL_NEW_LAST_NAME', this.state.lastname);
    }
  }



  render () {

    return (

                <View style={styles.container}>

                  <Image style={styles.imageStyle} source={require('../assets/images/echo.png')} />
                    <Text style={styles.text}>CONNECT YOUR ECHO DEVICE</Text>
                  <View>

                  <View>
                  <Text style={styles.textEcho}>01. Download the Alexa App</Text>
                  <Text style={styles.textEcho}>02. From the left navigation panel, select Skills</Text>
                  <Text style={styles.textEcho}>03. Use the search bar and enter HOWL Alert</Text>
                  <Text style={styles.textEcho}>04. Link your HOWL Alert account</Text>
                  </View>


                    </View>




                </View>


            );
          }
        }

const styles = {
  textEcho:{
    textAlign:'center',
    marginBottom:10
  },
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

export default AddEcho;
