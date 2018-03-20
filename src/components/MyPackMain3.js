import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator, ListView, AsyncStorage } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton } from './common';
import Swipeable from 'react-native-swipeable';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';
import Spinner from 'react-native-loading-spinner-overlay';
import ImageLoad from 'react-native-image-placeholder';



class MyPackMain extends AuthorizedHowlComponent {


  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
    //let e_userid = ({"UserID":"49"});
    //this.authorizedHowlCall("GetUserPack", e_userid, this.endLoading);

    let AHC = this;
    let packEx = this.returnUserID().then(function(result){
      console.log(result);
      AHC.setState({
        mainuserid:result
      });
      let packId = ({"UserID":result});
      AHC.authorizedHowlCall("GetUserPack", packId, AHC.endLoading);
      });

      let getFirst = this.returnFirstName().then(function(result){
        console.log(result);
        AHC.setState({firstname: result});
        });

      let getLast = this.returnLastName().then(function(result){
        console.log(result);
        AHC.setState({lastname: result});
        });
  }

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
       isLoading: true,
       averageback:'',
       totalpounds:'',
       totalpoundsback:'',
       firstname:'',
       lastname:'',
       showCorrectImage: true,
       mainuserid:''
     };
     this.endLoading = this.endLoading.bind(this);
     this.getItem = this.getItem.bind(this);
     this.endPackPound = this.endPackPound.bind(this);
     this.undoPound = this.undoPound.bind(this);
     this.endDeleting = this.endDeleting.bind(this);

  }

  async returnFirstName(){
      return this.returnAsync('a_firstname');
  }
  async returnLastName(){
      return this.returnAsync('a_lastname');
  }




  getItem (packmember_n, packmember_p, packmember_e) {
  //  Alert.alert(packmember_name);
  AsyncStorage.setItem('pack_name', packmember_n);
  AsyncStorage.setItem('pack_phone', packmember_p );
  AsyncStorage.setItem('pack_email', packmember_e);


  var packName = AsyncStorage.getItem('pack_name');
  var packPhone = AsyncStorage.getItem('pack_phone');
  var packEmail = AsyncStorage.getItem('pack_email');

  console.log(packName);
  console.log(packPhone);
  console.log(packEmail);

  Actions.addpackMember();
}


  checkText () {

    this.setState({ error: '', loading: true});

    //console.log(this.props);
    console.log(this.state);
    //const firstN   = this.props.firstname ;
    //const lastN   = this.props.lastname ;
    let e_firstname = this.state.firstname;
    let e_lastname = this.state.lastname;
    let e_email = this.state.emailaddress;
    let e_phonenumber = this.state.phonenumber;

    let e_userid = {
      'UserID':49,
      'FirstName':e_firstname,
      'LastName':e_lastname,
      'Email':e_email
    }

      this.authorizedHowlCall("UpdateUserProfile", e_userid, this.endLoading);

  }

   convertMillisecond(millisec) {
      var seconds = (millisec / 1000).toFixed(0);
      var minutes = Math.floor(seconds / 60);
      var hours = "";
      if (minutes > 59) {
          hours = Math.floor(minutes / 60);
          hours = (hours >= 10) ? hours : "0" + hours;
          minutes = minutes - (hours * 60);
          minutes = (minutes >= 10) ? minutes : "0" + minutes;
      }

      seconds = Math.floor(seconds % 60);
      seconds = (seconds >= 10) ? seconds : "0" + seconds;
      if (hours != "") {
          return hours + ":" + minutes + ":" + seconds;
      }
      return minutes + ":" + seconds;
  }

  endLoading(x){
    console.log(x.GetUserPackResult);

    let GMP = this;

    let avgBack = x.GetUserPackResult.AvgResTimeOfPoundBack;
    let totalPound = x.GetUserPackResult.TotalMyPound;
    let poundBack = x.GetUserPackResult.TotalPoundBack;

    let ayo = this.convertMillisecond(avgBack);
    console.log(ayo);

    this.setState({averageback : ayo});
    this.setState({totalpounds : totalPound});
    this.setState({totalpoundsback : poundBack});



    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
       isLoading: false,
       dataSource: ds.cloneWithRows(x.GetUserPackResult.UserPackList)
     });

     console.log(this.state);
  }





ListViewItemSeparator = () => {
  return (
    <View
      style={{

        height: .5,
        width: "100%",
        backgroundColor: "#999",

      }}
    />
  );
}

