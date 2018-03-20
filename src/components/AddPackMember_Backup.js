import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner, CreateButton } from './common';
import { TextField } from 'react-native-material-textfield';

class LoginForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props; // destructuring

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <CreateButton
        onPress={this.onButtonPress.bind(this)}>
        SAVE
      </CreateButton>
    );
  }

  render() {
    return (
    <View>
      <Text style={styles.importStyle}>Import from Contacts</Text>

      <Image style={styles.logoStyle} source={require('../assets/images/contact.png')} />

      <View style={styles.loginStyle}>
      <TextField
        label='FIRST NAME'
        onChangeText={this.onEmailChange.bind(this)}
        value={this.props.email}
        />
        <TextField
          secureTextEntry
          label='LAST NAME'
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          />
          <TextField
            secureTextEntry
            label='MOBILE PHONE'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            />
            <TextField
              secureTextEntry
              label='EMAIL ADDRESS'
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              />
        </View>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>

          {this.renderButton()}
        </CardSection>


      </View>
    );
  }
}

const styles = {
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
    paddingRight:30,
    marginTop:20
  },
  textStyle:{
    color:'#999',
    fontSize:14,
    marginTop:10,
    alignSelf:'center'
  },
  importStyle:{
     color:'#0091cd',
     marginTop:10,
     marginBottom:10,
     textAlign:'center'
  }

}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
  })(LoginForm);
