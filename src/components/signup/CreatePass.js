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
  AsyncStorage
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonNext, Input } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CodePin from 'react-native-pin-code';
import { connect } from 'react-redux';
import { createPass } from '../../actions';
import PasswordInputText from 'react-native-hide-show-password-input';
import  HowlComponent  from '../HowlComponent';




const {height, width} = Dimensions.get('window');






class CreatePass extends HowlComponent {




  componentWillMount () {
      Keyboard.dismiss();

      let AHC = this;


      let getNewFName = this.returnNewFirstName().then(function(result){
            console.log(result);
            console.log('new firstname');
                AHC.setState({
                firstname:result
            });
          });

          let getNewLName = this.returnNewLastName().then(function(result){
                console.log(result);
                console.log('new lastname');
                    AHC.setState({
                    lastname:result
                });
              });

              let getEmail = this.returnEmail().then(function(result){
                    console.log(result);
                    console.log('new lastname');
                        AHC.setState({
                        email:result
                    });
                  });
    }

    componentWillUnmount () {
      Keyboard.dismiss();
    }


    constructor(props) {

    super(props)

    this.state = {
      password: '',
      firstname:'',
      lastname:'',
      email:'',
      devicetoken:''

    }
      this.checkText = this.checkText.bind(this);

  }

  async returnNewFirstName(){
      return await AsyncStorage.getItem("HOWL_NEW_FIRST_NAME");
  }

  async returnNewLastName(){
      return await AsyncStorage.getItem("HOWL_NEW_LAST_NAME");
  }

  async returnEmail(){
      return await AsyncStorage.getItem("HOWL_NEW_EMAIL");
  }




      async checkText () {

        console.log(this.state);

        let fullpass = this.state.password;
        if(fullpass.length < 6) {

      //  return false;
        Alert.alert('Password Length','Password must be at least 6 characters');

    }else{

      await AsyncStorage.setItem('HOWL_PASSWORD', this.state.password);


      let userObject = {
        "FirstName":this.state.firstname,
        "LastName":this.state.lastname,
        "Email":this.state.email,
        "Password":this.state.password,
        "DeviceToken":''
      }

      let AHC = this;

      this.callHowl("RegisterUser", userObject).then(function(y){
        console.log(y);



        console.log(AHC.state);

        let userToken = y.RegisterUserResult.GetUser.UserToken;
        let userID = y.RegisterUserResult.GetUser.ID;
        let userEmail = y.RegisterUserResult.GetUser.Email;
        let userPassword = AHC.state.password;

         //AsyncStorage.setItem('HOWL_WCF_JWT', userToken );
         //AsyncStorage.setItem('HOWL_ID', userID);


      let x = AHC.loginUser({"username":userEmail, "password":userPassword}, function(){
         console.log('yadsofjaksl')
       });

      //  Actions.confirmPhone();

      });
      //<param name="FirstName"></param>
      /// <param name="LastName"></param>
      /// <param name="Email"></param>
      /// <param name="Password"></param>
      /// <param name="DeviceToken"></param>
        //Actions.verifyPhone();

    }

       }






  render () {

    return (
              <ScrollView>
                <View style={styles.container}>
                  <Image style={styles.imageStyle} source={require('../../assets/images/introPass.png')} />
                  <Text style={styles.text}>YOUR PASSWORD</Text>
                  <View>
                  <View>


                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                    <TextField
                      label='PASSWORD'
                      style={styles.textStyle}
                      onChangeText={(password) => this.setState({password})}

                      />
                    <Icon name="lock" size={25} color="#999" style={styles.iconStyle}/>
                  </KeyboardAvoidingView>






                </View>

                    </View>
                  <BlueButtonNext onPress={this.checkText}/>
                </View>
              </ScrollView>
            );
          }
        }

        const styles = {
          input:{
            color:'#333'
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
          inputStyle:{
            color:'#333',
            fontSize:16,
            labelColor:'#333'
          },
          wrapperStyle:{

            borderColor:'#999',
            marginBottom:15
          },
          iconStyle:{
            position:'absolute',
            right:0,
            top:10
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

      export default CreatePass;
