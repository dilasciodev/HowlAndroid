import React, { Component } from 'react';
import { Text, View, Image, ScrollView, WebView } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';

class PrivacyPolicy extends Component {


  render() {
    return (
      <WebView
          style={styles.WebViewStyle}
          source={{uri: 'http://web1.anasource.com/HOWL.WEB_UATLinkAccount/Policy'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}  />
    );
  }
}


const styles = {
  container:{
     flex            : 1,
     backgroundColor : '#F5FCFF',
     paddingLeft:30,
     paddingRight:30,
     backgroundColor:'#fff',
     paddingTop:65,
     paddingBottom:30
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
  textStyle: {

    textAlign:'center',
    paddingRight:0,
    paddingLeft:0,
    marginBottom:5,
    marginTop:5
  },
  spinnerStyle:{
    marginTop:40
  }
}



export default PrivacyPolicy;
