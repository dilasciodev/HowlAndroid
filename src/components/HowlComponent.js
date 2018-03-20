import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as Keychain from 'react-native-keychain';
import { AsyncStorage, Alert, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';



class HowlComponent extends React.Component{


	constructor(props) {
		super(props);
		//this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

		this.state = {
			valid:false

			//listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
		 };

	}
	//static url = "http://sandbox.howlalarm.com/HOWL_WCF_Sandbox/Service1.svc/";
	async loginUser(credentials){
    console.log('logging in');
		return this.loginBase(credentials, "Login");
	}
	async loginFacebook(credentials){
		return this.loginBase(credentials,"LoginWithFacebook");
	}
	async loginGoogle(credentials){
		//finish
		return this.loginBase("","");
	}
	async callHowl(svc, bodyPkg){
		 const response = await fetch("https://service.howlalarm.com/HOWL_WCF_Production/Service1.svc/"+svc, {
		 //const response = await fetch("http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/"+svc, {

			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(bodyPkg),
		});
		const json = await response.json();
		return json
	}
	async loginBase(credentials, svc){
    console.log('loginbase');
		let bodyPkg = {
			"Email": credentials.username,
			"Password": credentials.password,
		};

		const response = await this.callHowl(svc, bodyPkg);

    console.log(response);



		let my_token = response.LoginResult.GetUser.UserToken;
		let my_id = response.LoginResult.GetUser.ID;
		let my_phone = response.LoginResult.GetUser.MobilePhoneNumber;
		let my_confirm = response.LoginResult.GetUser.MobilePhoneConfirmationCode;
		let my_cancel = response.LoginResult.GetUser.CancellationCode;
		let my_silence = response.LoginResult.GetUser.SilenceCode;
		let my_cops = response.LoginResult.GetUser.COPSMonitoringAccountID;
		let my_firstname = response.LoginResult.GetUser.FirstName;
		let my_lastname = response.LoginResult.GetUser.LastName;
		let my_email = response.LoginResult.GetUser.Email;
		let my_address = response.LoginResult.GetUserHomeAddress.Address1;
		let my_address2 = response.LoginResult.GetUserHomeAddress.Address2;
		let my_city = response.LoginResult.GetUserHomeAddress.City;
		let my_state = response.LoginResult.GetUserHomeAddress.State;
		let my_latitude = response.LoginResult.GetUserHomeAddress.Latitude;
		let my_longitude = response.LoginResult.GetUserHomeAddress.Longitude;
		let my_zip = response.LoginResult.GetUserHomeAddress.Zip;
		let has_confirmed = response.LoginResult.GetUser.HasConfirmedMobilePhone;

    if(response.LoginResult.ResultStatus.Status == "0" ){

			console.log('not working brahhhhhh');

			Alert.alert(
			  'Invalid Login',
			  'Incorrect Username and/or Password',
			  [
			    {text: 'YES', onPress: () => { Actions.pop() }},
			  ]
			)

			await AsyncStorage.setItem('HOWL_INVALID', response.LoginResult.ResultStatus.Status);
			return response.LoginResult.ResultStatus.Status.StatusMessage;

			this.logout();

    }


		try {

				AsyncStorage.removeItem("HOWL_PHONE");
				AsyncStorage.removeItem("HOWL_CANCEL_CODE");
				AsyncStorage.removeItem("HOWL_SILENCE_CODE");
				AsyncStorage.removeItem("HOWL_COPS");

				console.log(response);

				await AsyncStorage.setItem('HOWL_WCF_JWT', my_token);
				await AsyncStorage.setItem("HOWL_ID", my_id);
				if(my_phone==null){}else{await AsyncStorage.setItem("HOWL_PHONE", my_phone);}
				if(my_confirm==null){}else{await AsyncStorage.setItem("HOWL_CONFIRMATION", my_confirm);}
				if(my_cancel==null){}else{await AsyncStorage.setItem("HOWL_CANCEL_CODE", my_cancel);}
				if(my_silence==null){}else{await AsyncStorage.setItem("HOWL_SILENCE_CODE", my_silence);}
				if(my_cops==null){}else{await AsyncStorage.setItem("HOWL_COPS", my_cops);}

				/*Address*/
				if(my_firstname==null){}else{await AsyncStorage.setItem("HOWL_FIRST_NAME", my_firstname);}
				if(my_lastname==null){}else{await AsyncStorage.setItem("HOWL_LAST_NAME", my_lastname);}
				if(my_email==null){}else{await AsyncStorage.setItem("HOWL_EMAIL", my_email);}
				if(my_address==null){}else{await AsyncStorage.setItem("HOWL_ADDRESS", my_address);}
				if(my_address2==null){}else{await AsyncStorage.setItem("HOWL_ADDRESS_2", my_address2);}
				if(my_city==null){}else{await AsyncStorage.setItem("HOWL_CITY", my_city);}
				if(my_state==null){}else{await AsyncStorage.setItem("HOWL_STATE", my_state);}
				if(my_latitude==null){}else{await AsyncStorage.setItem("HOWL_LATITUDE", my_latitude);}
				if(my_longitude==null){}else{await AsyncStorage.setItem("HOWL_LONGITUDE", my_longitude);}
				if(my_zip==null){}else{await AsyncStorage.setItem("HOWL_ZIP", my_zip);}



		} catch (error) {
				// Error saving data
		}
		if(my_phone == null){


			Keychain
				.setGenericPassword(credentials.username, credentials.password)
				.then(function() {
						Actions.confirmPhone();
				});

		}else if(has_confirmed == "False"){

			Keychain
				.setGenericPassword(credentials.username, credentials.password)
				.then(function() {
						Actions.confirmPhoneTwo();
				});


		}else if(my_address == null){

			Keychain
				.setGenericPassword(credentials.username, credentials.password)
				.then(function() {
						Actions.createAddress();
				});

		}else if(my_cancel == null){

			Keychain
				.setGenericPassword(credentials.username, credentials.password)
				.then(function() {
						Actions.createCode();
				});

		}else if(my_silence == null){

			Keychain
				.setGenericPassword(credentials.username, credentials.password)
				.then(function() {
						Actions.createFakeCode();
				});

		}
		else{
			Keychain
				.setGenericPassword(credentials.username, credentials.password)
				.then(function() {
						Actions.drawer();
				});

		}

	}

	async returnTokenFromLogin(){
			return this.returnAsync('HOWL_WCF_JWT');
	}

	async returnUserID(){
			return this.returnAsync('HOWL_ID');

	}
	async logout(){

		Keychain
			.resetGenericPassword()
			.then(function() {
				console.log('Credentials successfully deleted');
				Actions.auth({type: 'reset'});
				Actions.landingScreen();
			});
		//AsyncStorage.removeItem("HOWL_WCF_JWT");
		//AsyncStorage.removeItem("HOWL_ID");
		AsyncStorage.clear();

	}
	async logoutask(){
		Alert.alert(
  'Logout',
  'Are you sure you would like to Log out?',
  [

    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => this.logout()},
  ],
  { cancelable: true }
)
	}

	async returnAsync(name){
		try {
			const value = await AsyncStorage.getItem(name);
			if (value !== null){
				//console.log(value);
				return value;
			}
		} catch (error) {
		  // Error retrieving data
		  console.log(error);
		}
	}
}
export default HowlComponent;
