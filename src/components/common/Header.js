import React from 'react';
import { Text, View } from 'react-native';
// Make a components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
);

};

const styles = {
  viewStyle:{
    backgroundColor: '#dadada',
    paddingTop: 15,
    justifyContent: 'center',
    height:60,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component avilable to oter parts
export { Header };
