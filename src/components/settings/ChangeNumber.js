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

import { connect } from 'react-redux';
import { editPhoneNumber } from '../../actions'
import PhoneInput from 'react-native-phone-input'




const {height, width} = Dimensions.get('window');



class ChangeNumber extends AuthorizedHowlComponent {


  componentWillMount () {
      super.componentWillMount();
      Keyboard.dismiss();

      Actions.refresh({key: 'drawer', open: false });
      this._value = 0;
      //this.state.pressAction.addListener((v) => this._value = v.value);
      let AHC = this;
      let packEx = this.returnUserID().then(function(result){
        console.log(result);
        AHC.setState({
          mainuserid:result,
          loading:false
        })
      //  AHC.authorizedHowlCall("AddEditUserHomeAddress", packId, AHC.getUserStuff);

        });


          let getPhone = this.returnPhoneNumber().then(function(result){
              console.log(result);
                AHC.setState({
                  phonenumber:result
                });
              });

    }



    async returnPhoneNumber(){
  			return this.returnAsync('HOWL_PHONE');
  	}


    componentWillUnmount () {
      Keyboard.dismiss()
    }

    onPhoneChange(text){
      this.props.editPhoneNumber(text);
    }



constructor(props) {
  super(props)
    this.state = {
      validated: false,
      loading: false,
      error: '',
      mainuserid:'',
      mobilenumber:'',
      mobilecountry:'',
      isLoading:false,
      valid: '',
      type: '',
      value: '',
      country:''
    }

    this.updateUser = this.updateUser.bind(this);
    this.finishUserUpdate = this.finishUserUpdate.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
    this.renderInfo = this.renderInfo.bind(this);


  }

  renderButton() {
    if (this.state.loading) {
       return <View style={styles.spinnerStyle}><Spinner size="large" /></View>
    }

    return (
      <BlueButtonSave onPress={this.updateInfo}/>
    );
  }

  updateUser(){

    this.setState({
      isLoading:true
    })

    /// <param name="UserID"></param>
    /// <param name="UserToken"></param>
    /// <param name="MobilePhoneCountryCode"></param>
    /// <param name="MobilePhoneNumber"></param>

    let AHC = this;
    let userObject = {
      'UserID':this.state.mainuserid,
      'MobilePhoneCountryCode':this.state.mobilecountry,
      'MobilPhoneNumber':this.state.mobilenumber

    }
    //AHC.authorizedHowlCall("ConfirmYourPhoneNumber", userObject, AHC.finishUserUpdate);

  }

  finishUserUpdate(x){
    console.log(x);

    this.setState({
      isLoading:false
    })

    Alert.alert('Phone Number Updated',
    'You Have updated your phone number you will receieve a confirmation SMS.',[
  {text: 'OK', onPress: () => { Actions.pop() }},
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

       this.setState({
           valid: getValid,
           type: getType,
           value: getValue,
           country: getCountry
       })

       console.log(this.refs.phone.getValue());
       console.log('pure number');
       console.log(this.state);


       if(this.refs.phone.isValidNumber() == true ){

         Alert.alert('Valid Number',
         'You will receive a text message to confirm this number.',[
       {text: 'OK', onPress: () => { Actions.pop() }},
     ]);
       }else{
         Alert.alert('Invalid Number','This is either not a valid number or already in use.');
       }try{

        await AsyncStorage.setItem("HOWL_PHONE_NEW", this.refs.phone.getValue());
        await AsyncStorage.setItem("HOWL_COUNTRY_CODE_NEW", this.refs.phone.getDialCode());

       }catch(error){
         console.log(error);

       }
   }

   renderInfo(){
       if(this.state.value)
       return (
           <View style={styles.info}>
                   <Text>Is Valid: <Text style={{fontWeight:'bold'}}>{this.state.valid.toString()}</Text></Text>
                   <Text>Type: <Text style={{fontWeight:'bold'}}>{this.state.type}</Text></Text>
                   <Text>Value: <Text style={{fontWeight:'bold'}}>{this.state.value}</Text></Text>
                   <Text>Country Code: <Text style={{fontWeight:'bold'}}>{this.state.country}</Text></Text>
           </View>
       )
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
                    

                      {this.renderInfo()}
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

const mapStateToProps = ({ setting }) => {
  const { phonenumber } = setting;

  return { phonenumber };
};

export default connect(mapStateToProps, {
   editPhoneNumber
 })(ChangeNumber);
