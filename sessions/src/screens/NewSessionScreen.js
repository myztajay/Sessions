import  React, { Component } from 'react';
import { View, Text } from 'react-native';


class NewSessionScreen extends Component{
  static navigationOptions = {
  title: 'New Session'
  }
  render(){
    return(
      <View>
        <Text> NewSessionScreen </Text>
      </View>
    )
  }
}

export { NewSessionScreen };