poundPack(packID, poundID){

    console.log(packID);
    console.log(poundID);
    console.log('pound');

    let AHC = this;

    this.setState({
      isLoading:true
    });



  if (poundID == '') {

  console.log('emptypound');

  this.setState({
    showCorrectImage: false
  })

  let packEx = this.returnUserID().then(function(result){
    console.log(result);
    let packstuff = {
      'UserID':result,
      'UserPackIDs':packID
    }
      AHC.authorizedHowlCall("PoundMyPackMember", packstuff, AHC.endPackPound);
  });

  } else {

  console.log('poundexists');

  this.setState({
    showCorrectImage: true
  })

  let packEx = this.returnUserID().then(function(result){
    console.log(result);
    let packstuff = {
      'UserID':result,
      'UserPoundID':poundID
    }
      AHC.authorizedHowlCall("UndoMyPound", packstuff, AHC.undoPound);
  });

  }


}



endPackPound(x){
  this.setState({
    //isLoading:false
  });
Alert.alert(
  'Pack Pound',
  'You Have alerted your pack member.'
  );
console.log(x);

let AHC = this;

let packEx = this.returnUserID().then(function(result){
  console.log(result);
  let packId = ({"UserID":result});
  AHC.authorizedHowlCall("GetUserPack", packId, AHC.endLoading);
  });
}

undoPound(x){
  console.log(x);
  this.setState({
    //isLoading:false
  });
  Alert.alert('Undo Pack Pound',
  'Your Pack Alert has been undone.')

  let AHC = this;

  let packEx = this.returnUserID().then(function(result){
    console.log(result);
    let packId = ({"UserID":result});
    AHC.authorizedHowlCall("GetUserPack", packId, AHC.endLoading);
    });
}

deleteMember(packMem){

  console.log(packMem);

  let AHC = this;

  AHC.setState({
    isLoading:true
  })

  let packObj = {
    "UserID":this.state.mainuserid,
    "UserPackID":packMem
  }

  AHC.authorizedHowlCall("DeleteFromUserPack", packObj, AHC.endDeleting);

}

endDeleting(x){
  console.log(x);

  Alert.alert('Member Deleted',
'You have deleted the specified pack member.');


let AHC = this;
let packEx = this.returnUserID().then(function(result){
  console.log(result);

  let packId = ({"UserID":result});
  AHC.authorizedHowlCall("GetUserPack", packId, AHC.endLoading);
  });


}


showCorrectLogo(){
if (this.state.showCorrectImage) {
           return (
              <Image style={styles.smallBlue} source={require('../assets/images/smallbluelogo.png')} />
           )}else{
             return (
                <Image style={styles.smallBlue} source={require('../assets/images/smallredlogo.png')} />
             )
           }
        }

render() {

  const {toggle} = this.state;


  const itemProps = {
    onOpen: (event, gestureState, swipeable) => {
      if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
        currentlyOpenSwipeable.recenter();
      }

      this.setState({currentlyOpenSwipeable: swipeable});
    },
    onClose: () => this.setState({currentlyOpenSwipeable: null})
  };

