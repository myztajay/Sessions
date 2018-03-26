import  React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import map from 'lodash/map';
import { Firebase } from '../../Firebase'
import { CardSection, Card, Button, CardSectionVertical } from '../components/common'
import { SessionCard } from '../components/SessionCard'
import { TimeDateLocation } from '../components/TimeDateLocation'


class SessionsScreen extends Component{
  static navigationOptions = {
  title: 'Home'
  }

  constructor(props){
    super(props)
    this.state = { sessions: '' }
    this.sessionsRef = Firebase.database().ref('/sessions')
    }

  componentWillMount(){
    this.sessionsRef.once('value', (snapshot) => {
      this.setState({ sessions: snapshot.val() });
    })
  }

  renderSession(){
    return map(this.state.sessions, (session, key)=>{
      return (
              <SessionCard
              nav={ this.props.navigation }
              key={ session.id }
              name={ session.name }
              description={ session.description }
              creator={ session.creator }
              topic={ session.topic }
              />      
              )
    })
  }

  render(){
    return(
      <View style={{ flex:1, justifyContent:'center', alignItems:'center',  backgroundColor: '#36587F' }}>
        <CardSectionVertical>
          <Button
          onPress={() => this.props.navigation.navigate('NewSession')}
          label='Create New Session'
          /> 
          <ScrollView contentContainerStyle={{justifyContent:'center'}}>
            {this.renderSession()}
          </ScrollView>
        </CardSectionVertical>
      </View>
    )
  }
}

export { SessionsScreen };
