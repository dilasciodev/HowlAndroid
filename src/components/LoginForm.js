import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, CreateButton, Spinner} from './common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import HowlComponent  from './HowlComponent';

import { Scene, Router, Actions } from 'react-native-router-flux';



class LoginForm extends HowlComponent {



  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        isLoading: false,
        visible: false
     };
      this.onButtonPress = this.onButtonPress.bind(this);
      this.returnInvalid = this.returnInvalid.bind(this);
  }








  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  async returnInvalid() {
      //return this.returnAsync('HOWL_INVALID');
      return await AsyncStorage.getItem("HOWL_INVALID");
  }

  onButtonPress() {

    this.setState({
       visible: !this.state.visible,
       loading:true
      // isLoading: true
     });

     console.log(this.state);

    const { email, password } = this.props; // destructuring
  //  this.setState({ error: '', loading: true});

    console.log(this.props);

    let t = this;
    //this.loginUser({"username":email, "password":password});

    let x = this.loginUser({"username":email, "password":password}, function(){
      console.log('yadsofjaksl')
    });


    this.returnInvalid().then(function(result){

      console.log(result);


      if(result == "0"){

      t.setState({isLoading:false});
        console.log('not working dude');
    }else{

      t.setState({
        //isLoading:true
      })

    }



      //if(result = 'invalid_login'){
      //t.setState({
         //visible: false
       //})
     //}
      //AHC.authorizedHowlCall("AddEditUserHomeAddress", packId, AHC.getUserStuff);
    });



    //this.props.loginUser({ email, password });


      console.log(this.state);
  }

   setAppLaunched() {
  AsyncStorage.setItem(HAS_LAUNCHED, 'true');
}


  renderButton() {
    if(this.state.loading) {
      return <Spinner size='large' />
    }

    return (

      <CreateButton
        onPress={this.onButtonPress.bind(this)}>
        SIGN IN
      </CreateButton>

    );
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 65}}>
          <Spinner overlayColor={"rgba(6, 62, 91, 1)"} animation={'fade'} visible={true} textContent={"Loading..."} size={'large'} color={'#fff'} textStyle={{color: '#fff'}} />
        </View>
      );
    }

    return (
    <View>
     <Spinner visible={false} overlayColor={"rgba(28, 89, 115, 0.90)"} animation={'fade'} textContent={"Loading..."} size={'large'} textStyle={{color: '#FFF'}} />
      <Image style={styles.treeStyle} source={require('../assets/images/treesfull.png')}>
      <Image style={styles.logoStyle} source={require('../assets/images/howlMain.png')} />

      <View style={styles.loginStyle}>

      <View>
        <TextField
          label='EMAIL ADDRESS'
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
          keyboardType='email-address'
          autoCapitalize='none'
          />
          <Icon name="envelope" size={20} color="#999" style={styles.iconStyle}/>
      </View>

      <View>
        <TextField
          secureTextEntry
          label='PASSWORD'
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
        <Icon name="lock" size={20} color="#999" style={styles.iconStyle}/>
      </View>

        </View>

        <Text style={styles.errorTextStyle}>
          {this.StatusMessage}
        </Text>

        <View style={{paddingLeft:20,paddingRight:20}}>
        <CardSection>

          {this.renderButton()}
        </CardSection>



        </View>

        <TouchableOpacity onPress={() => Actions.forgotPassword()}>
        <Text style={styles.textStyle}>Forgot Password</Text>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Dont have an account? Register</Text>
        </Image>
      </View>
    );
  }
}

const styles = {
  iconStyle:{
    position:'absolute',
    right:0,
    top:30
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  logoStyle:{
    width:70,
    height:80,
    alignSelf:'center',
    marginBottom:20
  },
  loginStyle:{
    paddingLeft:30,
    paddingRight:30
  },
  textStyle:{
    color:'#999',
    fontSize:14,
    marginTop:10,
    alignSelf:'center'
  },
  treeStyle:{
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }

}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
  })(LoginForm);
