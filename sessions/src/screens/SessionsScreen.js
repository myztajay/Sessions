import  React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { Firebase } from '../../Firebase'
import { CardSection, Card } from '../components/common'


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


  render(){
    return(
      <View>
      <Text> SessionsScreen </Text>
      <Button
      onPress={() => this.props.navigation.navigate('NewSession')}
      title='Create New Session'
      >
      </Button>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Session')}>
      <CardSection>
        <Text>Fake Session 1</Text>
      </CardSection>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Session')}>
      <CardSection>
        <Text>Fake Session 2</Text>
      </CardSection>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => this.props.navigation.navigate('Session')}>
      <CardSection>
        <Text>Fake Session 3</Text>
      </CardSection>
      </TouchableOpacity>

      </View>
    )
  }
}

export { SessionsScreen };
