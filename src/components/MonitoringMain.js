import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner, CreateButton } from './common';
import { TextField } from 'react-native-material-textfield';
import { Scene, Router, Actions } from 'react-native-router-flux';
import InAppBilling from "react-native-billing";
import AuthorizedHowlComponent from './AuthorizedHowlComponent';

class MonitoringMain extends AuthorizedHowlComponent {

  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
  }


    constructor(props) {
      super(props);
      //this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {
        productDetails: null,
  transactionDetails: null,
  consumed: false,
  error: null,
  productId: "howl.monitoring.subscription"
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
        onPress={this.purchaseSubscription.bind(this)}>
        MONTHLY PLAN - $7.99
      </CreateButton>
    );
  }

  purchaseSubscription(){
    InAppBilling.open()
  .then(() => InAppBilling.purchase("my.test.howl"))
  .then(details => {
    console.log("You purchased: ", details);
    return InAppBilling.close();
    //Alert.alert(details);
  })
  .catch(err => {
    console.log(err);
  });
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
    <View style={styles.mainContainer}>



      <Image style={styles.logoStyle} source={require('../assets/images/monitorperson.png')} />

      <View style={styles.loginStyle}>

        <Text style={styles.headerText}>
          UNLOCK EVERYTHING
        </Text>
        <Text style={styles.bodyCopy}>
          Subscribe to howl monitoring for only $7.99/month
          ($95.88 annually)) for our authenticated third-party.
          24-hour  monitoring service who will contact the corressponding authorities on your behalf when you send alerts (Police, Ambulance, Fire).
          *All alerts will notify Pack by default</Text>



        </View>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>

          {this.renderButton()}
        </CardSection>

        <Text style={styles.restorePurchase}></Text>


      </View>
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
    height:200,
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
    paddingTop:65
  }

}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser
 })(MonitoringMain);
