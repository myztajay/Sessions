import  React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from '../components/common'
import { Firebase } from '../../Firebase'


class SettingsScreen extends Component{
  static navigationOptions = {
  title: 'Settings'
  }
  constructor(prop){
    super(prop)
    this.state = {
    user: {
      milesAway: '',
      topics: {
        angularjs: '',
        reactjs: '',
        nodejs: ''
      }
    },
    }
  }
  
  componentWillMount(){
    const user = Firebase.auth().currentUser;
    Firebase.database().ref(`/users/${user.uid}`).once('value', (snapshot) =>{
      console.log(snapshot.val())
      this.setState({ user: snapshot.val() })
      console.log(this.state.user.milesAway)
      console.log(this.state.user.topics)
      console.log(this.state.user.topics.angularjs)
      
    })
  }
  
  render(){
    return(
      <View>
        <CardSection>
          <Text> milesAway: {this.state.user.milesAway} </Text>
        </CardSection>
        <CardSection>
          <Text> angular: {String(this.state.user.topics.angularjs)} </Text>
        </CardSection>
        <CardSection>
          <Text> react: {String(this.state.user.topics.reactjs)} </Text>
        </CardSection>
        <CardSection>
          <Text> node: {String(this.state.user.topics.nodejs)} </Text>
        </CardSection>
      </View>
    )
  }
}

export { SettingsScreen };
