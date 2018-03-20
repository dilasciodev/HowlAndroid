import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import * as Keychain from 'react-native-keychain';
import HowlComponent  from './HowlComponent';
import { AsyncStorage } from 'react-native';

class AuthorizedHowlComponent extends HowlComponent{
	static url = "http://sandbox.howlalarm.com/HOWL_WCF/Service1.svc/";

	constructor(props){
		super(props);
		this.timer = require('react-native-timer');
		this.state = {
			credentials : null,
			credentialsType:null,
			loading: false,
		}
	}
	componentWillUnmount() {
		this.timer.clearTimeout(this);
	}
	//need to add bodyPkg.UserToken = XXXX; to all authorized calls
	timing(name, svc, bodyPkg, callBack, interval=6000){
		let ahc = this;
		let x = this.returnTokenFromLogin();
		x.then(function(data) {
			bodyPkg.UserToken = data;
		ahc.timer.setInterval(name, function(){
			ahc.callHowl(svc, bodyPkg).then(function(y){
				callBack(y);
			});
		}, interval);
		});
	}
  authorizedHowlCall(svc, bodyPkg, callBack){
		let ahc = this;
		let x = this.returnTokenFromLogin();
		x.then(function(data) {
			bodyPkg.UserToken = data;
			ahc.callHowl(svc, bodyPkg).then(function(y){
				callBack(y);
			});
		});
	}


	setCredentials(credentials, logintype){
		let ahc= this;
		let name = this.props.navigationState.name;
		this.state.credentials = credentials;
		this.state.credentialsType = logintype;
		this.state.finished = true;
		if(name.toLowerCase() == "landingscreen"){
			ahc.login();
		}
	}
	returnState(){
		return this.state.credentials;
	}
	returnType(){
		return this.state.credentialsType;
	}
	async login(){
		let creds = this.returnState();
		switch(this.returnType()){
			case("google"):
				this.loginGoogle(creds);
				break;
			case("fb"):
				this.loginFacebook(creds);
				break;
			case("user"):
				this.loginUser(creds).then(function(x){
					console.log(x);
					
				})
				console.log('gogogogogogoggogogo')
				break;
		}
		//do destionation call
	}

	componentWillMount(){
		this.setState({ loading: true });
		this.loadData();
	}
	loadData(){
		let ahc = this;
		//var promise = new Promise((resolve, reject) => {
			let name = this.props.navigationState.name;
			/*
				This piece checks for stored login credentials from howl, then facebook, then google.  Is there a better way to do this?  Probably.
			*/
			Keychain
				.getGenericPassword()
				.then(function(credentials) {
					if(credentials.username === undefined){
						Keychain
							.getInternetCredentials("https://facebook.com")
							.then(function(credentials) {
								if (credentials.username === undefined) {
									Keychain
										.getInternetCredentials("https://google.com")
										.then(function(credentials) {
											if (credentials.username === undefined) {
												if(name.toLowerCase() != "landingscreen"){
													Actions.landingScreen({type: 'reset'});
												}
											} else{
												ahc.setCredentials(credentials, "google");
											}
										}).catch(function(error) {
											console.log(error);
										});
								} else{
									ahc.setCredentials(credentials, "fb");
								}
							}).catch(function(error) {
								console.log(error);
							});
					} else{

						ahc.setCredentials(credentials, "user");
					}

				}).catch(function(error) {
					console.log(error);
				});
	}
	render(){
		if (this.state.loading) {
			console.log('comp loaded');
			return <h2>Loading...</h2>;
		}

	}
}
export default AuthorizedHowlComponent;
