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
import { Button, BlueButtonSave, Input,Spinner } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/Ionicons';


import { connect } from 'react-redux';
import { editFirstName } from '../../actions';



const {height, width} = Dimensions.get('window');



class EditProfile extends AuthorizedHowlComponent {




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

        let getUser = this.returnUserStuff().then(function(result){
            console.log(result);
            AHC.setState({
              firstname:result
            });
          });

          let getLast = this.returnLastName().then(function(result){
              console.log(result);
              AHC.setState({
                lastname:result
              });
            });

          let getEmail = this.returnEmail().then(function(result){
              console.log(result);
              AHC.setState({
                email:result
              });
            });

          let getPhone = this.returnPhoneNumber().then(function(result){
              console.log(result);
                AHC.setState({
                  phonenumber:result
                });
              });

           let getNewPhone = this.returnNewPhone().then(function(result){
              console.log(result);
              console.log('new phone number')
                  AHC.setState({
                    newphonenumber:result
                  });
                });

            let getNewCountry = this.returnNewCountryCode().then(function(result){
                  console.log(result);
                  console.log('new country code');
                      AHC.setState({
                      newcountrycode:result
                  });
                });

    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('we updated');
  return true;
}


    async returnUserStuff(){
  			return this.returnAsync('HOWL_FIRST_NAME');
  	}
    async returnLastName(){
  			return this.returnAsync('HOWL_LAST_NAME');
  	}
    async returnEmail(){
  			return this.returnAsync('HOWL_EMAIL');
  	}
    async returnPhoneNumber(){
  			return this.returnAsync('HOWL_PHONE');
  	}
    async returnNewPhone(){
  			return this.returnAsync('HOWL_PHONE_NEW');
  	}
    async returnNewCountryCode(){
  			return this.returnAsync('HOWL_COUNTRY_CODE_NEW');
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
      firstname:'',
      lastname:'',
      phonenumber:'',
      email:'',
      isLoading:false,
      newphonenumber:'',
      newcountrycode:'',
      emailvalid:true
    }

    this.updateUser = this.updateUser.bind(this);
    this.finishUserUpdate = this.finishUserUpdate.bind(this);


  }

  renderButton() {
    if (this.state.loading) {
       return <View style={styles.spinnerStyle}><Spinner size="large" /></View>
    }

    return (
      <BlueButtonSave onPress={this.updateUser}/>
    );
  }

  updateUser(){

    this.setState({
      
      loading:true
    })



    ///<param name="UserID">User ID</param>
    /// <param name="UserToken">User Token</param>
    /// <param name="FirstName">First Name</param>
    /// <param name="LastName">Last Name</param>
    /// <param name="Email">Email</param>

    let AHC = this;
    let userObject = {
      'UserID':this.state.mainuserid,
      'FirstName':this.state.firstname,
      'LastName':this.state.lastname,
      'Email':this.state.email
    }

    if(this.state.emailvalid){

      AHC.authorizedHowlCall("UpdateUserProfile", userObject, AHC.finishUserUpdate);
    }else{
        Alert.alert('Your Email is Invalid');
        this.setState({
          isLoading:false
        })
      //Alert.alert('Not Valid');
      //AHC.authorizedHowlCall("UpdateUserProfile", userObject, AHC.finishUserUpdate);
    }
    //AHC.authorizedHowlCall("UpdateUserProfile", userObject, AHC.finishUserUpdate);

  }

  finishUserUpdate(x){
    console.log(x);

    this.setState({

      loading:false
    })

    Alert.alert('Profile Updated',
    'You Have updated your profile.',[
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

  validate = (text) => {
console.log(text);
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
if(reg.test(text) === false)
{
console.log("Email is Not Correct");
this.setState({
  email:text,
  emailvalid:false
})

return false;
  }
else {
  this.setState({
    email:text,
    emailvalid:true
  })
  console.log("Email is Correct");
}
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
                  <TouchableOpacity
                    style={styles.changeNumber}
                    //onPress={() => Actions.changeNumber({ type:'popTo' })}
                    onPress={() => Actions.changeNumber()}
                    >
                      </TouchableOpacity>

                    <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>

                    <TextField
                      label='FIRST NAME'
                      style={styles.textStyle}
                      //onChangeText={this.onNameChange.bind(this)}
                      onChangeText = {(firstname) => this.setState({firstname})}
                      returnKeyType = {"next"}
                      onSubmitEditing={(event) => {
                        this.refs.SecondInput.focus();
                      }}
                      value={this.state.firstname}

                      />
                      <Icon name="ios-person-outline" size={30} style={styles.iconStyle}/>
                    </KeyboardAvoidingView>
                  </View>
                <View >
                  <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                    <TextField
                      label='LAST NAME'
                      onChangeText = {(lastname) => this.setState({lastname})}
                      onSubmitEditing={(event) => {
                        this.refs.ThirdInput.focus();
                      }}
                      ref='SecondInput'
                      value={this.state.lastname}
                      />
                      <Icon name="ios-person-outline" size={30} color="#999" style={styles.iconStyle}/>
                    </KeyboardAvoidingView>
                  </View>
                  <View >
                    <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                      <TextField
                        label='EMAIL ADDRESS'
                        //onChangeText = {(email) => this.setState({email})}
                        onChangeText={(text) => this.validate(text)}
                        ref='ThirdInput'
                        value={this.state.email}
                        />
                        <Icon name="ios-mail-outline" size={30} color="#999" style={styles.iconStyle}/>
                      </KeyboardAvoidingView>
                    </View>

                    <View >
                      <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>
                        <TextField
                          label='PHONE NUMBER'
                          onChangeText = {(phonenumber) => this.setState({phonenumber})}
                          value={this.state.phonenumber}

                          />
                          <Icon name="ios-call-outline" size={30} color="#999" style={styles.iconStyle}/>
                        </KeyboardAvoidingView>
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
  const { firstname } = setting;

  return { firstname  };
};

export default connect(mapStateToProps, {
  editFirstName
 })(EditProfile);
