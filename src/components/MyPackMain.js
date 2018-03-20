import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
  ListView,
  AsyncStorage } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton } from './common';
import Swipeable from 'react-native-swipeable';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';
import Spinner from 'react-native-loading-spinner-overlay';
import ImageLoad from 'react-native-image-placeholder';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';




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

  componentDidMount() {
   this.resetAnimation();



   console.log(this.state);
 }

 resetAnimation() {
   this.setState({
     appReady: false,
     rootKey: Math.random()
   });

   setTimeout(() => {
     this.setState({
       appReady: true,
     });
   }, 1000);
 }


  componentWillReceiveProps(nextProps) {
    let AHC = this;
    AHC.refreshList();
  }


  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      appReady: false,
      rootKey: Math.random(),
      toggle: false,
       isLoading: true,
       averageback:'',
       totalpounds:'',
       totalpoundsback:'',
       firstname:'',
       lastname:'',
       showCorrectImage: true,
       mainuserid:'',
       //listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
 			//listViewData: Array(20).fill('').map((_,i) => ({key: `${i}`, text: `item #${i}`})),
     };
     this.endLoading = this.endLoading.bind(this);
     this.getItem = this.getItem.bind(this);
     this.endPackPound = this.endPackPound.bind(this);
     this.undoPound = this.undoPound.bind(this);
     this.endDeleting = this.endDeleting.bind(this);
     this.refreshList = this.refreshList.bind(this);
     this.areYouSure = this.areYouSure.bind(this);

  }


  async returnFirstName(){
      return this.returnAsync('HOWL_FIRST_NAME');
  }
  async returnLastName(){
      return this.returnAsync('HOWL_LAST_NAME');
  }

  closeRow(rowMap, rowKey) {
  		if (rowMap[rowKey]) {
  			rowMap[rowKey].closeRow();
  		}
  	}

  	deleteRow(rowMap, rowKey) {
  		this.closeRow(rowMap, rowKey);
  		const newData = [...this.state.listViewData];
  		const prevIndex = this.state.listViewData.findIndex(item => item.key === rowKey);
  		newData.splice(prevIndex, 1);
  		this.setState({listViewData: newData});
  	}

  	onRowDidOpen = (rowKey, rowMap) => {
  		console.log('This row opened', rowKey);
  		setTimeout(() => {
  			this.closeRow(rowMap, rowKey);
  		}, 2000);
  	}


  async getItem (packmember_l, packmember_n, packmember_p, packmember_e, packmember_i) {

  //Alert.alert(packmember_n);

  console.log(packmember_l);//lastname
  console.log(packmember_n);//firstname
  console.log(packmember_p);//phone
  console.log(packmember_e);//email
  console.log(packmember_i);

  let fullName = packmember_n + '\xa0'  + packmember_l;

  console.log(fullName);

  AsyncStorage.setItem('HOWL_PACK_NAME', fullName);
  AsyncStorage.setItem('HOWL_PACK_PHONE', packmember_p );
  AsyncStorage.setItem('HOWL_PACK_EMAIL', packmember_e);
  AsyncStorage.setItem('HOWL_PACK_ID', packmember_i);


  Actions.editPackMember();
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
    //console.log(x.GetUserPackResult);

    let GMP = this;
    var urls = [];

    console.log(x.GetUserPackResult.UserPackList);
    let myList = x.GetUserPackResult.UserPackList;


    let avgBack = x.GetUserPackResult.AvgResTimeOfPoundBack;
    let totalPound = x.GetUserPackResult.TotalMyPound;
    let poundBack = x.GetUserPackResult.TotalPoundBack;

    let ayo = this.convertMillisecond(avgBack);
    //console.log(ayo);

    this.setState({averageback : ayo});
    this.setState({totalpounds : totalPound});
    this.setState({totalpoundsback : poundBack});



    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const allData = [

];

var newArr = Object.keys(myList);
var newArr2 = Object.values(myList);
console.log('array stuff')
console.log(Object.values(myList));

     this.setState({
       isLoading: false,
       dataSource: ds.cloneWithRows(x.GetUserPackResult.UserPackList),
       thisData: x.GetUserPackResult.UserPackList,
	listViewData: newArr.fill('').map((_,i) => ({key: `${i}`, FirstName: newArr.FirstName}))
     });




     //console.log(this.state);
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

areYouSure(){

  Alert.alert('Are you Sure?',
'Do you want to delete this member?',
[

    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => this.deleteMember()},
  ]
);

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



refreshList(x){
  //console.log(x);



let AHC = this;
let packEx = this.returnUserID().then(function(result){
  //console.log(result);

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
        <Spinner overlayColor={"rgba(6, 62, 91, 1)"} animation={'fade'} visible={true}  size={'large'} color={'#fff'} textStyle={{color: '#fff'}} />
      </View>
    );
  }

  return (




    <View style={styles.MainContainer}>



      <View style={styles.topContainer}>
      <Text style={styles.nameText}>{this.state.firstname + '\xa0' +this.state.lastname}</Text>
      <TouchableOpacity style={styles.mainPound} onPress={() => Actions.cameraMain()}>

        <View>

        <Image style={styles.bigBlue} source={require('../assets/images/smallbluelogo.png')} /></View>
      </TouchableOpacity>

      </View>

      <View style={styles.topContainer}>
        <Text style={styles.midText}>HOWL at Pack members by clicking the wolf next to their name to make sure they’re okay.
Clear HOWLS at you by clicking the big User wolf up top to let Pack members know you’re okay. </Text>
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


					<SwipeListView
            disableSwipeLeft={true}
						dataSource={this.state.dataSource}
						renderRow={ data => (

							<TouchableOpacity
								onPress={ this.getItem.bind(this, data.LastName, data.FirstName, data.PhoneNumber, data.Email, data.ID)}
								style={styles.rowFront}
							>

              <View style={styles.imageContainer}>
              <ImageLoad

               style={styles.imageStyle}
               placeholderSource={require('../assets/images/emptyUser.png')}
               source={{ uri: data.ProfileImageURL  }}

               />

              </View>
              <View style={styles.textContainer}>
              <Text style={styles.textHeader} >{data.FirstName + '\xa0' + data.LastName }</Text>
              <Text style={styles.textViewContainer} >{data.PhoneNumber}</Text>
              <Text style={styles.textViewContainer} >{data.Email}</Text>
              </View>
              <TouchableOpacity style={styles.poundButton} onPress={this.poundPack.bind(this, data.ID, data.UserPoundID)}>
                <View>
                  <Image style={styles.smallBlue} source={data.UserPoundID === '' ? require('../assets/images/smallbluelogo.png') : require('../assets/images/smallredlogo.png')} />
               </View>
              </TouchableOpacity>

							</TouchableOpacity>
						)}
						renderHiddenRow={ (data, secId, rowId, rowMap) => (
							<View style={styles.rowBack}>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ this.deleteMember.bind(this, data.ID)}>
									<Text style={styles.backTextWhite}>Delete</Text>
								</TouchableOpacity>
							</View>
						)}
						leftOpenValue={0}
						rightOpenValue={-75}
					/>





    </View>


  );
}
}

const styles = {
  root: {
    flex: 1,
  },
  container: {


  },
  midText:{
    textAlign:'center',
    paddingLeft:15,
    paddingRight:15,
    marginBottom:15
  },

  loadingBackgroundStyle: {
    backgroundColor: 'rgba(125, 125, 255, 1)',
  },
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
    paddingLeft:10,
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
  },
	backTextWhite: {
		color: '#FFF'
	},
	rowFront: {

		backgroundColor: '#fff',
		borderBottomColor: '#dadada',
		borderBottomWidth: 1,
    alignItems:'flex-start',
    flexDirection:'row'


	},
	rowBack: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 15,
	},
	backRightBtn: {
		alignItems: 'center',
		bottom: 0,
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		width: 75
	},

	backRightBtnRight: {
		backgroundColor: 'red',
		right: 0
	},
	controls: {
		alignItems: 'center',
		marginBottom: 30
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 5
	},
	switch: {
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		paddingVertical: 10,
		width: Dimensions.get('window').width / 4,
	}
}

export default MyPackMain;
