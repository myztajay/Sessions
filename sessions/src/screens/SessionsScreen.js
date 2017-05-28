import  React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class SessionsScreen extends Component{
  static navigationOptions = {
  title: 'Home'
  }
  render(){
    return(
      <View>
      <Button
      onPress={() => this.props.navigation.navigate('NewSession')}
      title="Create New Session"
      />

      <Button
      onPress={() => this.props.navigation.navigate('Session')}
      title="Fake Session"
      />
      
      <Text> SessionsScreen </Text>
      </View>
    )
  }
}

export { SessionsScreen };
