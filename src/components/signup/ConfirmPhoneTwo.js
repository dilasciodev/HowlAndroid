import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
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
import { createCode } from '../../actions';
import CodeInput from 'react-native-code-input';
import { Form, TextValidator } from 'react-native-validator-form';
import AuthorizedHowlComponent from '../AuthorizedHowlComponent';



const {height, width} = Dimensions.get('window');


class ConfirmPhoneTwo extends AuthorizedHowlComponent {

  componentWillMount () {
      super.componentWillMount();
      Keyboard.dismiss();
      Actions.refresh({key: 'drawer', open: false });

      let AHC = this;
      let packEx = this.returnUserID().then(function(result){
        console.log(result);
        AHC.setState({
          mainuserid:result
          });
        });

        let myPhone = this.returnPhone().then(function(result){
          console.log(result);
          AHC.setState({
            mobilenumber:result
            });
          });

          let myConfirmation = this.returnConfirmation().then(function(result){
            console.log(result);
            AHC.setState({
              mobileconfirmation:result
              });
            });


      //let packEx = {'UserID':49}
      //this.authorizedHowlCall("AddEditUserHomeAddress", packEx, this.getUserStuff);
      //var k = AsyncStorage.getItem('a_userid');
      //console.log(k);
      //this.setState({"cancelcode":k});

    }


    async returnPhone(){
        return await AsyncStorage.getItem("HOWL_PHONE");
    }

    async returnConfirmation(){
        return await AsyncStorage.getItem("HOWL_CONFIRMATION");
    }




    componentWillUnmount () {
      Keyboard.dismiss()
    }


  constructor(props) {
    super(props)
      this.state = {
        code: '',
        cancelcode:'',
        validated: false,
        mainuserid:'',
        mobilenumber:'',
        mobileconfirmation:''

      }

      this.setValidation = this.setValidation.bind(this);
      this.confirmNumber = this.confirmNumber.bind(this);
      this.finishConfirm = this.finishConfirm.bind(this);
    }

    setValidation(){
      this.setState({validated:true});
      console.log(this.state);
    //  Actions.enterNewCancel({ type:'replace' });
    //  Actions.popTo('enterNewCancel');

    //Actions.replace('enterNewCancel');

    }



    _onFulfill1 = (code) => {

      console.log(this.state);
      let original = this.state.mobileconfirmation;
      const isValid = code === original
      //const isValid = code;
      console.log(code);
      //this.props.createCode(code);
      //Alert.alert("It's gotta be 4 digits dude!!!");

      if(!isValid) this.refs.codeInputRef1.clear();
      if(isValid) this.confirmNumber();


      Alert.alert(isValid ? 'Successful!' : 'This code does not match.!');

    }

    confirmNumber(){

      //<param name="UserID"></param>
     /// <param name="UserToken"></param>
     /// <param name="MobilePhoneConfirmationCode"></param>

      let userObject = {
        "UserID":this.state.mainuserid,
        "MobilePhoneConfirmationCode":this.state.mobileconfirmation,

      }

      this.authorizedHowlCall("ValidateMobilePhoneConfirmationCode", userObject, this.finishConfirm);

    }

    finishConfirm(x){
      console.log(x);
      Alert.alert('Phone Number Valid',
        'You Have valdiated your phone number.',[
      {text: 'OK', onPress: () => { Actions.startPack() }},
    ])
    }

    onCodeChange(text){
      //this.props.createCode(text);
    }



  render () {

    return (

                <ScrollView>
                  <View style={styles.container}>
                  <Text style={styles.text}>ENTER 4-DIGIT CODE</Text>
                  <Text style={styles.smallText}>
                  We sent a code to {this.state.mobilenumber}. Enter the code in that message</Text>
                  <View>
                  <View>

                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>

                  <CodeInput
                    ref='codeInputRef1'
                    borderType='underline'
                    codeLength={4}
                    space={35}
                    inputPosition='center'
                    activeColor='#0091cd'
                    onChangeText={this.onCodeChange.bind(this)}
                    inactiveColor='#999'
                    autoFocus={false}
                    codeInputStyle={{ fontWeight: '800', fontSize:30 }}
                    onFulfill={this._onFulfill1}
         />

                  </KeyboardAvoidingView>

                </View>

                    </View>

                  </View>



                </ScrollView>

            );
          }
        }

const styles = {

  iconStyle:{
    position:'absolute',
    right:0,
    top:30
  },
  mainContainer:{

  },
  smallText:{
    textAlign:'center'
  },

  imageStyle:{
    width:180,
    height:180,
    marginBottom:20,
    alignSelf:'center'
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

  buttonStyle:{
    paddingVertical: 140
  },

   container: {
     flex            : 1,
  justifyContent  : 'center',
  backgroundColor : '#F5FCFF',
  paddingLeft:30,
  paddingRight:30,
  backgroundColor:'#fff',
  paddingTop:65,
  paddingBottom:65
  },
  blur: {
    position        : 'absolute',
    justifyContent  : 'center',
    alignItems      : 'center',
    top             : 0,
    left            : 0,
    width           : width,
    height          : height
  },
  avoidingView: {

  },

  success: {
    fontSize    : 20,
    color       : 'green',
    textAlign   : 'center'
  }
}



 export default ConfirmPhoneTwo;
