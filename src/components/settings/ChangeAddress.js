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
import { Button, BlueButtonSave, Input, Spinner } from '../common';
import { TextField } from 'react-native-material-textfield';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import { connect } from 'react-redux';
import { editFirstName } from '../../actions';
import RNGooglePlaces from 'react-native-google-places';




const {height, width} = Dimensions.get('window');



class ChangeAddress extends AuthorizedHowlComponent {



  componentWillMount () {
      super.componentWillMount();
      Keyboard.dismiss();
      Actions.refresh({key: 'drawer', open: false });


      let AHC = this;
      let packEx = this.returnUserID().then(function(result){
        console.log(result);
        AHC.setState({
          mainuserid:result
        });

        });

        let getFirst = this.returnAddress().then(function(result){
          console.log(result);
          console.log('show address');
          AHC.setState({address1: result});
          AHC.setState({"loading":false});
          });

        let getSecond = this.returnAddress2().then(function(result){
            AHC.setState({address2: result});
            });

        let getCity = this.returnCity().then(function(result){
            AHC.setState({homecity: result});
            });

        let getState = this.returnState().then(function(result){
            AHC.setState({homestate: result});
            });

        let getZip = this.returnZip().then(function(result){
            AHC.setState({homezip: result});
            });




          console.log(this.state);

    }

    componentWillUnmount () {
      Keyboard.dismiss()
    }

    async returnAddress(){
        return this.returnAsync('HOWL_ADDRESS');
    }
    async returnAddress2(){
        return this.returnAsync('HOWL_ADDRESS_2');
    }
    async returnCity(){
        return this.returnAsync('HOWL_CITY');
    }
    async returnState(){
        return this.returnAsync('HOWL_STATE');
    }
    async returnZip(){
        return this.returnAsync('HOWL_ZIP');
    }

    getUserStuff(x){


      let v_Address = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Address1;
      let v_Apartment = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Address2;
      let v_HomeCity = x.AddEditUserHomeAddressResult.GetUserHomeAddress.HomeCity;
      let v_HomeState = x.AddEditUserHomeAddressResult.GetUserHomeAddress.HomeState;
      let v_HomeZip = x.AddEditUserHomeAddressResult.GetUserHomeAddress.HomeZip;
      let v_Latitude = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Latitude;
      let v_Longitude = x.AddEditUserHomeAddressResult.GetUserHomeAddress.Longitude;

      //<param name="UserID">User ID</param>
      /// <param name="UserToken">User Token</param>
      /// <param name="HomeAddress1">Home Address1</param>
      /// <param name="HomeAddress2">Home Address2</param>
      /// <param name="HomeCity">Home City</param>
      /// <param name="HomeState">Home State</param>
      /// <param name="HomeZip">Home Zip</param>
      /// <param name="Latitude">Latitude</param>
      /// <param name="Longitude">Longitude</param>


      this.setState({"address":v_Address});
      this.setState({"apartment":v_Apartment});
      this.setState({"homecity":v_HomeCity});
      this.setState({"homestate":v_HomeState});
      this.setState({"homezip":v_HomeZip});
      this.setState({"latitude":v_Latitude});
      this.setState({"longitude":v_Longitude});

      this.setState({"loading":false});


      console.log(x);
      console.log(this.state);


    }



constructor(props) {
  super(props)
    this.state = {
      validated: false,
      loading: false,
      error: '',
      isLoading: false,
      address:'',
      homecity:'',
      homestate:'',
      homezip:'',
      latitude:'',
      longitude:'',
      address1:''




    }
    this.checkText = this.checkText.bind(this);
    this.getUserStuff = this.getUserStuff.bind(this);
    this.endLoading = this.endLoading.bind(this);
    this.openSearchModal = this.openSearchModal.bind(this);
  }

  getLocations() {
   RNGooglePlacePicker.show((response) => {
     if (response.didCancel) {
       console.log('User cancelled GooglePlacePicker');
     }
     else if (response.error) {
       console.log('GooglePlacePicker Error: ', response.error);
     }
     else {
       this.setState({
         location: response
       });
     }
   })
 }

  renderButton() {
    if (this.state.loading) {
       return <View style={styles.spinnerStyle}><Spinner size="large" /></View>
    }

    return (
      <BlueButtonSave onPress={this.checkText}/>
    );
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal({

    })
    .then((place) => {
		console.log(place);
    let newLat = place.latitude;
    let newLong = place.longitude;
    let newAdd = place.address;
    let machinename = place.name
    let addArray = newAdd.split(',');
    let addArray0 = addArray[0];
    let addArray1 = addArray[1];
    let addArray2 = addArray[2];
    let addArray3 = addArray[3];
    let splitState = addArray2.split(' ');
    let splitState0 = splitState[0];
    let splitState1 = splitState[1];
    let splitState2 = splitState[2];
    console.log(splitState);
    console.log('splitting state');
    console.log(addArray0);
    console.log(addArray1);
    console.log(newAdd.split(','));
    this.setState({
      latitude:newLat,
      longitude:newLong,
      address:machinename,
      homecity:addArray1,
      homestate:splitState1,
      homezip:splitState2,
      address1:newAdd

    });
    console.log(this.state)
		// place represents user's selection from the
		// suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
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

checkText () {

  this.setState({ error: '', loading: true});

  //console.log(this.props);
  console.log(this.state);


  let e_userobject = {
    'UserID':this.state.mainuserid,
    'HomeAddress1':this.state.address,
    'HomeAddress2':this.state.address1,
    'HomeCity':this.state.homecity,
    'HomeState':this.state.homestate,
    'HomeZip':this.state.homezip,
    'Latitude':this.state.latitude,
    'Longitude':this.state.longitude
  }

    this.authorizedHowlCall("AddEditUserHomeAddress", e_userobject, this.endLoading);

}

endLoading(x){

  console.log(x);

  this.setState({ error: '', loading: false});

  Alert.alert('Your address has been updated.');
}


onNameChange(text){
  this.props.editFirstName(text);
}





  render () {

    return (
              <ScrollView>

                <View style={styles.container}>



                  <View>
                  <View>

                  <TouchableOpacity
                    style={styles.openGoogle}
                    onPress={() => this.openSearchModal()}
                    >
                      </TouchableOpacity>
                    <TextField
                      label='ENTER ADDRESS'
                      style={styles.textStyle}
                      //onChangeText={this.onNameChange.bind(this)}

                      onChangeText = {(firstname) => this.setState({firstname})}
                      returnKeyType = {"next"}
                      onSubmitEditing={(event) => {
                        this.refs.SecondInput.focus();
                      }}
                      value={this.state.address1 + this.state.address2 + '\xa0' + this.state.homecity + '\xa0' + this.state.homestate + '\xa0' + this.state.homezip}

                      />
                      <Icon name="location-pin"  style={styles.iconStyle}/>


                  </View>
                <View >

                  </View>

                    </View>

                      {this.renderButton()}


                </View>
              </ScrollView>

            );
          }
        }

const styles = {
  openGoogle:{
  alignSelf: 'stretch',
    height:50,
width:400,
    position:'absolute',
    top:30,
    zIndex:1
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
})(ChangeAddress);
