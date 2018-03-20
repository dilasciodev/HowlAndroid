import React, { Component } from 'react';
import AuthorizedHowlComponent from '../AuthorizedHowlComponent';
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
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, BlueButtonSave, Input } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
import PhoneInput from 'react-native-phone-input'




const {height, width} = Dimensions.get('window');



class ConfirmPhone extends AuthorizedHowlComponent {


  componentWillMount () {

      Keyboard.dismiss();

      Actions.refresh({key: 'drawer', open: false });
      this._value = 0;
      //this.state.pressAction.addListener((v) => this._value = v.value);
      let AHC = this;

      let getUserID = this.returnUserID().then(function(result){
        console.log(result);
        console.log('this is the new id');
        AHC.setState({
          mainuserid:result
          })
        });
        let getUserToken = this.returnUserToken().then(function(result){
          console.log(result);
          AHC.setState({
            mainusertoken:result
            })
          });

          let getEmail = this.returnEmail().then(function(result){
            console.log(result);
            AHC.setState({
              mainemail:result
              })
            });

            let getPassword = this.returnPassword().then(function(result){
              console.log(result);
              AHC.setState({
                mainpassword:result
                })
              });

    }

    async returnUserID(){
  			return this.returnAsync('HOWL_ID');
  	}
    async returnUserToken(){
  			return this.returnAsync('HOWL_WCF_JWT');
  	}

    async returnEmail(){
        return await AsyncStorage.getItem("HOWL_NEW_EMAIL");
    }
    async returnPassword(){
        return await AsyncStorage.getItem("HOWL_PASSWORD");
    }


    componentWillUnmount () {
      Keyboard.dismiss()
    }




constructor(props) {
  super(props)
    this.state = {
      validated: false,
      loading: false,
      error: '',
      mainuserid:'',
      mainusertoken:'',
      mobilenumber:'',
      mobilecountry:'1',
      isLoading:false,
      valid: '',
      type: '',
      value: '',
      country:'',
      mainemail:'',
      mainpassword:''
    }

    this.newPhone = this.newPhone.bind(this);
    this.newPhoneFinish = this.newPhoneFinish.bind(this);
    this.updateInfo = this.updateInfo.bind(this);



  }

  renderButton() {
    if (this.state.loading) {
       return <View style={styles.spinnerStyle}><Spinner size="large" /></View>
    }

    return (
      <BlueButtonSave onPress={this.updateInfo}/>
    );
  }

  newPhone(){

    this.setState({
      //isLoading:true
    })

    let AHC = this;
    let userObject = {
      'UserID':this.state.mainuserid,
      'MobilePhoneCountryCode':'1',
      'UserToken':this.state.mainusertoken,
      'MobilePhoneNumber':this.state.mobilenumber
    }
  //AHC.callHowl("ConfirmYourPhoneNumber", userObject).then(function(y){

      //console.log(y);
//});
  AHC.authorizedHowlCall("ConfirmYourPhoneNumber", userObject, AHC.newPhoneFinish);
  }

  newPhoneFinish(x){
    console.log(x);
    this.setState({
      //isLoading:false
    })
  //  Actions.confirmPhoneTwo();

  let AHC = this;



let y = AHC.loginUser({"username":this.state.mainemail, "password":this.state.mainpassword}, function(){
   console.log('yadsofjaksl')
 });

 Alert.alert('Phone Number Added',
   'You Have added your phone number you will receieve a confirmation SMS.',[
 {text: 'OK', onPress: () => { Actions.confirmPhoneTwo() }},
])

  }



  onSaveFail() {
    this.setState({
      error: 'Something went Wrong',
      loading: false
    });
  }

  onSaveSuccess() {
    this.setState({
     loading: false,
      error: ''
     });

     Alert.alert('Your Profile has been updated.');

  }

 async updateInfo(){

   let getValid = this.refs.phone.isValidNumber();
   let getType = this.refs.phone.getNumberType();
   let getValue = this.refs.phone.getValue();
   let getCountry = this.refs.phone.getDialCode();

   let getValue2 = getValue.substring(2);



       this.setState({
           valid: getValid,
           type: getType,
           value: getValue2,
           country: getCountry
       })

       console.log(this.refs.phone.getValue());
       console.log('pure number');
       console.log(this.state);
       console.log(getValue2);


       if(this.refs.phone.isValidNumber() == true ){


         let AHC = this;
         let userObject = {
           'UserID':this.state.mainuserid,
           //'UserToken':this.state.mainusertoken,
           'MobilePhoneCountryCode':'1',
           'MobilePhoneNumber':getValue2
         }
         console.log(userObject);
        // console.log(this.state);

  AHC.authorizedHowlCall("ConfirmYourPhoneNumber", userObject, AHC.newPhoneFinish);
  //AHC.callHowl("ConfirmYourPhoneNumber", userObject).then(function(y){

    ///console.log(y);


    //Alert.alert('Phone Number Added',
    //'You Have added your phone number you will receieve a confirmation SMS.',[
// {text: 'OK', onPress: () => { Actions.confirmPhoneTwo() }},
//])

   //}

        // await AsyncStorage.setItem("HOWL_PHONE_NEW", this.refs.phone.getValue());


         //Alert.alert('Valid Number',
         //'You will receive a text message to confirm this number.',[
       //{text: 'OK', onPress: () => { Actions.pop() }},
    // ]);
       }else{
         Alert.alert('Invalid Number','This is either not a valid number or already in use.');
       }
   }
  render () {

    return (
              <ScrollView>
                <View style={styles.container}>

                  <View>
                  <View>
                  <Text style={styles.text}>ENTER NEW PHONE NUMBER</Text>
                  <Text style={styles.smallText}>Enter a new number below. You will receive a text message to confirm your number</Text>

                  <View style={styles.phoneContainer}>
                    <PhoneInput
                    //onChangeText={this.onPhoneChange.bind(this)}
                    //value={this.props.phonenumber}
                    ref='phone'
                    />



                  </View>

                  </View>




                    </View>

                      {this.renderButton()}





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
  phoneContainer:{
    borderBottomWidth:1,
    borderBottomColor:'#dadada',
    height:31,
    marginTop:20,
    paddingBottom:10
  },
  smallText:{
    textAlign:'center'
  },
  changeNumber:{
  alignSelf: 'stretch',
    height:50,
    width:400,
    position:'absolute',
    top:250,
    zIndex:1
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

  },
  spinnerStyle:{
    marginTop:40
  }
}



export default ConfirmPhone;
