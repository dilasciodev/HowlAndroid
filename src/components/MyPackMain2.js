import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, HowlButton } from './common';
import Swipeable from 'react-native-swipeable';
import AuthorizedHowlComponent from './AuthorizedHowlComponent';



class MyPackMain extends AuthorizedHowlComponent {


  componentWillMount () {
    Actions.refresh({key: 'drawer', open: false });
    let e_userid = ({"UserID":"49"});
    this.authorizedHowlCall("GetUserPack", e_userid, this.endLoading);
  }

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
       isLoading: true
     };

  }

  GetItem (student_name) {
    Alert.alert(student_name);
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

  endLoading(x){
    console.log(x);
    //this.setState({ error: '', loading: false});
    Alert.alert('Your profile has been updated.');

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
       isLoading: false,
       dataSource: ds.cloneWithRows(x),
     }
  }


ListViewItemSeparator = () => {
  return (
    <View
      style={{

        height: .5,
        width: "100%",
        backgroundColor: "#000",

      }}
    />
  );
}


  render() {

    const {toggle} = this.state;


    // console.log(this.state);

    const itemProps = {
      onOpen: (event, gestureState, swipeable) => {
        if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
          currentlyOpenSwipeable.recenter();
        }

        this.setState({currentlyOpenSwipeable: swipeable});
      },
      onClose: () => this.setState({currentlyOpenSwipeable: null})
    };

	return (
    <View style={styles.container}>
    <Swipeable

   rightButtons={[
     <TouchableOpacity style={[styles.rightSwipeItem]}>
       <Text style={styles.deleteStyle}>DELETE</Text>
     </TouchableOpacity>,

   ]}

   onRightActionActivate={() => this.setState({toggle: !toggle})}
   onRightActionDeactivate={() => this.setState({toggle: toggle})}

 >
   <View style={[styles.listItem]}>
      <View><Image style={styles.photo} source={require('../assets/images/contactImage.png')} /></View>
      <View>
        <Text style={styles.headerText}>Anthony Howard</Text>
        <Text style={styles.bodyText}>(646) 737-7992 - CELL</Text>
      </View>
   </View>

 </Swipeable>

 <Swipeable

rightButtons={[
  <TouchableOpacity style={[styles.rightSwipeItem]}>
    <Text style={styles.deleteStyle}>DELETE</Text>
  </TouchableOpacity>,

]}

>
<View style={[styles.listItem]}>
   <View><Image style={styles.photo} source={require('../assets/images/contactImage.png')} /></View>
   <View>
     <Text style={styles.headerText}>Anthony Howard</Text>
     <Text style={styles.bodyText}>(646) 737-7992 - CELL</Text>
   </View>
</View>

</Swipeable>

<Swipeable

rightButtons={[
 <TouchableOpacity style={[styles.rightSwipeItem]}>
   <Text style={styles.deleteStyle}>DELETE</Text>
 </TouchableOpacity>,

]}

onRightActionActivate={() => this.setState({toggle: !toggle})}
onRightActionDeactivate={() => this.setState({toggle: toggle})}

>
<View style={[styles.listItem, {backgroundColor: toggle ? '#fff' : '#f4f4f4'}]}>
  <View><Image style={styles.photo} source={require('../assets/images/contactImage.png')} /></View>
  <View>
    <Text style={styles.headerText}>Anthony Howard</Text>
    <Text style={styles.bodyText}>(646) 737-7992 - CELL</Text>
  </View>
</View>

</Swipeable>
    </View>



 );
}
}

const styles = {
  deleteStyle:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  },
  rightSwipeItem:{
    backgroundColor:'#e4322b',
    paddingTop:30,
    paddingBottom:30,
    paddingLeft:10
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
  }
}

export default MyPackMain;
