import  React, { Component } from 'react';
import { View, Text, Button, Switch, TextInput } from 'react-native';
import { CardSection, CardSectionVertical } from '../components/common'
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
          angularjs: true,
          reactjs: true,
          nodejs: true
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
      milesAway: this.state.user.milesAway,
      topics:{
        angularjs: this.state.user.topics.angularjs,
        reactjs: this.state.user.topics.reactjs,
        nodejs: this.state.user.topics.nodejs
      }
    })
  }
  
  onValueChange(name, val){  
  if(name === 'angularjs'){
    this.setState({ 
      user:{
        milesAway: this.state.user.milesAway,
        topics: {
          angularjs: val,
          reactjs: this.state.user.topics.reactjs,
          nodejs: this.state.user.topics.nodejs
        }
      }
    })
  }
  else if(name === 'reactjs'){
      this.setState({ 
        user:{
          milesAway: this.state.user.milesAway,
          topics: {
            angularjs: this.state.user.topics.angularjs,
            reactjs: val,
            nodejs: this.state.user.topics.nodejs
          }
        }
      })
    }
    else if(name === 'nodejs'){
        this.setState({ 
          user:{
            milesAway: this.state.user.milesAway,
            topics: {
              angularjs: this.state.user.topics.angularjs,
              reactjs: this.state.user.topics.reactjs,
              nodejs: val
            }
          }
        })
      }  
  console.log(val)
  console.log(name)
  }
  
  onChangeText(milesAway){
      console.warn(milesAway)
      this.setState({ 
        user:{
          milesAway,
          topics: {
            angularjs: this.state.user.topics.angularjs,
            reactjs: this.state.user.topics.reactjs,
            nodejs: this.state.user.topics.nodejs 
          }
        }
      })
    }
  
  render(){
    return(
      <View>
        <CardSectionVertical>
          <Text>Miles Away: </Text>
          <TextInput
            value={this.state.user.milesAway}
            onChangeText={this.onChangeText.bind(this)}
          />
        </CardSectionVertical>
        <CardSection>
          <Text> angular: {String(this.state.user.topics.angularjs)} </Text>
          <Switch
          onValueChange={this.onValueChange.bind(this, 'angularjs')}
          value={this.state.user.topics.angularjs}
          />
        </CardSection>
        <CardSection>
          <Text> react: {String(this.state.user.topics.reactjs)} </Text>
          <Switch
          onValueChange={this.onValueChange.bind(this, 'reactjs')}
          value={this.state.user.topics.reactjs}
          />
        </CardSection>
        <CardSection>
          <Text> node: {String(this.state.user.topics.nodejs)} </Text>
          <Switch
          onValueChange={this.onValueChange.bind(this, 'nodejs')}
          value={this.state.user.topics.nodejs}
          />
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
