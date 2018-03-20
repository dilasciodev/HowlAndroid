import React from 'react';
import { Scene, Router, Actions, ActionConst, Drawer, TouchableHighlight } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import HomeScreen from './components/HomeScreen';
import CameraMain from './components/CameraMain';
import DevicesMain from './components/DevicesMain';
import MyPackMain from './components/MyPackMain';
import AlertDetail from './components/AlertDetail';
import MonitoringMain from './components/MonitoringMain';
import PurchaseCamera from './components/PurchaseCamera';
import CameraHtml from './components/CameraHtml';
import AddDevices from './components/AddDevices';
import AddEcho from './components/AddEcho';
import AddHome from './components/AddHome';
import LandingScreen from './components/LandingScreen';
import AddPackMember from './components/AddPackMember';
import EditPackMember from './components/EditPackMember';
import NavigationDrawer from './components/NavigationDrawer';
import SwiperContainer from './components/SwiperContainer';
import PackAlarm from './components/PackAlarm';
import TestPackAlarm from './components/TestPackAlarm';
import SettingsMain from './components/SettingsMain';
import ForgotPassword from './components/ForgotPassword';
import EnterCancel from './components/EnterCancel';
import GetAlerts from './components/GetAlerts';
import HelpSupport from './components/HelpSupport';

import EditProfile from './components/settings/EditProfile';
import Notifications from './components/settings/Notifications';
import ChangeAddress from './components/settings/ChangeAddress';
import ChangeCancel from './components/settings/ChangeCancel';
import EnterNewCancel from './components/settings/EnterNewCancel';
import ChangeNumber from './components/settings/ChangeNumber';
import EnterNewSilent from './components/settings/EnterNewSilent';
import ChangeCancelNew from './components/settings/ChangeCancelNew';
import ChangeSilent from './components/settings/ChangeSilent';
import PrintCode from './components/settings/PrintCode';
import TermsConditions from './components/settings/TermsConditions';
import PrivacyPolicy from './components/settings/PrivacyPolicy';
import ChangePassword from './components/settings/ChangePassword';

import CreateName from './components/signup/CreateName';
import CreateAddress from './components/signup/CreateAddress';
import StartPack from './components/signup/StartPack';
import AddFirstPack from './components/signup/AddFirstPack';
import CreateEmail from './components/signup/CreateEmail';
import CreatePass from './components/signup/CreatePass';
import CreateCode from './components/signup/CreateCode';
import ConfirmPhone from './components/signup/ConfirmPhone';
import ConfirmPhoneTwo from './components/signup/ConfirmPhoneTwo';
import CreateFakeCode from './components/signup/CreateFakeCode';
import VoiceWarning from './components/signup/VoiceWarning';


import {  HomeAddress, EnterCode } from './components/signup';


import Icon from 'react-native-vector-icons/Ionicons';

