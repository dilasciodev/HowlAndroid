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
import { Button, BlueButtonNext, Input } from './common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import CodePin from 'react-native-pin-code';
import { connect } from 'react-redux';
import { createCode } from '../actions';
import CodeInput from 'react-native-code-input';
import { Form, TextValidator } from 'react-native-validator-form';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';



const {height, width} = Dimensions.get('window');


class EnterCancel extends AuthorizedHowlComponent {

  componentWillMount () {
      super.componentWillMount();
      Keyboard.dismiss();
      Actions.refresh({key: 'drawer', open: false });

      let AHC = this;

      let get_USERID = this.returnUserID().then(function(result){
        console.log(result);
        AHC.setState({
          userid:result
        });
        //let packId = ({"UserID":result});
        //AHC.authorizedHowlCall("GetUserPack", packId, AHC.endLoading);
        });

      let get_CANCEL = this.getCancel().then(function(result){
        AHC.setState({
          cancelcode:result
        });
        console.log(result);
        });

      let get_ALERTID = this.getAlertID().then(function(result){
        AHC.setState({
          alertid:result
        });
        console.log(result);
        });

    }

    async getCancel(){
        return this.returnAsync('HOWL_CANCEL_CODE');
    }
    async getAlertID(){
        return this.returnAsync('a_alertid');
    }

    getUserStuff(x){



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
        userid:''

      }
      this.getUserStuff = this.getUserStuff.bind(this);
      this.setValidation = this.setValidation.bind(this);
      this.emergencyCancel = this.emergencyCancel.bind(this);
    }

    setValidation(){
      this.setState({validated:true});
      console.log(this.state);

      let updateEmergency = {
        'UserID':this.state.userid,
        'UserAlertID':this.state.alertid,
        'Stauts':2
            }

      this.authorizedHowlCall("UpdateEmergencyAlert", updateEmergency, this.emergencyCancel);

    }

    emergencyCancel(x){
      console.log(x);
      Actions.pop({popNum: 2});
    //Actions.homeScreen();
//Actions.push('homeScreen', { back: false });
    }



    _onFulfill1 = (code) => {

      console.log(this.state);
      let original = this.state.cancelcode;
      const isValid = code === original
      //const isValid = code;
      console.log(code);
      //this.props.createCode(code);
      //Alert.alert("It's gotta be 4 digits dude!!!");

      if(!isValid) this.refs.codeInputRef1.clear();
      if(isValid) this.setValidation();


      Alert.alert(isValid ? 'Alert is Cancelled!' : 'Incorrect Code!');

    }

  onCodeChange(text){
    //this.props.createCode(text);
  }

  render () {

    return (

                <ScrollView>
                  <View style={styles.container}>
                  <Text style={styles.text}>ENTER YOUR CANCELLATION CODE</Text>
                  <Text style={styles.smallText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget nisi nibh. Etiam mattis pellentesque dolor sit amet porta. Sed mattis tempor augue, non finibus nunc fringilla non. Aenean vitae justo eget erat aliquet egestas</Text>
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

/*
const mapStateToProps = ({ setting }) => {
  const { changecode } = setting;

  return { changecode };
};*/
/*
export default connect(mapStateToProps, {
   createCode
 })(ChangeCancel);*/

 export default EnterCancel;
