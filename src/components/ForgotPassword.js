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
  ScrollView
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonNext, Input } from './common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';
import { createEmail } from '../actions';
import HowlComponent from './HowlComponent';

const {height, width} = Dimensions.get('window');


class ForgotPassword extends HowlComponent {

  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
  {

    console.log("Email is Not Correct");
    this.setState({ validated : false });

    return false;
  }
  else {

    this.setState({ validated : true });
    this.setState({ email : text });
    console.log("Email is Correct");
    console.log(this.state.validated);
  }
}

  emailValidated(){

    let emailState = this.state.validated;
    if (emailState === true){
      Alert.alet('You should receive an Email with instructions');
      //Actions.createPass()
    }else{
      Alert.alert('Please Enter a Valid Email')
    }
  }


  componentWillMount () {
      Keyboard.dismiss();
    }

  componentWillUnmount () {
      Keyboard.dismiss();
    }



constructor(props) {
  super(props)
    this.state = {
      validated : false
    }
  this.emailValidated = this.emailValidated.bind(this);
  this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress(){

        //this.setState({ error: '', loading: true});

        console.log(this.state);
        console.log('state');


        let e_email = this.state.email;


        let user_email = ({'Email':e_email});
        let myemail = ({"Email":"joe@howlalert.com"});
        let ahc = this;

          this.callHowl("ForgotPassword", user_email).then(function(y){
    				console.log(y);
            //Alert.alert(y.ForgotPasswordResult.ResultStatus.StatusMessage);
            Alert.alert(
              'Forgot Password',
              (y.ForgotPasswordResult.ResultStatus.StatusMessage),
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
)

    			});

    }

    endLoading(x){
      console.log('hello');
      console.log(x);

    }


  render () {

    return (
              <ScrollView>
                <View style={styles.container}>
                  <Image style={styles.imageStyle} source={require('../assets/images/ForgotPassword.png')} />
                  <Text style={styles.text}>FORGOT PASSWORD</Text>
                  <Text style={styles.paraStyle}>Enter your email below  to receive your
password reset instructions</Text>
                  <View>
                  <View>
                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                    <TextField
                      label='ENTER EMAIL'
                      style={styles.textStyle}
                      keyboardType={'email-address'}
                      onChangeText={(text) => this.validate(text)}
                      value={this.props.email}
                      />
                    <Icon name="envelope" size={20} color="#999" style={styles.iconStyle}/>
                  </KeyboardAvoidingView>
                </View>

                    </View>
                  <BlueButtonNext onPress={this.onButtonPress}/>
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
          arrowImage:{
            width:110,
            height:40
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
          paraStyle:{
            textAlign:'center'
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
/*
        const mapStateToProps = ({ signup }) => {
          const { emailaddress } = signup;

          return { emailaddress };
        };

        export default connect(mapStateToProps, {
           createEmail
         })(ForgotPassword);*/

         export default ForgotPassword;
