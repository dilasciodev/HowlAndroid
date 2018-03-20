import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {

  return(
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 3,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#fff',
    position: 'relative'

  }
}

export { CardSection };
