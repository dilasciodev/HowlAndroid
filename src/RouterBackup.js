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

    <Scene key="createName"
      component={CreateName}
      navTransparent='true'
      navigationBarStyle={{backgroundColor: 'white'}}
      hideNavBar={true}
      navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
      navigationBarTitleImageStyle={[STYLES.navStyle]}
      navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
    />

    <Scene key="createEmail"
      component={CreateEmail}
      navTransparent='true'
      navigationBarStyle={{backgroundColor: 'white'}}
      hideNavBar={true}
      navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
      navigationBarTitleImageStyle={[STYLES.navStyle]}
      navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
    />

    <Scene key="createPass"
      component={CreatePass}
      navTransparent='true'
      navigationBarStyle={{backgroundColor: 'white'}}
      hideNavBar={true}
      navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
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
      // navigationBarTitleImage={require('../src/assets/images/navigation/howlLogo.png')}
      navigationBarTitleImageStyle={[STYLES.navStyle]}
      navigationBarStyle={{ backgroundColor:'#fff', borderBottomColor: 'transparent', borderBottomWidth: 65 }}
    />

  </Scene>