const RouterComponent = () => {

  return (

    <Router sceneStyle={{  }}>

    <Scene key="auth">

        <Scene key="landingScreen"
          component={LandingScreen}
          hideNavBar={true}
        />

        <Scene key="mySwiper"
          component={SwiperContainer}
          title=""
          leftTitle="Back"
          onLeft={() => Actions.landingScreen()}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="forgotPassword"
          component={ForgotPassword}
          navTransparent='true'
          hideNavBar={false}
          onLeft={() => Actions.pop()}
          navigationBarStyle={{backgroundColor: 'white'}}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createName"
          component={CreateName}
          navTransparent='true'
          hideNavBar={false}
          onLeft={() => Actions.pop()}
          navigationBarStyle={{backgroundColor: 'white'}}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createEmail"
          component={CreateEmail}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          onLeft={() => Actions.pop()}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createPass"
          component={CreatePass}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />


        <Scene key="login"
          component={LoginForm}
          title=""
          hideNavBar={false}
          leftTitle="Back"
          rightTitle="Next"
          onLeft={() => Actions.landingScreen()}
          navigationBarStyle={{backgroundColor: 'white'}}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          // navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="confirmPhone"
          component={ConfirmPhone}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          onLeft={() => Actions.logout()}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="confirmPhoneTwo"
          component={ConfirmPhoneTwo}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="startPack"
          component={StartPack}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="addFirstPack"
          component={AddFirstPack}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createAddress"
          component={CreateAddress}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />

        <Scene key="createCode"
          component={CreateCode}
          navTransparent='true'
          navigationBarStyle={{backgroundColor: 'white'}}
          hideNavBar={false}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
        />


                    <Scene key="createFakeCode"
                      component={CreateFakeCode}
                      navTransparent='true'
                      navigationBarStyle={{backgroundColor: 'white'}}
                      hideNavBar={false}
                      navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
                      backButtonImage={require('../src/assets/images/navigation/backButton.png')}
                      navigationBarTitleImageStyle={[STYLES.navStyle]}
                      navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
                    />


                    <Scene key="voiceWarning"
                      component={VoiceWarning}
                      navTransparent='true'
                      navigationBarStyle={{backgroundColor: 'white'}}
                      hideNavBar={false}
                      navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
                      backButtonImage={require('../src/assets/images/navigation/backButton.png')}
                      navigationBarTitleImageStyle={[STYLES.navStyle]}
                      navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
                    />




      </Scene>

    <Scene key="drawer"
      type={ActionConst.RESET}
      component={NavigationDrawer}
      open={false} >

    <Scene key="main" initial>




            <Scene key="enterCode"
              component={EnterCode}
              navTransparent='true'
              navigationBarStyle={{backgroundColor: 'white'}}
              hideNavBar={false}
              navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
              backButtonImage={require('../src/assets/images/navigation/backButton.png')}
              navigationBarTitleImageStyle={[STYLES.navStyle]}
              navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
            />

            <Scene key="homeAddress"
              component={HomeAddress}
              navTransparent='true'
              navigationBarStyle={{backgroundColor: 'white'}}
              hideNavBar={false}
              navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
              backButtonImage={require('../src/assets/images/navigation/backButton.png')}
              navigationBarTitleImageStyle={[STYLES.navStyle]}
              navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
            />







      <Scene key="homeScreen"
        component={HomeScreen}
        title="HOWL"
        navTransparent='true'
        initial
        navigationBarStyle={{backgroundColor: 'white'}}
        hideNavBar={false}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="employeeList"
        component={EmployeeList}
        title="Employees"
        rightButtonImage={require('./assets/images/plus.png')}
        onRight={() => Actions.employeeCreate()}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="cameraMain"
        drawer={true}
        component={CameraMain}
        title="CAMERAS"
        titleStyle={[STYLES.navTitle]}
        rightButtonImage={require('./assets/images/plus.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        onRight={() => Actions.employeeCreate()}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="devicesMain"
        component={DevicesMain}
        title="DEVICES"
        titleStyle={[STYLES.navTitle]}
        rightButtonImage={require('./assets/images/plus.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        onRight={() => Actions.addDevices()}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="addDevices"
        component={AddDevices}
        title="SELECT DEVICES"
        titleStyle={[STYLES.navTitle]}
        leftButtonTextStyle={[STYLES.leftButtonStyle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="addEcho"
        component={AddEcho}
        title="ADD ECHO"
        titleStyle={[STYLES.navTitle]}
        leftButtonTextStyle={[STYLES.leftButtonStyle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="addHome"
        component={AddHome}
        title="ADD HOME"
        titleStyle={[STYLES.navTitle]}
        leftButtonTextStyle={[STYLES.leftButtonStyle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />



      <Scene key="mypackMain"
        component={MyPackMain}
        title="MANAGE PACK"
        titleStyle={[STYLES.navTitle]}
        rightButtonImage={require('./assets/images/plus.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        onRight={() => Actions.addpackMember()}

        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="monitoringMain"
        component={MonitoringMain}
        title="MONITORING"
        titleStyle={[STYLES.navTitle]}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="purchaseCamera"
        component={PurchaseCamera}
        title="PURCHASE CAMERA"
        titleStyle={[STYLES.navTitle]}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
          navigationBarTitleImageStyle={[STYLES.navStyle]}
          navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="cameraHTML"
        component={CameraHtml}
        title="PURCHASE CAMERA"
        titleStyle={[STYLES.navTitle]}
        onLeft={() => Actions.pop({refresh:{}})}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="helpSupport"
        component={HelpSupport}
        title="HELP & SUPPORT"
        titleStyle={[STYLES.navTitle]}
        onLeft={() => Actions.pop({refresh:{}})}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="alertDetail"
        component={AlertDetail}
        title="ALERT DETAIL"
        titleStyle={[STYLES.navTitle]}
        onLeft={() => Actions.pop({refresh:{}})}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="employeeCreate"
        component={EmployeeCreate}
        title="Add Pack Member"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="addpackMember"
        component={AddPackMember}
        title="ADD PACK MEMBER"
        onLeft={() => Actions.pop()}
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="editPackMember"
        component={EditPackMember}
        title="EDIT PACK MEMBER"
        onLeft={() => Actions.pop()}
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="packAlarm"
        component={PackAlarm}
        title="PACK ALARM"
        hideNavBar={false}
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene
        key="testPackAlarm"
        component={TestPackAlarm}
        title="PACK ALARM"
        titleStyle={[STYLES.navTitle]}
        renderBackButton={()=>(null)}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="settingsMain"
        component={SettingsMain}
        title="SETTINGS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeAddress"
        component={ChangeAddress}
        title="CHANGE ADDRESS"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeCancel"
        component={ChangeCancel}
        title="CANCEL CODE"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="enterNewCancel"
        component={EnterNewCancel}
        title="ENTER NEW CODE"
        renderBackButton={()=>(null)}
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeCancelNew"
        component={ChangeCancelNew}
        title="ENTER A NEW CODE"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}

        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeSilent"
        component={ChangeSilent}
        title="CHANGE SILENCE CODE"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changeNumber"
        component={ChangeNumber}
        title="CHANGE NUMBER"
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="enterNewSilent"
        component={EnterNewSilent}
        title="ENTER NEW SILENCE"
        renderBackButton={()=>(null)}
        titleStyle={[STYLES.navTitle]}
        navigationBarStyle={{backgroundColor: 'white'}}
        renderBackButton={()=>(null)}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="termsConditions"
        component={TermsConditions}
        title="TERMS AND CONDITIONS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="privacyPolicy"
        component={PrivacyPolicy}
        title="PRIVACY POLICY"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />


      <Scene key="editProfile"
        component={EditProfile}
        title="EDIT PROFILE"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="changePassword"
        component={ChangePassword}
        title="CHANGE PASSWORD"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />


      <Scene key="getNotifications"
        component={Notifications}
        title="NOTIFICATIONS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="getAlerts"
        component={GetAlerts}
        title="ALERTS"
        titleStyle={[STYLES.navTitle]}
        backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="printCode"
        component={PrintCode}
          backButtonImage={require('../src/assets/images/navigation/backButton.png')}
        title="Print Code"
        titleStyle={[STYLES.navTitle]}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarStyle={{backgroundColor: 'white'}}
        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

      <Scene key="enterCancel"
        component={EnterCancel}
        title="ENTER CANCEL CODE"
        renderBackButton={()=>(null)}
        titleStyle={[STYLES.navTitle]}
        navigationBarTitleImageStyle={[STYLES.navStyle]}
        navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
        navigationBarStyle={{backgroundColor: 'white'}}

        navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
      />

    </Scene>
    </Scene>

    </Router>
  );
};

const STYLES = {

  navStyle: {
    width: 40,
    height: 40
  },
  navTitle:{
    color: '#054068',
    borderColor:'#fff',
    shadowRadius: 0,
    elevation: 0,
    fontWeight:'800'
  },
  leftButtonStyle:{
    color: '#054068'
  }

}

export default RouterComponent;
