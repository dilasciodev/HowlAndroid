import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonNext, Input } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AuthorizedHowlComponent from '../AuthorizedHowlComponent';



class VoiceWarning extends AuthorizedHowlComponent {


    constructor(props) {

    super(props)

    this.state = {

    email:'',
    password:''


    }
      this.checkText = this.checkText.bind(this);

  }


  componentWillMount() {

    let AHC = this;

    let getEmail = this.returnEmail().then(function(result){
              AHC.setState({
              email:result
          });
        });

        let getPass = this.returnPass().then(function(result){
                  AHC.setState({
                  password:result
              });
            });

  }

  async returnEmail(){
      return await AsyncStorage.getItem("HOWL_NEW_EMAIL");
  }
  async returnPass(){
      return await AsyncStorage.getItem("HOWL_PASSWORD");
  }



      checkText () {

        let AHC = this;

        let x = AHC.loginUser({"username":this.state.email, "password":this.state.password}, function(){
           console.log('yadsofjaksl')
         });



       }



  render () {

    return (

                <View style={styles.slide1}>
                  <Image style={styles.imageStyle} source={require('../../assets/images/introEmail.png')} />
                  <Text style={styles.text}>WARNING</Text>
                  <Text style={styles.smallText}>Voice-activated alerts may not fun ction in the event of a power or broadband outage. other
                  Wifi connectivity issues, or if your Amazon Echo, Google Home, or other voice-activated device misunderstands your request.
                  In this even during and emergency, please activate alerts from your mobile app or call 911 directly.</Text>
                  <View>


                    </View>
                  <BlueButtonNext onPress={this.checkText}/>
                </View>

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

export default VoiceWarning;
