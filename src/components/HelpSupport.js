import React, { Component } from 'react';
import { Text, View, Image, TextInput, WebView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner, CreateButton } from './common';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';
import InAppBilling from "react-native-billing";
import AuthorizedHowlComponent from './AuthorizedHowlComponent';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');





class HelpSupport extends AuthorizedHowlComponent {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
  }


    constructor(props) {
      super(props);
      //this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {


   			//listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
       };


    }






  render() {

    return (
      <WebView
          style={styles.WebViewStyle}
          source={{uri: 'https://howlalert.com/faq/'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}  />

    );
  }
}

const styles = {
  WebViewStyle:
 {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
 },
  bodyCopy:{
    alignSelf:'center',
    textAlign:'center',
    color:'#999',
    paddingLeft:0,
    paddingRight:0
  },
  headerText:{
    fontSize:22,
    color:'#333',
    textAlign:'center',
    fontWeight:'bold',
    marginBottom:15

  },
  restorePurchase:{
    textDecorationLine:'underline',
    color:'#999',
    marginTop:15,
    textAlign:'center'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  logoStyle:{
    width:200,
    height:230,
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
  },
  mainContainer:{
    paddingLeft:20,
    paddingRight:20,
    paddingTop:75
  }

}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
 })(HelpSupport);
