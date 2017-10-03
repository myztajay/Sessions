import  React, { Component } from 'react';
import { View, Text, Button, Checkbox } from 'react-native';
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
      }
    }
  }
  
  componentWillMount(){
    const user = Firebase.auth().currentUser;
    Firebase.database().ref(`/users/${user.uid}`).once('value', (snapshot) =>{
      this.setState({ user: snapshot.val() })  
    })
  }
  
  onSaveButtonPress(){
    const user = Firebase.auth().currentUser;
    Firebase.database().ref().child("users").child(user.uid).set({
      milesAway: 15,
      topics:{
        angularjs: this.state.user.topics.angularjs,
        reactjs: this.state.user.topics.reactjs,
        nodejs: this.state.user.topics.nodejs
      }
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
        <Button 
          title="Save Settings" 
          onPress={this.onSaveButtonPress.bind(this)}
        />
      </View>
      
    )
  }
}

export { SettingsScreen };
