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
import Spinner from 'react-native-loading-spinner-overlay';



const {height, width} = Dimensions.get('window');


class EnterNewCancel extends AuthorizedHowlComponent {

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



      //let packEx = {'UserID':49}
      //this.authorizedHowlCall("AddEditUserHomeAddress", packEx, this.getUserStuff);
      //var k = AsyncStorage.getItem('a_userid');
      //console.log(k);
      //this.setState({"cancelcode":k});

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
        isLoading:false

      }

      this.setValidation = this.setValidation.bind(this);
      this.endNewCode = this.endNewCode.bind(this);
    }

    setValidation(){
      this.setState({validated:true});
      console.log(this.state);

    }



    _onFulfill1 = (code) => {

      //console.log(this.state);
      //let original = this.state.cancelcode;
      //const isValid = code === original
      //const isValid = code;
      //console.log(code);

      this.setState({
        cancelcode:code,
        isLoading:true
      });

      let e_userobject = {
        "UserID":this.state.mainuserid,
        "CancellationCode":code
      }

      AsyncStorage.setItem("HOWL_CANCEL_CODE", code);
      console.log('doing stuff');

      this.authorizedHowlCall("SetCancellationCode", e_userobject, this.endNewCode);
      //this.props.createCode(code);
      //Alert.alert("It's gotta be 4 digits dude!!!");

      //if(!isValid) this.refs.codeInputRef1.clear();
      //if(isValid) this.setValidation();


      //Alert.alert(isValid ? 'Successful!' : 'This code does not match.!');

    }

    endNewCode(x){
      console.log(x);
      this.setState({
        isLoading:false
      });
      Alert.alert('Cancellation Code Changed',
      'You Have changed your cancellation code.',[
    {text: 'OK', onPress: () => { Actions.pop(); setTimeout(()=> Actions.refresh(), 500) }},
  ])
    }

  onCodeChange(text){
    //this.props.createCode(text);
  }

  render () {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 65}}>
          <Spinner overlayColor={"rgba(6, 62, 91, 1)"} animation={'fade'} visible={true} textContent={"Loading..."} size={'large'} color={'#fff'} textStyle={{color: '#fff'}} />
        </View>
      );
    }

    return (

                <ScrollView>
                  <View style={styles.container}>
                  <Text style={styles.text}>ENTER NEW CANCELLATION CODE</Text>
                  <Text style={styles.smallText}></Text>
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



 export default EnterNewCancel;
