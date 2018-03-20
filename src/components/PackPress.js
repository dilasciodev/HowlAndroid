import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


var ACTION_TIMER = 400;
var COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)'];

class PackPress extends Component {



  constructor(props) {
    super(props);
    this.state = {
      pressAction: new Animated.Value(0),
      textComplete: '',
      buttonWidth: 0,
      buttonHeight: 0,
      name: 'chris',
      showCancel: false,
     };
      this.handlePressIn = this.handlePressIn.bind(this);
      this.handlePressOut = this.handlePressOut.bind(this);
      this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this);
      this.animationActionComplete = this.animationActionComplete.bind(this);
      this.getProgressStyles = this.getProgressStyles.bind(this);
      this.getButtonWidthLayout = this.getButtonWidthLayout.bind(this);
      this.showProgress = this.showProgress.bind(this);
  }




  componentWillMount () {
    this._value = 0;
 this.state.pressAction.addListener((v) => this._value = v.value);

  }



handlePressIn () {
  Animated.timing(this.state.pressAction, {
     duration: ACTION_TIMER,
       toValue: 1
    }).start(this.animationActionComplete);
    console.log(this.state);
    console.log(this.props);

    this.setState({
        showCancel: true
    });
};


handlePressOut () {
  Animated.timing(this.state.pressAction, {
      duration: this._value * ACTION_TIMER,
      toValue: 0
  }).start();
  console.log(this.state);
  console.log(this.props);
  this.setState({
      showCancel: false
  });
}

animationActionComplete () {
    var message = '';
    if (this._value === 1) {
        message = 'You held it long enough to fire the action!';
    }
    this.setState({
        textComplete: message
    });
}

getButtonWidthLayout (e) {
  this.setState({
      buttonWidth: e.nativeEvent.layout.width - 6,
      buttonHeight: e.nativeEvent.layout.height - 6
  });
}

getProgressStyles () {
    let width = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: [0, this.state.buttonWidth]
    });
    let bgColor = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: COLORS
    })
    return {
        width: width,
        height: this.state.buttonHeight,
        backgroundColor: bgColor
    }
  }

  showProgress() {

    if (this.state.showCancel) {
               return (
                 <AnimatedCircularProgress
                 size={170}
                 width={10}
                 fill={100}
                 tintColor="#00e0ff"
                 onAnimationComplete={() => console.log('onAnimationComplete')}
                 backgroundColor="#3d5875" />
               );
           } else {
               return null;
           }

  }

  render() {


    return (

      <View style={styles.container}>

          {this.showProgress()}


           <TouchableWithoutFeedback

               onPressIn={this.handlePressIn }
               onPressOut={this.handlePressOut}
           >
               <View style={styles.button} onLayout={this.getButtonWidthLayout}>
                   <Animated.View style={[styles.bgFill, this.getProgressStyles()]} />
                   <Text style={styles.text}>Press And Hold Me</Text>
               </View>
           </TouchableWithoutFeedback>
           <View>
               <Text>{this.state.textComplete}</Text>
           </View>
      </View>


    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111'
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111'
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

export default PackPress;
