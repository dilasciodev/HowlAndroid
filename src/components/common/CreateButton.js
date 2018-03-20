import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CreateButton = ({ onPress, children}) =>{
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    paddingLeft: 20,
    letterSpacing:100
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#0091cd',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0091cd',

    overflow:'hidden',
    paddingTop:8,
    paddingBottom:8,
    marginTop:10
  }
}

export { CreateButton };
