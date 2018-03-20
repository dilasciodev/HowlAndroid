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


class CreateFakeCode extends AuthorizedHowlComponent {

  componentWillMount () {
      Keyboard.dismiss();

      let AHC = this;


      let getUserID = this.returnUserID().then(function(result){
        console.log(result);
        console.log('this is the new id');
        AHC.setState({
          mainuserid:result
          })
        });


        let getCancel = this.returnCancel().then(function(result){

          AHC.setState({
            cancelcode:result
            })
          });

    }

    componentWillUnmount () {
      Keyboard.dismiss()
    }


  constructor(props) {
    super(props)
      this.state = {
        code: '',
        name : "My name",
        email: "titi@gmail.com",
        number:"56",
        date: "2017-03-01",
        mynewcode:'',
        mainuserid:'',
        cancelcode:''
      }
    }


    async returnUserID(){
        return this.returnAsync('HOWL_ID');
    }

    async returnCancel(){
        return this.returnAsync('HOWL_CANCEL_CODE');
    }


    _onFulfill1 = (code) => {




      //const isValid = code === '1111'
      this.setState({
        mynewcode:code
      })

      console.log(code);
      this.props.createCode(code);



    }

    checkText(){

      let thecancel = this.state.cancelcode;
      let thesilence = this.state.silencecode;

      if(thecancel === thesilence){
        Alert.alert('Matching Codes','Your cancel code cannot be the same as your silence code.')
      }else{
        let userObject = {
          "UserID":this.state.mainuserid,
          "SilenceCode":this.state.mynewcode
        }
        let AHC = this;

        AHC.authorizedHowlCall("SetSilenceCode", userObject, AHC.cancelFinish);

      }



    }

    cancelFinish(){
      Alert.alert('Silence Code Added',
        'You have created your silence code.',[
      {text: 'OK', onPress: () => { Actions.voiceWarning() }},
     ])
    }

  onCodeChange(text){
    this.props.createCode(text);
  }

  render () {

    return (

                <ScrollView>
                  <View style={styles.container}>
                  <Image style={styles.imageStyle} source={require('../../assets/images/cancelcode.png')} />
                  <Text style={styles.text}>CREATE SILENT ALARM (FAKE CANCELLATION) CODE</Text>
                  <Text style={styles.smallText}>Speak your Silent Alarrm "Fake Cancellation" Code to your smart hub (or type it into your app) if a perpatrato/threat causes you to cancel the alert. The alarm will silence. However your alert will proceed. "Be sure to make this a code you will remember"</Text>
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
                    onFulfill={this._onFulfill1.bind(this)}
         />

                  </KeyboardAvoidingView>

                </View>

                    </View>
                  <BlueButtonNext onPress={this.checkText.bind(this)}/>
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


const mapStateToProps = ({ signup }) => {
  const { createcode } = signup;

  return { createcode };
};

export default connect(mapStateToProps, {
   createCode
 })(CreateFakeCode);
