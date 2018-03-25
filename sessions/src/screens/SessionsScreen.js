import  React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, ScrollView, StyleSheet } from 'react-native';
import map from 'lodash/map';
import { Firebase } from '../../Firebase'
import { CardSection, Card } from '../components/common'
import { SessionCard } from '../components/SessionCard'


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
      return (<SessionCard
              nav={ this.props.navigation }
              key={ session.name }
              name={ session.name }
              description={ session.description }
              creator={ session.creator }
              topic={ session.topic }
              />)
    })
  }

  render(){
    return(
      <View>
        <Text> SessionsScreen</Text>
        <Button
        onPress={() => this.props.navigation.navigate('NewSession')}
        title='Create New Session'
        />
        <ScrollView>
          {this.renderSession()}
        </ScrollView>
      </View>
    )
  }
}

export { SessionsScreen };
