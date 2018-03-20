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



class PrintCode extends AuthorizedHowlComponent {




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

        });



    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('we updated');
  return true;
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
      isLoading:false,
      printcode:''
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
      'InviteCode':this.state.printcode

    }

      AHC.authorizedHowlCall("RedeemInvite", userObject, AHC.finishUserUpdate);

    }



  finishUserUpdate(x){
    console.log(x);

    this.setState({
      loading:false
    })

    let title = 'Print Code';
    let message = x.RedeemInviteResult.ResultStatus.StatusMessage;

    Alert.alert(title,message,[

    {text: 'OK', onPress: () => Actions.pop()},
  ],
  { cancelable: false });
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

                  <Text style={styles.bigText}>PRINT CODE</Text>
                  <Text style={styles.littleText}>If you have one. enter the Print (Referral) Code provided by your HOWL Alpha below.</Text>

                    <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>

                    <TextField
                      label='ENTER CODE'

                      style={styles.textStyle}
                      //onChangeText={this.onNameChange.bind(this)}
                      onChangeText = {(printcode) => this.setState({printcode})}
                      returnKeyType = {"next"}
                      onSubmitEditing={(event) => {
                        this.refs.SecondInput.focus();
                      }}
                      value={this.state.firstname}

                      />

                    </KeyboardAvoidingView>
                  </View>


                      {this.renderButton()}


                </View>
              </ScrollView>

            );
          }
        }

const styles = {
  bigText:{
    textAlign:'center',
    fontWeight:'800',
    color:'#000',
    fontSize:20,
    marginBottom:25
  },
  littleText:{
    textAlign:'center'

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
})(PrintCode);
