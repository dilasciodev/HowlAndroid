import React, { Component } from 'react';
import { Text, View, Image, TextInput, WebView, Platform, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner, CreateButton } from './common';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';
import InAppBilling from "react-native-billing";
import AuthorizedHowlComponent from './AuthorizedHowlComponent';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');





class PurchaseCamera extends AuthorizedHowlComponent {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
  }

  shouldComponentUpdate(nextProps, nextState){
    // return a boolean value
    console.log('updated');
    return true;
}

componentWillReceiveProps(nextProps){
  console.log('received shit!');
  return true;
}


    constructor(props) {
      super(props);
      //this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {
        productDetails: null,
        transactionDetails: null,
        consumed: false,
        error: null,
        productId: "android.test.purchased",
      status: 'No Page Loaded',
      loading: true,
      scalesPageToFit: true,

   			//listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
       };


    }

    resetState = () => {
    this.setState(defaultState);
  };



  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    //const { email, password } = this.props; // destructuring

    //this.props.loginUser({ email, password });

  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size='large' />
    }

    return (
      <CreateButton
        onPress={Actions.cameraHTML}>
        BUY NOW!
      </CreateButton>
    );
  }

  purchaseSubscription(){


  }

  getProductDetails = async () => {
    try {
      this.resetState();
      await InAppBilling.open();
      const details = await InAppBilling.getProductDetails(
        this.state.productId
      );
      await InAppBilling.close();
      this.setState({ productDetails: JSON.stringify(details) });
    } catch (err) {
      this.setState({ error: JSON.stringify(err) });
      await InAppBilling.close();
    }
  };

  purchaseProduct = async () => {
    try {
      this.resetState();
      await InAppBilling.open();
      const details = await InAppBilling.purchase(this.state.productId);
      await InAppBilling.close();
      this.setState({ transactionDetails: JSON.stringify(details) });
    } catch (err) {
      this.setState({ error: JSON.stringify(err) });
      await InAppBilling.close();
    }
  };

  consumePurchase = async () => {
    try {
      this.resetState();
      await InAppBilling.open();
      const details = await InAppBilling.consumePurchase(this.state.productId);
      await InAppBilling.close();
      this.setState({ consumed: true });
    } catch (err) {
      this.setState({ error: JSON.stringify(err) });
      await InAppBilling.close();
    }
  };

  updateProductId = productId => {
    this.setState({ productId });
  };

  render() {

    return (
    <ScrollView style={styles.mainContainer}>



      <Image style={styles.logoStyle} source={require('../assets/images/cameraillustration.png')} />

      <View style={styles.loginStyle}>

        <Text style={styles.headerText}>
          PURCHASE A CAMERA
        </Text>
        <Text style={styles.bodyCopy}>
          Need a Camera? Buy one now.</Text>



        </View>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>

          {this.renderButton()}
        </CardSection>

        <Text style={styles.restorePurchase}></Text>


      </ScrollView>
    );
  }
}

const styles = {

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
 })(PurchaseCamera);
