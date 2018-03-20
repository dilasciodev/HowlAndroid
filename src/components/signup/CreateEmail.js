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
import { connect } from 'react-redux';
import { createEmail } from '../../actions';
import  HowlComponent  from '../HowlComponent';

const {height, width} = Dimensions.get('window');



class CreateEmail extends HowlComponent {

  validate = (text) => {
    console.log(text);
    let reg = /^[A-Za-z0-9_+]+([\.-]?[A-Za-z0-9_+]+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(text) === false)
  {

    console.log("Email is Not Correct");
    this.setState({ validated : false });
    return false;
  }
  else {

    this.setState({ validated : true });
    console.log("Email is Correct");
    //this.props.createEmail(text);
    this.setState({
      email:text
    })
    console.log(this.state.validated);
  }
}

  async emailValidated(){

   console.log(this.state)


    if (this.state.validated){

    //  Actions.createPass();

      console.log('getit')

      let AHC = this;

      let userObject = {
        "Email":this.state.email
      }

      AHC.callHowl("IsUserEmailExist", userObject).then(function(y){
        console.log(y);
        let status = y.IsUserEmailExistResult.ResultStatus.Status
        if(status == "1"){
          Alert.alert(
            'Notice',y.IsUserEmailExistResult.ResultStatus.StatusMessage
          )
        }else{
AHC.saveEmail();

      }
      });


    }else{
      Alert.alert('Please Enter a Valid Email')
    }
  }


async saveEmail(){
  await AsyncStorage.setItem('HOWL_NEW_EMAIL', this.state.email);
    Actions.createPass();
}


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
                    firstlastname:result
                });
              });

    }

  componentWillUnmount () {
      Keyboard.dismiss();
    }

    async returnNewFirstName(){
        return await AsyncStorage.getItem("HOWL_NEW_FIRST_NAME");
    }

    async returnNewLastName(){
        return await AsyncStorage.getItem("HOWL_NEW_LAST_NAME");
    }

  onEmailChange(text){
    this.props.createEmail(text);
  }



constructor(props) {
  super(props)
    this.state = {
      validated : false,
      isLoading: false
    }
  this.emailValidated = this.emailValidated.bind(this);
  this.saveEmail = this.saveEmail.bind(this);

    }





  render () {

    return (
              <ScrollView>
                <View style={styles.container}>
                  <Image style={styles.imageStyle} source={require('../../assets/images/introEmail.png')} />
                  <Text style={styles.text}>YOUR EMAIL</Text>
                  <View>
                  <View>
                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                    <TextField
                      label='EMAIL ADDRESS'
                      style={styles.textStyle}
                      keyboardType={'email-address'}
                      onChangeText={(text) => this.validate(text)}

                      />
                    <Icon name="envelope" size={20} color="#999" style={styles.iconStyle}/>
                  </KeyboardAvoidingView>
                </View>

                    </View>
                  <BlueButtonNext onPress={this.emailValidated}/>
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
export default CreateEmail;
