import  React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from '../components/common'


class SettingsScreen extends Component{
  static navigationOptions = {
  title: 'Settings'
  }
  constructor(prop){
    super(prop)
    this.state = {
    user: '',
    milesAway: '',
    topic: {}
    }
  }
  
  
  //firebase.write.currentUser.node(user)
  render(){
    return(
      <View>
        <CardSection>
          <Text> Miles Away </Text>
        </CardSection>
        <CardSection>
          <Text> Reactjs </Text>
        </CardSection>
        <CardSection>
          <Text> Angularjs </Text>
        </CardSection>
        <CardSection>
          <Text> Nodejs </Text>
        </CardSection>
      </View>
    )
  }
}

export { SettingsScreen };
