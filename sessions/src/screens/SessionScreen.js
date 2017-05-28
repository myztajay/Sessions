import  React, { Component } from 'react';
import { View, Text } from 'react-native';


class SessionScreen extends Component{
  static navigationOptions = {
  title: 'Fake Session'
  }
  render(){
    return(
      <View>
        <Text> Session Screen </Text>
      </View>
    )
  }
}

export { SessionScreen };
