import  React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Firebase } from '../../Firebase';
import { Card, CardSection } from '../components/common'

class ProfileScreen extends Component{
  static navigationOptions = {
  title: 'Profile'
  }
  constructor(props){
    super(props)
    this.state = { users: '' }
    this.userRef = Firebase.database().ref('/users')
    }

  // renderUserProfile(){
  //   if(this.props.navigation.state.params){
  //     console.log(this.props.navigation.state.params)
  //     return(
  //       <Text>user with nav params</Text>
  //     )
  //   }
  //   else{
  //     const user = Firebase.auth().currentUser;
  //     Firebase.database().ref('/users').orderByChild('email').equalTo("paul@gmail.com"), function(snapshot){
  //       return(
  //         <Text>{console.warn(snapshot)}</Text>
  //       )
  //     }
  //   }
  // }

  render(){
    return(
      <View>
        <CardSection>

        </CardSection>
      </View>
    )
  }
}

export { ProfileScreen };