let getMe = require('../assets/images/camera.png');

  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 65}}>
        <Spinner overlayColor={"rgba(6, 62, 91, 1)"} animation={'fade'} visible={true} textContent={"Loading..."} size={'large'} color={'#fff'} textStyle={{color: '#fff'}} />
      </View>
    );
  }

  return (

    <View style={styles.MainContainer}>

      <View>
      </View>

      <View>
      </View>

      <View style={styles.topContainer}>
      <Text style={styles.nameText}>{this.state.firstname + '\xa0' +this.state.lastname}</Text>
      <TouchableOpacity style={styles.mainPound} onPress={() => Actions.cameraMain()}>

        <View>

        <Image style={styles.bigBlue} source={require('../assets/images/smallbluelogo.png')} /></View>
      </TouchableOpacity>

      </View>

      <View style={styles.packContainer}>
        <View style={styles.packInner}>
          <Text style={styles.packText}>Pack Howls</Text>
          <Text style={styles.packText2}>{this.state.totalpounds}</Text>
        </View>

        <View style={styles.packInner2}>
          <Text style={styles.packText}>Howls Back</Text>
          <Text style={styles.packText2}>{this.state.totalpoundsback}</Text>
        </View>

        <View style={styles.packInner}>
          <Text style={styles.packText}>Avg Response Time</Text>
          <Text style={styles.packText2}>{this.state.averageback}</Text>
        </View>
      </View>

      <ListView
        dataSource={this.state.dataSource}
        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) =>
       <View style={{flex:1, flexDirection: 'column'}} >

       <Swipeable
        style={styles.swipeStyle}
          rightButtons={[
            <TouchableOpacity onPress={this.deleteMember.bind(this, rowData.ID)} style={[styles.rightSwipeItem]}>
              <Text style={styles.deleteStyle}>DELETE</Text>
              </TouchableOpacity>
            ]}

            onRightActionActivate={() => this.setState({toggle: !toggle})}
            onRightActionDeactivate={() => this.setState({toggle: toggle})}
            >

         <TouchableOpacity  style={styles.containerStyle} onPress={this.getItem.bind(this, rowData.FirstName, rowData.PhoneNumber, rowData.Email)} >
         <View style={styles.imageContainer}>
         <ImageLoad

          style={styles.imageStyle}
          placeholderSource={require('../assets/images/emptyUser.png')}
          source={{ uri: rowData.ProfileImageURL  }}

          />

         </View>
         <View style={styles.textContainer}>
         <Text style={styles.textHeader} >{rowData.FirstName + '\xa0' + rowData.LastName }</Text>
         <Text style={styles.textViewContainer} >{rowData.PhoneNumber}</Text>
         <Text style={styles.textViewContainer} >{rowData.Email}</Text>
         </View>
         <TouchableOpacity style={styles.poundButton} onPress={this.poundPack.bind(this, rowData.ID, rowData.UserPoundID)}>

           <View>

             <Image style={styles.smallBlue} source={rowData.UserPoundID === '' ? require('../assets/images/smallbluelogo.png') : require('../assets/images/smallredlogo.png')} />
          </View>
         </TouchableOpacity>
         </TouchableOpacity>
         </Swipeable>

       </View>

        }
      />

    </View>
  );
}
}

const styles = {
  topContainer:{
    paddingTop:10,
    paddingBottom:10,
    marginBottom:0
  },
  nameText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'800',
    color:'#1f325b'
  },
  packText:{
    textAlign:'center',
    fontSize:11
  },
  packText2:{
    textAlign:'center',
    fontSize:18,
    color:'#1f325b',
    fontWeight:'800',
paddingTop:10
  },
  packInner:{
    flex:3,
    paddingTop:10
  },
  imageContainer:{
    paddingLeft:0,
    paddingTop:10,
    paddingBottom:10,
    marginRight:10
  },
  packInner2:{
    flex:3,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'#dadada',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:10,
    paddingRight:10

  },
  packContainer:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#dadada',
    flexDirection:'row',
    marginBottom:0,
    paddingTop:0
  },
  MainContainer:{
    paddingTop:65
  },
  textContainer:{
    marginLeft:10,
    paddingTop:10
  },
  imageStyle:{
    width:10,
    height:10,
    marginRight:20,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderBottomRightRadius:5,
    borderBottomLeftRadius:5,
    paddingTop:0,
    paddingBottom:0

  },
  textViewContainer:{
    lineHeight:20

  },
  textHeader:{
    fontSize:18
  },
  swipeStyle:{
    paddingTop:0,
    paddingBottom:0,
    paddingLeft:10,
    height:100
  },
  containerStyle:{
    paddingTop:0,
    paddingLeft:0,
    paddingBottom:0,
    alignItems:'flex-start',
    flexDirection:'row'
  },
  deleteStyle:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  rightSwipeItem:{
    backgroundColor:'#e4322b',
    paddingTop:40,
    paddingBottom:30,
    paddingLeft:10,
    height:100
  },
  bodyText:{
    fontSize:15,
    color:'#6d6e70'
  },
  headerText:{
    fontSize:18,
    color:'#000000'
  },
  container:{
    paddingTop:65
  },
  listItem: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:8
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 60,
    width: 60,
    marginRight:25
  },
  viewStyle:{
    paddingTop:65,

},
cardStyle:{
  padding: 12,
  flexDirection: 'row',
  alignItems: 'center',
},
  listStyle:{
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',

  },
  imageStyle:{
    width:80,
    height:80,
    alignSelf:'flex-start',
  },
  textStyle:{
    alignSelf:'center',
    position:'absolute',
    left:30,
    top:0
  },
  smallBlue:{
    width:60,
    height:60,

  },
  poundButton:{
    alignSelf:'flex-end',
    position:'absolute',
    right:10,
    top:13
  },
  mainPound:{
    alignSelf:'center'
  },
  bigBlue:{
    width:100,
    height:100
  }
}

export default MyPackMain;
