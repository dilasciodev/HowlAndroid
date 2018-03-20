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
import Icon from 'react-native-vector-icons/SimpleLineIcons';


import { connect } from 'react-redux';
import { editFirstName } from '../../actions';



const {height, width} = Dimensions.get('window');



class ChangePassword extends AuthorizedHowlComponent {




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

        let getPass = this.returnPassword().then(function(result){
            console.log(result);
            AHC.setState({
              password:result
            });
          });

    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('we updated');
  return true;
}


    async returnPassword(){
  			return this.returnAsync('HOWL_PASSWORD');
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
      password:'',
      isLoading:false
    }

    this.updateUser = this.updateUser.bind(this);
    this.finishUserUpdate = this.finishUserUpdate.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);


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


    let AHC = this;
    let userObject = {
      'UserID':this.state.mainuserid,
      'Password':this.state.password

    }
      AHC.authorizedHowlCall("ChangePassword", userObject, AHC.finishUserUpdate);
  }

  finishUserUpdate(x){
    console.log(x);

    this.setState({

      loading:false
    })

    Alert.alert('Password Updated',
    'You Have updated your password.',[
  {text: 'OK', onPress: () => { Actions.pop() }},
])

  }


  onPasswordChange(text) {
    this.props.passwordChanged(text);
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
                      secureTextEntry
                      label='OLD PASSWORD'
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
                      />
                    <Icon name="lock" size={20} color="#999" style={styles.iconStyle}/>

                    </KeyboardAvoidingView>
                  </View>

                  <View >
                    <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>

                      <TextField
                        secureTextEntry
                        label='NEW PASSWORD'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        />
                      <Icon name="lock" size={20} color="#999" style={styles.iconStyle}/>

                      </KeyboardAvoidingView>
                    </View>


                    <View >
                      <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-30} contentContainerStyle={styles.avoidingView}>

                        <TextField
                          secureTextEntry
                          label='CONFIRM PASSWORD'
                          onChangeText={this.onPasswordChange.bind(this)}
                          value={this.props.password}
                          />
                        <Icon name="lock" size={20} color="#999" style={styles.iconStyle}/>

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
})(ChangePassword);
